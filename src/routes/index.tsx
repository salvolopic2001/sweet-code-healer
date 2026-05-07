import { createFileRoute } from "@tanstack/react-router";
import { PmslySettingsApp } from "@/pmsly/PmslySettings";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PMSLY · Impostazioni" },
      { name: "description", content: "Configura il tuo account e le preferenze del PMS." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
});

function Index() {
  return <PmslySettingsApp />;
}
