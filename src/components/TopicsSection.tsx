import pixelGlobe from "@/assets/pixel-globe.png";
import pixelBot from "@/assets/pixel-bot.png";
import pixelDocument from "@/assets/pixel-document.png";
import pixelNetwork from "@/assets/pixel-network.png";

const topics = [
  {
    icon: pixelGlobe,
    title: "Zoho One",
    description: "40+ Apps. Ein Ökosystem. Alles verbunden — CRM, Finanzen, HR, Support.",
    cardClass: "sw-card",
  },
  {
    icon: pixelBot,
    title: "KI & Automatisierung",
    description: "Von Chatbots bis Workflow-Automation — KI, die wirklich hilft.",
    cardClass: "sw-card-pink",
  },
  {
    icon: pixelDocument,
    title: "DocuWare & IDP",
    description: "Intelligente Dokumentenverarbeitung. Vom Scan zum strukturierten Datensatz.",
    cardClass: "sw-card-purple",
  },
  {
    icon: pixelNetwork,
    title: "MCP",
    description: "Model Context Protocol — die Brücke zwischen KI-Modellen und Ihren Systemen.",
    cardClass: "sw-card",
  },
];

const TopicsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="sw-eyebrow"
          style={{
            marginBottom: 64,
            color: "var(--sw-pink)",
            textShadow: "0 0 12px hsl(var(--neon-pink) / .7)",
          }}
        >
          THEMEN
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={`${topic.cardClass} sw-animate-up transition-all duration-300 hover:scale-[1.02] text-left`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img src={topic.icon} alt={topic.title} className="w-8 h-8 mb-4" style={{ imageRendering: "pixelated" }} loading="lazy" />
              <h3 className="font-pixel text-xs mb-3" style={{ color: "var(--sw-text)" }}>{topic.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-3)" }}>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
