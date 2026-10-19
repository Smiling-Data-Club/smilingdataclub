import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import { LOESUNGEN, SUCCESS_STORIES_KACHEL } from "@/data/loesungen";

const KACHELN = [
  ...LOESUNGEN.map((l) => ({ ...l, to: `/loesungen/${l.slug}` })),
  SUCCESS_STORIES_KACHEL,
];

// Startseite: schmaler Streifen „Was wir machen“ – Details auf /loesungen/…
const LoesungenTeaser = () => (
  <section className="sw-section relative">
    <div className="max-w-5xl mx-auto">
      <SectionTitle>WAS WIR MACHEN</SectionTitle>

      <div className="grid sm:grid-cols-2 gap-5">
        {KACHELN.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            className={`${l.cardClass} sw-animate-up transition-transform duration-300 hover:-translate-y-1`}
            style={{ animationDelay: `${i * 0.08}s`, padding: "24px 26px" }}
          >
            <h3 className="font-pixel text-[11px] mb-2 leading-relaxed" style={{ color: "var(--sw-text)" }}>
              {l.title}
            </h3>
            <p className="mb-3" style={{ fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-pink)" }}>
              {l.description}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-3)" }}>
              {l.teaser}
            </p>
            <span
              className="block mt-4"
              style={{ fontFamily: "var(--font-pixel)", fontSize: 9, letterSpacing: ".12em", color: "var(--sw-cyan)" }}
            >
              MEHR →
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default LoesungenTeaser;
