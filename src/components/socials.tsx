"use client";

import { ArrowUpRightIcon } from "lucide-react";

export function Socials() {
  const socials = [
    { name: "All Projects", url: "https://github.com/ronykax" },
    { name: "Twitter", url: "https://x.com/ronykax" },
    { name: "Support", url: "https://ko-fi.com/ronykax" },
    { name: "Email", url: "mailto:contact@ronykax.xyz" },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center text-xs text-muted-foreground underline underline-offset-[3px] hover:text-foreground duration-200"
        >
          {item.name}
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      ))}
    </div>
  );
}
