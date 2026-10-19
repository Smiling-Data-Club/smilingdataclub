interface PageHeadProps {
  eyebrow?: string;
  headline: string;
  lead?: string;
  children?: React.ReactNode;
}

// Seitenkopf jeder Unterseite: kleine Zeile, Überschrift, Untertitel.
const PageHead = ({ eyebrow, headline, lead, children }: PageHeadProps) => (
  <section className="sw-section text-center">
    <div className="max-w-3xl mx-auto">
      {eyebrow && (
        <p className="sw-eyebrow sw-animate-up" style={{ marginBottom: 18 }}>
          {eyebrow}
        </p>
      )}
      <h1 className="sw-headline text-4xl md:text-6xl mb-6 sw-animate-up" style={{ animationDelay: "0.1s" }}>
        {headline}
      </h1>
      {lead && (
        <p className="sw-lead text-base md:text-lg sw-animate-up" style={{ animationDelay: "0.2s" }}>
          {lead}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default PageHead;
