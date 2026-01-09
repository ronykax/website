import { Socials } from "./socials";

export function Profile() {
  return (
    <div className="border bg-accent rounded-xl p-8 flex flex-col gap-2 md:w-[60%]">
      <span className="text-2xl font-semibold tracking-tight">
        Hi, I'm Rony
      </span>

      <span className="text-muted-foreground">
        I love building things. Sometimes It's a dumb app that doesn't help
        anyone. Other times, It solves a real problem. At the end of the day, If
        it makes someone go "yo this is kinda sick", then I'm doing it right.
      </span>

      <div className="my-auto" />

      <Socials />
    </div>
  );
}
