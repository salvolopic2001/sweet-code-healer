/* Icons — minimal inline SVG icon set (lucide-style) */
import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  size?: number;
  stroke?: number;
  style?: CSSProperties;
  className?: string;
};

export const Icon = ({ name, size = 18, stroke = 1.75, ...rest }: IconProps) => {
  const s = size;
  const c = "currentColor";
  const p = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
  switch (name) {
    case "user": return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>;
    case "building": return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2M10 21v-4h4v4"/></svg>;
    case "bell": return <svg {...p}><path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 7H4s2-2 2-7"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>;
    case "shield": return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>;
    case "card": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></svg>;
    case "plug": return <svg {...p}><path d="M9 2v6M15 2v6"/><path d="M7 8h10v3a5 5 0 0 1-10 0V8z"/><path d="M12 16v6"/></svg>;
    case "palette": return <svg {...p}><path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.5 1.5-1.3 0-.4-.2-.8-.5-1.1-.3-.3-.5-.7-.5-1.1 0-.8.7-1.5 1.5-1.5h2.5a4.5 4.5 0 0 0 4.5-4.5C21 7 17 3 12 3z"/><circle cx="7" cy="11" r="1"/><circle cx="9" cy="7" r="1"/><circle cx="14" cy="6" r="1"/><circle cx="17" cy="9" r="1"/></svg>;
    case "globe": return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case "search": return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "plus": return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case "check": return <svg {...p}><path d="M5 12l4.5 4.5L19 7"/></svg>;
    case "x": return <svg {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case "chev-right": return <svg {...p}><path d="m9 6 6 6-6 6"/></svg>;
    case "chev-down": return <svg {...p}><path d="m6 9 6 6 6-6"/></svg>;
    case "chev-left": return <svg {...p}><path d="m15 6-6 6 6 6"/></svg>;
    case "arrow-right": return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-up-right": return <svg {...p}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case "pin": return <svg {...p}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case "home": return <svg {...p}><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9z"/></svg>;
    case "cal": return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "msg": return <svg {...p}><path d="M21 11a8 8 0 1 1-3.5-6.6L21 4l-1 4.5A8 8 0 0 1 21 11z"/></svg>;
    case "tag": return <svg {...p}><path d="M3 13V5a2 2 0 0 1 2-2h8l8 8-10 10-8-8z"/><circle cx="8" cy="8" r="1.5"/></svg>;
    case "wrench": return <svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6.6 6.6 2.6 2.6 6.6-6.6a4 4 0 0 0 5.4-5.4L15 9l-2-2 1.7-.7z"/></svg>;
    case "chart": return <svg {...p}><path d="M3 21V8M9 21V3M15 21v-9M21 21v-6"/></svg>;
    case "users": return <svg {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M22 21c0-2.5-1.7-4-4-4"/></svg>;
    case "sun-moon": return <svg {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
    case "lock": return <svg {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>;
    case "key": return <svg {...p}><circle cx="8" cy="14" r="4"/><path d="m11 11 9-9M16 6l3 3"/></svg>;
    case "phone": return <svg {...p}><path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
    case "mail": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>;
    case "camera": return <svg {...p}><path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/><circle cx="12" cy="13" r="4"/></svg>;
    case "upload": return <svg {...p}><path d="M12 3v13M6 9l6-6 6 6M4 21h16"/></svg>;
    case "refresh": return <svg {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/></svg>;
    case "zap": return <svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case "alert": return <svg {...p}><path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>;
    case "info": return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v4h1"/></svg>;
    case "eye": return <svg {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "eye-off": return <svg {...p}><path d="m3 3 18 18M10.7 5.1A10 10 0 0 1 22 12s-1 2-3 4M6.3 6.3C3.6 8.1 2 12 2 12s3.5 7 10 7c2 0 3.7-.6 5.2-1.5M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>;
    case "copy": return <svg {...p}><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>;
    case "trash": return <svg {...p}><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/></svg>;
    case "edit": return <svg {...p}><path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6"/><path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
    case "save": return <svg {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-7H7v7M7 3v5h8"/></svg>;
    case "sync": return <svg {...p}><path d="M3 6V3M3 6h3M3 6l4 4M21 18v3M21 18h-3M21 18l-4-4"/><path d="M7 10a7 7 0 0 1 12-3M17 14a7 7 0 0 1-12 3"/></svg>;
    case "sliders": return <svg {...p}><path d="M4 6h6M14 6h6M4 12h2M10 12h10M4 18h12M20 18h0"/><circle cx="12" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
    case "logout": return <svg {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>;
    case "doc": return <svg {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M9 13h6M9 17h6"/></svg>;
    case "download": return <svg {...p}><path d="M12 3v13M6 11l6 6 6-6M4 21h16"/></svg>;
    case "sparkles": return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "grid": return <svg {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    case "flag": return <svg {...p}><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></svg>;
    case "compass": return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-3 6.5-6.5 3 3-6.5 6.5-3z"/></svg>;
    case "link": return <svg {...p}><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>;
    default: return <svg {...p}><circle cx="12" cy="12" r="8"/></svg>;
  }
};
