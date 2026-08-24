import pixelSmile from "@/assets/pixel-smile.png";
import pixelTrophy from "@/assets/pixel-trophy.png";
import pixelCpu from "@/assets/pixel-cpu.png";

const cards = [
  {
    icon: pixelSmile,
    title: "Happy Employee",
    description: "Technologie, die den Alltag erleichtert — nicht verkompliziert.",
    cardClass: "sw-card",
  },
  {
    icon: pixelTrophy,
    title: "Happy Boss",
    description: "Messbare Ergebnisse durch smarte Prozesse und klare Datenströme.",
    cardClass: "sw-card-pink",
  },
  {
    icon: pixelCpu,
    title: "Smart Tools",
    description: "Zoho, KI und DocuWare — intelligent verknüpft, einfach bedient.",
    cardClass: "sw-card-purple",
  },
];

const AboutSection = () => {
  return (
    <section className="sw-section relative">
      <div className="max-w-5xl mx-auto text-center">
        <p className="sw-section-title" style={{ marginBottom: 24 }}>
          ÜBER UNS
        </p>
        <h2 className="sw-headline text-2xl md:text-4xl mb-6 max-w-3xl mx-auto">
          Technik soll dem Menschen nutzen — nicht umgekehrt.
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--sw-text-2)" }}
        >
          Wir glauben an Systeme, die lächeln machen. An Prozesse, die fließen. An Daten,
          die Sinn ergeben.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`${card.cardClass} sw-animate-up transition-transform duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img src={card.icon} alt={card.title} className="w-10 h-10 mx-auto mb-5" style={{ imageRendering: "pixelated" }} loading="lazy" />
              <h3 className="font-pixel text-xs mb-3" style={{ color: "var(--sw-text)" }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--sw-text-3)" }}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
