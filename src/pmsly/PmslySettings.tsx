import { useState, type ComponentType } from "react";
import { Icon } from "./Icon";
import { AppRail, Badge } from "./shared";
import {
  NAV,
  PageToolbar,
  ProfiloPanel,
  SicurezzaPanel,
  NotifichePanel,
  AspettoPanel,
} from "./panels-core";
import { IntegrazioniPanel, FatturazionePanel, AlloggiatiPanel } from "./panels-ext";
import { Particles } from "./Particles";
import "./styles.css";

const PANELS: Record<string, ComponentType> = {
  profilo: ProfiloPanel,
  sicurezza: SicurezzaPanel,
  notifiche: NotifichePanel,
  aspetto: AspettoPanel,
  integrazioni: IntegrazioniPanel,
  fatturazione: FatturazionePanel,
  alloggiati: AlloggiatiPanel,
};

const HUB_KIND: Record<string, { meta: string; kind?: "ok" | "warn" | "info" }> = {
  profilo: { meta: "Salvatore · Host" },
  sicurezza: { meta: "2FA non attiva", kind: "warn" },
  notifiche: { meta: "Push · concesso" },
  aspetto: { meta: "Chiaro · IT · EUR" },
  integrazioni: { meta: "7 mapping · 1 errore", kind: "warn" },
  fatturazione: { meta: "Pro · attivo", kind: "ok" },
  alloggiati: { meta: "2/3 configurate · Test", kind: "info" },
};

type NavItem = (typeof NAV)[number];

