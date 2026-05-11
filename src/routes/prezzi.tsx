import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/prezzi")({
  head: () => ({
    meta: [
      { title: "Prezzi · PMSLY" },
      { name: "description", content: "Piani trasparenti per ogni dimensione: dal singolo B&B alle strutture multi-proprietà. 14 giorni gratis." },
      { property: "og:title", content: "Prezzi · PMSLY" },
      { property: "og:description", content: "Da €29/mese. Nessun vincolo, 14 giorni gratis." },
    ],
  }),
  component: Page,
});

const PLANS = [
  {
    name: "Starter",
    price: "29",
    desc: "Per host singoli con 1-3 unità.",
    cta: "Inizia gratis",
    features: ["Fino a 3 unità", "Channel manager 60+ OTA", "Inbox unificata", "Pagamenti Stripe", "Supporto via email"],
  },
  {
    name: "Pro",
    price: "79",
    desc: "Per host professionali fino a 15 unità.",
    cta: "Prova 14 giorni",
    highlight: true,
    features: ["Fino a 15 unità", "Tutto di Starter", "AI Guest Messaging (9 lingue)", "Pricing dinamico", "Alloggiati Web & ISTAT", "Supporto prioritario"],
  },
  {
    name: "Business",
    price: "su misura",
    desc: "Per multi-proprietà e property manager 15+ unità.",
    cta: "Parla con noi",
    features: ["Unità illimitate", "Tutto di Pro", "Multi-team & permessi avanzati", "API & webhook", "Onboarding specialist dedicato", "SLA 99.9% & DPA personalizzato"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Prezzi"
        title={<>Trasparenti, <span className="italic text-clay">senza sorprese.</span></>}
        subtitle="Scegli il piano che cresce con te. 14 giorni gratis, nessuna carta richiesta, cancelli quando vuoi."
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 border transition-shadow ${
                p.highlight
                  ? "border-brand bg-gradient-to-br from-brand-soft to-surface shadow-xl ring-brand-soft"
                  : "border-line bg-surface"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full btn-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  Più scelto
                </span>
              )}
              <h3 className="h-display text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-ink-3">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="h-display text-5xl">{p.price === "su misura" ? "€—" : `€${p.price}`}</span>
                {p.price !== "su misura" && <span className="text-sm text-ink-3">/mese · per proprietà</span>}
                {p.price === "su misura" && <span className="text-sm text-ink-3">su misura</span>}
              </div>
              <Link to="/contatti" className={`mt-6 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold ${p.highlight?"btn-brand":"border border-line bg-surface hover:bg-surface-2"}`}>
                {p.cta}
              </Link>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft text-clay shrink-0">✓</span>
                    <span className="text-ink-2">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Domande comuni">
        <div className="glass-card rounded-2xl divide-y divide-line">
          {[
            { q: "Devo pagare il setup?", a: "No. Onboarding, migrazione dati e training sono inclusi in tutti i piani." },
            { q: "Posso cambiare piano?", a: "Sì, in qualsiasi momento dalla dashboard. La fatturazione viene riproporzionata automaticamente." },
            { q: "Cosa succede dopo i 14 giorni?", a: "Se non scegli un piano, l'account passa in modalità read-only. I tuoi dati restano disponibili 90 giorni." },
          ].map((i) => (
            <div key={i.q} className="p-6">
              <p className="font-semibold">{i.q}</p>
              <p className="mt-2 text-sm text-ink-2">{i.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
