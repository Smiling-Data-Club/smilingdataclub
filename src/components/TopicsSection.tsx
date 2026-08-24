import { useEffect, useState } from "react";
import pixelGlobe from "@/assets/pixel-globe.png";
import pixelBot from "@/assets/pixel-bot.png";
import pixelDocument from "@/assets/pixel-document.png";
import pixelNetwork from "@/assets/pixel-network.png";

const topics = [
  {
    icon: pixelGlobe,
    title: "Zoho One",
    description: "40+ Apps. Ein Ökosystem. Alles verbunden — CRM, Finanzen, HR, Support.",
    details:
      "Ein Login für CRM, Buchhaltung, Projekte, Support und Marketing, statt fünf Tools, die nichts voneinander wissen. Wir nutzen Zoho One selbst als Betriebsplattform: Was wir dir einrichten, läuft bei uns seit Jahren im Alltag.",
    cardClass: "sw-card",
  },
  {
    icon: pixelBot,
    title: "KI & Automatisierung",
    description: "Von Chatbots bis Workflow-Automation — KI, die wirklich hilft.",
    details:
      "Nicht der Chatbot, der nichts weiß. Sondern Rechnungen, die sich selbst zuordnen, und Anfragen, die im richtigen Postfach landen. Wir bauen kleine Automatisierungen, die nächste Woche laufen, statt Konzepte für nächstes Jahr.",
    cardClass: "sw-card-pink",
  },
  {
    icon: pixelDocument,
    title: "DocuWare & IDP",
    description: "Intelligente Dokumentenverarbeitung. Vom Scan zum strukturierten Datensatz.",
    details:
      "Jede Rechnung in fünf Sekunden gefunden, und die Prüfung akzeptiert sie. DocuWare archiviert revisionssicher, IDP (Intelligent Document Processing) liest Belege automatisch aus, ohne dass jemand abtippt.",
    cardClass: "sw-card-purple",
  },
  {
    icon: pixelNetwork,
    title: "MCP",
    description: "Model Context Protocol — die Brücke zwischen KI-Modellen und Ihren Systemen.",
    details:
      "Model Context Protocol: ein gemeinsamer Stecker zwischen KI-Modellen und deinen Systemen. Statt für jedes Tool eine eigene Schnittstelle zu bauen, spricht die KI direkt mit CRM, Archiv und Kalender.",
    cardClass: "sw-card",
  },
];

const hintStyle = {
  fontFamily: "var(--font-pixel)",
  fontSize: 9,
  letterSpacing: ".12em",
  color: "var(--sw-cyan)",
  marginTop: 16,
  display: "block",
} as const;

const TopicsSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="sw-section relative">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="sw-section-title"
          style={{
            marginBottom: 48,
            color: "var(--sw-pink)",
            textShadow: "0 0 18px hsl(var(--neon-pink) / .75)",
          }}
        >
          THEMEN
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, i) => {
            const isFlipped = flipped === i;
            return (
              <button
                key={topic.title}
                type="button"
                onClick={() => setFlipped(isFlipped ? null : i)}
                aria-pressed={isFlipped}
                className="sw-animate-up transition-all duration-300 hover:scale-[1.02] text-left w-full"
                style={{
                  perspective: "1000px",
                  animationDelay: `${i * 0.08}s`,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    transformStyle: reduced ? undefined : "preserve-3d",
                    transition: reduced ? undefined : "transform 600ms cubic-bezier(.4,.2,.2,1)",
                    transform: reduced ? undefined : isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Vorderseite */}
                  <div
                    className={topic.cardClass}
                    style={{
                      gridArea: "1 / 1",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      ...(reduced
                        ? {
                            opacity: isFlipped ? 0 : 1,
                            transition: "opacity 300ms",
                            pointerEvents: isFlipped ? ("none" as const) : undefined,
                          }
                        : null),
                    }}
                  >
                    <img
                      src={topic.icon}
                      alt={topic.title}
                      className="w-8 h-8 mb-4"
                      style={{ imageRendering: "pixelated" }}
                      loading="lazy"
                    />
                    <h3 className="font-pixel text-xs mb-3" style={{ color: "var(--sw-text)" }}>
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-3)" }}>
                      {topic.description}
                    </p>
                    <span style={hintStyle}>MEHR →</span>
                  </div>

                  {/* Rückseite */}
                  <div
                    className={topic.cardClass}
                    style={{
                      gridArea: "1 / 1",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      ...(reduced
                        ? {
                            opacity: isFlipped ? 1 : 0,
                            transition: "opacity 300ms",
                            pointerEvents: isFlipped ? undefined : ("none" as const),
                          }
                        : { transform: "rotateY(180deg)" }),
                    }}
                  >
                    <h3 className="font-pixel text-xs mb-3" style={{ color: "var(--sw-text)" }}>
                      {topic.title}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--sw-text-2)" }}>
                      {topic.details}
                    </p>
                    <span style={hintStyle}>← ZURÜCK</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
