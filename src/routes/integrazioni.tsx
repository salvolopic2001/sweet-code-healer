import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/integrazioni")({
  head: () => ({
    meta: [
      { title: "Integrazioni · PMSLY" },
      { name: "description", content: "60+ canali OTA, pagamenti Stripe, WhatsApp Business, Alloggiati Web, Google Vacation Rentals e altro." },
      { property: "og:title", content: "Integrazioni · PMSLY" },
      { property: "og:description", content: "Si integra con i canali e gli strumenti che usi già." },
    ],
  }),
  component: Page,
});

const CATS = [
  {
    title: "Online Travel Agency",
    items: [
      { n: "Booking.com", s: "Sync bidirezionale", t: "OTA" },
      { n: "Airbnb", s: "API ufficiale", t: "OTA" },
      { n: "Vrbo", s: "Sync bidirezionale", t: "OTA" },
      { n: "Expedia", s: "Sync bidirezionale", t: "OTA" },
      { n: "Google Vacation Rentals", s: "Distribution", t: "OTA" },
      { n: "Hotels.com", s: "Tramite Expedia", t: "OTA" },
      { n: "TripAdvisor", s: "Distribution", t: "OTA" },
      { n: "Agoda", s: "Sync", t: "OTA" },
    ],
  },
  {
    title: "Pagamenti",
    items: [
      { n: "Stripe", s: "Incassi & depositi", t: "PAY" },
      { n: "PayPal", s: "Pagamenti diretti", t: "PAY" },
      { n: "SumUp", s: "POS in struttura", t: "PAY" },
    ],
  },
  {
    title: "Comunicazione",
    items: [
      { n: "WhatsApp Business", s: "Messaging API", t: "MSG" },
      { n: "Email (SMTP)", s: "Transazionali", t: "MSG" },
      { n: "Telegram", s: "Notifiche team", t: "MSG" },
    ],
  },
  {
    title: "Compliance Italia",
    items: [
      { n: "Alloggiati Web", s: "Invio schedine", t: "GOV" },
      { n: "ISTAT", s: "Report turistico", t: "GOV" },
      { n: "Agenzia Entrate", s: "SDI fattura el.", t: "GOV" },
      { n: "CIN", s: "Codice nazionale", t: "GOV" },
    ],
  },
];

const TAG_COLOR: Record<string,string> = { OTA: "bg-clay", PAY: "bg-teal", MSG: "bg-sage", GOV: "bg-brand" };

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Integrazioni"
        title={<>Si integra con i canali e gli strumenti che <span className="italic text-clay">usi già</span>.</>}
        subtitle="Più di 60 connettori certificati, sync bidirezionale in tempo reale, supporto dedicato per ogni canale."
      />

      <Section eyebrow="Sync Live">
        <div className="glass-card rounded-3xl p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="h-display text-2xl">Status canali</p>
              <p className="text-sm text-ink-3 mt-1">Aggiornato 12 secondi fa</p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-sage font-semibold">
              <span className="h-2 w-2 rounded-full bg-sage animate-pulse" /> Tutti i canali operativi
            </span>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["Airbnb",100,"sage"],["Booking.com",100,"sage"],["Vrbo",98,"clay"],
              ["Expedia",100,"sage"],["Google",100,"sage"],["Sito diretto",100,"sage"],
            ].map(([n,p,c]: any) => (
              <div key={n} className="rounded-xl border border-line bg-surface p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{n}</span>
                  <span className={`text-xs font-semibold ${c==="sage"?"text-sage":"text-clay"}`}>{p}%</span>
                </div>
                <div className="mt-2 h-1.5 bg-surface-2 rounded-full overflow-hidden">
                  <div className={`h-full ${c==="sage"?"bg-sage":"bg-clay"}`} style={{ width: `${p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {CATS.map((cat) => (
        <Section key={cat.title} eyebrow={cat.title}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cat.items.map((it) => (
              <div key={it.n} className="glass-card rounded-2xl p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-surface-2 flex items-center justify-center font-display font-semibold text-foreground">
                    {it.n.charAt(0)}
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-bold text-white px-2 py-0.5 rounded ${TAG_COLOR[it.t]}`}>
                    {it.t}
                  </span>
                </div>
                <p className="mt-4 font-semibold">{it.n}</p>
                <p className="text-xs text-ink-3 mt-1">{it.s}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <CTABand title="Non vedi il canale che usi?" subtitle="Contattaci: rilasciamo nuovi connettori ogni mese su richiesta dei clienti." />
    </>
  );
}
