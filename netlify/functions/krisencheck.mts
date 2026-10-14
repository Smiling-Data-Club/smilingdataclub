// Ergebnis des Krisen-Simulators → Zoho Flow.
// Die Webhook-URL (mit zapikey) liegt nur als Umgebungsvariable in Netlify:
//   ZOHO_FLOW_KRISENCHECK_URL
// Der Body wird unverändert weitergereicht (gleiches Format wie bisher).
// Keine Personendaten und keine Request-Bodies ins Log.

const MAX_BYTES = 32 * 1024;

const antwort = (status: number) =>
  new Response(null, { status, headers: { "Cache-Control": "no-store" } });

export default async (req: Request) => {
  if (req.method !== "POST") return antwort(405);

  const ziel = process.env.ZOHO_FLOW_KRISENCHECK_URL;
  if (!ziel) {
    console.error(JSON.stringify({ evt: "krisencheck", fehler: "ZOHO_FLOW_KRISENCHECK_URL fehlt" }));
    return antwort(503);
  }

  const body = await req.text();
  if (body.length > MAX_BYTES) return antwort(413);

  const felder = new URLSearchParams(body);
  if (!felder.get("email") || !felder.get("gesamtscore")) return antwort(400);

  try {
    const res = await fetch(ziel, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) {
      console.error(JSON.stringify({ evt: "krisencheck", status: res.status }));
      return antwort(502);
    }
  } catch (err) {
    console.error(JSON.stringify({ evt: "krisencheck", fehler: (err as Error)?.name ?? "unbekannt" }));
    return antwort(502);
  }

  return antwort(204);
};

export const config = { path: "/api/krisencheck" };
