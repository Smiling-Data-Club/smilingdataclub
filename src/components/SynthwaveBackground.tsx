interface SynthwaveBackgroundProps {
  variant?: "full" | "calm";
}

const HORIZON = "60%";

const STARS = `
  radial-gradient(2px 2px at 12% 18%, #fff, transparent),
  radial-gradient(2px 2px at 27% 9%, #cfefff, transparent),
  radial-gradient(3px 3px at 41% 26%, #bdf0ff, transparent),
  radial-gradient(2px 2px at 55% 6%, #fff, transparent),
  radial-gradient(2px 2px at 63% 31%, #cfefff, transparent),
  radial-gradient(3px 3px at 74% 14%, #fff, transparent),
  radial-gradient(2px 2px at 83% 38%, #bdf0ff, transparent),
  radial-gradient(2px 2px at 91% 21%, #fff, transparent),
  radial-gradient(2px 2px at 6% 44%, #cfefff, transparent),
  radial-gradient(2px 2px at 34% 49%, #bdf0ff, transparent),
  radial-gradient(3px 3px at 48% 41%, #fff, transparent),
  radial-gradient(2px 2px at 69% 52%, #cfefff, transparent),
  radial-gradient(2px 2px at 19% 33%, #fff, transparent),
  radial-gradient(2px 2px at 97% 8%, #bdf0ff, transparent)
`;

const MOUNTAIN_POINTS =
  "0,420 140,300 260,352 420,196 560,286 700,150 830,268 980,96 1120,244 1260,178 1400,312 1540,214 1680,120 1820,262 1960,168 2100,300 2240,132 2380,258 2520,190 2660,330 2800,204 2940,110 3080,272 3220,166 3360,306 3500,208 3640,150 3760,286 3840,232";

const SynthwaveBackground = ({ variant = "full" }: SynthwaveBackgroundProps) => {
  const full = variant === "full";

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
    >
      {/* a) base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 140% 90% at 50% 30%, var(--sw-bg-top) 0%, var(--sw-bg-mid) 45%, var(--sw-bg-deep) 100%)",
        }}
      />

      {full && (
        <>
          {/* b) stars */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: HORIZON,
              opacity: 0.8,
              backgroundImage: STARS,
              backgroundRepeat: "no-repeat",
              animation: "twinkle 5s ease-in-out infinite",
            }}
          />

          {/* c) sun glow */}
          <div
            style={{
              position: "absolute",
              top: HORIZON,
              left: "50%",
              width: "60%",
              aspectRatio: "1 / 1",
              transform: "translate(-50%, -50%)",
              borderRadius: 9999,
              background:
                "radial-gradient(circle, hsl(var(--neon-pink) / 0.5) 0%, hsl(280 60% 48% / 0.3) 34%, transparent 68%)",
              filter: "blur(12px)",
              animation: "sun-pulse 8s ease-in-out infinite",
            }}
          />

          {/* f) grid floor */}
          <div
            style={{
              position: "absolute",
              top: HORIZON,
              left: 0,
              right: 0,
              bottom: 0,
              perspective: "280px",
              perspectiveOrigin: "50% 0%",
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-50%",
                width: "200%",
                height: "320%",
                transformOrigin: "50% 0",
                transform: "rotateX(80deg)",
                backgroundImage:
                  "repeating-linear-gradient(0deg, hsl(var(--neon-cyan) / 0.5) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, hsl(var(--neon-cyan) / 0.4) 0 1px, transparent 1px 60px)",
                animation: "grid-scroll-3d 6s linear infinite",
              }}
            />
          </div>

          {/* d) mountains */}
          <svg
            viewBox="0 0 3840 420"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "20%",
              bottom: "40%",
              zIndex: 2,
              filter: "drop-shadow(0 0 12px hsl(var(--neon-cyan) / 0.45))",
            }}
          >
            <polygon points={`${MOUNTAIN_POINTS} 3840,420`} style={{ fill: "#0a0618", opacity: 0.92 }} />
            <polyline
              points={MOUNTAIN_POINTS}
              style={{ stroke: "hsl(var(--neon-cyan) / 0.55)", strokeWidth: 6, fill: "none" }}
            />
          </svg>

          {/* e) horizon line */}
          <div
            style={{
              position: "absolute",
              top: HORIZON,
              left: 0,
              right: 0,
              height: 3,
              zIndex: 3,
              background:
                "linear-gradient(90deg, transparent, hsl(var(--neon-pink) / 0.9) 30%, hsl(var(--neon-cyan) / 0.95) 50%, hsl(var(--neon-pink) / 0.9) 70%, transparent)",
              boxShadow: "0 0 24px hsl(var(--neon-cyan) / 0.8)",
            }}
          />

          {/* g) soft fade under horizon */}
          <div
            style={{
              position: "absolute",
              top: HORIZON,
              left: 0,
              right: 0,
              height: "16%",
              zIndex: 2,
              background: "linear-gradient(to bottom, var(--sw-bg-mid) 0%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* h) vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 52%, rgba(5,5,16,0.6) 100%)",
        }}
      />

      {/* i) scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.11) 0, rgba(0,0,0,0.11) 1px, transparent 1px, transparent 4px)",
        }}
      />
    </div>
  );
};

export default SynthwaveBackground;
