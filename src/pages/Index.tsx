import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PongDivider from "@/components/PongDivider";
import AboutSection from "@/components/AboutSection";
import TopicsSection from "@/components/TopicsSection";
import TeamSection from "@/components/TeamSection";
import EventFilmSection from "@/components/EventFilmSection";
import CodeSection from "@/components/CodeSection";
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";
import SynthwaveBackground from "@/components/SynthwaveBackground";

const Index = () => {
  const [pongBonus, setPongBonus] = useState(false);

  return (
    <div className="min-h-screen relative">
      <HeroSection />
      <div className="relative">
        <SynthwaveBackground variant="calm" />
        <div className="relative z-10">
          <AboutSection />
          <TopicsSection />
          <TeamSection />
          <EventFilmSection />
          <CodeSection />
          <WaitlistSection bonusActive={pongBonus} />
          <PongDivider onScore={() => setPongBonus(true)} />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
