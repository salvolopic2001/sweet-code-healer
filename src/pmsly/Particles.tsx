import { useEffect, useRef } from "react";

type P = {
  x: number; y: number; z: number; // z = depth 0.3..1
  vx: number; vy: number;
  r: number; baseAlpha: number; phase: number;
};

export const Particles = ({ density = 0.00008, color = "232,131,58" }: { density?: number; color?: string }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let raf = 0;
    let particles: P[] = [];
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let scrollY = window.scrollY;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(w * h * density);
      particles = Array.from({ length: target }, () => spawn(w, h));
    };

    const spawn = (w: number, h: number): P => {
      const z = 0.3 + Math.random() * 0.7;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        z,
        vx: (Math.random() - 0.5) * 0.15 * z,
        vy: (-0.05 - Math.random() * 0.15) * z,
        r: 0.6 + z * 2.4,
        baseAlpha: 0.15 + z * 0.45,
        phase: Math.random() * Math.PI * 2,
      };
    };

    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => { scrollY = window.scrollY; };

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(50, now - last); last = now;
      const w = window.innerWidth, h = window.innerHeight;

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        p.phase += dt * 0.0008;
        p.x += p.vx * dt * 0.06 + Math.sin(p.phase) * 0.05 * p.z;
        p.y += p.vy * dt * 0.06;

        // wrap
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const px = p.x + mouse.x * 18 * p.z;
        const py = p.y + mouse.y * 12 * p.z - (scrollY * 0.02 * p.z);

        const a = p.baseAlpha * (0.7 + 0.3 * Math.sin(p.phase * 1.7));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${a})`;
        ctx.shadowColor = `rgba(${color},${a * 0.9})`;
        ctx.shadowBlur = 12 * p.z;
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [density, color]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: "fixed", inset: 0, width: "100vw", height: "100vh",
        pointerEvents: "none", zIndex: 0, opacity: 0.85,
      }}
    />
  );
};
