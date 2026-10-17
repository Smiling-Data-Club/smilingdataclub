import { useEffect, useId, useRef } from "react";

interface MorphShapeProps {
  from: string;
  to: string;
  duration?: number;
  className?: string;
}

// Rein dekorativer SVG-Morph (GSAP MorphSVGPlugin), Endlosschleife hin und zurück.
// GSAP wird erst geladen, wenn die Komponente auf der Seite ist – eigener Chunk,
// kein CDN. Bei „Bewegung reduzieren“ bleibt die Startform stehen.
const MorphShape = ({ from, to, duration = 2, className }: MorphShapeProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const gradId = `morph-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    let revert: (() => void) | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/MorphSVGPlugin")]).then(([{ gsap }, { MorphSVGPlugin }]) => {
      if (cancelled) return;
      gsap.registerPlugin(MorphSVGPlugin);
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tween = gsap.to(path, { morphSVG: to, duration, ease: "expo.inOut", repeat: -1, yoyo: true });
        // Außerhalb des Sichtbereichs pausieren, statt endlos weiterzurechnen.
        const io = new IntersectionObserver(([entry]) => tween.paused(!entry.isIntersecting));
        io.observe(path.ownerSVGElement ?? path);
        return () => io.disconnect();
      });
      revert = () => mm.revert();
    });

    return () => {
      cancelled = true;
      revert?.();
    };
  }, [to, duration]);

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ overflow: "visible", filter: "drop-shadow(0 0 10px hsl(var(--neon-pink) / 0.55))" }}
    >
      <defs>
        {/* userSpaceOnUse: Verlauf hängt an der viewBox, nicht an der Form – sonst „springt“ er beim Morphen */}
        <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" style={{ stopColor: "var(--sw-pink)" }} />
          <stop offset="0.8" style={{ stopColor: "var(--sw-cyan)" }} />
        </linearGradient>
      </defs>
      <path ref={pathRef} d={from} fill={`url(#${gradId})`} />
    </svg>
  );
};

export default MorphShape;
