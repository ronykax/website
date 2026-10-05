export const tabTransition = {
  default: "none",
  "tab-left": "tab-left",
  "tab-right": "tab-right",
} as const;

export function tabDirection(current: number, next: number) {
  if (next === current) {
    return;
  }

  return [next > current ? "tab-right" : "tab-left"];
}
