// Abschnittsüberschrift für alle Seiten: Pixel-Schrift, Cyan, zentriert.
// Pink ist Akzenten vorbehalten (Datum, Untertitel, „Bonus Level“).
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="sw-section-title text-center sw-animate-up" style={{ marginBottom: 32 }}>
    {children}
  </h2>
);

export default SectionTitle;
