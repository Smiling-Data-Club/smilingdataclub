import PageLayout from "@/components/PageLayout";
import WaitlistSection from "@/components/WaitlistSection";

// Platzhalter. Später Login über den SDC-Auth-Hub (sdc-identity) – bewusst
// kein Formular mit Passwortfeld, solange es keinen echten Login gibt.
const Member = () => (
  <PageLayout
    title="Member-Bereich"
    eyebrow="MEMBERS ONLY"
    headline="Der Member-Bereich kommt."
    lead="Exklusive Inhalte für Club-Mitglieder: Anleitungen, Vorlagen und Know-how rund um KI und Automatisierung."
  >
    <section className="sw-section" style={{ paddingTop: 0 }}>
      <div className="sw-card-feature max-w-2xl mx-auto text-center sw-animate-up">
        <p className="font-pixel text-xs md:text-sm mb-4" style={{ color: "var(--sw-pink)", letterSpacing: ".14em" }}>
          LOADING LEVEL 2
          <span className="neon-flicker" aria-hidden>
            _
          </span>
        </p>
        <p className="leading-relaxed" style={{ color: "var(--sw-text-2)" }}>
          Der Login für Members ist noch nicht freigeschaltet. Wer jetzt dem Club beitritt, erfährt als Erstes, wenn es
          losgeht.
        </p>
      </div>
    </section>

    <WaitlistSection />
  </PageLayout>
);

export default Member;
