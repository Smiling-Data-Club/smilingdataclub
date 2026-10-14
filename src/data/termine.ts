// Webinare & Termine – von Hand gepflegt. Vergangene Termine blendet die Seite
// automatisch aus. Später können Termine zusätzlich aus Zoho Webinar kommen.
//
// Beispiel:
// {
//   datum: "2026-11-12T10:00",
//   titel: "Zoho One in 45 Minuten",
//   beschreibung: "Was Zoho One kann – live gezeigt, mit Zeit für Fragen.",
//   art: "Webinar",
//   anmeldeUrl: "https://…",
// },

export interface Termin {
  /** ISO-Datum mit Uhrzeit, Ortszeit Europe/Berlin, z. B. "2026-11-12T10:00" */
  datum: string;
  titel: string;
  beschreibung?: string;
  art: "Webinar" | "Event" | "Vortrag" | "Messe";
  ort?: string;
  anmeldeUrl?: string;
}

export const TERMINE: Termin[] = [];

export const kommendeTermine = (jetzt: Date = new Date()): Termin[] =>
  TERMINE.filter((t) => new Date(t.datum) >= jetzt).sort(
    (a, b) => new Date(a.datum).getTime() - new Date(b.datum).getTime(),
  );
