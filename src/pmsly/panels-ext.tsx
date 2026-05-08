import { Icon } from "./Icon";
import { Badge } from "./shared";

export const IntegrazioniPanel = () => (
  <div className="stack-lg">
    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="plug" /></div>
        <div>
          <h3>Channex · Channel Manager</h3>
          <p>Sincronizzazione con Booking.com, Airbnb, VRBO.</p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
          <Badge kind="ok" dot>Connesso</Badge>
          <button className="btn btn-soft btn-sm"><Icon name="zap" size={13} /> Test</button>
        </div>
      </div>
      <div className="card-body">
        <div className="stats">
          <div className="stat"><div className="l">Mapping attivi</div><div className="v">7</div></div>
          <div className="stat"><div className="l">Revisioni in attesa</div><div className="v">2</div></div>
          <div className="stat"><div className="l">Ultima sync</div><div className="v" style={{ fontSize: 18 }}>3<small> min fa</small></div></div>
          <div className="stat"><div className="l">API URL</div><div className="v mono" style={{ fontSize: 13, fontWeight: 500 }}>api.channex.io/v1</div></div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
          <button className="btn btn-primary"><Icon name="sync" size={14} /> Sincronizza ora</button>
          <button className="btn btn-soft">Importa esistenti</button>
          <button className="btn btn-soft">Full sync 500gg</button>
          <button className="btn btn-soft">Crea su Channex</button>
          <button className="btn btn-soft">Gestisci canali OTA <Icon name="arrow-up-right" size={13} /></button>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="link" /></div>
        <div><h3>Mapping proprietà</h3><p>Collegamenti tra proprietà locali e Channex.</p></div>
        <div style={{ marginLeft: "auto" }}><button className="btn btn-soft btn-sm"><Icon name="plus" size={13} /> Aggiungi</button></div>
      </div>
      <table className="tbl">
        <thead><tr><th>Proprietà locale</th><th>Channex property</th><th>Tipologia camera</th><th>Stato</th><th></th></tr></thead>
        <tbody>
          <tr><td><strong>Proprietà #1</strong></td><td>Channex prop · EUR</td><td>Tutte</td><td><Badge kind="ok" dot>Attivo</Badge></td><td><div style={{ display: "flex", gap: 4 }}><button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button><button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }}><Icon name="trash" size={13} /></button></div></td></tr>
          <tr><td><strong>Proprietà #2</strong></td><td>Channex prop · EUR</td><td>Camera matrimoniale</td><td><Badge kind="ok" dot>Attivo</Badge></td><td><div style={{ display: "flex", gap: 4 }}><button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button><button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }}><Icon name="trash" size={13} /></button></div></td></tr>
          <tr><td><strong>Proprietà #3</strong></td><td className="muted">—</td><td className="muted">—</td><td><Badge kind="warn" dot>Non mappato</Badge></td><td><button className="btn btn-soft btn-sm">Mappa</button></td></tr>
        </tbody>
      </table>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="link" /></div>
        <div><h3>iCal Feeds</h3><p>Feed di calendario importati da OTA esterne.</p></div>
        <div style={{ marginLeft: "auto" }}><button className="btn btn-soft btn-sm"><Icon name="plus" size={13} /> Aggiungi feed</button></div>
      </div>
      <table className="tbl">
        <thead><tr><th>Nome</th><th>URL</th><th>Ultima sync</th><th>Stato</th><th></th></tr></thead>
        <tbody>
          <tr><td><strong>Airbnb feed #1</strong></td><td className="mono muted" style={{ maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>airbnb.com/calendar/ical/8f4a2c…</td><td className="muted">12 min fa · 23 prenotazioni</td><td><Badge kind="ok" dot>OK</Badge></td><td><button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button></td></tr>
          <tr><td><strong>VRBO feed #1</strong></td><td className="mono muted" style={{ maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>vrbo.com/icalendar/d3a8…</td><td className="muted">1 ora fa · 8 prenotazioni</td><td><Badge kind="ok" dot>OK</Badge></td><td><button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button></td></tr>
          <tr><td><strong>Booking iCal</strong></td><td className="mono muted" style={{ maxWidth: 280, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>admin.booking.com/ical/…</td><td className="muted">3 ore fa</td><td><Badge kind="danger" dot>Errore parsing</Badge></td><td><button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button></td></tr>
        </tbody>
      </table>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="card" /></div>
        <div><h3>Stripe Connect</h3><p>Account collegato per ricevere pagamenti dagli ospiti.</p></div>
        <div style={{ marginLeft: "auto" }}><Badge kind="ok" dot>Attivo</Badge></div>
      </div>
      <div className="card-body">
        <div className="input-grid">
          <div>
            <label className="label">Stato onboarding</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "var(--bg-soft)", borderRadius: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--ok)" }} />
              <strong style={{ fontSize: 14 }}>Active</strong>
              <span className="muted" style={{ fontSize: 13 }}>· payouts abilitati</span>
            </div>
          </div>
          <div>
            <label className="label">Stripe Account ID</label>
            <input className="input mono readonly" defaultValue="acct_1Q••••••••2x9F" readOnly />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <button className="btn btn-soft">Apri dashboard Stripe <Icon name="arrow-up-right" size={13} /></button>
          <button className="btn btn-soft">Riavvia onboarding</button>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico" style={{ background: "var(--warn-soft)", color: "var(--warn)" }}><Icon name="alert" /></div>
        <div><h3>Dispute attive</h3><p>Contestazioni pagamento aperte da ospiti o banche.</p></div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 32, fontWeight: 800, color: "var(--warn)" }}>1</span>
          <button className="btn btn-soft btn-sm">Vedi tutte <Icon name="arrow-right" size={13} /></button>
        </div>
      </div>
    </div>
  </div>
);

