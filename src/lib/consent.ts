// Einwilligung für „Statistik & Marketing“ (Zoho PageSense, Projekt „sdc-website“).
// Ohne Zustimmung wird kein Tracking-Script geladen und kein Zoho-Cookie gesetzt.
// Die Entscheidung liegt nur im Browser (localStorage).
//
// WICHTIG: Dieselbe Logik gibt es als reines JavaScript für die eigenständigen
// HTML-Seiten (/check, /webinare …) in public/consent/consent.js. Schlüssel,
// Werte und Script-Adressen müssen in beiden Dateien gleich sein.
//
// Seitenwechsel in der React-App (ohne Neuladen) muss man nicht von Hand melden:
// Das PageSense-Script hängt sich selbst an history.pushState/replaceState und
// popstate und zählt jeden Routenwechsel als Seitenaufruf.

export type Einwilligung = "alle" | "notwendig";

const KEY = "sdc-einwilligung";
// Version der Einwilligung. Hochzählen, wenn sich der Umfang des Trackings ändert
// (Datenschutzerklärung Abschnitt 7/8): Wer früher zugestimmt hat, wird dann
// einmal neu gefragt. Ablehnungen bleiben gültig.
const VERSION_KEY = "sdc-einwilligung-version";
const VERSION = "2";

// Nur EIN PageSense-Script pro Seite: Zoho-Scripte desselben Portals erkennen sich
// gegenseitig („Duplicate script installed“) und das zweite bleibt wirkungslos.
// Das ZMA-Projekt (dd9ded…) wird deshalb bewusst nicht geladen.
const PAGESENSE_PROJEKT = "3e1093b169a248f6b2d78660282a3010"; // Projekt „sdc-website“
const TRACKING_SCRIPTS = [`https://cdn-eu.pagesense.io/js/siriusgmbh/${PAGESENSE_PROJEKT}.js`];

// Zoho-eigene Speicher-Einträge (Cookies, Local/Session Storage), die beim Widerruf gelöscht werden
const ZOHO_PREFIXE = ["zab", "zps", "zpc", "zsc", "zft", "z_user_info"];

export const OEFFNEN_EVENT = "sdc:cookie-einstellungen";

const leseGespeichert = (): Einwilligung | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "alle" || v === "notwendig" ? v : null;
  } catch {
    return null;
  }
};

/** Gültige Entscheidung – eine Zustimmung aus einer älteren Version zählt nicht mehr. */
export const leseEinwilligung = (): Einwilligung | null => {
  const v = leseGespeichert();
  if (v !== "alle") return v;
  try {
    return localStorage.getItem(VERSION_KEY) === VERSION ? v : null;
  } catch {
    return null;
  }
};

export const speichereEinwilligung = (wert: Einwilligung) => {
  const vorher = leseEinwilligung();
  const vorherGespeichert = leseGespeichert();
  try {
    localStorage.setItem(KEY, wert);
    localStorage.setItem(VERSION_KEY, VERSION);
  } catch {
    // ohne Speicher fragt der Banner beim nächsten Besuch erneut
  }
  if (wert === "alle") ladeTracking();
  if (wert === "notwendig" && vorherGespeichert === "alle") {
    entferneZohoSpuren();
    // Widerruf: ein bereits geladenes Script lässt sich nur per Neuladen entfernen
    if (vorher === "alle") window.location.reload();
  }
};

/** Beim Start: Zoho-Reste einer veralteten Zustimmung entfernen (ohne gültige Einwilligung keine Zoho-Cookies). */
export const raeumeVeralteteEinwilligungAuf = () => {
  if (leseGespeichert() === "alle" && leseEinwilligung() === null) entferneZohoSpuren();
};

/** Lädt die Tracking-Scripte – nur aufrufen, wenn „Statistik & Marketing“ erlaubt ist. */
export const ladeTracking = () => {
  // PageSense ist im Zoho-Projekt auf „Banner mit Opt-out“ gestellt und würde sonst
  // einen ZWEITEN, eigenen Cookie-Banner zeigen. Die Einwilligung holen wir selbst ein
  // und geben sie über Zohos Consent-Cookie weiter (Wert 2 = angenommen).
  setzeCookie(`zpc${PAGESENSE_PROJEKT}`, "2", 365);
  for (const src of TRACKING_SCRIPTS) {
    if (document.querySelector(`script[src="${src}"]`)) continue;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    document.head.appendChild(s);
  }
};

const setzeCookie = (name: string, wert: string, tage: number) => {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${wert}; path=/; max-age=${tage * 86400}; SameSite=Lax${secure}`;
};

/** Löscht von Zoho gesetzte Cookies und Speicher-Einträge (beim Widerruf). */
const entferneZohoSpuren = () => {
  const istZoho = (name: string) => ZOHO_PREFIXE.some((p) => name.startsWith(p));
  // Cookies können am Host oder an einer übergeordneten Domain hängen
  const teile = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < teile.length - 1; i++) domains.push(`; domain=.${teile.slice(i).join(".")}`);
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!istZoho(name)) continue;
    for (const d of domains) document.cookie = `${name}=; path=/; max-age=0${d}`;
  }
  for (const speicher of [localStorage, sessionStorage]) {
    try {
      Object.keys(speicher).filter(istZoho).forEach((k) => speicher.removeItem(k));
    } catch {
      // Speicher nicht verfügbar – nichts zu löschen
    }
  }
};

/** Banner erneut öffnen (Link „Cookie-Einstellungen“ im Footer) */
export const oeffneCookieEinstellungen = () => window.dispatchEvent(new Event(OEFFNEN_EVENT));
