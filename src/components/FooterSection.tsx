import { Link } from "react-router-dom";
import { oeffneCookieEinstellungen } from "@/lib/consent";

const FooterSection = () => {
  return (
    <footer
      className="py-10 px-6 text-center relative"
      style={{
        background: "var(--sw-bg-deep)",
        borderTop: "1px solid hsl(var(--neon-cyan) / .15)",
      }}
    >
      <p className="text-xs" style={{ color: "var(--sw-text-3)" }}>
        A <span style={{ color: "var(--sw-text-2)" }}>SIRIUS GmbH</span> brand
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-3">
        <Link
          to="/impressum"
          className="hover:text-primary text-xs transition-colors"
          style={{ color: "var(--sw-text-4)" }}
        >
          Impressum
        </Link>
        <span style={{ color: "var(--sw-text-4)", opacity: 0.5 }}>|</span>
        <Link
          to="/datenschutz"
          className="hover:text-primary text-xs transition-colors"
          style={{ color: "var(--sw-text-4)" }}
        >
          Datenschutz
        </Link>
        <span style={{ color: "var(--sw-text-4)", opacity: 0.5 }}>|</span>
        <button
          type="button"
          onClick={oeffneCookieEinstellungen}
          className="hover:text-primary text-xs transition-colors"
          style={{ color: "var(--sw-text-4)", background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          Cookie-Einstellungen
        </button>
      </div>
      <p
        className="mt-3"
        style={{
          color: "var(--sw-text-4)",
          fontFamily: "var(--font-mono-sw)",
          fontSize: 11,
        }}
      >
        © {new Date().getFullYear()} Smiling Data Club. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;
