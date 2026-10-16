// Einwilligung für Analyse (Zoho PageSense). Ohne „Akzeptieren“ wird das Script
// nicht geladen. Die Entscheidung liegt nur im Browser (localStorage).

export type Einwilligung = "alle" | "notwendig";

const KEY = "sdc-einwilligung";
const PAGESENSE_SRC = "https://cdn-eu.pagesense.io/js/siriusgmbh/dd9ded435c224065ac800ede647a6d11.js";
export const OEFFNEN_EVENT = "sdc:cookie-einstellungen";

export const leseEinwilligung = (): Einwilligung | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "alle" || v === "notwendig" ? v : null;
  } catch {
    return null;
  }
};

export const speichereEinwilligung = (wert: Einwilligung) => {
  const vorher = leseEinwilligung();
  try {
    localStorage.setItem(KEY, wert);
  } catch {
    // ohne Speicher fragt der Banner beim nächsten Besuch erneut
  }
  if (wert === "alle") ladeAnalyse();
  // Widerruf: ein bereits geladenes Script lässt sich nur per Neuladen entfernen
  if (wert === "notwendig" && vorher === "alle") window.location.reload();
};

export const ladeAnalyse = () => {
  if (document.querySelector(`script[src="${PAGESENSE_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = PAGESENSE_SRC;
  s.async = true;
  document.head.appendChild(s);
};

/** Banner erneut öffnen (Link „Cookie-Einstellungen“ im Footer) */
export const oeffneCookieEinstellungen = () => window.dispatchEvent(new Event(OEFFNEN_EVENT));
