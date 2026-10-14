import PageLayout from "@/components/PageLayout";
import TeamSection from "@/components/TeamSection";

const Team = () => (
  <PageLayout
    title="Team"
    eyebrow="DAS TEAM"
    headline="die leute hinter dem club"
    lead="It's dangerous to go alone! Take these."
  >
    <TeamSection hideTitle />
  </PageLayout>
);

export default Team;
