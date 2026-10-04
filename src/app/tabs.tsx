"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = ["blog", "watch", "goals"] as const;

export function Tabs() {
  const pathname = usePathname();
  const index = Math.max(
    0,
    tabs.findIndex((item) => pathname === `/${item}`)
  );

  return (
    <div
      className="mt-12 grid gap-1 rounded-2xl border-zinc-200 bg-zinc-200/75 p-1 text-center"
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none z-0 col-start-1 row-start-1 rounded-xl bg-white"
        style={{
          transform: `translateX(calc(${index} * (100% + var(--spacing))))`,
          transition: "transform 200ms ease-in-out",
        }}
      />
      {tabs.map((tabItem, itemIndex) => (
        <Link
          className="z-10 row-start-1 rounded-xl px-4 py-3 font-medium leading-none"
          href={`/${tabItem}`}
          key={tabItem}
          scroll={false}
          style={{ gridColumnStart: itemIndex + 1 }}
        >
          {tabItem}
        </Link>
      ))}
    </div>
  );
}
