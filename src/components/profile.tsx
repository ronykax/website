import { AgeDecimal } from "./age-decimal";
import { Socials } from "./socials";

export function Profile() {
  return (
    <div className="border bg-accent rounded-xl p-8 flex flex-col gap-4 md:w-[60%]">
      <span className="text-2xl font-semibold tracking-tight">
        Hi, I'm Rony Kati
      </span>

      <span className="text-muted-foreground">
        I'm{" "}
        <span className="font-mono font-semibold tracking-tight px-0.5">
          17
          <AgeDecimal />
        </span>{" "}
        years old, with a passion for building SaaS products and game
        development. I also enjoy automation and homelabbing.
      </span>

      <div className="my-auto" />

      <Socials />
    </div>
  );
}
