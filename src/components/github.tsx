import { GitHubCalendar } from "react-github-calendar";
import { Anchor } from "./anchor";

export function Github() {
  return (
    <div className="p-8">
      <Anchor
        className="relative flex w-full justify-center"
        href="https://github.com/ronykax"
        title="Github"
      >
        <GitHubCalendar
          blockMargin={4}
          blockRadius={4}
          blockSize={18}
          showColorLegend={false}
          showMonthLabels={false}
          showTotalCount={false}
          username="ronykax"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-linear-to-r from-transparent to-white dark:to-background" />
      </Anchor>
    </div>
  );
}
