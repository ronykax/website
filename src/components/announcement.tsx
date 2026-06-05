import { ArrowUpRightIcon, BellIcon } from "lucide-react";
import { Anchor } from "./anchor";
import { buttonVariants } from "./ui/button";

const bannerAnimation = {
  display: "grid",
  animation: "slideDown 0.5s ease-out 3s both",
} as const;

const innerStyle = { minHeight: 0, overflow: "hidden" } as const;

function BannerContent() {
  return (
    <div className="flex items-center justify-center gap-3 bg-[#7d11f0] px-4 py-3 font-medium text-white dark:bg-[#7d11f0]/75 dark:backdrop-blur-md">
      <BellIcon className="size-5 origin-[top_center] animate-ring fill-current" />
      <span>I've started posting on Instagram!</span>
      <Anchor
        className={buttonVariants({ size: "sm" })}
        href="https://instagram.com/rony.json"
        title="Instagram"
      >
        Follow
        <ArrowUpRightIcon />
      </Anchor>
    </div>
  );
}

export function Announcement() {
  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { grid-template-rows: 0fr; }
          to   { grid-template-rows: 1fr; }
        }
      `}</style>

      {/* Fixed banner */}
      <div className="fixed top-0 right-0 left-0 z-50" style={bannerAnimation}>
        <div style={innerStyle}>
          <BannerContent />
        </div>
      </div>

      {/* Spacer — mirrors the animation to push page content down */}
      <div aria-hidden style={bannerAnimation}>
        <div style={innerStyle}>
          <div className="invisible">
            <BannerContent />
          </div>
        </div>
      </div>
    </>
  );
}
