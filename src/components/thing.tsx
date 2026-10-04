import { cn } from "cn";
import type React from "react";

export function Thing({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) {
  return (
    <a
      className={cn(
        "text-nowrap rounded-md bg-zinc-200/75 px-1.5 font-medium",
        className
      )}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
