import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import EventFilmSection from "@/components/EventFilmSection";
import ComingSoon from "@/components/ComingSoon";

// Rückblick auf den Kick-off – Texte von sirius-gmbh.de/smiling-data-club.
// TODO: Bildergalerie und O-Ton-Videos übernehmen, sobald das SIRIUS-Repo verfügbar ist.

const ABSCHNITTE = [
  {
    nr: "01",
    eyebrow: "DIE GESCHICHTE DAHINTER",
    titel: "warum es diesen tag gab",
    text: "Smiling Data Club ist kein Produkt-Launch und keine Messe. Es ist die Idee, dass man über KI, Führung und die Zukunft der Arbeit auch anders reden kann — persönlich, ehrlich, ohne Bühnennebel. Wir haben Paletten-Möbel selbst gebaut, einen Coffee Bike organisiert und einen Tag lang alles dafür getan, dass sich niemand wie auf einer Konferenz fühlt. Das war kein Zufall. Das war Absicht.",
  },
  {
    nr: "04",
    eyebrow: "PROGRAMM-RECAP",
    titel: "was an dem tag passiert ist",
    text: "Zwei Keynotes, drei Impulse, parallele Deep-Dives und viel Zeit dazwischen. Fabian Schüler und Bahadir Alaz haben eröffnet, Betül Hanisch hat über den Menschen nach der Maschine gesprochen, Josef R. Schneider über AI & EQ. Prof. Dr. Hannah Bast von der Uni Freiburg hat den Tag mit einer Closing-Keynote über KI, Algorithmen und den Menschen dahinter geschlossen. Ausgeklungen ist der Tag im Innenhof — mit Coffee Bike, offenen Gesprächen und Musik, bis das Licht ausging.",
  },
  {
    nr: "05",
    eyebrow: "DANKE",
    titel: "danke.",
    text: "Dieser Tag hat vor allem unserem kleinen Orga-Team einiges abverlangt — von der ersten Idee bis zum letzten Handgriff. Und es war jede Minute wert. Danke an Betül und Hannah Bast fürs Teilen ihres Wissens, an das ganze Team für den Einsatz vor, während und nach dem Tag, an Sharp für die Technik und an Golden Cut Media für Ton, Bild und Licht. Und an jede und jeden, die/der da war — schön, dass ihr dabei wart.",
  },
];

const Abschnitt = ({ nr, eyebrow, titel, text }: (typeof ABSCHNITTE)[number]) => (
  <section className="sw-section">
    <div className="max-w-3xl mx-auto sw-animate-up">
      <p className="sw-eyebrow mb-3">
        {nr} · {eyebrow}
      </p>
      <h2 className="sw-headline text-2xl md:text-3xl mb-6">{titel}</h2>
      <p className="text-lg leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
        {text}
      </p>
    </div>
  </section>
);

const CultureCode26 = () => (
  <PageLayout
    title="Culture & Code 26"
    eyebrow="KICK-OFF · 01.07.2026 · FREIBURG"
    headline="das war culture & code."
    lead="Unser erstes Smiling Data Club Event — und es war genau das, was wir uns erträumt haben."
  >
    <EventFilmSection showLinks={false} />

    <Abschnitt {...ABSCHNITTE[0]} />

    <section className="sw-section">
      <div className="max-w-3xl mx-auto">
        <p className="sw-eyebrow mb-3">02 · DER TAG IN BILDERN</p>
        <h2 className="sw-headline text-2xl md:text-3xl mb-8">so hat sich der tag angefühlt</h2>
        <ComingSoon title="GALERIE FOLGT" text="Die Bilder vom Tag ziehen gerade von der SIRIUS-Seite hierher um." />
      </div>
    </section>

    <section className="sw-section">
      <div className="max-w-3xl mx-auto">
        <p className="sw-eyebrow mb-3">03 · IN BEWEGUNG</p>
        <h2 className="sw-headline text-2xl md:text-3xl mb-8">kurz gesagt.</h2>
        <ComingSoon
          title="O-TÖNE FOLGEN"
          text="Drei O-Töne unserer Gäste vom Tag: Dein Highlight · Culture & Code in einem Wort · Momente des Lächelns."
        />
      </div>
    </section>

    {ABSCHNITTE.slice(1).map((a) => (
      <Abschnitt key={a.nr} {...a} />
    ))}

    <section className="sw-section">
      <div className="max-w-3xl mx-auto text-center sw-card-feature">
        <p className="sw-eyebrow mb-3">06 · WAS KOMMT ALS NÄCHSTES</p>
        <h2 className="sw-headline text-2xl md:text-3xl mb-6">das war der anfang</h2>
        <p className="leading-relaxed mb-8" style={{ color: "var(--sw-text-2)" }}>
          Culture & Code war kein einmaliges Ding. Die nächste Ausgabe ist für Ende September 2027 geplant.
        </p>
        <Link to="/events/culture-and-code-27" className="neon-btn inline-block" style={{ borderRadius: 10, fontSize: 11 }}>
          Culture &amp; Code 27 vormerken
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default CultureCode26;
