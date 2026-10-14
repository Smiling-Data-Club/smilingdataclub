import { useEffect, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import PongDivider from "@/components/PongDivider";
import LoesungenTeaser from "@/components/LoesungenTeaser";
import EventFilmSection from "@/components/EventFilmSection";
import CodeSection from "@/components/CodeSection";
import WaitlistSection from "@/components/WaitlistSection";
import FooterSection from "@/components/FooterSection";
import SynthwaveBackground from "@/components/SynthwaveBackground";

// Über uns, Team und die ausführlichen Themen liegen auf eigenen Unterseiten
// (siehe src/data/navigation.ts).
const Index = () => {
  const [pongBonus, setPongBonus] = useState(false);

  useEffect(() => {
    document.title = "Smiling Data Club – Data & AI Community";
  }, []);

  return (
    <div className="min-h-screen relative">
      <SiteHeader />
      <HeroSection />
      <div className="relative">
        <SynthwaveBackground variant="calm" />
        <div className="relative z-10">
          <LoesungenTeaser />
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