export const FatturazionePanel = () => (
  <div className="stack-lg">
    <div className="plan-card">
      <div className="plan-card-top">
        <div className="plan-card-info">
          <div className="plan-card-eyebrow">Piano corrente</div>
          <div className="plan-card-title">
            Pro <span className="plan-card-pill">ATTIVO</span>
          </div>
          <div className="plan-card-sub">€39/mese · prossimo addebito 12 maggio 2026 · carta •• 4242</div>
        </div>
        <div className="plan-card-actions">
          <button className="btn plan-btn-light">Upgrade a Premium</button>
          <button className="btn plan-btn-dark">Downgrade</button>
        </div>
      </div>
      <div className="plan-card-stats">
        <div><div className="l">Proprietà</div><div className="v">3 / 10</div></div>
        <div><div className="l">Prenotazioni mese</div><div className="v">47 / ∞</div></div>
        <div><div className="l">Storage</div><div className="v">2.1 / 50 GB</div></div>
      </div>
    </div>

    <div className="mode-banner is-mock" style={{ alignItems: "flex-start" }}>
      <Icon name="info" size={18} style={{ marginTop: 2, color: "var(--info)" }} />
      <div>
        <strong>Schema SaaS subscription da implementare.</strong>
        <div className="muted" style={{ fontSize: 13, marginTop: 4, color: "var(--ink-2)" }}>
          Il backend per piani, limiti d'uso e fatturazione PMS non esiste ancora — questa UI è la specifica visiva.
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="card" /></div>
        <div><h3>Metodo di pagamento</h3><p>Carta usata per l'addebito ricorrente del piano.</p></div>
        <div style={{ marginLeft: "auto" }}><button className="btn btn-soft btn-sm">Aggiorna carta</button></div>
      </div>
      <div className="card-body">
        <div className="kbd-token" style={{ fontSize: 14, padding: "14px 16px", gap: 14 }}>
          <span style={{ background: "var(--ink)", color: "#fff", padding: "4px 10px", borderRadius: 6, fontWeight: 700, fontSize: 11 }}>VISA</span>
          <span>•••• •••• •••• 4242</span>
          <span className="muted" style={{ marginLeft: "auto" }}>Scade 09/27</span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="doc" /></div>
        <div><h3>Storico fatture</h3><p>Scarica le fatture in PDF.</p></div>
      </div>
      <table className="tbl">
        <thead><tr><th>Periodo</th><th>Importo</th><th>Stato</th><th>Data</th><th></th></tr></thead>
        <tbody>
          <tr><td><strong>Aprile 2026</strong></td><td>€39,00</td><td><Badge kind="ok" dot>Pagata</Badge></td><td className="muted">12 apr 2026</td><td><button className="btn btn-soft btn-sm"><Icon name="download" size={13} /> PDF</button></td></tr>
          <tr><td><strong>Marzo 2026</strong></td><td>€39,00</td><td><Badge kind="ok" dot>Pagata</Badge></td><td className="muted">12 mar 2026</td><td><button className="btn btn-soft btn-sm"><Icon name="download" size={13} /> PDF</button></td></tr>
          <tr><td><strong>Febbraio 2026</strong></td><td>€39,00</td><td><Badge kind="ok" dot>Pagata</Badge></td><td className="muted">12 feb 2026</td><td><button className="btn btn-soft btn-sm"><Icon name="download" size={13} /> PDF</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const AlloggiatiPanel = () => (
  <div className="stack-lg">
    <div className="mode-banner is-test">
      <span className="pill">Test</span>
      <div>
        <strong>Modalità globale: Test.</strong> Le credenziali vengono validate ma le comunicazioni non sono persistite sul DB della Polizia di Stato.
      </div>
      <button className="btn btn-soft btn-sm" style={{ marginLeft: "auto" }}>Cambia</button>
    </div>

    <div className="stats" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
      <div className="stat"><div className="l">Configurate</div><div className="v" style={{ color: "var(--ok)" }}>2</div><div className="muted" style={{ fontSize: 12, marginTop: 8 }}>credenziali attive</div></div>
      <div className="stat"><div className="l">Mancanti</div><div className="v" style={{ color: "var(--warn)" }}>1</div><div className="muted" style={{ fontSize: 12, marginTop: 8 }}>1 proprietà senza credenziali</div></div>
      <div className="stat"><div className="l">Disattivate</div><div className="v" style={{ color: "var(--ink-3)" }}>0</div><div className="muted" style={{ fontSize: 12, marginTop: 8 }}>—</div></div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="building" /></div>
        <div><h3>Credenziali per proprietà</h3><p>Username, password e WSKEY del portale Alloggiati Web.</p></div>
      </div>
      <table className="tbl">
        <thead><tr><th>Proprietà</th><th>Stato</th><th>Modalità</th><th>Username</th><th>Password</th><th>WSKEY</th><th></th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Proprietà #1</strong></td>
            <td><Badge kind="ok" dot>Configurata</Badge></td>
            <td><Badge kind="info">Test</Badge></td>
            <td className="mono">PA082053</td>
            <td className="mono">••••••••</td>
            <td className="mono">••••••••••••</td>
            <td><div style={{ display: "flex", gap: 4 }}>
              <button className="btn btn-ghost btn-sm">Verifica</button>
              <button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button>
              <button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }}><Icon name="trash" size={13} /></button>
            </div></td>
          </tr>
          <tr>
            <td><strong>Proprietà #2</strong></td>
            <td><Badge kind="ok" dot>Configurata</Badge></td>
            <td><Badge kind="warn">Mock</Badge></td>
            <td className="mono">PA083471</td>
            <td className="mono">••••••••</td>
            <td className="mono">••••••••••••</td>
            <td><div style={{ display: "flex", gap: 4 }}>
              <button className="btn btn-ghost btn-sm">Verifica</button>
              <button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button>
              <button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }}><Icon name="trash" size={13} /></button>
            </div></td>
          </tr>
          <tr>
            <td><strong>Proprietà #3</strong></td>
            <td><Badge kind="warn" dot>Mancante</Badge></td>
            <td className="muted">—</td>
            <td className="muted">—</td>
            <td className="muted">—</td>
            <td className="muted">—</td>
            <td><button className="btn btn-primary btn-sm"><Icon name="plus" size={13} /> Configura</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="sync" /></div>
        <div><h3>Tabelle ISTAT lookup</h3><p>Comuni, paesi, documenti scaricati dal portale Alloggiati.</p></div>
        <div style={{ marginLeft: "auto" }}><button className="btn btn-primary btn-sm"><Icon name="sync" size={13} /> Sincronizza ora</button></div>
      </div>
      <table className="tbl">
        <thead><tr><th>Tipo</th><th>Righe</th><th>Ultima sync</th><th>Stato</th></tr></thead>
        <tbody>
          <tr><td><strong>Luoghi (comuni)</strong></td><td>8.250</td><td className="muted">2 giorni fa</td><td><Badge kind="ok" dot>OK</Badge></td></tr>
          <tr><td><strong>Stati (paesi)</strong></td><td>250</td><td className="muted">2 giorni fa</td><td><Badge kind="ok" dot>OK</Badge></td></tr>
          <tr><td><strong>Documenti</strong></td><td>5</td><td className="muted">2 giorni fa</td><td><Badge kind="ok" dot>OK</Badge></td></tr>
          <tr><td><strong>Tipo alloggiato</strong></td><td>6</td><td className="muted">2 giorni fa</td><td><Badge kind="ok" dot>OK</Badge></td></tr>
          <tr><td><strong>Errori</strong></td><td>50</td><td className="muted">2 giorni fa</td><td><Badge kind="ok" dot>OK</Badge></td></tr>
        </tbody>
      </table>
    </div>

    <div className="mode-banner is-mock" style={{ alignItems: "flex-start" }}>
      <Icon name="info" size={18} style={{ marginTop: 2, color: "var(--info)" }} />
      <div>
        <strong>La gestione operativa è in Adempimenti.</strong>
        <div className="muted" style={{ fontSize: 13, marginTop: 4, color: "var(--ink-2)" }}>
          Lista comunicazioni, retry, marca come inviata manualmente e ISTAT C59 si trovano nella voce <strong>Adempimenti</strong> della sidebar.
        </div>
      </div>
    </div>
  </div>
);
