import { GitHubCalendar } from "react-github-calendar";
import { Anchor } from "./anchor";

export function Github() {
  return (
    <div className="p-8">
      <Anchor
        className="flex w-full justify-center rounded-4xl border bg-card/50 p-4"
        href="https://github.com/ronykax"
        title="Github"
      >
        <GitHubCalendar
          blockMargin={4}
          blockRadius={99}
          blockSize={18}
          showColorLegend={false}
          showMonthLabels={false}
          showTotalCount={false}
          username="ronykax"
        />
      </Anchor>
    </div>
  );
}
