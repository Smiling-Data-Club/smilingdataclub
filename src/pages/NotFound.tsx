import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const NotFound = () => (
  <PageLayout
    title="Seite nicht gefunden"
    eyebrow="404 · GAME OVER"
    headline="Diese Seite gibt es nicht."
    lead="Vielleicht hat sich ein Pixel verschoben. Hier geht es weiter:"
  >
    <section className="sw-section" style={{ paddingTop: 0 }}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/" className="neon-btn inline-block" style={{ borderRadius: 10, fontSize: 11 }}>
          Zur Startseite
        </Link>
        <Link
          to="/success-stories"
          style={{ fontFamily: "var(--font-mono-sw)", fontSize: 14, color: "var(--sw-cyan)" }}
        >
          Was unsere Kunden sagen →
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default NotFound;
