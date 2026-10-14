import pixelGlobe from "@/assets/pixel-globe.png";
import pixelBot from "@/assets/pixel-bot.png";
import pixelDocument from "@/assets/pixel-document.png";
import pixelNetwork from "@/assets/pixel-network.png";

export interface Testimonial {
  quote: string;
  person: string;
  role: string;
  company: string;
  youtubeId: string;
}

export interface Loesung {
  slug: string;
  icon: string;
  title: string;
  description: string;
  details: string;
  cardClass: "sw-card" | "sw-card-pink" | "sw-card-purple";
  testimonials?: Testimonial[];
}

// Video-Testimonials von sales.sirius-gmbh.de/testimonials – alle zu DocuWare.
// TODO: Freigabe der drei Personen für die Nutzung unter der Marke SDC prüfen.
const DOCUWARE_TESTIMONIALS: Testimonial[] = [
  {
    quote: "DocuWare hat uns wirklich den Rücken freigehalten.",
    person: "Bastian Rudigier",
    role: "QMB",
    company: "Deutscher Arbeitskreis für Familienhilfe e.V. (Tannenhof Todtnau)",
    youtubeId: "HB3e8Xly6BM",
  },
  {
    quote: "Wir sparen jeden Tag wertvolle Zeit.",
    person: "Johannes Gessler",
    role: "Geschäftsführer",
    company: "Gessler Collection",
    youtubeId: "5CFvvNQnBC4",
  },
  {
    quote: "DocuWare hat unseren Arbeitsalltag deutlich vereinfacht.",
    person: "Aline Hernandez",
    role: "Kaufmännische Geschäftsleitung",
    company: "BELLE AG",
    youtubeId: "z7m9qV7ZceU",
  },
];

export const LOESUNGEN: Loesung[] = [
  {
    slug: "zoho",
    icon: pixelGlobe,
    title: "Zoho One & CRM",
    description: "40+ Apps. Ein Ökosystem. Alles verbunden — CRM, Finanzen, HR, Support.",
    details:
      "Ein Login für CRM, Buchhaltung, Projekte, Support und Marketing, statt fünf Tools, die nichts voneinander wissen. Wir nutzen Zoho One selbst als Betriebsplattform: Was wir dir einrichten, läuft bei uns seit Jahren im Alltag.",
    cardClass: "sw-card",
  },
  {
    slug: "ki-automatisierung",
    icon: pixelBot,
    title: "KI & Automatisierung",
    description: "Von Chatbots bis Workflow-Automation — KI, die wirklich hilft.",
    details:
      "Nicht der Chatbot, der nichts weiß. Sondern Rechnungen, die sich selbst zuordnen, und Anfragen, die im richtigen Postfach landen. Wir bauen kleine Automatisierungen, die nächste Woche laufen, statt Konzepte für nächstes Jahr.",
    cardClass: "sw-card-pink",
  },
  {
    slug: "docuware",
    icon: pixelDocument,
    title: "DocuWare & IDP",
    description: "Intelligente Dokumentenverarbeitung. Vom Scan zum strukturierten Datensatz.",
    details:
      "Jede Rechnung in fünf Sekunden gefunden, und die Prüfung akzeptiert sie. DocuWare archiviert revisionssicher, IDP (Intelligent Document Processing) liest Belege automatisch aus, ohne dass jemand abtippt.",
    cardClass: "sw-card-purple",
    testimonials: DOCUWARE_TESTIMONIALS,
  },
  {
    slug: "mcp",
    icon: pixelNetwork,
    title: "MCP",
    description: "Model Context Protocol — die Brücke zwischen KI-Modellen und deinen Systemen.",
    details:
      "Model Context Protocol: ein gemeinsamer Stecker zwischen KI-Modellen und deinen Systemen. Statt für jedes Tool eine eigene Schnittstelle zu bauen, spricht die KI direkt mit CRM, Archiv und Kalender.",
    cardClass: "sw-card",
  },
];
