import { Contact } from "@/components/contact";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col gap-8 md:h-screen justify-center">
      <div className="flex md:flex-row flex-col gap-8">
        <Profile />
        <Contact />
      </div>

      <div className="flex md:flex-row flex-col gap-8">
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}
