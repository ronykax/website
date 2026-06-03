import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { Anchor } from "./anchor";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Project {
  description: string;
  image: string;
  name: string;
  url: string;
}

const projects: Project[] = [
  {
    description:
      "Multi-purpose agent with a simple, lightweight memory system.",
    image: "/lucia.png",
    name: "Lucia",
    url: "https://ronykati.substack.com/p/memory-for-agents-is-simple",
  },
  {
    description: "A macOS app that lets you bind global hotkeys to actions.",
    image: "/keybored.png",
    name: "Keybored",
    url: "https://ronykax.github.io/keybored",
  },
  {
    description: "Create, preview, and send rich, interactive messages.",
    image: "/msgkit.png",
    name: "Message Kit",
    url: "https://messagekit.app",
  },
  {
    description: "Created a winning 2D game during a 24-hour game jam.",
    image: "/bounceback.png",
    name: "Bounce Back",
    url: "https://ronykax.itch.io/bounce-back",
  },
  {
    description: "A super simple 🗑️ pastebin API (self-hosted).",
    image: "/openbin.png",
    name: "Openbin",
    url: "https://github.com/ronykax/openbin",
  },
];

export function Projects() {
  return (
    <div className="flex flex-col items-center gap-4 p-7">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem className="basis-1/1 md:basis-1/2" key={project.name}>
              <div className="h-full p-1">
                <Card className="relative mx-auto size-full max-w-sm pt-0">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      alt={project.name}
                      className="size-full object-cover"
                      height={312}
                      src={project.image}
                      width={554}
                    />
                  </div>
                  <CardHeader>
                    <Anchor className="w-fit" href={project.url}>
                      <CardTitle className="flex items-center gap-1 font-semibold decoration-dotted underline-offset-[3px] hover:underline">
                        {project.name}
                        <ArrowUpRightIcon className="size-4 text-muted-foreground" />
                      </CardTitle>
                    </Anchor>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <div className="flex items-center gap-2.5 text-muted-foreground md:hidden">
        <span>drag to explore</span>
        <ArrowRightIcon className="size-4" />
      </div>
    </div>
  );
}
