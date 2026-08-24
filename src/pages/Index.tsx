import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PongDivider from "@/components/PongDivider";
import AboutSection from "@/components/AboutSection";
import TopicsSection from "@/components/TopicsSection";
import TeamSection from "@/components/TeamSection";
import CodeSection from "@/components/CodeSection";
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [pongBonus, setPongBonus] = useState(false);

  return (
    <div className="min-h-screen scanlines relative">
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <TeamSection />
      <CodeSection />
      <WaitlistSection bonusActive={pongBonus} />
      <PongDivider onScore={() => setPongBonus(true)} />
      <FooterSection />
    </div>
  );
};

export default Index;
