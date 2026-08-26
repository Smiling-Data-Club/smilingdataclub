import { useRef, useState } from "react";

// TODO: Vorschau-URL des SIRIUS-Flow-Projekts. Vor Livegang MP4 in dieses
// Projekt hochladen und hier auf den lokalen Pfad umstellen.
const VIDEO_URL =
  "https://id-preview--dcccc61e-ef91-4ea4-880f-52f0edb86a1c.lovable.app/__l5e/assets-v1/60676312-6677-42c4-8300-9c13cb9bbbbd/aftermovie-ios.mp4";

const EventFilmSection = () => {
  const [started, setStarted] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverLink, setHoverLink] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <section className="sw-section relative">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="sw-section-title sw-animate-up"
          style={{ marginBottom: 20, animationDelay: "0s" }}
        >
          CULTURE &amp; CODE
        </div>

        <p
          className="sw-lead text-base sw-animate-up"
          style={{ marginBottom: 40, animationDelay: "0.1s" }}
        >
          Der Abend, auf den wir hingearbeitet haben. Kick-off am 1. Juli in Freiburg.
        </p>

        <div
          className="sw-animate-up"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            border: "1px solid hsl(var(--neon-cyan) / .45)",
            background: "rgba(5,5,16,.6)",
            boxShadow:
              "0 0 22px hsl(var(--neon-cyan) / .14), inset 0 0 18px hsl(var(--neon-cyan) / .05)",
            aspectRatio: "16 / 9",
            width: "100%",
            animationDelay: "0.2s",
          }}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            preload="metadata"
            controls={started}
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          {!started && (
            <button
              type="button"
              aria-label="Eventfilm abspielen"
              onClick={handleStart}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(160deg, rgba(5,5,16,.55), hsl(var(--neon-pink) / .12))",
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
            >
              <span
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: 9999,
                  border: "2px solid hsl(var(--neon-cyan) / .75)",
                  background: "rgba(5,5,16,.8)",
                  boxShadow: hover
                    ? "0 0 44px hsl(var(--neon-cyan) / .6)"
                    : "0 0 30px hsl(var(--neon-cyan) / .4)",
                  transition: "box-shadow 300ms ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono-sw)",
                    color: "var(--sw-cyan)",
                    fontSize: 26,
                    marginLeft: 4,
                    lineHeight: 1,
                  }}
                >
                  ▶
                </span>
              </span>
            </button>
          )}
        </div>

        <a
          href="https://www.sirius-gmbh.de/smiling-data-club"
          target="_blank"
          rel="noopener noreferrer"
          className="sw-animate-up"
          onMouseEnter={() => setHoverLink(true)}
          onMouseLeave={() => setHoverLink(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 26,
            fontFamily: "var(--font-mono-sw)",
            fontSize: 15,
            letterSpacing: ".02em",
            color: hoverLink ? "var(--sw-text)" : "var(--sw-pink)",
            textShadow: hoverLink
              ? "0 0 18px hsl(var(--neon-pink) / .85)"
              : "0 0 14px hsl(var(--neon-pink) / .55)",
            paddingBottom: 3,
            borderBottom: hoverLink
              ? "1px solid hsl(var(--neon-pink) / .8)"
              : "1px solid hsl(var(--neon-pink) / .35)",
            textDecoration: "none",
            transition: "color 300ms, border-color 300ms, text-shadow 300ms",
            animationDelay: "0.3s",
          }}
        >
          Alle Eindrücke vom Abend
          <span
            style={{
              fontSize: "1.1em",
              lineHeight: 1,
              display: "inline-block",
              transform: hoverLink ? "translateX(4px)" : "translateX(0)",
              transition: "transform 300ms",
            }}
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default EventFilmSection;
