// Menüstruktur der Seite. Neue Unterseite = Eintrag hier + Route in App.tsx.
// `static: true` heißt: eigenständige HTML-Seite außerhalb der React-App
// (z. B. /check) – wird per normalem Link geladen, nicht über den Router.

export interface NavItem {
  label: string;
  to: string;
  hint?: string;
  static?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const NAVIGATION: NavGroup[] = [
  {
    label: "Lösungen",
    items: [
      { label: "Zoho One & CRM", to: "/loesungen/zoho", hint: "Ein Ökosystem für alles" },
      { label: "KI & Automatisierung", to: "/loesungen/ki-automatisierung", hint: "KI, die wirklich hilft" },
      { label: "DocuWare & IDP", to: "/loesungen/docuware", hint: "Vom Scan zum Datensatz" },
      { label: "MCP", to: "/loesungen/mcp", hint: "KI trifft deine Systeme" },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Krisen-Simulator", to: "/game", hint: "Wie krisenfest ist dein Team?" },
      { label: "Angebots-Check", to: "/check", hint: "Risiko in deiner Kalkulation", static: true },
    ],
  },
  {
    label: "Events",
    items: [
      { label: "Culture & Code 26", to: "/events/culture-and-code-26", hint: "Rückblick auf den Kick-off" },
      { label: "Culture & Code 27", to: "/events/culture-and-code-27", hint: "Jetzt vormerken" },
      { label: "Webinare & Termine", to: "/events/termine", hint: "Was als Nächstes kommt" },
    ],
  },
  {
    label: "Über uns",
    items: [
      { label: "Über den Club", to: "/ueber-uns", hint: "Wofür wir stehen" },
      { label: "Team", to: "/ueber-uns/team", hint: "It's dangerous to go alone" },
    ],
  },
];

export const MEMBER_LOGIN: NavItem = { label: "Member-Login", to: "/member" };
