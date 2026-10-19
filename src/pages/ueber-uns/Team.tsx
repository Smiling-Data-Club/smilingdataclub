import PageLayout from "@/components/PageLayout";
import TeamSection from "@/components/TeamSection";

const Team = () => (
  <PageLayout
    title="Team"
    eyebrow="DAS TEAM"
    headline="Die Leute hinter dem Club"
    lead="It's dangerous to go alone! Take these."
  >
    <TeamSection hideTitle />
  </PageLayout>
);

export default Team;
