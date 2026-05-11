import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, CTABand } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PMSLY · Il property management che scalda l'ospitalità" },
      { name: "description", content: "Calendario, channel manager, messaggi AI e pagamenti in un'unica piattaforma. Made in Italy, supporto in italiano." },
      { property: "og:title", content: "PMSLY · Property management italiano" },
      { property: "og:description", content: "Tutto quello che serve a un host professionale, in un solo posto." },
    ],
  }),
  component: Home,
});

const FEATURES = [
  { icon: "📅", title: "Multi-Calendar", desc: "Vista unificata di tutte le proprietà. Drag-and-drop, niente overbooking." },
  { icon: "🔄", title: "Channel Manager", desc: "Sync bidirezionale con 60+ OTA in meno di 60 secondi." },
  { icon: "💬", title: "Inbox unificata", desc: "Booking, Airbnb, WhatsApp, email — un thread per prenotazione." },
  { icon: "💳", title: "Pagamenti", desc: "Incassi, depositi, tassa di soggiorno. Stripe integrato." },
  { icon: "🤖", title: "AI Guest Messaging", desc: "Risposte personalizzate in 9 lingue, sul tuo tone of voice." },
  { icon: "📊", title: "Revenue insight", desc: "Dashboard chiari, report fiscali pronti per il commercialista." },
];

const INTEGRATIONS = ["Booking.com", "Airbnb", "Vrbo", "Expedia", "Google", "Stripe", "WhatsApp", "Alloggiati Web"];

