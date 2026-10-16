// Webinare & Termine – von Hand gepflegt. Vergangene Termine blendet die Seite
// automatisch aus. Später können Termine zusätzlich aus Zoho Webinar kommen.
//
// Datum immer mit Zeitzone angeben, damit es überall gleich angezeigt wird:
//   Winterzeit (Ende Okt. bis Ende März): "+01:00", Sommerzeit: "+02:00".
// `loesung` (optional): Slug aus src/data/loesungen.ts – dann erscheint der
// Termin zusätzlich auf dieser Lösungsseite.

export interface Termin {
  /** ISO-Datum mit Uhrzeit und Zeitzone, z. B. "2026-11-12T14:00:00+01:00" */
  datum: string;
  /** Dauer in Minuten */
  dauer?: number;
  titel: string;
  beschreibung?: string;
  art: "Webinar" | "Event" | "Vortrag" | "Messe";
  ort?: string;
  anmeldeUrl?: string;
  loesung?: string;
}

export const TERMINE: Termin[] = [
  {
    datum: "2026-10-29T11:30:00+01:00",
    dauer: 45,
    titel: "E-Rechnungseingang auf Autopilot",
    beschreibung:
      "Die E-Rechnung ist Pflicht – doch im Rechnungseingang steckt oft noch viel Handarbeit. Wir zeigen live, wie XRechnung und ZUGFeRD automatisch ausgelesen, geprüft und zur Freigabe weitergeleitet werden. Mit DocuWare und der neuen DocuWare-KI Aura.",
    art: "Webinar",
    ort: "Online",
    anmeldeUrl: "https://webinar.sirius-gmbh.de/meeting/register?sessionId=1223859699",
    loesung: "docuware",
  },
  {
    datum: "2026-11-12T14:00:00+01:00",
    dauer: 90,
    titel: "Die Entgeltakte, die sich selbst sortiert",
    beschreibung:
      "Ab 2027 müssen bestimmte Entgeltunterlagen elektronisch geführt werden. Gemeinsam mit Markus Bollin von DocuWare zeigen wir live, wie die digitale Entgeltakte funktioniert: Dokumente werden automatisch erkannt und zugeordnet, Zugriffsrechte sind klar geregelt, Aufbewahrungsfristen laufen automatisch mit.",
    art: "Webinar",
    ort: "Online",
    anmeldeUrl: "https://webinar.sirius-gmbh.de/meeting/register?sessionId=1221915522",
    loesung: "docuware",
  },
];

export const kommendeTermine = (jetzt: Date = new Date()): Termin[] =>
  TERMINE.filter((t) => new Date(t.datum).getTime() + (t.dauer ?? 0) * 60_000 >= jetzt.getTime()).sort(
    (a, b) => new Date(a.datum).getTime() - new Date(b.datum).getTime(),
  );
