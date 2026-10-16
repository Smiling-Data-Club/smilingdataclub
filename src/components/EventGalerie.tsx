import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalerieFoto, OTon } from "@/data/cultureCode26";

// Foto-Raster mit Lightbox (Pfeiltasten, Esc). Fotos werden lazy geladen.
export const FotoGalerie = ({ fotos }: { fotos: GalerieFoto[] }) => {
  const [offen, setOffen] = useState<number | null>(null);

  const schliessen = useCallback(() => setOffen(null), []);
  const blaettern = useCallback(
    (richtung: 1 | -1) => setOffen((i) => (i === null ? i : (i + richtung + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (offen === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") schliessen();
      if (e.key === "ArrowRight") blaettern(1);
      if (e.key === "ArrowLeft") blaettern(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [offen, schliessen, blaettern]);

  const aktuell = offen !== null ? fotos[offen] : null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {fotos.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => setOffen(i)}
            className={`group relative overflow-hidden rounded-[10px] ${f.featured ? "col-span-2 row-span-2" : ""}`}
            style={{
              border: "1px solid hsl(var(--neon-cyan) / .35)",
              padding: 0,
              background: "none",
              cursor: "zoom-in",
            }}
            aria-label={`Foto vergrößern: ${f.alt}`}
          >
            <img
              src={f.src}
              alt={f.alt}
              loading="lazy"
              className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {aktuell &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={aktuell.alt}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(5,5,16,.94)" }}
            onClick={schliessen}
          >
            <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={aktuell.src}
                alt={aktuell.alt}
                className="w-full max-h-[78vh] object-contain rounded-[10px]"
                style={{ border: "1px solid hsl(var(--neon-cyan) / .45)" }}
              />
              <figcaption
                className="mt-3 text-center"
                style={{ fontFamily: "var(--font-mono-sw)", fontSize: 13, color: "var(--sw-text-2)" }}
              >
                {aktuell.caption ?? aktuell.alt}
                <span style={{ color: "var(--sw-text-4)" }}> · Foto: Golden Cut Media</span>
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={schliessen}
              aria-label="Schließen"
              className="absolute top-4 right-4 p-2"
              style={{ color: "var(--sw-cyan)", background: "none", border: "none" }}
            >
              <X className="w-7 h-7" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                blaettern(-1);
              }}
              aria-label="Vorheriges Foto"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2"
              style={{ color: "var(--sw-cyan)", background: "none", border: "none" }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                blaettern(1);
              }}
              aria-label="Nächstes Foto"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2"
              style={{ color: "var(--sw-cyan)", background: "none", border: "none" }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>,
          document.body,
        )}
    </>
  );
};

// Hochkant-Clips, selbst gehostet; Video lädt erst beim Abspielen (preload="none").
export const OToene = ({ clips }: { clips: OTon[] }) => (
  <div className="grid sm:grid-cols-3 gap-6">
    {clips.map((c) => (
      <figure key={c.src} className="sw-card flex flex-col gap-3" style={{ padding: 14 }}>
        <video
          src={c.src}
          poster={c.poster}
          controls
          playsInline
          preload="none"
          className="w-full rounded-[8px]"
          style={{ aspectRatio: "9 / 16", objectFit: "cover", background: "rgba(5,5,16,.7)" }}
        />
        <figcaption>
          <p className="font-pixel text-[10px] leading-relaxed mb-1" style={{ color: "var(--sw-text)" }}>
            {c.titel}
          </p>
          <p style={{ fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-text-3)" }}>{c.beschreibung}</p>
        </figcaption>
      </figure>
    ))}
  </div>
);
