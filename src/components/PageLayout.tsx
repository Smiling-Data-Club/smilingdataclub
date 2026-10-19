import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SynthwaveBackground from "@/components/SynthwaveBackground";
import FooterSection from "@/components/FooterSection";

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
          <section className="sw-section text-center">
            <div className="max-w-3xl mx-auto">
              {eyebrow && (
                <p className="sw-eyebrow sw-animate-up" style={{ marginBottom: 18 }}>
                  {eyebrow}
                </p>
              )}
              <h1
                className="sw-headline text-4xl md:text-6xl mb-6 sw-animate-up"
                style={{ animationDelay: "0.1s" }}
              >
                {headline}
              </h1>
              {lead && (
                <p
                  className="sw-lead text-base md:text-lg sw-animate-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {lead}
                </p>
              )}
            </div>
          </section>
          {children}
        </main>
      </div>
      <FooterSection />
    </div>
  );
};

export default PageLayout;
