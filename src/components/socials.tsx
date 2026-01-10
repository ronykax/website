"use client";

import {
  CoffeeIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Socials() {
  const socials = [
    { name: "Github", url: "https://github.com/ronykax", icon: GithubLogoIcon },
    {
      name: "Youtube",
      url: "https://youtube.com/@ronykax",
      icon: YoutubeLogoIcon,
    },
    { name: "X", url: "https://x.com/ronykax", icon: XLogoIcon },
    { name: "Tip", url: "https://ko-fi.com/ronykax", icon: CoffeeIcon },
    { name: "Email", url: "mailto:contact@ronykax.xyz", icon: EnvelopeIcon },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon className="size-6" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            {item.name}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
