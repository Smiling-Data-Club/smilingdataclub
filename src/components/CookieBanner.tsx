import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OEFFNEN_EVENT, ladeAnalyse, leseEinwilligung, speichereEinwilligung, type Einwilligung } from "@/lib/consent";

// Einwilligungs-Banner: Analyse (Zoho PageSense) lädt erst nach „Akzeptieren“.
// Beide Buttons gleich gewichtet – Ablehnen ist genauso einfach wie Zustimmen.
const CookieBanner = () => {
  const [offen, setOffen] = useState(false);

  useEffect(() => {
    const wert = leseEinwilligung();
    if (wert === "alle") ladeAnalyse();
    if (!wert) setOffen(true);
    const oeffnen = () => setOffen(true);
    window.addEventListener(OEFFNEN_EVENT, oeffnen);
    return () => window.removeEventListener(OEFFNEN_EVENT, oeffnen);
  }, []);

  if (!offen) return null;

  const waehle = (wert: Einwilligung) => {
    speichereEinwilligung(wert);
    setOffen(false);
  };

  const buttonStyle = { borderRadius: 10, fontSize: 10, padding: "12px 18px" } as const;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4"
      style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom, 0px))" }}
    >
      <div
        className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-4"
        style={{
          padding: "18px 22px",
          borderRadius: 12,
          border: "1px solid hsl(var(--neon-cyan) / .45)",
          background: "rgba(5,5,16,.96)",
          boxShadow: "0 0 30px hsl(var(--neon-cyan) / .2)",
        }}
      >
        <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
          <span className="font-pixel text-[10px] block mb-2" style={{ color: "var(--sw-cyan)", letterSpacing: ".12em" }}>
            COOKIES
          </span>
          Technisch notwendige Cookies sind aktiv. Mit deiner Zustimmung nutzen wir zusätzlich Zoho PageSense, um zu
          verstehen, wie die Seite genutzt wird. Mehr in der{" "}
          <Link to="/datenschutz" className="underline" style={{ color: "var(--sw-cyan)" }}>
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            type="button"
            onClick={() => waehle("notwendig")}
            className="font-pixel"
            style={{
              ...buttonStyle,
              border: "2px solid hsl(var(--neon-cyan) / .7)",
              background: "transparent",
              color: "var(--sw-text)",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Nur notwendige
          </button>
          <button type="button" onClick={() => waehle("alle")} className="neon-btn" style={buttonStyle}>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