const STATS = [
  { v: "60+", l: "Canali OTA" },
  { v: "9", l: "Lingue AI" },
  { v: "<60s", l: "Sync canali" },
  { v: "7gg", l: "Onboarding" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-14 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Nuovo · AI Guest Messaging in 9 lingue</Eyebrow>
            <h1 className="h-display mt-5 text-5xl md:text-7xl text-balance leading-[1.02]">
              Il property management <span className="italic text-clay">che scalda</span> l'ospitalità.
            </h1>
            <p className="mt-6 text-lg text-ink-2 max-w-xl">
              Un'unica piattaforma per calendario, canali, comunicazione con gli ospiti e pagamenti — dal singolo B&B alle strutture multi-proprietà.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contatti" className="btn-brand inline-flex rounded-full px-6 py-3 text-sm font-semibold">
                Prova gratis 14 giorni
              </Link>
              <Link to="/come-funziona" className="inline-flex rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-2">
                Come funziona →
              </Link>
            </div>
            <p className="mt-5 text-xs text-ink-3">Supporto in italiano · Made in Italy · Nessuna carta richiesta</p>
          </div>

          {/* Mock dashboard card */}
          <div className="relative">
            <div className="absolute -inset-8 grid-bg opacity-50 -z-10" />
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface-2/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs text-ink-3">app.pmsly.com / calendar</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-ink-3 mb-3">
                  <span>Aprile 2026 · 4 proprietà</span>
                  <span className="text-sage font-semibold">98% occupazione</span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-[10px] text-ink-3 mb-2">
                  {["Lu","Ma","Me","Gi","Ve","Sa","Do"].map((d, i) => (
                    <div key={d} className={`text-center py-1 rounded ${i===3?"bg-brand-soft text-clay font-semibold":""}`}>{d}<br/>{15+i}</div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: "Villa Corallo", bars: [["sage","Bianchi · Airbnb",3],["clay","Sito diretto · 3n",2],["teal","Müller · Booking",2]]},
                    { name: "Loft Navigli", bars: [["clay","Rossi · Booking",2],["teal","Vrbo · 2n",2],["sage","Lee · Airbnb",3]]},
                    { name: "Borgo 24", bars: [["sage","Serra · diretto",2],["clay","Moreau · Airbnb",3],["teal","Booking",2]]},
                    { name: "Attico Roma", bars: [["teal","Chen · Vrbo",2],["sage","Airbnb · 3n",3],["clay","Martínez",2]]},
                  ].map((row) => (
                    <div key={row.name} className="grid grid-cols-[100px_1fr] gap-2 items-center">
                      <span className="text-xs font-medium text-ink-2 truncate">{row.name}</span>
                      <div className="grid grid-cols-7 gap-1">
                        {row.bars.map(([c, label, span]: any, i: number) => (
                          <div
                            key={i}
                            style={{ gridColumn: `span ${span}` }}
                            className={`h-6 rounded text-[9px] flex items-center px-2 truncate text-white ${
                              c==="sage"?"bg-sage":c==="clay"?"bg-clay":"bg-teal"
                            }`}
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating revenue card */}
            <div className="absolute -top-4 -right-2 hidden sm:block glass-card rounded-2xl p-4 w-48">
              <p className="text-[10px] uppercase tracking-wider text-ink-3">Revenue MTD</p>
              <p className="h-display text-2xl mt-1">€ 42.180</p>
              <p className="text-xs text-sage mt-1">↑ +18.4% vs marzo</p>
            </div>
            {/* Floating message card */}
            <div className="absolute -bottom-6 -left-4 hidden sm:block glass-card rounded-2xl p-4 w-64">
              <p className="text-[10px] uppercase tracking-wider text-clay font-semibold">● Nuovo messaggio</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-7 w-7 rounded-full bg-brand text-white flex items-center justify-center text-xs font-semibold">S</div>
                <div>
                  <p className="text-xs font-semibold">Sofia Bianchi</p>
                  <p className="text-[10px] text-ink-3">Airbnb · Villa Corallo</p>
                </div>
              </div>
              <p className="text-xs text-ink-2 mt-2">"Possibile check-in alle 14:00?"</p>
              <p className="text-[10px] text-clay mt-1.5">★ pmsly AI ha pronto una risposta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos strip */}
      <section className="border-y border-line/60 bg-surface-2/40">
        <div className="container-page py-8 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-wider text-ink-3 font-semibold w-full md:w-auto">
            Si integra con i canali che usi già
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {INTEGRATIONS.map((b) => (
              <span key={b} className="text-base font-semibold text-ink-3">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {STATS.map((s) => (
            <div key={s.l} className="bg-surface p-6 md:p-8">
              <p className="h-display text-4xl md:text-5xl text-foreground">{s.v}</p>
              <p className="mt-2 text-sm text-ink-3">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="container-page py-16">
        <div className="max-w-2xl">
          <Eyebrow>Tutto in un posto</Eyebrow>
          <h2 className="h-display mt-4 text-3xl md:text-5xl text-balance">
            Sei strumenti, <span className="italic text-clay">una sola piattaforma</span>.
          </h2>
          <p className="mt-4 text-ink-2">
            Smetti di rimbalzare tra Excel, extranet e chat. PMSLY unifica ogni operazione quotidiana dell'host professionale.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="h-display mt-4 text-xl">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Split: Channel manager */}
      <section className="container-page py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Channel Manager</Eyebrow>
            <h2 className="h-display mt-4 text-3xl md:text-4xl text-balance">
              Un prezzo. <span className="italic text-clay">Sessanta canali.</span>
            </h2>
            <p className="mt-4 text-ink-2">
              Aggiorna tariffa e disponibilità una volta. PMSLY propaga la modifica a Booking.com, Airbnb, Expedia, Vrbo e 60+ partner in meno di un minuto.
            </p>
            <ul className="mt-6 space-y-3">
              {["Sync bidirezionale in tempo reale", "Rate rules automatiche per canale", "Protezione overbooking garantita"].map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft text-clay">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/integrazioni" className="mt-6 inline-flex text-sm font-semibold text-clay hover:underline">
              Scopri il Channel Manager →
            </Link>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold">Sincronizzazione canali</p>
              <span className="inline-flex items-center gap-1.5 text-xs text-sage">
                <span className="h-1.5 w-1.5 rounded-full bg-sage animate-pulse" /> Live
              </span>
            </div>
            <div className="space-y-3">
              {[
                ["Airbnb", 100], ["Booking.com", 100], ["Vrbo", 98], ["Expedia", 100], ["Sito diretto", 100],
              ].map(([n, p]: any) => (
                <div key={n}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium">{n}</span>
                    <span className="text-ink-3">{p}%</span>
                  </div>
                  <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand to-clay" style={{ width: `${p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
