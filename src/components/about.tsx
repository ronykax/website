import AgeDecimal from "./age-decimal";
import AgeInteger from "./age-integer";

export function About() {
  return (
    <div className="p-8">
      <span className="text-foreground/80 text-xl leading-relaxed">
        I'm{" "}
        <span className="mx-0.5 font-mono font-semibold tracking-tighter">
          <AgeInteger />
          <AgeDecimal />
        </span>{" "}
        years old, with a passion for building{" "}
        <span className="bg-green-400/25">SaaS products</span>,{" "}
        <span className="bg-violet-400/25">macOS apps</span>, and{" "}
        <span className="bg-red-400/25">game development</span>.
      </span>
    </div>
  );
}
