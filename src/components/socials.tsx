"use client";

import {
  CoffeeIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

export function Socials() {
  const socials = [
    { name: "Github", url: "https://github.com/ronykax", icon: GithubLogoIcon },
    {
      name: "Youtube",
      url: "https://youtube.com/@ronykax",
      icon: YoutubeLogoIcon,
    },
    { name: "X", url: "https://x.com/ronykax", icon: XLogoIcon },
    { name: "Ko-fi", url: "https://ko-fi.com/ronykax", icon: CoffeeIcon },
    { name: "Mail", url: "mailto:contact@ronykax.xyz", icon: EnvelopeIcon },
  ];

  return (
    <div className="flex gap-4">
      {socials.map((item) => (
        <a
          href={item.url}
          key={item.name}
          className="hover:scale-110 duration-100"
        >
          <item.icon className="size-6" />
        </a>
      ))}
    </div>
  );
}
