import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ · PMSLY" },
      { name: "description", content: "Domande frequenti su PMSLY: prezzi, onboarding, integrazioni, sicurezza, supporto." },
      { property: "og:title", content: "FAQ · PMSLY" },
      { property: "og:description", content: "Tutte le risposte alle domande più comuni." },
    ],
  }),
  component: Page,
});

const FAQS = [
  {
    cat: "Generale",
    items: [
      { q: "Cos'è PMSLY?", a: "Una piattaforma di property management italiana per host professionali e gestori di affitti brevi. Unifica calendario, channel manager, messaggistica AI e pagamenti." },
      { q: "Per chi è pensato PMSLY?", a: "Dal singolo B&B con 1-3 unità, ai gestori multi-proprietà fino a 200 unità. Abbiamo piani diversi per ogni dimensione." },
      { q: "PMSLY è disponibile in italiano?", a: "Sì, sia il prodotto che il supporto sono in italiano. L'AI Guest Messaging risponde in 9 lingue ai tuoi ospiti." },
    ],
  },
  {
    cat: "Onboarding",
    items: [
      { q: "Quanto tempo serve per andare live?", a: "7 giorni in media, con un onboarding specialist dedicato. Migrazione dati, connessione canali e setup AI sono inclusi." },
      { q: "Posso migrare dal mio PMS attuale?", a: "Sì. Importiamo prenotazioni future, storico ospiti (24 mesi), tariffe e regole di pricing dal tuo PMS o da export Excel." },
      { q: "Devo formare il team?", a: "Una sessione di training di 60 minuti è inclusa. Forniamo anche video tutorial e documentazione completa in italiano." },
    ],
  },
  {
    cat: "Integrazioni",
    items: [
      { q: "Quanti canali OTA supportate?", a: "Oltre 60: Booking.com, Airbnb, Vrbo, Expedia, Google Vacation Rentals, e altri verticali." },
      { q: "Si integra con Stripe?", a: "Sì, con Stripe per incassi, depositi cauzionali, split per OTA e riconciliazione automatica. Supportiamo anche PayPal e SumUp." },
      { q: "Supportate Alloggiati Web?", a: "Sì. Invio automatico delle schedine alla questura, supporto multi-credenziale per gestori di più strutture." },
    ],
  },
  {
    cat: "Prezzi & contratti",
    items: [
      { q: "Quanto costa?", a: "Da €29/mese per il piano Starter (1-3 unità). I piani Pro e Business scalano in base al numero di unità. Vedi la pagina Prezzi per il dettaglio." },
      { q: "C'è un periodo di prova?", a: "Sì, 14 giorni gratuiti, senza carta di credito. Hai accesso completo a tutte le funzionalità." },
      { q: "Posso cancellare quando voglio?", a: "Sì, nessun vincolo di durata. Puoi cancellare in qualsiasi momento dalla dashboard, senza penali." },
    ],
  },
  {
    cat: "Sicurezza",
    items: [
      { q: "Dove sono ospitati i dati?", a: "In Italia e Germania, su infrastruttura certificata ISO 27001. I dati non lasciano mai l'Unione Europea." },
      { q: "Siete GDPR-compliant?", a: "Sì, by design. Forniamo DPA standard, registro trattamenti, esportazione e cancellazione dati on-demand." },
      { q: "I pagamenti sono sicuri?", a: "I dati di pagamento non transitano mai sui nostri server: usiamo Stripe (PCI DSS L1), il più alto standard del settore." },
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Le tue domande, <span className="italic text-clay">le nostre risposte.</span></>}
        subtitle="Non trovi quello che cerchi? Scrivici, rispondiamo entro un'ora lavorativa."
      />

      {FAQS.map((g) => (
        <Section key={g.cat} eyebrow={g.cat}>
          <div className="glass-card rounded-2xl divide-y divide-line">
            {g.items.map((it, i) => <Item key={i} q={it.q} a={it.a} />)}
          </div>
        </Section>
      ))}

      <CTABand title="Hai un'altra domanda?" subtitle="Il nostro team risponde in italiano, entro un'ora lavorativa." />
    </>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left p-6 flex items-start gap-4 hover:bg-surface-2/40 transition-colors">
      <span className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-line text-clay shrink-0 transition-transform ${open?"rotate-45":""}`}>+</span>
      <div className="flex-1">
        <p className="font-semibold">{q}</p>
        {open && <p className="mt-2 text-sm text-ink-2">{a}</p>}
      </div>
    </button>
  );
}
