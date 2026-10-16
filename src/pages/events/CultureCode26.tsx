import { Link } from "react-router-dom";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import EventFilmSection from "@/components/EventFilmSection";
import { FotoGalerie, OToene } from "@/components/EventGalerie";
import YouTubeZweiKlick from "@/components/YouTubeZweiKlick";
import ComingSoon from "@/components/ComingSoon";
import { GALERIE, INTERVIEWS, O_TOENE, VORTRAEGE } from "@/data/cultureCode26";

// Rückblick auf den Kick-off. Aftermovie, Geschichte und Danke sind direkt lesbar,
// alles Umfangreiche steckt in aufklappbaren Kacheln.
// Reihenfolge = Reihenfolge im Array KACHELN unten.

const textStyle = { color: "var(--sw-text-2)" } as const;
const monoKlein = { fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-text-3)" } as const;

const Vortraege = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {VORTRAEGE.map((v) => {
      const inhalt = (
        <>
          <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: "16 / 9" }}>
            <img src={v.foto} alt={v.person} loading="lazy" className="w-full h-full object-cover" />
            <span
              className="absolute bottom-3 left-3 font-pixel text-[10px] px-3 py-2"
              style={{
                borderRadius: 8,
                background: "rgba(5,5,16,.85)",
                border: "1px solid hsl(var(--neon-pink) / .6)",
                color: v.youtubeUrl ? "var(--sw-text)" : "var(--sw-text-3)",
              }}
            >
              {v.youtubeUrl ? "▶ AUF YOUTUBE ANSEHEN" : "VIDEO FOLGT"}
            </span>
          </div>
          <p className="font-pixel text-[11px] leading-relaxed mt-4 mb-1" style={{ color: "var(--sw-text)" }}>
            {v.person}
          </p>
          <p className="mb-1" style={textStyle}>
            {v.titel}
          </p>
          <p style={monoKlein}>
            {v.rolle}
            {v.youtubeUrl && (
              <>
                {" · "}
                YouTube <ExternalLink className="inline w-3 h-3" aria-hidden />
              </>
            )}
          </p>
        </>
      );
      return v.youtubeUrl ? (
        <a
          key={v.person}
          href={v.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sw-card-pink block transition-transform duration-300 hover:-translate-y-1"
          style={{ padding: 16 }}
        >
          {inhalt}
        </a>
      ) : (
        <div key={v.person} className="sw-card" style={{ padding: 16, opacity: 0.85 }}>
          {inhalt}
        </div>
      );
    })}
  </div>
);

const Interviews = () =>
  INTERVIEWS.length === 0 ? (
    <ComingSoon
      title="INTERVIEWS FOLGEN"
      text="Die Interviews mit Gästen und Speaker:innen sind im Schnitt und kommen in Kürze hierher."
    />
  ) : (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {INTERVIEWS.map((i) => (
        <figure key={i.youtubeId} className="sw-card flex flex-col gap-3" style={{ padding: 14 }}>
          <YouTubeZweiKlick videoId={i.youtubeId} title={`Interview: ${i.name}`} />
          <figcaption>
            <p className="font-pixel text-[10px] leading-relaxed" style={{ color: "var(--sw-text)" }}>
              {i.name}
            </p>
            {i.rolle && <p style={monoKlein}>{i.rolle}</p>}
          </figcaption>
        </figure>
      ))}
    </div>
  );

interface Kachel {
  id: string;
  eyebrow: string;
  titel: string;
  /** Kurzinfo rechts im geschlossenen Zustand, z. B. „21 Fotos“ */
  info: string;
  inhalt: React.ReactNode;
}

const KACHELN: Kachel[] = [
  {
    id: "vortraege",
    eyebrow: "DIE VORTRÄGE",
    titel: "zum nachschauen",
    info: `${VORTRAEGE.length} Vorträge`,
    inhalt: <Vortraege />,
  },
  {
    id: "bilder",
    eyebrow: "DER TAG IN BILDERN",
    titel: "so hat sich der tag angefühlt",
    info: `${GALERIE.length} Fotos`,
    inhalt: (
      <>
        <FotoGalerie fotos={GALERIE} />
        <p className="mt-4" style={{ ...monoKlein, fontSize: 11, color: "var(--sw-text-4)" }}>
          Fotos: Golden Cut Media
        </p>
      </>
    ),
  },
  {
    id: "kurz-gesagt",
    eyebrow: "IN BEWEGUNG",
    titel: "kurz gesagt.",
    info: `${O_TOENE.length} Clips`,
    inhalt: (
      <>
        <p className="mb-6" style={textStyle}>
          Drei O-Töne unserer Gäste vom Tag.
        </p>
        <OToene clips={O_TOENE} />
      </>
    ),
  },
  {
    id: "interviews",
    eyebrow: "INTERVIEWS",
    titel: "nachgefragt",
    info: INTERVIEWS.length ? `${INTERVIEWS.length} Interviews` : "bald",
    inhalt: <Interviews />,
  },
  {
    id: "programm",
    eyebrow: "PROGRAMM-RECAP",
    titel: "was an dem tag passiert ist",
    info: "1 Min. lesen",
    inhalt: (
      <p className="text-lg leading-relaxed max-w-3xl" style={textStyle}>
        Zwei Keynotes, drei Impulse, parallele Deep-Dives und viel Zeit dazwischen. Fabian Schüler und Bahadir Alaz
        haben eröffnet, Betül Hanisch hat über den Menschen nach der Maschine gesprochen, Josef R. Schneider über AI &
        EQ. Prof. Dr. Hannah Bast von der Uni Freiburg hat den Tag mit einer Closing-Keynote über KI, Algorithmen und
        den Menschen dahinter geschlossen. Ausgeklungen ist der Tag im Innenhof — mit Coffee Bike, offenen Gesprächen
        und Musik, bis das Licht ausging.
      </p>
    ),
  },
];

