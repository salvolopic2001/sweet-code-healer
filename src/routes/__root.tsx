import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-clay">404</p>
          <h1 className="h-display mt-3 text-4xl">Pagina non trovata</h1>
          <p className="mt-3 text-ink-2">Il link che hai seguito non esiste o è stato spostato.</p>
          <Link to="/" className="btn-brand mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-medium">
            Torna alla home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="h-display text-3xl">Qualcosa è andato storto</h1>
        <p className="mt-2 text-ink-2">Riprova, oppure torna alla home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-brand rounded-full px-4 py-2 text-sm font-medium"
          >
            Riprova
          </button>
          <a href="/" className="rounded-full border border-line bg-surface px-4 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PMSLY · Property management che scalda l'ospitalità" },
      { name: "description", content: "Un'unica piattaforma per calendario, channel manager, messaggi e pagamenti. Made in Italy." },
      { name: "theme-color", content: "#e8782e" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PMSLY" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:opsz,wght,SOFT@9..144,400..800,0..100&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
