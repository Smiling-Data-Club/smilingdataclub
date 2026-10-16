import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import ComingSoon from "@/components/ComingSoon";
import YouTubeZweiKlick from "@/components/YouTubeZweiKlick";
import NotFound from "@/pages/NotFound";
import TerminKarte from "@/components/TerminKarte";
import { LOESUNGEN } from "@/data/loesungen";
import { kommendeTermine } from "@/data/termine";

const BOOKING_URL = "https://sirius-gmbh.zohobookings.eu/240927000000441095";

const Loesung = () => {
  const { slug } = useParams();
  const loesung = LOESUNGEN.find((l) => l.slug === slug);
  if (!loesung) return <NotFound />;

  const andere = LOESUNGEN.filter((l) => l.slug !== loesung.slug);
  const termine = kommendeTermine().filter((t) => t.loesung === loesung.slug);

  return (
    <PageLayout title={loesung.title} eyebrow="LÖSUNGEN" headline={loesung.title} lead={loesung.description}>
      <section className="sw-section" style={{ paddingTop: 0 }}>
        <div className={`${loesung.cardClass} max-w-3xl mx-auto sw-animate-up`}>
          <img
            src={loesung.icon}
            alt=""
            className="w-10 h-10 mb-5"
            style={{ imageRendering: "pixelated" }}
          />
          <p className="text-lg leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
            {loesung.details}
          </p>
        </div>
      </section>

      {termine.length > 0 && (
        <section className="sw-section">
          <div className="max-w-3xl mx-auto">
            <p className="sw-section-title text-center" style={{ marginBottom: 32 }}>
              LIVE ERLEBEN
            </p>
            <div className="flex flex-col gap-5">
              {termine.map((t) => (
                <TerminKarte key={`${t.datum}-${t.titel}`} termin={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {loesung.testimonials && loesung.testimonials.length > 0 && (
        <section className="sw-section">
          <div className="max-w-6xl mx-auto">
            <p className="sw-section-title text-center" style={{ marginBottom: 40 }}>
              SUCCESS STORIES
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {loesung.testimonials.map((t) => (
                <figure key={t.youtubeId} className="sw-card sw-animate-up flex flex-col gap-4" style={{ padding: 18 }}>
                  <YouTubeZweiKlick videoId={t.youtubeId} title={`${t.company} – ${t.person}`} />
                  <blockquote className="text-base leading-relaxed" style={{ color: "var(--sw-text)" }}>
                    „{t.quote}“
                  </blockquote>
                  <figcaption style={{ fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-text-3)" }}>
                    {t.person}, {t.role}
                    <br />
                    {t.company}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sw-section">
        <ComingSoon
          title="MEHR INHALT FOLGT"
          text="Ausführliche Beschreibung, Praxisbeispiele und typische Projekte ergänzen wir hier Schritt für Schritt."
        />
        <div className="text-center mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-block"
            style={{ borderRadius: 10, fontSize: 11 }}
          >
            Termin vereinbaren
          </a>
        </div>
      </section>

      <section className="sw-section">
        <div className="max-w-5xl mx-auto">
          <p className="sw-eyebrow text-center mb-8">Weitere Lösungen</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {andere.map((l) => (
              <Link
                key={l.slug}
                to={`/loesungen/${l.slug}`}
                className={`${l.cardClass} transition-transform duration-300 hover:-translate-y-1`}
                style={{ padding: "18px 20px" }}
              >
                <h3 className="font-pixel text-[11px] mb-2 leading-relaxed" style={{ color: "var(--sw-text)" }}>
                  {l.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--sw-text-3)" }}>
                  {l.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Loesung;