const CultureCode26 = () => (
  <PageLayout
    title="Culture & Code 26"
    eyebrow="KICK-OFF · 01.07.2026 · FREIBURG"
    headline="das war culture & code."
    lead="Unser erstes Smiling Data Club Event — und es war genau das, was wir uns erträumt haben."
  >
    <EventFilmSection showLinks={false} />

    <section className="sw-section" style={{ paddingTop: 0 }}>
      <div className="max-w-3xl mx-auto">
        <p className="sw-eyebrow mb-3">DIE GESCHICHTE DAHINTER</p>
        <h2 className="sw-headline text-2xl md:text-3xl mb-6">warum es diesen tag gab</h2>
        <p className="text-lg leading-relaxed max-w-3xl" style={textStyle}>
          Smiling Data Club ist kein Produkt-Launch und keine Messe. Es ist die Idee, dass man über KI, Führung und die
          Zukunft der Arbeit auch anders reden kann — persönlich, ehrlich, ohne Bühnennebel. Wir haben Paletten-Möbel
          selbst gebaut, einen Coffee Bike organisiert und einen Tag lang alles dafür getan, dass sich niemand wie auf
          einer Konferenz fühlt. Das war kein Zufall. Das war Absicht.
        </p>
      </div>
    </section>

    <section className="sw-section" style={{ paddingTop: 0 }}>
      <AccordionPrimitive.Root type="multiple" className="max-w-5xl mx-auto flex flex-col gap-4">
        {KACHELN.map((k, i) => (
          <AccordionPrimitive.Item key={k.id} value={k.id} id={k.id} className="sw-card group" style={{ padding: 0 }}>
            <AccordionPrimitive.Header>
              <AccordionPrimitive.Trigger
                className="w-full flex items-center gap-4 text-left px-5 md:px-7 py-5"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span className="flex-1 min-w-0">
                  <span className="sw-eyebrow block mb-2" style={{ fontSize: 11 }}>
                    {String(i + 1).padStart(2, "0")} · {k.eyebrow}
                  </span>
                  <span className="sw-headline block text-xl md:text-2xl">{k.titel}</span>
                </span>
                {k.info && (
                  <span className="hidden sm:inline shrink-0" style={{ ...monoKlein, color: "var(--sw-pink)" }}>
                    {k.info}
                  </span>
                )}
                <ChevronDown
                  className="w-6 h-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  style={{ color: "var(--sw-cyan)" }}
                  aria-hidden
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="px-5 md:px-7 pb-7">{k.inhalt}</div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </section>

    <section className="sw-section" style={{ paddingBottom: 0 }}>
      <div className="max-w-3xl mx-auto">
        <p className="sw-eyebrow mb-3">DANKE</p>
        <h2 className="sw-headline text-2xl md:text-3xl mb-6">danke.</h2>
        <p className="text-lg leading-relaxed max-w-3xl" style={textStyle}>
          Dieser Tag hat vor allem unserem kleinen Orga-Team einiges abverlangt — von der ersten Idee bis zum letzten
          Handgriff. Und es war jede Minute wert. Danke an Betül und Hannah Bast fürs Teilen ihres Wissens, an das ganze
          Team für den Einsatz vor, während und nach dem Tag, an Sharp für die Technik und an Golden Cut Media für Ton,
          Bild und Licht. Und an jede und jeden, die/der da war — schön, dass ihr dabei wart.
        </p>
      </div>
    </section>

    <section className="sw-section">
      <div className="max-w-3xl mx-auto text-center sw-card-feature">
        <p className="sw-eyebrow mb-3">WAS KOMMT ALS NÄCHSTES</p>
        <h2 className="sw-headline text-2xl md:text-3xl mb-6">das war der anfang</h2>
        <p className="leading-relaxed mb-8" style={textStyle}>
          Culture & Code war kein einmaliges Ding. Die nächste Ausgabe ist für Ende September 2027 geplant.
        </p>
        <Link
          to="/events/culture-and-code-27"
          className="neon-btn inline-block"
          style={{ borderRadius: 10, fontSize: 11 }}
        >
          Culture &amp; Code 27 vormerken
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default CultureCode26;
