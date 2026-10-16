import type { Termin } from "@/data/termine";

const formatDatum = (iso: string) =>
  new Date(iso).toLocaleString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  });

// Ein Termin (Webinar, Event …) als Karte – genutzt auf /events/termine und den Lösungsseiten.
const TerminKarte = ({ termin: t }: { termin: Termin }) => (
  <article className="sw-card sw-animate-up">
    <p className="sw-eyebrow mb-2" style={{ fontSize: 11 }}>
      {t.art}
      {t.ort ? ` · ${t.ort}` : ""}
    </p>
    <p className="mb-2" style={{ fontFamily: "var(--font-mono-sw)", fontSize: 13, color: "var(--sw-pink)" }}>
      {formatDatum(t.datum)} Uhr{t.dauer ? ` · ${t.dauer} Min.` : ""}
    </p>
    <h3 className="text-xl mb-2" style={{ color: "var(--sw-text)" }}>
      {t.titel}
    </h3>
    {t.beschreibung && <p style={{ color: "var(--sw-text-2)" }}>{t.beschreibung}</p>}
    {t.anmeldeUrl && (
      <a
        href={t.anmeldeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="neon-btn inline-block mt-5"
        style={{ borderRadius: 10, fontSize: 10 }}
      >
        Kostenlos anmelden
      </a>
    )}
  </article>
);

export default TerminKarte;
