import PageLayout from "@/components/PageLayout";
import WaitlistSection from "@/components/WaitlistSection";

// Sobald das Datum feststeht: DATUM ersetzen, dann steht es überall auf der Seite.
const DATUM = "Ende September 2027 · Freiburg";

const CultureCode27 = () => (
  <PageLayout
    title="Culture & Code 27"
    eyebrow="SAVE THE DATE"
    headline="Culture & Code 27"
    lead="Das nächste Smiling Data Club Event kommt. Wieder persönlich, ehrlich, ohne Bühnennebel."
  >
    <section className="sw-section" style={{ paddingTop: 0 }}>
      <div className="sw-card-feature max-w-2xl mx-auto text-center sw-animate-up">
        <p className="font-pixel text-xs md:text-sm mb-4" style={{ color: "var(--sw-pink)", letterSpacing: ".14em" }}>
          COMING SOON
          <span className="neon-flicker" aria-hidden>
            _
          </span>
        </p>
        <p className="sw-headline text-2xl md:text-3xl mb-4">{DATUM}</p>
        <p style={{ color: "var(--sw-text-2)" }}>Genaues Datum und Programm folgen in Kürze.</p>
      </div>
    </section>

    <WaitlistSection
      interesse="culture-code-27"
      title="JETZT VORMERKEN"
      lead="Trag dich ein – dann erfährst du als Erste:r vom Datum und bekommst deine Einladung."
      buttonLabel="Vormerken"
    />

    <p
      className="max-w-xl mx-auto px-6 pb-16 text-center"
      style={{ fontFamily: "var(--font-mono-sw)", fontSize: 12, color: "var(--sw-text-4)" }}
    >
      Wir verwenden deine Adresse, um dich über kommende Smiling Data Club Events und Neuigkeiten aus dem Club zu
      informieren. Du bekommst zuerst eine Bestätigungsmail – erst nach deinem Klick bist du eingetragen. Abmeldung
      jederzeit möglich. Mehr dazu in unserer{" "}
      <a href="/datenschutz" className="underline">
        Datenschutzerklärung
      </a>
      .
    </p>
  </PageLayout>
);

export default CultureCode27;
