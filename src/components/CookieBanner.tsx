import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  OEFFNEN_EVENT,
  ladeTracking,
  leseEinwilligung,
  raeumeVeralteteEinwilligungAuf,
  speichereEinwilligung,
  type Einwilligung,
} from "@/lib/consent";

// Einwilligungs-Banner mit zwei Kategorien: „Notwendig“ (immer an) und
// „Statistik & Marketing“ (Zoho PageSense, lädt erst nach Zustimmung).
// „Ablehnen“ und „Alle akzeptieren“ sind bewusst gleich gestaltet.
// Gegenstück für die eigenständigen HTML-Seiten: public/consent/consent.js

const buttonStyle: CSSProperties = {
  borderRadius: 10,
  fontSize: 10,
  padding: "12px 16px",
  border: "2px solid hsl(var(--neon-cyan) / .7)",
  background: "transparent",
  color: "var(--sw-text)",
  textTransform: "uppercase",
  cursor: "pointer",
  lineHeight: 1.4,
};

const Knopf = ({ onClick, children }: { onClick: () => void; children: string }) => (
  <button
    type="button"
    onClick={onClick}
    className="font-pixel flex-1 sm:flex-none transition-shadow hover:shadow-[0_0_16px_hsl(var(--neon-cyan)/.45)]"
    style={buttonStyle}
  >
    {children}
  </button>
);

const Kategorie = ({
  titel,
  text,
  an,
  gesperrt,
  onToggle,
}: {
  titel: string;
  text: string;
  an: boolean;
  gesperrt?: boolean;
  onToggle?: () => void;
}) => (
  <div
    className="flex items-start gap-4"
    style={{ padding: "14px 0", borderTop: "1px solid hsl(var(--neon-cyan) / .15)" }}
  >
    <div className="flex-1">
      <p className="text-sm font-semibold" style={{ color: "var(--sw-text)" }}>
        {titel}
        {gesperrt && (
          <span className="font-normal ml-2 text-xs" style={{ color: "var(--sw-text-3)" }}>
            immer aktiv
          </span>
        )}
      </p>
      <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--sw-text-2)" }}>
        {text}
      </p>
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={an}
      aria-label={titel}
      disabled={gesperrt}
      onClick={onToggle}
      className="shrink-0 mt-1 relative"
      style={{
        width: 46,
        height: 26,
        borderRadius: 13,
        border: `2px solid ${an ? "var(--sw-cyan)" : "var(--sw-text-4)"}`,
        background: an ? "hsl(var(--neon-cyan) / .25)" : "transparent",
        cursor: gesperrt ? "not-allowed" : "pointer",
        opacity: gesperrt ? 0.6 : 1,
        transition: "background .2s, border-color .2s",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute top-1/2"
        style={{
          left: an ? 22 : 3,
          width: 16,
          height: 16,
          marginTop: -8,
          borderRadius: "50%",
          background: an ? "var(--sw-cyan)" : "var(--sw-text-3)",
          transition: "left .2s",
        }}
      />
    </button>
  </div>
);

const CookieBanner = () => {
  const [offen, setOffen] = useState(false);
  const [einstellungen, setEinstellungen] = useState(false);
  const [statistik, setStatistik] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    raeumeVeralteteEinwilligungAuf();
    const wert = leseEinwilligung();
    if (wert === "alle") ladeTracking();
    if (!wert) setOffen(true);
    // Footer-Link „Cookie-Einstellungen“: gleich die Kategorien mit dem aktuellen Stand zeigen
    const oeffnen = () => {
      setStatistik(leseEinwilligung() === "alle");
      setEinstellungen(true);
      setOffen(true);
    };
    window.addEventListener(OEFFNEN_EVENT, oeffnen);
    return () => window.removeEventListener(OEFFNEN_EVENT, oeffnen);
  }, []);

  // Fokus in den Banner setzen, damit er per Tastatur erreichbar ist
  useEffect(() => {
    if (offen) boxRef.current?.querySelector<HTMLButtonElement>("button:not([disabled])")?.focus();
  }, [offen, einstellungen]);

  if (!offen) return null;

  const waehle = (wert: Einwilligung) => {
    speichereEinwilligung(wert);
    setOffen(false);
    setEinstellungen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4"
      style={{ paddingBottom: "max(16px, env(safe-area-inset-bottom, 0px))" }}
    >
      <div
        ref={boxRef}
        className="max-w-3xl mx-auto overflow-y-auto"
        style={{
          maxHeight: "calc(100vh - 32px)",
          padding: "18px 22px",
          borderRadius: 12,
          border: "1px solid hsl(var(--neon-cyan) / .45)",
          background: "rgba(5,5,16,.96)",
          boxShadow: "0 0 30px hsl(var(--neon-cyan) / .2)",
        }}
      >
        <p className="font-pixel text-[10px] mb-2" style={{ color: "var(--sw-cyan)", letterSpacing: ".12em" }}>
          {einstellungen ? "COOKIE-EINSTELLUNGEN" : "COOKIES"}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
          Technisch notwendige Cookies sind immer aktiv. Mit deiner Zustimmung nutzen wir zusätzlich Zoho PageSense, um
          zu verstehen, wie die Seite genutzt wird. Du kannst deine Entscheidung jederzeit über „Cookie-Einstellungen“
          unten auf der Seite ändern. Mehr in der{" "}
          <Link to="/datenschutz" className="underline" style={{ color: "var(--sw-cyan)" }}>
            Datenschutzerklärung
          </Link>
          .
        </p>

        {einstellungen && (
          <div className="mt-4">
            <Kategorie
              titel="Notwendig"
              text="Damit die Seite funktioniert, z. B. um deine Cookie-Auswahl zu speichern. Kein Tracking."
              an
              gesperrt
            />
            <Kategorie
              titel="Statistik & Marketing"
              text="Zoho PageSense und Zoho Marketing Automation (Websitetracking): Seitenaufrufe, Klick- und Scrollverhalten, Heatmaps und Sitzungsaufzeichnungen. Hilft uns, die Seite zu verbessern."
              an={statistik}
              onToggle={() => setStatistik((v) => !v)}
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-4">
          <Knopf onClick={() => waehle("notwendig")}>Ablehnen</Knopf>
          {einstellungen ? (
            <Knopf onClick={() => waehle(statistik ? "alle" : "notwendig")}>Auswahl speichern</Knopf>
          ) : (
            <Knopf onClick={() => setEinstellungen(true)}>Einstellungen</Knopf>
          )}
          <Knopf onClick={() => waehle("alle")}>Alle akzeptieren</Knopf>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
