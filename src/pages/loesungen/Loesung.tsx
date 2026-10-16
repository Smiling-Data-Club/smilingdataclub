import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import TestimonialKarte from "@/components/TestimonialKarte";
import NotFound from "@/pages/NotFound";
import TerminKarte from "@/components/TerminKarte";
import { LOESUNGEN, USE_CASES_KACHEL, type Weiterlesen } from "@/data/loesungen";
import { kommendeTermine } from "@/data/termine";

const BOOKING_URL = "https://sirius-gmbh.zohobookings.eu/240927000000441095";

// Gleich für alle Lösungen: so läuft die Zusammenarbeit ab.
const SCHRITTE = [
  { titel: "Kennenlernen", text: "30 Minuten, unverbindlich: Wo hakt es, was wäre ein guter erster Schritt?" },
  { titel: "Erster Baustein", text: "Wir setzen etwas Kleines, Konkretes um, das schnell im Alltag läuft." },
  { titel: "Ausbauen", text: "Erst wenn das funktioniert, kommt das Nächste – in eurem Tempo." },
];

const SectionTitle = ({ children, color = "var(--sw-cyan)" }: { children: React.ReactNode; color?: string }) => (
  <p className="sw-section-title text-center" style={{ marginBottom: 32, color }}>
    {children}
  </p>
);

const WeiterlesenLink = ({ w }: { w: Weiterlesen }) => {
  const extern = w.url.startsWith("http");
  const inhalt = (
    <>
      <span className="block" style={{ color: "var(--sw-text)" }}>
        {w.titel}
      </span>
      <span style={{ fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-text-3)" }}>
        {w.quelle ?? (extern ? "Extern" : "Smiling Data Club")}
        {extern && <ExternalLink className="inline w-3 h-3 ml-1" aria-hidden />}
      </span>
    </>
  );
  const className = "sw-card block transition-transform duration-300 hover:-translate-y-1";
  const style = { padding: "16px 20px" };
  if (extern)
    return (
      <a href={w.url} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {inhalt}
      </a>
    );
  // /check ist eine eigenständige HTML-Seite außerhalb der React-App
  if (w.url === "/check")
    return (
      <a href={w.url} className={className} style={style}>
        {inhalt}
      </a>
    );
  return (
    <Link to={w.url} className={className} style={style}>
      {inhalt}
    </Link>
  );
};

const Loesung = () => {
  const { slug } = useParams();
  const loesung = LOESUNGEN.find((l) => l.slug === slug);
  if (!loesung) return <NotFound />;

  const andere = [
    ...LOESUNGEN.filter((l) => l.slug !== loesung.slug).map((l) => ({
      to: `/loesungen/${l.slug}`,
      title: l.title,
      description: l.description,
      cardClass: l.cardClass,
    })),
    USE_CASES_KACHEL,
  ];
  const termine = kommendeTermine().filter((t) => t.loesung === loesung.slug);

  return (
    <PageLayout
      title={loesung.title}
      eyebrow={loesung.siriusPraesentiert ? "SIRIUS PRÄSENTIERT" : "LÖSUNGEN"}
      headline={loesung.title}
      lead={loesung.description}
    >
      <section className="sw-section" style={{ paddingTop: 0 }}>
        <div className={`${loesung.cardClass} max-w-3xl mx-auto sw-animate-up`}>
          <img src={loesung.icon} alt="" className="w-10 h-10 mb-5" style={{ imageRendering: "pixelated" }} />
          <p className="text-lg leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
            {loesung.details}
          </p>
          {loesung.fakten && loesung.fakten.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-6" style={{ listStyle: "none", padding: 0 }}>
              {loesung.fakten.map((f) => (
                <li
                  key={f}
                  className="px-3 py-1.5"
                  style={{
                    fontFamily: "var(--font-mono-sw)",
                    fontSize: 12,
                    color: "var(--sw-cyan)",
                    border: "1px solid hsl(var(--neon-cyan) / .45)",
                    borderRadius: 8,
                    background: "hsl(var(--neon-cyan) / .06)",
                  }}
                >
                  ✓ {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {loesung.kennstDuDas && loesung.kennstDuDas.length > 0 && (
        <section className="sw-section">
          <div className="max-w-3xl mx-auto">
            <SectionTitle color="var(--sw-pink)">KENNST DU DAS?</SectionTitle>
            <ul className="flex flex-col gap-3" style={{ listStyle: "none", padding: 0 }}>
              {loesung.kennstDuDas.map((k) => (
                <li key={k} className="sw-card-pink flex gap-4 items-start" style={{ padding: "16px 20px" }}>
                  <span aria-hidden style={{ color: "var(--sw-pink)", fontFamily: "var(--font-mono-sw)" }}>
                    &gt;
                  </span>
                  <span style={{ color: "var(--sw-text-2)" }}>{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {loesung.leistungen && loesung.leistungen.length > 0 && (
        <section className="sw-section">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>WAS WIR MACHEN</SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
              {loesung.leistungen.map((l) => (
                <div key={l.titel} className="sw-card sw-animate-up">
                  <h3 className="font-pixel text-[11px] leading-relaxed mb-3" style={{ color: "var(--sw-text)" }}>
                    {l.titel}
                  </h3>
                  <p style={{ color: "var(--sw-text-2)" }}>{l.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {termine.length > 0 && (
        <section className="sw-section">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>{(loesung.termineTitel ?? "Live erleben").toUpperCase()}</SectionTitle>
            <div className="flex flex-col gap-5">
              {termine.map((t) => (
                <TerminKarte key={`${t.datum}-${t.titel}`} termin={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {loesung.testimonials && loesung.testimonials.length > 0 && (
        <section className="sw-section">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>SUCCESS STORIES</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
              {loesung.testimonials.map((t) => (
                <TestimonialKarte key={t.youtubeId} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {loesung.weiterlesen && loesung.weiterlesen.length > 0 && (
        <section className="sw-section">
          <div className="max-w-3xl mx-auto">
            <SectionTitle color="var(--sw-purple)">WEITERLESEN</SectionTitle>
            <div className="flex flex-col gap-3">
              {loesung.weiterlesen.map((w) => (
                <WeiterlesenLink key={w.url} w={w} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sw-section">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>SO LÄUFT&apos;S</SectionTitle>
          <ol className="grid md:grid-cols-3 gap-5" style={{ listStyle: "none", padding: 0 }}>
            {SCHRITTE.map((s, i) => (
              <li key={s.titel} className="sw-card">
                <p className="font-pixel text-xs mb-3" style={{ color: "var(--sw-pink)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-pixel text-[11px] leading-relaxed mb-2" style={{ color: "var(--sw-text)" }}>
                  {s.titel}
                </h3>
                <p style={{ color: "var(--sw-text-2)" }}>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-block"
              style={{ borderRadius: 10, fontSize: 11 }}
            >
              Kennenlern-Termin buchen
            </a>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="max-w-5xl mx-auto">
          <p className="sw-eyebrow text-center mb-8">Weitere Lösungen</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {andere.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`${l.cardClass} transition-transform duration-300 hover:-translate-y-1`}
                style={{ padding: "18px 20px" }}
              >
                <h3 className="font-pixel text-[11px] mb-2 leading-relaxed" style={{ color: "var(--sw-text)" }}>
                  {l.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--sw-text-3)" }}>
                  {l.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Loesung;
