import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import ComingSoon from "@/components/ComingSoon";
import SectionTitle from "@/components/SectionTitle";
import TestimonialKarte from "@/components/TestimonialKarte";
import { LOESUNGEN } from "@/data/loesungen";

const BOOKING_URL = "https://sirius-gmbh.zohobookings.eu/240927000000441095";

// Sammelt die Kundenstimmen aller Lösungen. Neue Stimmen: bei der passenden
// Lösung in src/data/loesungen.ts unter `testimonials` eintragen.
const UseCases = () => {
  const mitStimmen = LOESUNGEN.filter((l) => l.testimonials && l.testimonials.length > 0);

  return (
    <PageLayout
      title="Use Cases"
      eyebrow="USE CASES"
      headline="Was unsere Kunden sagen"
      lead="Echte Projekte, echte Stimmen – direkt von den Menschen, die damit jeden Tag arbeiten."
    >
      {mitStimmen.map((l) => (
        <section key={l.slug} className="sw-section" style={{ paddingTop: 0 }}>
          <div className="max-w-5xl mx-auto">
            <SectionTitle>{l.title.toUpperCase()}</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
              {l.testimonials!.map((t) => (
                <TestimonialKarte key={t.youtubeId} t={t} />
              ))}
            </div>
            <p className="text-center mt-6">
              <Link
                to={`/loesungen/${l.slug}`}
                style={{ fontFamily: "var(--font-mono-sw)", fontSize: 13, color: "var(--sw-cyan)" }}
              >
                Mehr zu {l.title} →
              </Link>
            </p>
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

export default UseCases;
