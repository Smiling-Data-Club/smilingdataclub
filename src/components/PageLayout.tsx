import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SynthwaveBackground from "@/components/SynthwaveBackground";
import FooterSection from "@/components/FooterSection";
import PageHead from "@/components/PageHead";

interface PageLayoutProps {
  /** Wird als „… · Smiling Data Club“ in den Browser-Tab geschrieben */
  title: string;
  eyebrow?: string;
  headline: string;
  lead?: string;
  children: React.ReactNode;
}

// Rahmen für alle Unterseiten: Header, ruhiger Synthwave-Hintergrund, Seitenkopf, Footer.
const PageLayout = ({ title, eyebrow, headline, lead, children }: PageLayoutProps) => {
  useEffect(() => {
    document.title = `${title} · Smiling Data Club`;
  }, [title]);

  return (
    <div className="min-h-screen relative">
      <SiteHeader />
      <div className="relative">
        <SynthwaveBackground variant="calm" />
        <main className="relative z-10 pt-16">
          <PageHead eyebrow={eyebrow} headline={headline} lead={lead} />
          {children}
        </main>
      </div>
      <FooterSection />
    </div>
  );
};

export default PageLayout;
