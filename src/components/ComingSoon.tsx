import { Link } from "react-router-dom";
import MorphShape from "@/components/MorphShape";
import { MORPH_SHAPES } from "@/data/morphShapes";

interface ComingSoonProps {
  title?: string;
  text: string;
  cta?: { label: string; to: string };
}

// Platzhalter-Block im SDC-Stil für Inhalte, die noch folgen.
const ComingSoon = ({ title = "COMING SOON", text, cta }: ComingSoonProps) => (
  <div className="sw-card-feature text-center max-w-2xl mx-auto sw-animate-up">
    <MorphShape from={MORPH_SHAPES.dokument} to={MORPH_SHAPES.blitz} className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-5" />
    <p className="font-pixel text-xs md:text-sm mb-4" style={{ color: "var(--sw-pink)", letterSpacing: ".14em" }}>
      {title}
      <span className="neon-flicker" aria-hidden>
        _
      </span>
    </p>
    <p className="leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
      {text}
    </p>
    {cta && (
      <Link to={cta.to} className="neon-btn inline-block mt-6" style={{ borderRadius: 10, fontSize: 11 }}>
        {cta.label}
      </Link>
    )}
  </div>
);

export default ComingSoon;
