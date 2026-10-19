import { useState } from "react";

interface YouTubeZweiKlickProps {
  videoId: string;
  title: string;
  /** Hochformat für YouTube Shorts (9:16) */
  hochkant?: boolean;
  /** Eigenes, lokal abgelegtes Standbild – nie von img.youtube.com */
  vorschau?: string;
}

// Zwei-Klick-Lösung: Bis zum Klick wird nichts von YouTube geladen –
// auch kein Vorschaubild. Danach youtube-nocookie.com.
const YouTubeZweiKlick = ({ videoId, title, hochkant = false, vorschau }: YouTubeZweiKlickProps) => {
  const [aktiv, setAktiv] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: hochkant ? "9 / 16" : "16 / 9",
        maxWidth: "100%",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid hsl(var(--neon-cyan) / .45)",
        background: "rgba(5,5,16,.7)",
      }}
    >
      {aktiv ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setAktiv(true)}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center ${hochkant ? "gap-2 p-2" : "gap-3 p-4"}`}
          style={{
            background: vorschau
              ? `linear-gradient(180deg, rgba(5,5,16,.15) 0%, rgba(5,5,16,.25) 55%, rgba(5,5,16,.85) 100%), url(${vorschau}) center / cover`
              : "linear-gradient(160deg, rgba(5,5,16,.6), hsl(var(--neon-pink) / .12))",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={`Video abspielen: ${title}`}
        >
          <span
            className="flex items-center justify-center"
            style={{
              width: hochkant ? 44 : 60,
              height: hochkant ? 44 : 60,
              borderRadius: 9999,
              border: "2px solid hsl(var(--neon-cyan) / .75)",
              boxShadow: "0 0 26px hsl(var(--neon-cyan) / .4)",
              background: vorschau ? "rgba(5,5,16,.7)" : undefined,
              color: "var(--sw-cyan)",
              fontFamily: "var(--font-mono-sw)",
              fontSize: hochkant ? 16 : 20,
            }}
          >
            ▶
          </span>
          <span
            className={vorschau ? "absolute bottom-0 inset-x-0 px-3 pb-2" : undefined}
            style={{
              fontFamily: "var(--font-mono-sw)",
              fontSize: hochkant || vorschau ? 10 : 11,
              lineHeight: 1.4,
              color: vorschau ? "var(--sw-text-2)" : "var(--sw-text-3)",
              textShadow: vorschau ? "0 1px 6px rgba(0,0,0,.9)" : undefined,
              maxWidth: vorschau ? undefined : 280,
            }}
          >
            {hochkant || vorschau
              ? "Lädt von YouTube – Daten gehen an Google."
              : "Mit dem Klick lädst du das Video von YouTube. Dabei werden Daten an Google übertragen."}
          </span>
        </button>
      )}
    </div>
  );
};

export default YouTubeZweiKlick;
