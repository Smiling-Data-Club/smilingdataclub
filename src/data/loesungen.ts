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

export interface Leistung {
  titel: string;
  text: string;
}

export interface Weiterlesen {
  titel: string;
  /** Intern ("/game") oder extern ("https://…") */
  url: string;
  quelle?: string;
}

export interface Loesung {
  slug: string;
  icon: string;
  title: string;
  description: string;
  details: string;
  cardClass: "sw-card" | "sw-card-pink" | "sw-card-purple";
  /** „Kennst du das?“ – typische Ausgangslagen */
  kennstDuDas?: string[];
  /** „Was wir machen“ */
  leistungen?: Leistung[];
  /** Kurze, belegbare Fakten als Badges */
  fakten?: string[];
  testimonials?: Testimonial[];
  weiterlesen?: Weiterlesen[];
  /** Absender „SIRIUS präsentiert“ + Umsetzungs-Block (nur DocuWare – SIRIUS-Kerngeschäft) */
  siriusPraesentiert?: boolean;
  /** Überschrift über den Terminen, Standard „Live erleben“ */
  termineTitel?: string;
}

const SIRIUS_BLOG = "https://www.sirius-gmbh.de/blog";

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
    kennstDuDas: [
      "Kundendaten liegen in Excel, im Mailpostfach und im Kopf von zwei Leuten.",
      "Angebote, Rechnungen und Projekte laufen in getrennten Tools, die nichts voneinander wissen.",
      "Für jede Auswertung baut jemand eine Liste zusammen – und am Ende stimmt sie trotzdem nicht.",
    ],
    leistungen: [
      {
        titel: "Ein CRM, das genutzt wird",
        text: "Wir richten Zoho CRM so ein, wie dein Vertrieb tatsächlich arbeitet: mit den Feldern, die ihr braucht – und ohne die, die keiner pflegt.",
      },
      {
        titel: "Alles verbunden",
        text: "CRM, Buchhaltung, Projekte, Support und Marketing greifen ineinander. Ein Kunde wird einmal angelegt, nicht fünfmal.",
      },
      {
        titel: "Sauber umziehen",
        text: "Kontakte, Historie und Listen aus Altsystemen und Excel übernehmen wir zusammengeführt statt doppelt.",
      },
      {
        titel: "Lernen am eigenen System",
        text: "Dein Team übt mit euren Daten, nicht mit einer Demo. Und wenn später Fragen kommen, sind wir erreichbar.",
      },
    ],
    fakten: ["Zoho Authorized Partner", "Zoho One ist unsere eigene Betriebsplattform"],
  },
  {
    slug: "ki-automatisierung",
    icon: pixelBot,
    title: "KI & Automatisierung",
    description: "Von Chatbots bis Workflow-Automation — KI, die wirklich hilft.",
    details:
      "Nicht der Chatbot, der nichts weiß. Sondern Rechnungen, die sich selbst zuordnen, und Anfragen, die im richtigen Postfach landen. Wir bauen kleine Automatisierungen, die nächste Woche laufen, statt Konzepte für nächstes Jahr.",
    cardClass: "sw-card-pink",
    kennstDuDas: [
      "Rechnungen, Lieferscheine und Anfragen werden von Hand abgetippt oder weitergeleitet.",
      "Dieselben Copy-&-Paste-Schritte, jeden Tag, quer durch mehrere Programme.",
      "Alle reden über KI – aber niemand weiß, wo man im eigenen Betrieb anfangen soll.",
    ],
    leistungen: [
      {
        titel: "Erst hinschauen",
        text: "Wir suchen mit dir die Stelle, an der Automatisierung am meisten Zeit spart. Meist ist das kein großes Projekt, sondern ein nerviger Handgriff, der hundertmal am Tag passiert.",
      },
      {
        titel: "Kleine Automatisierungen",
        text: "Mit Zoho Flow, Make oder Zoho-eigenen Funktionen bauen wir Abläufe, die nächste Woche laufen – nicht Konzepte für nächstes Jahr.",
      },
      {
        titel: "KI mit Augenmaß",
        text: "KI liest Dokumente aus, sortiert Anfragen vor und schreibt Entwürfe. Entscheiden tut weiterhin ein Mensch.",
      },
      {
        titel: "Datenschutz von Anfang an",
        text: "Bevor etwas gebaut wird, klären wir, welche Daten wohin gehen – und wählen Dienste, bei denen das sauber geregelt ist.",
      },
    ],
    weiterlesen: [
      { titel: "Krisen-Simulator: Wie krisenfest ist dein Team?", url: "/game" },
      { titel: "Angebots-Check: Wie viel Risiko steckt in deiner Kalkulation?", url: "/check" },
    ],
  },
  {
    slug: "docuware",
    icon: pixelDocument,
    title: "DocuWare & IDP",
    description: "Intelligente Dokumentenverarbeitung. Vom Scan zum strukturierten Datensatz.",
    details:
      "Jede Rechnung in fünf Sekunden gefunden, und die Prüfung akzeptiert sie. DocuWare archiviert revisionssicher, IDP (Intelligent Document Processing) liest Belege automatisch aus, ohne dass jemand abtippt.",
    cardClass: "sw-card-purple",
    kennstDuDas: [
      "Ordner im Keller, Ordner im Büro – und die Rechnung vom letzten März ist trotzdem nicht auffindbar.",
      "Rechnungen wandern per Hauspost oder Mail-Weiterleitung zur Freigabe und bleiben irgendwo liegen.",
      "Die E-Rechnung ist Pflicht, aber XRechnung und ZUGFeRD werden noch ausgedruckt.",
    ],
    leistungen: [
      {
        titel: "Digitales Archiv",
        text: "Alle Dokumente an einem Ort, revisionssicher abgelegt und in Sekunden gefunden – auch bei der Betriebsprüfung.",
      },
      {
        titel: "Rechnungseingang auf Autopilot",
        text: "XRechnung, ZUGFeRD und PDF werden ausgelesen, geprüft und direkt zur Freigabe weitergeleitet. Niemand tippt mehr Rechnungsdaten ab.",
      },
      {
        titel: "Digitale Personal- und Entgeltakte",
        text: "Dokumente landen automatisch in der richtigen Akte, Zugriffsrechte sind klar geregelt, Aufbewahrungsfristen laufen mit.",
      },
      {
        titel: "IDP und DocuWare-KI Aura",
        text: "Intelligent Document Processing erkennt Belege und Inhalte, ohne dass jemand Vorlagen pflegt – mit der neuen DocuWare-KI Aura.",
      },
      {
        titel: "In der Cloud",
        text: "Mit DocuWare Cloud braucht ihr keinen eigenen Server. Updates und Sicherung sind inklusive.",
      },
    ],
    fakten: ["DocuWare Gold Partner", "DocuWare Customer Service Champion 2026"],
    siriusPraesentiert: true,
    termineTitel: "Webinar-Reihe",
    testimonials: DOCUWARE_TESTIMONIALS,
    weiterlesen: [
      {
        titel: "E-Rechnung mit DocuWare: Einfach und automatisiert",
        url: `${SIRIUS_BLOG}/e-rechnung-mit-docuware`,
        quelle: "SIRIUS-Blog",
      },
      {
        titel: "Was bedeutet Revisionssicherheit – und wo ist sie unverzichtbar?",
        url: `${SIRIUS_BLOG}/was-bedeutet-revisionssicherheit-wo-ist-sie-unverzichtbar`,
        quelle: "SIRIUS-Blog",
      },
      {
        titel: "Digitale Meilensteine: Die Gessler Collection und DocuWare",
        url: `${SIRIUS_BLOG}/digitale-meilensteine`,
        quelle: "SIRIUS-Blog",
      },
    ],
  },
  {
    slug: "mcp",
    icon: pixelNetwork,
    title: "MCP",
    description: "Model Context Protocol — die Brücke zwischen KI-Modellen und deinen Systemen.",
    details:
      "Model Context Protocol: ein gemeinsamer Stecker zwischen KI-Modellen und deinen Systemen. Statt für jedes Tool eine eigene Schnittstelle zu bauen, spricht die KI direkt mit CRM, Archiv und Kalender.",
    cardClass: "sw-card",
    kennstDuDas: [
      "Die KI kann viel – aber sie weiß nichts über deine Kunden, Aufträge oder Dokumente.",
      "Jede Verbindung zwischen KI und Software ist eine eigene Bastelei.",
      "Unklar, was die KI eigentlich darf: nur lesen? Auch schreiben? Löschen?",
    ],
    leistungen: [
      {
        titel: "Ein Stecker für alle Systeme",
        text: "Über MCP greift die KI auf CRM, Archiv und Kalender zu – mit einer einheitlichen Schnittstelle statt vieler Einzellösungen.",
      },
      {
        titel: "Klare Rechte",
        text: "Wir legen fest, was die KI darf. Bewährt hat sich: Lesen ist frei, Schreiben nur nach Bestätigung durch einen Menschen.",
      },
      {
        titel: "Eigene Konnektoren",
        text: "Für Systeme ohne fertige MCP-Anbindung bauen wir den passenden Konnektor.",
      },
      {
        titel: "Klein anfangen",
        text: "Ein System, ein Anwendungsfall, ein paar Wochen Praxis. Danach wisst ihr, ob und wie es weitergeht.",
      },
    ],
    fakten: ["Wir nutzen MCP selbst im Alltag, z. B. mit unserem Zoho CRM"],
  },
];
