import { About } from "@/components/about";
import { Github } from "@/components/github";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";

export default function Page() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-0 py-12">
      <Header />
      <About />
      <Projects />
      <Github />
    </div>
  );
}
