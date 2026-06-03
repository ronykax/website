import AgeDecimal from "./age-decimal";
import AgeInteger from "./age-integer";

export function About() {
  return (
    <div className="p-8">
      <span className="text-foreground/80 text-xl leading-relaxed">
        Hello, I'm{" "}
        <span className="bg-orange-400/25 font-mono font-semibold tracking-tighter">
          <AgeInteger />
          <AgeDecimal />
        </span>{" "}
        years old, with a passion for building{" "}
        <span className="bg-emerald-400/25">SaaS products</span>,{" "}
        <span className="bg-red-400/25">AI agents</span>, and{" "}
        <span className="bg-purple-400/25">macOS apps</span>.
      </span>
    </div>
  );
}
