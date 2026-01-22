import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";

export function Thing() {
  return (
    <div className="border bg-accent rounded-xl relative overflow-hidden md:w-[35%] hidden md:block">
      <InteractiveGridPattern
        className="mask-[radial-gradient(160px_circle_at_center,white,transparent)]"
        width={56}
        height={56}
        squares={[6, 6]}
        squaresClassName="hover:fill-zinc-600"
      />
    </div>
  );
}
