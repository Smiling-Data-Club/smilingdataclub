const CodeSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div
          className="overflow-hidden sw-animate-up"
          style={{
            border: "1px solid hsl(var(--neon-cyan) / .45)",
            borderRadius: 10,
            background: "hsl(var(--neon-cyan) / .05)",
            boxShadow:
              "0 0 22px hsl(var(--neon-cyan) / .14), inset 0 0 18px hsl(var(--neon-cyan) / .05)",
          }}
        >
          {/* Terminal header */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid hsl(var(--neon-cyan) / .25)" }}
          >
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span
              className="ml-3 text-xs"
              style={{ fontFamily: "var(--font-mono-sw)", color: "var(--sw-text-3)" }}
            >
              smiling-data-club.ts
            </span>
          </div>

          {/* Code content */}
          <pre
            className="p-6 text-sm md:text-base leading-relaxed overflow-x-auto"
            style={{ fontFamily: "var(--font-mono-sw)" }}
          >
            <code>
              <span className="text-secondary">if</span> (employee.
              <span className="text-primary">isHappy</span>()) {"{"}{"\n"}
              {"  "}company.<span className="text-primary">grows</span>();{"\n"}
              {"  "}boss.<span className="text-primary">smiles</span>();{"\n"}
              {"  "}data.<span className="text-primary">flows</span>();{"\n"}
              {"}"} <span className="text-secondary">else</span> {"{"}{"\n"}
              {"  "}<span style={{ color: "var(--sw-text-4)" }}>// Call Smiling Data Club 😎</span>{"\n"}
              {"  "}sdc.<span className="text-primary">optimize</span>(everything);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
