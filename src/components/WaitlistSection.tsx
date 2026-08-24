import { useState, useRef } from "react";
import { toast } from "sonner";

const WEBHOOK_URL =
  "https://flow.zoho.eu/20106110113/flow/webhook/incoming?zapikey=1001.0ccd122c2824a51d4309ea2b4ef7c7e5.e8e31339336bcce2a43b9785fc2ed8a4&isdebug=false";

interface WaitlistSectionProps {
  bonusActive?: boolean;
}

const WaitlistSection = ({ bonusActive }: WaitlistSectionProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      if (bonusActive) formData.append("bonus", "PONG1UP");

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        mode: "no-cors",
      });
      toast.success("Danke! Bitte bestätige deine Anmeldung per E-Mail. 📬");
      setEmail("");
    } catch {
      toast.error("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="sw-section relative">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="sw-section-title mb-4">
          JOIN THE CLUB
        </h2>
        <p className="sw-lead text-base md:text-lg mb-10">
          Sei dabei wenn es losgeht.
        </p>

        {bonusActive && (
          <div
            className="sw-animate-pop"
            style={{
              fontFamily: "var(--font-mono-sw)",
              fontSize: 12,
              color: "var(--sw-cyan)",
              border: "1px solid hsl(var(--neon-cyan) / .45)",
              borderRadius: 10,
              background: "hsl(var(--neon-cyan) / .05)",
              padding: "10px 16px",
              marginBottom: 24,
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Bonus-Code PONG1UP aktiv — wird mit deiner Anmeldung übermittelt.
          </div>
        )}


        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.de"
            required
            className="flex-1 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            style={{
              background: 'rgba(5,5,16,.6)',
              border: '1px solid hsl(var(--neon-cyan) / .35)',
              borderRadius: 10,
              fontFamily: 'var(--font-mono-sw)',
              color: 'var(--sw-text)',
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="neon-btn whitespace-nowrap"
            style={{
              borderRadius: 10,
              boxShadow: '0 0 26px hsl(var(--neon-cyan) / .3)',
              fontFamily: 'var(--font-pixel)',
              fontSize: 11,
            }}
          >
            {isSubmitting ? "Wird gesendet..." : "Jetzt beitreten"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSection;
