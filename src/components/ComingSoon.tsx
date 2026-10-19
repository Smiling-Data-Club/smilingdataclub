import { Link } from "react-router-dom";

interface ComingSoonProps {
  title?: string;
  text: string;
  cta?: { label: string; to: string };
}

// Platzhalter-Block im SDC-Stil für Inhalte, die noch folgen.
const ComingSoon = ({ title = "COMING SOON", text, cta }: ComingSoonProps) => (
  <div className="sw-card-feature text-center max-w-2xl mx-auto sw-animate-up">
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
