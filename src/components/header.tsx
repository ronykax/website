import { SiDiscord, SiSubstack, SiX } from "@icons-pack/react-simple-icons";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import { Anchor } from "./anchor";
import { buttonVariants } from "./ui/button";

export function Header() {
  return (
    <div className="flex flex-col-reverse gap-8 p-8 md:flex-row md:justify-between md:gap-16">
      <div className="flex flex-col gap-6">
        <span className="hidden font-bold text-2xl text-muted-foreground tracking-tighter md:block">
          indie developer
        </span>
        <span className="font-bold text-4xl tracking-tighter">
          building whatever
          <br />I wish existed
        </span>
        <div className="mt-2 flex">
          <Anchor
            className={buttonVariants({ size: "lg" })}
            href="https://cal.com/ronykax"
            title="Cal"
          >
            <PhoneIcon className="fill-current" />
            Book a Call
          </Anchor>
          <div className="w-2" />
          <Anchor
            className={buttonVariants({
              size: "icon-lg",
              variant: "ghost",
            })}
            href="https://x.com/ronykax"
            title="X"
          >
            <SiX />
          </Anchor>
          <Anchor
            className={buttonVariants({
              size: "icon-lg",
              variant: "ghost",
            })}
            href="https://discord.gg/X7ntJFDzz7"
            title="Discord"
          >
            <SiDiscord className="size-5" />
          </Anchor>
          <Anchor
            className={buttonVariants({
              size: "icon-lg",
              variant: "ghost",
            })}
            href="https://ronykati.substack.com"
            title="Substack"
          >
            <SiSubstack className="size-4" />
          </Anchor>
        </div>
      </div>

      {/* image */}
      <Image
        alt="Rony Kati"
        className="aspect-square size-fit h-[208px] rounded-4xl bg-muted shadow-md"
        height={256}
        src="/rony.jpeg"
        width={256}
      />
    </div>
  );
}
