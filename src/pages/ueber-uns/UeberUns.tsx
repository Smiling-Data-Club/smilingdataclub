import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";

const UeberUns = () => (
  <PageLayout
    title="Über den Club"
    eyebrow="ÜBER UNS"
    headline="Technik soll dem Menschen nutzen – nicht umgekehrt."
    lead="Wir glauben an Systeme, die lächeln machen. An Prozesse, die fließen. An Daten, die Sinn ergeben."
  >
    <AboutSection hideIntro />

    <section className="sw-section">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        <Link to="/ueber-uns/team" className="sw-card-pink transition-transform duration-300 hover:-translate-y-1">
          <p className="font-pixel text-xs mb-3" style={{ color: "var(--sw-text)" }}>
            Das Team
          </p>
          <p className="text-sm" style={{ color: "var(--sw-text-3)" }}>
            It's dangerous to go alone! Lerne die Leute hinter dem Club kennen. →
          </p>
        </Link>
        <a
          href="https://www.sirius-gmbh.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="sw-card-purple transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="font-pixel text-xs mb-3" style={{ color: "var(--sw-text)" }}>
            A SIRIUS GmbH brand
          </p>
          <p className="text-sm" style={{ color: "var(--sw-text-3)" }}>
            Hinter dem Smiling Data Club steht die SIRIUS GmbH document solutions aus Freiburg. →
          </p>
        </a>
      </div>
    </section>
  </PageLayout>
);

export default UeberUns;
