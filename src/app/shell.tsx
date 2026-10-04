import Image from "next/image";
import type { ReactNode } from "react";
import { Thing } from "@/components/thing";
import { Tabs } from "./tabs";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 font-sans md:text-lg">
      <div className="flex flex-col items-center gap-8 text-center">
        <a
          className="mb-2"
          href="https://chibeeu.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="Rony Kati"
            className="size-24 rounded-2xl duration-150 hover:scale-105"
            height={128}
            src="https://github.com/ronykax.png"
            width={128}
          />
        </a>
        {/* <h1 className="font-semibold text-4xl tracking-tight">rony kati</h1> */}
        <p className="text-balance">
          i'm <strong>rony</strong>, an indie builder.{" "}
          <Thing className="bg-amber-200/75" href="https://chibeeu.com">
            chibeeu
          </Thing>
          ,{" "}
          <Thing className="bg-blue-200/75" href="https://messagekit.app">
            message kit
          </Thing>
          , and{" "}
          <Thing
            className="bg-rose-200/75"
            href="https://github.com/ronykax/euclase"
          >
            euclase
          </Thing>{" "}
          are some of my recent projects.
          <br />
          <br />
          i'm active on{" "}
          <Thing
            className="bg-zinc-200/75 font-black text-xl"
            href="https://x.com/ronykax"
          >
            𝕏
          </Thing>
          . my email is{" "}
          <Thing className="bg-sky-200/75" href="mailto:biz@ronykax.com">
            biz@ronykax.com
          </Thing>
          . like what i do? you can sponsor me on{" "}
          <Thing
            className="bg-green-200/75"
            href="https://github.com/sponsors/ronykax"
          >
            github
          </Thing>
          .
        </p>
      </div>

      <Tabs />

      {children}
    </div>
  );
}
