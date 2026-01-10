import { ArrowUpRightIcon, MailIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Projects() {
  type Project = {
    name: string;
    description: string;
    url: string;
    date: string;
  };

  const projects: Project[] = [
    {
      name: "Message Kit",
      description: "Create, preview, and send rich, interactive Discord messages.",
      url: "https://messagekit.app",
      date: "2025",
    },
    {
      name: "drawcat.lol",
      description: "A collection of poorly drawn cats.",
      url: "https://drawcat.lol",
      date: "2025",
    },
    {
      name: "Bounce Back",
      description: "Hackathon winning 2D game made in 24 hours.",
      url: "https://ronykax.itch.io/bounce-back",
      date: "2024",
    },
  ];

  return (
    <div className="flex flex-col gap-4 border bg-accent rounded-xl p-8 md:w-[65%] h-fit">
      {projects.map((project, index) => (
        <Fragment key={project.name}>
          <a
            className="flex gap-2 justify-between items-center group"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <span className="font-semibold tracking-tight">
                  {project.name}
                </span>

                <ArrowUpRightIcon className="text-muted-foreground size-4 scale-0 duration-200 group-hover:scale-[120%]" />
              </div>

              <span className="text-sm text-muted-foreground">
                {project.description}
              </span>
            </div>

            <span className="text-sm text-muted-foreground">
              {project.date}
            </span>
          </a>

          {index !== projects.length - 1 && <Separator />}
        </Fragment>
      ))}

      <div className="flex items-center justify-between gap-2 mt-4">
        <div className="flex gap-2 items-center">
          <MailIcon className="text-muted-foreground size-4" />
          <span className="hidden md:block text-muted-foreground text-sm">
            contact@ronykax.xyz
          </span>
        </div>

        <Button variant="link" size="lg" asChild>
          <a
            href="https://github.com/ronykax"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            View all projects
            <ArrowUpRightIcon className="group-hover:rotate-360 duration-500" />
          </a>
        </Button>
      </div>
    </div>
  );
}
