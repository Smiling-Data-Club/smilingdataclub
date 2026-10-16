import pixelGlobe from "@/assets/pixel-globe.png";
import pixelBot from "@/assets/pixel-bot.png";
import pixelDocument from "@/assets/pixel-document.png";

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
  /** Absender „SIRIUS präsentiert“ über der Überschrift (nur DocuWare, wie im Newsletter) */
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

// Reihenfolge = Reihenfolge im Menü, auf der Startseite und unter „Weitere Lösungen“.
// Die Seite „Use Cases“ (/loesungen/use-cases) sammelt alle testimonials.
export const LOESUNGEN: Loesung[] = [
  {
    slug: "zoho",
    icon: pixelGlobe,
    title: "Zoho One",
    description: "Betriebssystem für dein Business",
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
    slug: "docuware",
    icon: pixelDocument,
    title: "DocuWare",
    description: "Dokumentenmanagement, das mitwächst",
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
    slug: "ai",
    icon: pixelBot,
    title: "AI",
    description: "App Building nach Maß",
    details:
      "Wenn es die passende Software nicht gibt, bauen wir sie: schlanke Web-Apps und KI-Werkzeuge, genau für euren Ablauf – und angebunden an die Systeme, die ihr schon habt.",
    cardClass: "sw-card-pink",
    kennstDuDas: [
      "Für euren Ablauf gibt es keine fertige Software – also läuft er über Excel-Listen und E-Mails.",
      "Die Standardsoftware kann vieles, aber genau das eine nicht, was ihr jeden Tag braucht.",
      "Alle reden über KI – aber niemand weiß, wo man im eigenen Betrieb anfangen soll.",
    ],
    leistungen: [
      {
        titel: "Apps nach Maß",
        text: "Vom Kalkulations-Tool bis zum Kundenportal: kleine Web-Apps, die genau euren Ablauf abbilden – im Browser, ohne Installation.",
      },
      {
        titel: "KI eingebaut",
        text: "KI liest Dokumente aus, sortiert Anfragen vor und schreibt Entwürfe. Entscheiden tut weiterhin ein Mensch.",
      },
      {
        titel: "Verbunden mit euren Systemen",
        text: "Über Schnittstellen und MCP (Model Context Protocol) sprechen Apps und KI direkt mit CRM, Archiv und Kalender – mit klaren Rechten: Lesen ist frei, Schreiben nur nach Bestätigung.",
      },
      {
        titel: "Schnell lauffähig",
        text: "Eine erste Version in Wochen statt Monaten. Danach bauen wir nach echtem Feedback aus eurem Alltag weiter.",
      },
      {
        titel: "Datenschutz von Anfang an",
        text: "Bevor etwas gebaut wird, klären wir, welche Daten wohin gehen – und wählen Dienste, bei denen das sauber geregelt ist.",
      },
    ],
    fakten: ["Selbst gebaut: Krisen-Simulator und Angebots-Check", "Wir nutzen MCP selbst im Alltag, z. B. mit unserem Zoho CRM"],
    weiterlesen: [
      { titel: "Krisen-Simulator: Wie krisenfest ist dein Team?", url: "/game", quelle: "Beispiel-App von uns" },
      { titel: "Angebots-Check: Wie viel Risiko steckt in deiner Kalkulation?", url: "/check", quelle: "Beispiel-App von uns" },
    ],
  },
];

/** Kachel „Use Cases“ – erscheint neben den Lösungen auf Startseite und Lösungsseiten */
export const USE_CASES_KACHEL = {
  to: "/loesungen/use-cases",
  title: "Use Cases",
  description: "Was unsere Kunden sagen",
  cardClass: "sw-card" as const,
};
