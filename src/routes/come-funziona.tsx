import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/come-funziona")({
  head: () => ({
    meta: [
      { title: "Come funziona · PMSLY" },
      { name: "description", content: "In 7 giorni sei live su PMSLY. Onboarding guidato, migrazione dati, connessione canali e setup AI gestiti dal team." },
      { property: "og:title", content: "Come funziona · PMSLY" },
      { property: "og:description", content: "Setup in 7 giorni con un onboarding specialist dedicato." },
    ],
  }),
  component: Page,
});

const STEPS = [
  { d: "Giorno 1 · 2h", t: "Discovery & account setup", desc: "Call kick-off di 30 minuti: mappiamo le tue strutture, i canali attivi, le tue esigenze. Configuriamo organizzazione, team, permessi.", b: ["Mapping strutture & unità", "Ruoli e permessi team", "Brand & tone of voice", "Credenziali canali"] },
  { d: "Giorni 2–3 · gestito da noi", t: "Migrazione dati", desc: "Importiamo prenotazioni future, storico ospiti, tariffe e disponibilità dal tuo PMS attuale o da Excel. Tutto validato contro i canali.", b: ["Prenotazioni future & storico 24 mesi", "Anagrafiche ospiti", "Tariffe e regole di pricing", "Controllo qualità dati"] },
  { d: "Giorni 4–5", t: "Connessione canali & sync", desc: "Colleghiamo Airbnb, Booking.com, Vrbo e gli altri canali con sync bidirezionale certificato. Test end-to-end su ogni canale.", b: ["Channel manager bidirezionale", "Test booking su ogni canale", "Rate parity check", "Policy e cancellation rules"] },
  { d: "Giorno 6", t: "Setup AI & inbox", desc: "Configuriamo l'AI Guest Messaging sul tuo tone of voice. Importiamo template, automazioni, regole di check-in/out in 9 lingue.", b: ["Tone of voice training", "Template & automazioni", "9 lingue supportate", "Routing intelligente messaggi"] },
  { d: "Giorno 7", t: "Go-live & training", desc: "Sessione di training di 60 minuti con il tuo team. Switch on dei canali. Il tuo onboarding specialist resta a disposizione i primi 30 giorni.", b: ["Training team 1-to-1", "Go-live affiancato", "Supporto prioritario 30gg", "Health check settimanale"] },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Onboarding guidato"
        title={<>In 7 giorni sei live. <span className="italic text-clay">Senza perdere una prenotazione.</span></>}
        subtitle="Un onboarding passo-passo, con migrazione dati, connessione canali e setup AI gestiti dal nostro team. Tu pensi agli ospiti."
      >
        <a href="#video" className="btn-brand inline-flex rounded-full px-6 py-3 text-sm font-semibold">
          Guarda il tour (2 min) ▶
        </a>
      </PageHero>

      {/* Video placeholder */}
      <Section id="video" eyebrow="Video tour" title="PMSLY in 2 minuti.">
        <div className="glass-card rounded-3xl aspect-video flex items-center justify-center bg-gradient-to-br from-brand-soft to-surface-2">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 rounded-full btn-brand flex items-center justify-center text-2xl">▶</div>
            <p className="mt-4 text-sm text-ink-3">02:14 · Giulia Moretti, Head of Product</p>
          </div>
        </div>
      </Section>

      {/* Steps */}
      <Section eyebrow="Il percorso" title="Dal tuo PMS a PMSLY, senza attriti." subtitle="Ogni step affiancato da un onboarding specialist dedicato. Niente ticket, niente attese.">
        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <div key={s.t} className="glass-card rounded-2xl p-6 md:p-8 grid md:grid-cols-[80px_1fr] gap-6">
              <div>
                <p className="h-display text-4xl text-clay">{String(i+1).padStart(2,"0")}</p>
                <p className="text-xs text-ink-3 mt-1">{s.d}</p>
              </div>
              <div>
                <h3 className="h-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-ink-2">{s.desc}</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {s.b.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-ink-2">
                      <span className="text-clay">✓</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABand title="Prenota la call di kick-off." subtitle="30 minuti per capire se PMSLY fa per te. Senza impegno." />
    </>
  );
}
