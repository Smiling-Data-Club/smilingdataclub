import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import ComingSoon from "@/components/ComingSoon";
import SectionTitle from "@/components/SectionTitle";
import TestimonialKarte from "@/components/TestimonialKarte";
import { LOESUNGEN } from "@/data/loesungen";

const MehrLink = ({ slug, title }: { slug: string; title: string }) => (
  <Link to={`/loesungen/${slug}`} style={{ fontFamily: "var(--font-mono-sw)", fontSize: 13, color: "var(--sw-cyan)" }}>
    Mehr zu {title} →
  </Link>
);

const BOOKING_URL = "https://sirius-gmbh.zohobookings.eu/240927000000441095";

// Sammelt die Kundenstimmen aller Lösungen. Neue Stimmen: bei der passenden
// Lösung in src/data/loesungen.ts unter `testimonials` eintragen.
const SuccessStories = () => {
  const mitStimmen = LOESUNGEN.filter((l) => l.testimonials && l.testimonials.length > 0);

  return (
    <PageLayout
      title="Success Stories"
      eyebrow="SUCCESS STORIES"
      headline="Was unsere Kunden sagen"
      lead="Echte Projekte, echte Stimmen – direkt von den Menschen, die damit jeden Tag arbeiten."
    >
      {mitStimmen.map((l) => (
        <section key={l.slug} className="sw-section" style={{ paddingTop: 0 }}>
          <div className="max-w-5xl mx-auto">
            <SectionTitle>{l.title.toUpperCase()}</SectionTitle>
            {l.useCases?.intro && (
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10" style={{ color: "var(--sw-text-2)" }}>
                {l.useCases.intro}
              </p>
            )}
            <div className="grid md:grid-cols-3 gap-6">
              {l.testimonials!.map((t) => (
                <TestimonialKarte key={t.youtubeId} t={t} />
              ))}
            </div>
            {l.useCases?.partner ? (
              <div className="sw-card-purple max-w-3xl mx-auto mt-10 sw-animate-up">
                <p className="sw-eyebrow mb-3" style={{ fontSize: 11 }}>
                  {l.useCases.partner.titel}
                </p>
                <p className="leading-relaxed mb-4" style={{ color: "var(--sw-text-2)" }}>
                  {l.useCases.partner.text}
                </p>
                <MehrLink slug={l.slug} title={l.title} />
              </div>
            ) : (
              <p className="text-center mt-8">
                <MehrLink slug={l.slug} title={l.title} />
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="sw-section">
        <ComingSoon
          title="WEITERE STIMMEN FOLGEN"
          text="Interviews und Projektgeschichten zu Zoho und AI-Apps sind in Arbeit."
        />
        <div className="text-center mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn inline-block"
            style={{ borderRadius: 10, fontSize: 11 }}
          >
            Kennenlern-Termin buchen
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default SuccessStories;
