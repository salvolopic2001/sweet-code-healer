import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/funzionalita")({
  head: () => ({
    meta: [
      { title: "Funzionalità · PMSLY" },
      { name: "description", content: "Multi-calendar, channel manager, inbox AI, pagamenti, revenue, alloggiati web. Tutto in un'unica piattaforma." },
      { property: "og:title", content: "Funzionalità · PMSLY" },
      { property: "og:description", content: "Tutto quello che serve a un host professionale." },
    ],
  }),
  component: Page,
});

const GROUPS = [
  {
    title: "Operations",
    color: "bg-sage",
    items: [
      { t: "Multi-calendar", d: "Vista unificata, drag-and-drop, filtri per proprietà, OTA, stato pagamento." },
      { t: "Channel manager", d: "60+ OTA con sync bidirezionale in <60s. Rate rules e protezione overbooking." },
      { t: "Pricing dinamico", d: "Suggerimenti AI basati su occupazione, eventi, stagionalità e competitor." },
      { t: "Cleaning & tasks", d: "Programma pulizie e turnover automatici, assegna al team con notifiche." },
    ],
  },
  {
    title: "Guest experience",
    color: "bg-clay",
    items: [
      { t: "Unified inbox", d: "Booking, Airbnb, WhatsApp, email — un thread per prenotazione." },
      { t: "AI Guest Messaging", d: "Risposte personalizzate in 9 lingue, sul tuo tone of voice." },
      { t: "Check-in online", d: "Documenti, firma, deposito cauzionale e istruzioni in app per l'ospite." },
      { t: "Recensioni", d: "Inviti automatici post check-out, monitoraggio rating cross-OTA." },
    ],
  },
  {
    title: "Revenue & finanza",
    color: "bg-teal",
    items: [
      { t: "Pagamenti Stripe", d: "Incassi, depositi, split per OTA, riconciliazione automatica." },
      { t: "Tassa di soggiorno", d: "Calcolo per città, esenzioni, report mensili pronti per il comune." },
      { t: "Report fiscali", d: "Export per commercialista in CSV, XML, PDF. Tracciamento provvigioni." },
      { t: "Revenue dashboard", d: "MTD, YTD, RevPAR, ADR, occupazione. Benchmark per proprietà." },
    ],
  },
  {
    title: "Compliance Italia",
    color: "bg-brand",
    items: [
      { t: "Alloggiati Web", d: "Invio automatico schedine alla questura, supporto multi-credenziale." },
      { t: "ISTAT", d: "Reportistica turistica regionale precompilata e validata." },
      { t: "CIN nazionale", d: "Gestione codice identificativo nazionale per ogni unità." },
      { t: "Fattura elettronica", d: "Integrazione SDI, esportazione XML compliant." },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Funzionalità"
        title={<>Tutto quello che serve a un <span className="italic text-clay">host professionale</span>.</>}
        subtitle="Operations, ospiti, revenue e compliance italiana. Quattro pilastri, un'unica piattaforma."
      />

      {GROUPS.map((g) => (
        <Section key={g.title} eyebrow={g.title}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {g.items.map((it) => (
              <div key={it.t} className="glass-card rounded-2xl p-6">
                <span className={`inline-block h-2 w-8 rounded-full ${g.color}`} />
                <h3 className="h-display mt-4 text-lg">{it.t}</h3>
                <p className="mt-2 text-sm text-ink-2">{it.d}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <CTABand />
    </>
  );
}
