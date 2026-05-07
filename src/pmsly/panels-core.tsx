import { useState } from "react";
import { Icon } from "./Icon";
import { Badge, Toggle } from "./shared";

export const NAV = [
  { id: "profilo", label: "Profilo", icon: "user", desc: "Account e dati personali" },
  { id: "sicurezza", label: "Sicurezza", icon: "shield", desc: "Password, 2FA, sessioni" },
  { id: "notifiche", label: "Notifiche", icon: "bell", desc: "Email e push del browser" },
  { id: "aspetto", label: "Aspetto", icon: "palette", desc: "Tema, lingua, valuta" },
  { id: "integrazioni", label: "Integrazioni", icon: "plug", desc: "Channex, iCal, Stripe" },
  { id: "fatturazione", label: "Fatturazione", icon: "card", desc: "Piano PMS · Free / Pro" },
  { id: "alloggiati", label: "Alloggiati Web", icon: "flag", desc: "Configurazione credenziali" },
] as const;

export const PageToolbar = ({ section }: { section: string }) => {
  const cur = NAV.find((n) => n.id === section);
  const title = section === "hub" ? "Impostazioni" : cur?.label || "Impostazioni";
  return (
    <div className="page-toolbar">
      <h1 className="tb-title">{title}</h1>
      <div className="tb-pill">
        <Icon name="user" size={15} />
        <span>Account personale</span>
      </div>
      <div className="tb-pill">
        <Icon name="search" size={14} />
        <span style={{ color: "var(--ink-3)" }}>Cerca impostazione</span>
        <span className="ct" style={{ marginLeft: 4 }}>⌘K</span>
      </div>
      <div className="tb-spacer" />
      <div className="tb-pill is-status">
        <span className="dot" />
        <span>Tutto sincronizzato</span>
      </div>
      <button className="tb-iconbtn"><Icon name="sliders" size={15} /></button>
      <button className="tb-cta"><Icon name="check" size={14} /> Salva modifiche</button>
    </div>
  );
};

export const ProfiloPanel = () => (
  <div className="stack-lg">
    <div className="profile-card">
      <div className="profile-card-bg" />
      <div className="profile-card-body">
        <div className="profile-identity">
          <div className="avatar-lg">SL</div>
          <div className="profile-info">
            <h2>Salvatore Lo Piccolo</h2>
            <div className="profile-tags">
              <Badge kind="accent" dot>Host</Badge>
              <Badge kind="ok">Piano Pro</Badge>
            </div>
            <div className="profile-meta">
              <span className="profile-meta-item"><Icon name="user" size={13} /> salvatore@pmsly.com</span>
              <span className="profile-meta-item"><Icon name="cal" size={13} /> Membro da Marzo 2024</span>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn btn-soft btn-sm"><Icon name="upload" size={14} /> Cambia avatar</button>
          <button className="btn btn-logout btn-sm"><Icon name="logout" size={14} /> Esci</button>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="user" /></div>
        <div>
          <h3>Informazioni personali</h3>
          <p>I dati del tuo account utente. L'email è gestita da Clerk.</p>
        </div>
      </div>
      <div className="card-body">
        <div className="input-grid">
          <div>
            <label className="label">Nome</label>
            <input className="input" defaultValue="Salvatore" />
          </div>
          <div>
            <label className="label">Cognome</label>
            <input className="input" defaultValue="Lo Piccolo" />
          </div>
          <div>
            <label className="label">Email</label>
            <input className="input readonly" defaultValue="salvatore@pmsly.com" readOnly />
            <div className="hint">Gestita da Clerk · <a style={{ color: "var(--accent-ink)", fontWeight: 600 }}>Modifica nell'account</a></div>
          </div>
          <div>
            <label className="label">Telefono</label>
            <input className="input" defaultValue="+39 333 123 4567" placeholder="+39 …" />
            <div className="hint">Richiede aggiunta colonna a <span className="mono">users</span>.</div>
          </div>
        </div>
      </div>
    </div>

    <div className="card" style={{ borderColor: "#fecaca", background: "#fff8f7" }}>
      <div className="card-head" style={{ borderBottom: "1px solid #fecaca" }}>
        <div className="ico" style={{ background: "#fee2e2", color: "#b91c1c" }}><Icon name="alert" /></div>
        <div>
          <h3 style={{ color: "#991b1b" }}>Zona pericolosa</h3>
          <p>Azioni irreversibili sull'account.</p>
        </div>
      </div>
      <div className="card-body">
        <div className="list-row">
          <div className="lead">
            <div className="t">Esporta tutti i dati</div>
            <div className="d">Scarica un archivio ZIP con prenotazioni, ospiti, fatture (GDPR).</div>
          </div>
          <button className="btn btn-soft"><Icon name="download" size={14} /> Esporta</button>
        </div>
        <div className="list-row">
          <div className="lead">
            <div className="t">Elimina account</div>
            <div className="d">Cancella permanentemente il tuo account e tutti i dati associati.</div>
          </div>
          <button className="btn btn-danger-soft">Elimina account</button>
        </div>
      </div>
    </div>
  </div>
);

