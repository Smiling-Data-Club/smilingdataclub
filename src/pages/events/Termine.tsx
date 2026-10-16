import PageLayout from "@/components/PageLayout";
import ComingSoon from "@/components/ComingSoon";
import TerminKarte from "@/components/TerminKarte";
import { kommendeTermine } from "@/data/termine";

const Termine = () => {
  const termine = kommendeTermine();

  return (
    <PageLayout
      title="Webinare & Termine"
      eyebrow="EVENTS"
      headline="webinare & termine"
      lead="Wo du uns als Nächstes live erlebst – online oder vor Ort."
    >
      <section className="sw-section" style={{ paddingTop: 0 }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {termine.length === 0 ? (
            <ComingSoon
              title="NEUE TERMINE FOLGEN"
              text="Gerade stehen keine Termine an. Trag dich in den Club-Newsletter ein, dann bekommst du die nächsten Webinare direkt."
              cta={{ label: "Join the Club", to: "/#waitlist" }}
            />
          ) : (
            termine.map((t) => <TerminKarte key={`${t.datum}-${t.titel}`} termin={t} />)
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Termine;
