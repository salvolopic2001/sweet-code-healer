import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line/70 bg-surface-2/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-ink-3 max-w-xs">
            Il property management che scalda l'ospitalità. Made in Italy, supporto in italiano.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-3">Prodotto</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/funzionalita" className="text-ink-2 hover:text-foreground">Funzionalità</Link></li>
            <li><Link to="/integrazioni" className="text-ink-2 hover:text-foreground">Integrazioni</Link></li>
            <li><Link to="/prezzi" className="text-ink-2 hover:text-foreground">Prezzi</Link></li>
            <li><Link to="/sicurezza" className="text-ink-2 hover:text-foreground">Sicurezza</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-3">Risorse</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/come-funziona" className="text-ink-2 hover:text-foreground">Come funziona</Link></li>
            <li><Link to="/faq" className="text-ink-2 hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contatti" className="text-ink-2 hover:text-foreground">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-3">Resta aggiornato</h4>
          <p className="text-sm text-ink-3 mb-3">Notizie sul prodotto, una mail al mese.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="email@struttura.it"
              className="flex-1 min-w-0 rounded-full border border-line bg-surface px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
            <button className="btn-brand rounded-full px-4 py-2 text-sm font-medium">Iscriviti</button>
          </form>
        </div>
      </div>
      <div className="border-t border-line/70">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-3">
          <p>© {new Date().getFullYear()} PMSLY · Tutti i diritti riservati</p>
          <p>Made with care in Italy 🇮🇹</p>
        </div>
      </div>
    </footer>
  );
}