export const SicurezzaPanel = () => (
  <div className="stack-lg">
    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="lock" /></div>
        <div><h3>Password</h3><p>Cambio delegato a Clerk via <span className="mono">clerk.users.updatePassword</span>.</p></div>
      </div>
      <div className="card-body">
        <div className="input-grid">
          <div>
            <label className="label">Password attuale</label>
            <input className="input" type="password" defaultValue="••••••••" />
          </div>
          <div></div>
          <div>
            <label className="label">Nuova password</label>
            <input className="input" type="password" placeholder="Minimo 12 caratteri" />
          </div>
          <div>
            <label className="label">Conferma nuova password</label>
            <input className="input" type="password" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
          <button className="btn btn-primary"><Icon name="check" size={14} /> Aggiorna password</button>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="shield" /></div>
        <div><h3>Autenticazione a due fattori</h3><p>App authenticator o SMS · gestita dal componente Clerk.</p></div>
        <div style={{ marginLeft: "auto" }}><Badge kind="warn" dot>Non attiva</Badge></div>
      </div>
      <div className="card-body">
        <div className="row-between">
          <div className="lead">
            <div style={{ fontSize: 14, fontWeight: 600 }}>Configura 2FA</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>Aggiungi un secondo fattore per proteggere il tuo account.</div>
          </div>
          <button className="btn btn-primary">Configura <Icon name="arrow-up-right" size={13} /></button>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="key" /></div>
        <div><h3>Sessioni attive</h3><p>Dispositivi attualmente collegati.</p></div>
      </div>
      <table className="tbl">
        <thead><tr><th>Dispositivo</th><th>Posizione</th><th>Ultima attività</th><th></th></tr></thead>
        <tbody>
          <tr><td><strong>MacBook Pro · Chrome</strong> <Badge kind="ok">Questo</Badge></td><td>Palermo, IT</td><td>Adesso</td><td></td></tr>
          <tr><td>iPhone 15 · Safari</td><td>Palermo, IT</td><td>2 ore fa</td><td><button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }}>Termina</button></td></tr>
          <tr><td>iPad · Safari</td><td>Roma, IT</td><td>3 giorni fa</td><td><button className="btn btn-ghost btn-sm" style={{ color: "var(--danger)" }}>Termina</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>
);

type NotifItem = { name: string; desc?: string; email: boolean; push: boolean };

const NotifRow = ({ it }: { it: NotifItem }) => {
  const [email, setEmail] = useState(it.email);
  const [push, setPush] = useState(it.push);
  return (
    <div className="notif-row">
      <div>
        <div className="name">{it.name}</div>
        {it.desc && <div className="desc">{it.desc}</div>}
      </div>
      <div style={{ display: "grid", placeItems: "center" }}><Toggle on={email} onChange={setEmail} /></div>
      <div style={{ display: "grid", placeItems: "center" }}><Toggle on={push} onChange={setPush} /></div>
    </div>
  );
};

const NotifCategory = ({
  name,
  icon,
  items,
  defaultOpen = false,
}: {
  name: string;
  icon: string;
  items: NotifItem[];
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={"notif-cat" + (open ? " is-open" : "")}>
      <div className="notif-cat-head" onClick={() => setOpen(!open)}>
        <div className="notif-cat-title">
          <span className="ico"><Icon name={icon} size={16} /></span>
          {name}
          <Badge kind="neutral">{items.length}</Badge>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="muted" style={{ fontSize: 12 }}>{items.filter((i) => i.email).length} email · {items.filter((i) => i.push).length} push</span>
          <Icon name={open ? "chev-down" : "chev-right"} size={16} />
        </div>
      </div>
      {open && (
        <div>
          <div className="notif-col-head">
            <div>Notifica</div>
            <div className="center">Email</div>
            <div className="center">Push</div>
          </div>
          {items.map((it, i) => (
            <NotifRow key={i} it={it} />
          ))}
        </div>
      )}
    </div>
  );
};

