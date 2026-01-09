import {
  SiDiscord,
  SiDiscorddotjsHex,
  SiDocker,
  SiDockerHex,
  SiGodotengine,
  SiGodotengineHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiRust,
  SiStripe,
  SiStripeHex,
  SiSupabase,
  SiSvelte,
  SiSvelteHex,
  SiSwift,
  SiSwiftHex,
  SiThefinals,
  SiThefinalsHex,
} from "@icons-pack/react-simple-icons";
import { OrbitingCircles } from "./ui/orbiting-circles";

export function TechStack() {
  const technologies1 = [
    { icon: SiNextdotjs, color: SiNextdotjsHex },
    { icon: SiSvelte, color: SiSvelteHex },
    { icon: SiDocker, color: SiDockerHex },
    { icon: SiDiscord, color: SiDiscorddotjsHex },
    { icon: SiSwift, color: SiSwiftHex },
    { icon: SiThefinals, color: SiThefinalsHex },
  ];

  const technologies2 = [
    { icon: SiRust, color: "#e43717" },
    { icon: SiStripe, color: SiStripeHex },
    { icon: SiGodotengine, color: SiGodotengineHex },
    { icon: SiSupabase, color: "#259f66" },
  ];

  return (
    <div className="border bg-accent rounded-xl flex justify-center items-center p-4 md:w-[35%]">
      <div className="relative flex h-[270px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles radius={110}>
          {technologies1.map((item) => (
            <item.icon
              color={item.color}
              key={item.color}
              className="size-7 bg-accent rounded-xl"
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles radius={50} reverse speed={1.5}>
          {technologies2.map((item) => (
            <item.icon
              color={item.color}
              key={item.color}
              className="size-7 bg-accent rounded-xl"
            />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}
