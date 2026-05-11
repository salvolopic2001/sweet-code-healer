import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/come-funziona", label: "Come funziona" },
  { to: "/funzionalita", label: "Funzionalità" },
  { to: "/integrazioni", label: "Integrazioni" },
  { to: "/prezzi", label: "Prezzi" },
  { to: "/sicurezza", label: "Sicurezza" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 backdrop-blur-xl bg-[color-mix(in_oklab,var(--background)_80%,transparent)]">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-lg text-sm text-ink-2 hover:text-foreground hover:bg-surface-2 transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-lg text-sm text-foreground bg-surface-2" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link to="/contatti" className="px-3 py-2 text-sm text-ink-2 hover:text-foreground">
            Contatti
          </Link>
          <Link to="/contatti" className="btn-brand inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium">
            Prova gratis
          </Link>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-line bg-background">
          <div className="container-page py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm text-ink-2 hover:bg-surface-2"
                activeProps={{ className: "px-3 py-3 rounded-lg text-sm text-foreground bg-surface-2" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contatti" onClick={() => setOpen(false)} className="btn-brand mt-2 inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-medium">
              Prova gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