export const NotifichePanel = () => (
  <div className="stack-lg">
    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="bell" /></div>
        <div>
          <h3>Push del browser</h3>
          <p>Permesso per ricevere notifiche istantanee anche con la pagina chiusa.</p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <Badge kind="ok" dot>Concesso</Badge>
          <button className="btn btn-soft btn-sm">Test push</button>
        </div>
      </div>
    </div>

    <div className="row-between">
      <div className="muted" style={{ fontSize: 13 }}>22 tipi · 5 categorie</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn btn-soft btn-sm">Disattiva tutto</button>
        <button className="btn btn-soft btn-sm">Attiva tutto</button>
      </div>
    </div>

    <NotifCategory name="Prenotazioni" icon="cal" defaultOpen items={[
      { name: "Nuova prenotazione", desc: "Quando arriva una nuova prenotazione da OTA o diretta.", email: true, push: true },
      { name: "Prenotazione cancellata", desc: "Cancellazione da parte dell'ospite.", email: true, push: false },
      { name: "Prenotazione modificata", desc: "Cambio date, ospiti, importi.", email: true, push: true },
      { name: "Prenotazione non confermata (Channex)", desc: "Non ack ricevuto.", email: true, push: true },
      { name: "Richiesta prenotazione Airbnb", desc: "Conferma manuale richiesta.", email: true, push: true },
      { name: "Richiesta modifica Airbnb", desc: "L'ospite chiede di modificare la prenotazione.", email: true, push: false },
    ]} />

    <NotifCategory name="Messaggi & Recensioni" icon="msg" items={[
      { name: "Nuovo messaggio (interno)", email: true, push: true },
      { name: "Messaggio ospite (Channex)", email: false, push: true },
      { name: "Richiesta informazioni (inquiry)", email: true, push: false },
      { name: "Nuova recensione", email: true, push: false },
    ]} />

    <NotifCategory name="Operatività" icon="cal" items={[
      { name: "Promemoria check-in", desc: "24h prima dell'arrivo dell'ospite.", email: false, push: true },
    ]} />

    <NotifCategory name="Compliance" icon="shield" items={[
      { name: "Scadenza Alloggiati Web", desc: "Comunicazione obbligatoria entro 24h dal check-in.", email: true, push: true },
      { name: "Credenziali Alloggiati scadute", desc: "Le password Polizia di Stato scadono ogni 90gg.", email: true, push: true },
    ]} />

    <NotifCategory name="Channel Manager" icon="plug" items={[
      { name: "Camera non mappata", email: true, push: false },
      { name: "Tariffa non mappata", email: true, push: false },
      { name: "Errore sincronizzazione", email: true, push: true },
      { name: "Avviso sincronizzazione", email: false, push: false },
      { name: "Errore tariffe", email: true, push: false },
      { name: "Canale disconnesso", email: true, push: true },
      { name: "Listing Airbnb disconnesso", email: true, push: true },
      { name: "Nuovo canale", email: true, push: false },
      { name: "Canale disattivato", email: true, push: false },
    ]} />
  </div>
);

export const AspettoPanel = () => (
  <div className="stack-lg">
    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="palette" /></div>
        <div><h3>Tema</h3><p>Aspetto dell'interfaccia.</p></div>
      </div>
      <div className="card-body">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            { l: "Chiaro", bg: "#faf7f2", active: true },
            { l: "Scuro", bg: "#1a1714", active: false },
            { l: "Sistema", bg: "linear-gradient(90deg, #faf7f2 50%, #1a1714 50%)", active: false },
          ].map((t) => (
            <button key={t.l} className="card" style={{
              padding: 0,
              overflow: "hidden",
              cursor: "pointer",
              borderColor: t.active ? "var(--accent)" : "var(--line)",
              boxShadow: t.active ? "0 0 0 3px var(--accent-soft)" : "var(--shadow-sm)",
            }}>
              <div style={{ height: 80, background: t.bg }} />
              <div style={{ padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: 13 }}>
                {t.l}
                {t.active && <Icon name="check" size={16} style={{ color: "var(--accent)" }} />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-head">
        <div className="ico"><Icon name="globe" /></div>
        <div><h3>Lingua e formati</h3><p>Preferenze regionali.</p></div>
      </div>
      <div className="card-body">
        <div className="input-grid">
          <div><label className="label">Lingua</label><select className="select"><option>Italiano</option><option>English</option></select></div>
          <div><label className="label">Valuta visualizzazione</label><select className="select"><option>EUR — €</option><option>USD — $</option><option>GBP — £</option></select></div>
        </div>
      </div>
    </div>
  </div>
);
