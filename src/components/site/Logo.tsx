export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <defs>
          <linearGradient id="lg-roof" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.78 0.18 60)" />
            <stop offset="1" stopColor="oklch(0.62 0.18 38)" />
          </linearGradient>
        </defs>
        <path d="M16 3 L29 14 L26 14 L26 27 Q26 29 24 29 L8 29 Q6 29 6 27 L6 14 L3 14 Z"
          fill="url(#lg-roof)" stroke="oklch(0.3 0.08 40)" strokeWidth="1.2" strokeLinejoin="round"/>
        <rect x="13" y="18" width="6" height="11" rx="1" fill="oklch(0.96 0.02 75)" />
        <circle cx="16" cy="11" r="1.2" fill="oklch(0.96 0.02 75)" />
      </svg>
      <span className="text-[1.05rem] tracking-tight font-semibold text-foreground">
        PMSLY
      </span>
    </span>
  );
}
