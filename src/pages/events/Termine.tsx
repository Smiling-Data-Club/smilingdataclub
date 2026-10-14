import PageLayout from "@/components/PageLayout";
import ComingSoon from "@/components/ComingSoon";
import { kommendeTermine } from "@/data/termine";

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

const Termine = () => {
  const termine = kommendeTermine();

  return (
    <PageLayout
      title="Webinare & Termine"
      eyebrow="EVENTS"
      headline="webinare & termine"
      lead="Wo du uns als Nächstes live erlebst – online oder vor Ort."
    >
      <section className="sw-section" style={{ paddingTop: 0 }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {termine.length === 0 ? (
            <ComingSoon
              title="NEUE TERMINE FOLGEN"
              text="Gerade stehen keine Termine an. Trag dich in den Club-Newsletter ein, dann bekommst du die nächsten Webinare direkt."
              cta={{ label: "Join the Club", to: "/#waitlist" }}
            />
          ) : (
            termine.map((t) => (
              <article key={`${t.datum}-${t.titel}`} className="sw-card sw-animate-up">
                <p className="sw-eyebrow mb-2" style={{ fontSize: 11 }}>
                  {t.art}
                  {t.ort ? ` · ${t.ort}` : ""}
                </p>
                <p className="mb-2" style={{ fontFamily: "var(--font-mono-sw)", fontSize: 13, color: "var(--sw-pink)" }}>
                  {formatDatum(t.datum)} Uhr
                </p>
                <h2 className="text-xl mb-2" style={{ color: "var(--sw-text)" }}>
                  {t.titel}
                </h2>
                {t.beschreibung && <p style={{ color: "var(--sw-text-2)" }}>{t.beschreibung}</p>}
                {t.anmeldeUrl && (
                  <a
                    href={t.anmeldeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn inline-block mt-5"
                    style={{ borderRadius: 10, fontSize: 10 }}
                  >
                    Zur Anmeldung
                  </a>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Termine;
