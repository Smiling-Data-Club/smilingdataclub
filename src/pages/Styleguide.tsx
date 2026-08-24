import PongDivider from "@/components/PongDivider";
import SynthwaveBackground from "@/components/SynthwaveBackground";

const Styleguide = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section style={{ position: "relative", height: 600 }}>
        <SynthwaveBackground variant="full" />
      </section>

      <section style={{ position: "relative", height: 600 }}>
        <SynthwaveBackground variant="calm" />
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-6 py-16">
        <p className="sw-eyebrow">sw-eyebrow</p>
        <h1 className="sw-headline text-5xl">sw-headline</h1>
        <p className="sw-lead text-lg">sw-lead — Space Mono lead text.</p>

        <div className="sw-card">.sw-card</div>
        <div className="sw-card-pink">.sw-card-pink</div>
        <div className="sw-card-purple">.sw-card-purple</div>
        <div className="sw-card-feature">.sw-card-feature</div>
      </section>

      <PongDivider />
    </main>
  );
};

export default Styleguide;
