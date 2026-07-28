import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import CircularText from "../react-bits/circular-text";
import { Highlighter } from "../react-bits/text-highlighter";
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
          Most of my time goes into building{" "}
          <Highlighter
            animationDuration={1000}
            color="rgba(255, 156, 156, 0.2)"
            iterations={4}
          >
            SaaS products
          </Highlighter>
          ,{" "}
          <Highlighter
            action="underline"
            animationDuration={1000}
            color="#000"
            iterations={4}
          >
            AI agents
          </Highlighter>
          , and{" "}
          <Highlighter
            animationDuration={1000}
            color="rgba(156, 211, 255, 0.2)"
            iterations={4}
          >
            macOS apps
          </Highlighter>
          . Outside of that, I enjoy homelabbing a lot.
        </p>
      </div>
      <nav
        aria-label="Social"
        className="flex animate-land-in flex-wrap items-center gap-x-4 gap-y-3"
        style={{ animationDelay: "360ms" }}
      >
        {SOCIALS.map((social, index) => (
          <span className="contents" key={social.label}>
            {index > 0 ? (
              <span aria-hidden className="text-neutral-300">
                ·
              </span>
            ) : null}
            <a
              className="inline-flex items-center gap-2 font-medium text-base text-black transition-colors hover:text-neutral-500 lg:text-xl"
              href={social.href}
            >
              {social.label}
              <ArrowUpRightIcon aria-hidden className="size-6" />
            </a>
          </span>
        ))}
      </nav>
    </main>
  );
}
