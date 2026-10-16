import { Link } from "react-router-dom";
import pixelTrophy from "@/assets/pixel-trophy.png";
import { LOESUNGEN, USE_CASES_KACHEL } from "@/data/loesungen";

const KACHELN = [
  ...LOESUNGEN.map((l) => ({ ...l, to: `/loesungen/${l.slug}` })),
  { ...USE_CASES_KACHEL, icon: pixelTrophy },
];

// Startseite: schmaler Streifen „Was wir machen“ – Details auf /loesungen/…
const LoesungenTeaser = () => (
  <section className="sw-section relative">
    <div className="max-w-5xl mx-auto text-center">
      <p
        className="sw-section-title"
        style={{
          marginBottom: 40,
          color: "var(--sw-pink)",
          textShadow: "0 0 18px hsl(var(--neon-pink) / .75)",
        }}
      >
        WAS WIR MACHEN
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {KACHELN.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            className={`${l.cardClass} sw-animate-up text-left transition-transform duration-300 hover:-translate-y-1`}
            style={{ animationDelay: `${i * 0.08}s`, padding: "22px 22px" }}
          >
            <img
              src={l.icon}
              alt=""
              className="w-8 h-8 mb-4"
              style={{ imageRendering: "pixelated" }}
              loading="lazy"
            />
            <h3 className="font-pixel text-[11px] mb-2 leading-relaxed" style={{ color: "var(--sw-text)" }}>
              {l.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-3)" }}>
              {l.description}
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
