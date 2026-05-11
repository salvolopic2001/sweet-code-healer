import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-clay">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="container-page pt-16 pb-10 md:pt-24 md:pb-14">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="h-display mt-5 text-4xl md:text-6xl text-balance max-w-4xl">{title}</h1>
      {subtitle && <p className="mt-5 text-lg text-ink-2 max-w-2xl text-balance">{subtitle}</p>}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="container-page py-16 md:py-24">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <h2 className="h-display mt-4 text-3xl md:text-5xl text-balance max-w-3xl">{title}</h2>}
      {subtitle && <p className="mt-4 text-base md:text-lg text-ink-2 max-w-2xl text-balance">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function CTABand({
  title = "Pronto a scaldare la tua ospitalità?",
  subtitle = "Setup guidato, migrazione inclusa. Sei live in 7 giorni.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="container-page py-16">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand-soft to-surface px-6 py-12 md:p-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <h3 className="h-display text-3xl md:text-4xl text-balance">{title}</h3>
          <p className="mt-3 text-ink-2">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contatti" className="btn-brand inline-flex rounded-full px-5 py-2.5 text-sm font-medium">
              Richiedi una demo
            </a>
            <a href="/prezzi" className="inline-flex rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface-2">
              Vedi i prezzi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
