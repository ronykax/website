import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import CircularText from "../react-bits/circular-text";
import { SOCIALS } from "./constants";

export function PostDropContent() {
  return (
    <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-200 flex-col gap-8 px-8 py-16 text-left text-neutral-900 lg:gap-14 lg:py-32">
      <header className="flex animate-land-in flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="hidden font-bold font-heading text-5xl tracking-tighter lg:block">
            indie builder
          </h1>
          <p
            className="font-bold font-heading text-3xl tracking-tighter sm:text-6xl sm:leading-16"
            style={{ animationDelay: "80ms" }}
          >
            building whatever
            <br />I wish existed
          </p>
        </div>

        <div className="relative flex size-fit items-center justify-center lg:mt-0">
          <Image
            alt="Bob"
            className="absolute size-31 rounded-full bg-black"
            height={100}
            src="/bob.png"
            width={1000}
          />
          <CircularText
            className="font-mono"
            onHover="speedUp"
            spinDuration={20}
            text="RONY * KATI * HELLO * WORLD * "
            // text="RONYKAX * HELLO * WORLD * "
          />
        </div>
      </header>

      <div
        className="flex animate-land-in flex-col gap-8 font-medium text-lg sm:text-2xl"
        style={{ animationDelay: "180ms" }}
      >
        <p>
          Hi, I&apos;m Rony, and I&apos;m <strong>18 years old</strong>. I
          started building small apps and tools in 2020, and I&apos;ve been
          doing it seriously since 2022.
        </p>
        <p>
          Most of my time goes into building <strong>SaaS products</strong>,{" "}
          <strong>AI agents</strong>, and <strong>macOS apps</strong>. Outside
          of that, I enjoy <strong>homelabbing</strong> a lot.
        </p>
      </div>

      <nav
        aria-label="Social"
        className="-ml-4 flex animate-land-in flex-wrap items-center gap-y-3"
        style={{ animationDelay: "360ms" }}
      >
        {SOCIALS.map((social) => (
          <a
            className="group inline-flex items-center gap-2 rounded-2xl bg-white/0 px-4 py-2 font-medium text-base text-black duration-300 hover:bg-white/25 lg:text-xl"
            href={social.href}
            key={social.label}
          >
            {social.label}
            <ArrowUpRightIcon
              aria-hidden
              className="size-6 duration-300 group-hover:rotate-360"
            />
          </a>
        ))}
      </nav>
    </main>
  );
}
