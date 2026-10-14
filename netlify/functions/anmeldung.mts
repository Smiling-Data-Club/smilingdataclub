// Newsletter-/Event-Anmeldung → Zoho Flow.
// Die Webhook-URL (mit zapikey) liegt nur als Umgebungsvariable in Netlify:
//   ZOHO_FLOW_ANMELDUNG_URL
// Keine Personendaten und keine Request-Bodies ins Log.

const INTERESSEN = new Set(["newsletter", "culture-code-27"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const antwort = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export default async (req: Request) => {
  if (req.method !== "POST") return antwort(405, { ok: false });

  const ziel = process.env.ZOHO_FLOW_ANMELDUNG_URL;
  if (!ziel) {
    console.error(JSON.stringify({ evt: "anmeldung", fehler: "ZOHO_FLOW_ANMELDUNG_URL fehlt" }));
    return antwort(503, { ok: false });
  }

  let daten: Record<string, unknown>;
  try {
    daten = await req.json();
  } catch {
    return antwort(400, { ok: false });
  }

  // Honeypot: Bots füllen das versteckte Feld aus – still annehmen, nicht weiterleiten.
  if (typeof daten.website === "string" && daten.website !== "") return antwort(200, { ok: true });

  const email = typeof daten.email === "string" ? daten.email.trim() : "";
  const interesse = typeof daten.interesse === "string" ? daten.interesse : "newsletter";
  if (!EMAIL.test(email) || email.length > 254 || !INTERESSEN.has(interesse)) {
    return antwort(400, { ok: false });
  }

  const form = new URLSearchParams({ email, interesse });
  if (daten.bonus === "PONG1UP") form.append("bonus", "PONG1UP");

  try {
    const res = await fetch(ziel, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    if (!res.ok) {
      console.error(JSON.stringify({ evt: "anmeldung", status: res.status }));
      return antwort(502, { ok: false });
    }
  } catch (err) {
    console.error(JSON.stringify({ evt: "anmeldung", fehler: (err as Error)?.name ?? "unbekannt" }));
    return antwort(502, { ok: false });
  }

  return antwort(200, { ok: true });
};

export const config = { path: "/api/anmeldung" };
