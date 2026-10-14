export type Interesse = "newsletter" | "culture-code-27";

// Schickt die Anmeldung an die Netlify Function /api/anmeldung (→ Zoho Flow).
// Wirft bei Fehler, damit das Formular eine Meldung zeigen kann.
export async function anmelden(daten: {
  email: string;
  interesse: Interesse;
  bonus?: string;
  website?: string;
}): Promise<void> {
  const res = await fetch("/api/anmeldung", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(daten),
  });
  if (!res.ok) throw new Error(`Anmeldung fehlgeschlagen (${res.status})`);
}