const SidebarOrg = ({
  section,
  setSection,
  showSetupCard,
  showToolbar,
}: {
  section: string;
  setSection: (s: string) => void;
  showSetupCard: boolean;
  showToolbar: boolean;
}) => {
  const Panel = PANELS[section] || ProfiloPanel;
  const current = NAV.find((n) => n.id === section);
  const idx = NAV.findIndex((n) => n.id === section);
  const [mobileView, setMobileView] = useState<"list" | "panel">("list");

  const handleSelect = (id: string) => {
    setSection(id);
    setMobileView("panel");
  };

  return (
    <div className="settings-page">
      {showToolbar && <PageToolbar section={section} />}
      {!showToolbar && (
        <div style={{ marginBottom: 28 }}>
          <h1 className="h-display">Impostazioni</h1>
          <p className="h-sub">Configura il tuo account e le preferenze del PMS.</p>
        </div>
      )}

      <div className="settings-grid" data-mobile-view={mobileView}>
        <div className="settings-side">
          <div className="subnav">
            {NAV.map((n: NavItem) => (
              <button
                key={n.id}
                className={"subnav-item" + (section === n.id ? " is-active" : "")}
                onClick={() => handleSelect(n.id)}
              >
                <span className="lead">
                  <span className="subnav-icon"><Icon name={n.icon} size={15} /></span>
                  <span>
                    <div>{n.label}</div>
                    <div style={{ fontSize: 11, fontWeight: 400, color: "var(--ink-3)", marginTop: 2 }}>{n.desc}</div>
                  </span>
                </span>
                <Icon name="chev-right" size={14} className="chev" />
              </button>
            ))}
          </div>

          {showSetupCard && (
            <div style={{ marginTop: 16, padding: 16, background: "var(--accent-softer)", border: "1px solid var(--line)", borderRadius: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Icon name="sparkles" size={16} style={{ color: "var(--accent-ink)" }} />
                <div style={{ fontSize: 13, fontWeight: 700 }}>Setup completo al 78%</div>
              </div>
              <div style={{ height: 6, background: "var(--bg-sunken)", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: "78%", height: "100%", background: "var(--accent)" }} />
              </div>
              <div className="hint" style={{ marginTop: 10 }}>Manca: 2FA, telefono, 1 credenziale Alloggiati.</div>
            </div>
          )}
        </div>

        <div className="settings-main">
          <button className="btn btn-ghost btn-sm settings-back" onClick={() => setMobileView("list")}>
            <Icon name="chev-left" size={14} /> Torna alle impostazioni
          </button>
          <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <span className="muted" style={{ fontSize: 12 }}>Impostazioni</span>
            <Icon name="chev-right" size={12} className="muted" />
            <strong style={{ fontSize: 13 }}>{current?.label}</strong>
            <span className="muted" style={{ fontSize: 12, marginLeft: "auto" }}>{idx + 1} di {NAV.length}</span>
          </div>
          <Panel />
        </div>
      </div>
    </div>
  );
};

const Tile = ({ n, onClick }: { n: NavItem; onClick: () => void }) => {
  const k = HUB_KIND[n.id] || { meta: "" };
  return (
    <button className={"tile" + (k.kind ? " is-" + k.kind : "")} onClick={onClick}>
      <div className="tile-arrow"><Icon name="arrow-up-right" size={18} /></div>
      <div className="tile-ico"><Icon name={n.icon} size={20} /></div>
      <div>
        <div className="tile-title">{n.label}</div>
        <div className="tile-desc">{n.desc}</div>
      </div>
      <div className="tile-meta">
        {k.kind === "warn" && <Badge kind="warn" dot>Attenzione</Badge>}
        {k.kind === "ok" && <Badge kind="ok" dot>OK</Badge>}
        {k.kind === "info" && <Badge kind="info" dot>Test</Badge>}
        {!k.kind && <Badge kind="neutral" dot>OK</Badge>}
        <span className="muted">{k.meta}</span>
      </div>
    </button>
  );
};

const HubOrg = ({
  section,
  setSection,
  showSetupCard,
  showToolbar,
}: {
  section: string;
  setSection: (s: string) => void;
  showSetupCard: boolean;
  showToolbar: boolean;
}) => {
  if (section !== "hub") {
    const Panel = PANELS[section] || ProfiloPanel;
    const current = NAV.find((n) => n.id === section);
    return (
      <div className="settings-page">
        {showToolbar && <PageToolbar section={section} />}
        <div style={{ marginBottom: 14 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setSection("hub")}>
            <Icon name="chev-left" size={14} /> Torna alle impostazioni
          </button>
        </div>
        <div style={{ marginBottom: 28 }}>
          <h1 className="h-display">{current?.label}</h1>
          <p className="h-sub">{current?.desc}</p>
        </div>
        <div style={{ maxWidth: 980 }}>
          <Panel />
        </div>
      </div>
    );
  }

  return (
    <div className="settings-page">
      {showToolbar && <PageToolbar section={section} />}
      {!showToolbar && (
        <div style={{ marginBottom: 28 }}>
          <h1 className="h-display">Impostazioni</h1>
          <p className="h-sub">Tutto il tuo PMS in un posto solo. Scegli un'area da configurare.</p>
        </div>
      )}

      <div className="stack-xl" style={{ maxWidth: 1180 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "var(--bg-elev)", border: "1px solid var(--line)", borderRadius: 14, boxShadow: "var(--shadow-sm)" }}>
          <Icon name="search" size={18} style={{ color: "var(--ink-3)" }} />
          <input style={{ border: 0, outline: 0, background: "transparent", flex: 1, fontSize: 14, fontFamily: "inherit" }} placeholder="Cerca un'impostazione… (es. 2FA, push, Stripe, CIN)" />
          <span className="kbd-token" style={{ padding: "4px 8px", fontSize: 11 }}>⌘ K</span>
        </div>

        {showSetupCard && (
          <div className="stats">
            <div className="stat">
              <div className="l">Setup completo</div>
              <div className="v">78<small>%</small></div>
              <div style={{ height: 4, background: "var(--bg-sunken)", borderRadius: 999, marginTop: 12, overflow: "hidden" }}>
                <div style={{ width: "78%", height: "100%", background: "var(--accent)" }} />
              </div>
            </div>
            <div className="stat">
              <div className="l">Avvisi aperti</div>
              <div className="v" style={{ color: "var(--warn)" }}>3</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>2FA, mapping, credenziali</div>
            </div>
            <div className="stat">
              <div className="l">Piano</div>
              <div className="v" style={{ fontSize: 22 }}>Pro</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>3 / 10 proprietà</div>
            </div>
            <div className="stat">
              <div className="l">Ultima modifica</div>
              <div className="v" style={{ fontSize: 22 }}>3 ore fa</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>Notifiche aggiornate</div>
            </div>
          </div>
        )}

        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>Account & Preferenze</h2>
            <span className="muted" style={{ fontSize: 12 }}>{NAV.length} aree</span>
          </div>
          <div className="hub-grid">
            {NAV.map((n) => <Tile key={n.id} n={n} onClick={() => setSection(n.id)} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PmslySettingsApp = ({
  organization = "sidebar",
  showSetupCard = true,
  showToolbar = true,
}: {
  organization?: "sidebar" | "hub";
  showSetupCard?: boolean;
  showToolbar?: boolean;
}) => {
  const [section, setSection] = useState<string>(organization === "hub" ? "hub" : "profilo");

  return (
    <div className="app" style={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      <Particles />
      <AppRail active="settings" />
      {organization === "sidebar" ? (
        <SidebarOrg section={section} setSection={setSection} showSetupCard={showSetupCard} showToolbar={showToolbar} />
      ) : (
        <HubOrg section={section} setSection={setSection} showSetupCard={showSetupCard} showToolbar={showToolbar} />
      )}
    </div>
  );
};
