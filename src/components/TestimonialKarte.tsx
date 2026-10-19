import YouTubeZweiKlick from "@/components/YouTubeZweiKlick";
import type { Testimonial } from "@/data/loesungen";

// Video-Testimonial mit Zitat – genutzt auf den Lösungsseiten und unter Use Cases.
const TestimonialKarte = ({ t }: { t: Testimonial }) => (
  <figure className="sw-card sw-animate-up flex flex-col gap-4" style={{ padding: 18 }}>
    <YouTubeZweiKlick videoId={t.youtubeId} title={`${t.company} – ${t.person}`} vorschau={t.vorschau} />
    <p className="sw-eyebrow" style={{ fontSize: 10, lineHeight: 1.6 }}>
      Success Story · {t.story}
    </p>
    <blockquote className="-mt-2 text-base leading-relaxed" style={{ color: "var(--sw-text)" }}>
      „{t.quote}“
    </blockquote>
    <figcaption style={{ fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-text-3)" }}>
      {t.person}, {t.role}
      <br />
      {t.company}
    </figcaption>
  </figure>
);

export default TestimonialKarte;
