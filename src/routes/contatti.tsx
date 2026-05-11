import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti · PMSLY" },
      { name: "description", content: "Parla con il nostro team. Demo, supporto, partnership: rispondiamo entro un'ora lavorativa." },
      { property: "og:title", content: "Contatti · PMSLY" },
      { property: "og:description", content: "Scrivici per una demo o per qualsiasi domanda." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title={<>Parliamo della tua <span className="italic text-clay">struttura</span>.</>}
        subtitle="Demo personalizzata di 30 minuti, in italiano. Senza impegno."
      />

      <section className="container-page pb-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass-card rounded-3xl p-8 space-y-5"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="text-5xl">✨</div>
                <h3 className="h-display text-2xl mt-4">Grazie!</h3>
                <p className="mt-2 text-ink-2">Ti contattiamo entro un'ora lavorativa.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" name="nome" required />
                  <Field label="Cognome" name="cognome" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Struttura" name="struttura" placeholder="Es. Villa Corallo" />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-3">Numero di unità</label>
                  <select className="mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40">
                    <option>1–3</option><option>4–10</option><option>11–25</option><option>26–100</option><option>100+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-3">Messaggio</label>
                  <textarea rows={4} className="mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40" placeholder="Raccontaci la tua esigenza…" />
                </div>
                <button className="btn-brand w-full rounded-full px-6 py-3 text-sm font-semibold">
                  Richiedi demo
                </button>
                <p className="text-xs text-ink-3 text-center">
                  Inviando accetti la nostra Privacy Policy. Nessuno spam.
                </p>
              </>
            )}
          </form>

          <div className="space-y-4">
            <Info title="Vendite & demo" lines={["sales@pmsly.com", "+39 02 0000 0000"]} />
            <Info title="Supporto clienti" lines={["help@pmsly.com", "Risposta < 1h lavorativa"]} />
            <Info title="Partnership & API" lines={["partners@pmsly.com"]} />
            <Info title="Privacy & DPO" lines={["dpo@pmsly.com"]} />
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-wider text-ink-3 font-semibold">Sede</p>
              <p className="mt-2 font-medium">PMSLY S.r.l.</p>
              <p className="text-sm text-ink-2">Via dell'Ospitalità 1<br/>20121 Milano · Italia</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-ink-3">{label}</label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
    </div>
  );
}

function Info({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <p className="text-xs uppercase tracking-wider text-ink-3 font-semibold">{title}</p>
      {lines.map((l) => <p key={l} className="mt-1 text-sm">{l}</p>)}
    </div>
  );
}
