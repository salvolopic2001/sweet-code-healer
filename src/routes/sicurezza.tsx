import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/sicurezza")({
  head: () => ({
    meta: [
      { title: "Sicurezza · PMSLY" },
      { name: "description", content: "GDPR, ISO 27001, dati ospiti criptati, backup giornalieri, hosting in EU. La sicurezza dei tuoi dati è la nostra priorità." },
      { property: "og:title", content: "Sicurezza · PMSLY" },
      { property: "og:description", content: "I tuoi dati e quelli dei tuoi ospiti sono al sicuro." },
    ],
  }),
  component: Page,
});

const PILLARS = [
  { i: "🛡️", t: "Crittografia end-to-end", d: "Tutti i dati a riposo sono criptati AES-256, in transito con TLS 1.3." },
  { i: "🇪🇺", t: "Hosting in EU", d: "Server in Italia e Germania. I dati non lasciano mai l'Unione Europea." },
  { i: "📋", t: "GDPR by design", d: "Diritto all'oblio, portabilità dati, registro trattamenti automatico." },
  { i: "🔐", t: "2FA & SSO", d: "Autenticazione a due fattori obbligatoria, SSO con Google e Microsoft." },
  { i: "🧪", t: "Penetration test annuali", d: "Audit di sicurezza condotti da terze parti certificate, report disponibile su richiesta." },
  { i: "💾", t: "Backup giornalieri", d: "Snapshot incrementali ogni ora, retention 30 giorni, disaster recovery <4h." },
];

const CERTS = ["ISO 27001", "GDPR", "PCI DSS L1", "SOC 2 Type II", "AgID Cloud"];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sicurezza & privacy"
        title={<>I tuoi dati al sicuro. <span className="italic text-clay">Quelli dei tuoi ospiti, intoccabili.</span></>}
        subtitle="Standard di sicurezza enterprise, hosting europeo, conformità GDPR by design. Nessun compromesso."
      />

      <Section eyebrow="Pilastri">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <div key={p.t} className="glass-card rounded-2xl p-6">
              <div className="text-3xl">{p.i}</div>
              <h3 className="h-display mt-4 text-lg">{p.t}</h3>
              <p className="mt-2 text-sm text-ink-2">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Certificazioni" title="Conformi agli standard più esigenti.">
        <div className="flex flex-wrap gap-3">
          {CERTS.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-sage" /> {c}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="DPO & supporto" title="Un referente dedicato per ogni richiesta privacy.">
        <div className="glass-card rounded-3xl p-8 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-ink-2">
              Il nostro Data Protection Officer è raggiungibile entro 24 ore per qualsiasi richiesta relativa al trattamento dei dati personali. Forniamo DPA standard a tutti i clienti business.
            </p>
          </div>
          <a href="mailto:dpo@pmsly.com" className="btn-brand inline-flex rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap">
            Scrivi al DPO
          </a>
        </div>
      </Section>

      <CTABand title="Vuoi vedere la nostra documentazione di sicurezza?" subtitle="Forniamo whitepaper, DPA e report di pen-test ai team IT." />
    </>
  );
}
