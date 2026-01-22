import { Contact } from "@/components/contact";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Thing } from "@/components/thing";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8 flex flex-col gap-8 md:h-screen justify-center">
      <div className="flex md:flex-row flex-col gap-8">
        <Profile />
        <Contact />
      </div>

      <div className="flex md:flex-row flex-col gap-8">
        <Thing />
        <Projects />
      </div>
    </div>
  );
}
