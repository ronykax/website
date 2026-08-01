"use client";

import gsap from "gsap";
import { SparkleIcon } from "lucide-react";
import {
  type KeyboardEvent,
  type RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import {
  BEAT_AT,
  BUBBLE_HOLD,
  BUBBLE_IN,
  type ChatClock,
  MESSAGES,
  type Side,
} from "./constants";

const PROMPT_FADE_MS = 500;

function bubbleClass(side: Side) {
  return cn(
    "w-fit max-w-full whitespace-nowrap rounded-full px-6 py-4 text-2xl text-white leading-snug sm:px-8 sm:py-5 sm:text-3xl",
    side === "incoming"
      ? "self-start bg-linear-0 from-neutral-800/65 to-neutral-700/65 shadow-md"
      : "self-end bg-[#0b84ff] bg-linear-0 from-blue-500/75 to-blue-400/75 shadow-md"
  );
}

function buildChatTimeline(root: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline({ paused: true });
  // Last bubble must finish entering BUBBLE_HOLD before the drop, then earlier
  // bubbles share equal gaps from t=0 — including the wait before the first.
  const lastStart = BEAT_AT - BUBBLE_HOLD - BUBBLE_IN;
  const gap = lastStart / MESSAGES.length;
  const bubbles = [
    ...root.querySelectorAll<HTMLElement>('[data-chat="bubble"]'),
  ];

  bubbles.forEach((bubble, i) => {
    const side = bubble.dataset.side as Side;
    const origin = side === "incoming" ? "bottom left" : "bottom right";
    const start = (i + 1) * gap;

    gsap.set(bubble, {
      autoAlpha: 0,
      height: 0,
      marginBottom: 0,
      overflow: "hidden",
      scale: 0.5,
      transformOrigin: origin,
    });

    tl.to(
      bubble,
      {
        duration: BUBBLE_IN,
        ease: "power2.out",
        height: "auto",
        marginBottom: i < bubbles.length - 1 ? 5 : 0,
      },
      start
    );
    tl.to(
      bubble,
      {
        autoAlpha: 1,
        duration: BUBBLE_IN,
        ease: "back.out(1.7)",
        scale: 1,
      },
      start
    );
  });

  return tl;
}

function PreBeatChat({
  audioRef,
  clockRef,
}: {
  audioRef: RefObject<HTMLAudioElement | null>;
  clockRef: RefObject<ChatClock | null>;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (root === null) {
      return;
    }

    const tl = buildChatTimeline(root);
    tl.seek(audioRef.current?.currentTime ?? 0);
    clockRef.current = {
      seek: (time) => {
        tl.seek(time);
      },
    };

    return () => {
      tl.kill();
      clockRef.current = null;
    };
  }, [audioRef, clockRef]);

  return (
    <div
      aria-live="polite"
      className="flex w-full max-w-xl flex-col"
      ref={rootRef}
    >
      {MESSAGES.map((message) => (
        <div
          className={bubbleClass(message.side)}
          data-chat="bubble"
          data-side={message.side}
          key={message.text}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}

export function PreDropStage({
  audioRef,
  chatClockRef,
  onPreKeyDown,
  playing,
  start,
}: {
  audioRef: RefObject<HTMLAudioElement | null>;
  chatClockRef: RefObject<ChatClock | null>;
  onPreKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  playing: boolean;
  start: () => void;
}) {
  const [showChat, setShowChat] = useState(false);
  const [fadedIn, setFadedIn] = useState(false);

  useEffect(() => {
    setFadedIn(true);
  }, []);

  useEffect(() => {
    if (!playing) {
      setShowChat(false);
      return;
    }

    const id = window.setTimeout(() => setShowChat(true), PROMPT_FADE_MS);
    return () => window.clearTimeout(id);
  }, [playing]);

  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: yes
    // biome-ignore lint/a11y/noStaticElementInteractions: yes
    <div
      className={cn(
        "relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-neutral-100",
        playing ? "" : "cursor-pointer"
      )}
      onClick={playing ? undefined : start}
      onKeyDown={playing ? undefined : onPreKeyDown}
      role={playing ? undefined : "button"}
      tabIndex={playing ? undefined : 0}
    >
      {showChat ? (
        <PreBeatChat audioRef={audioRef} clockRef={chatClockRef} />
      ) : (
        <div
          className={cn(
            "flex flex-col gap-6 transition-opacity duration-500",
            (!fadedIn || playing) && "opacity-0"
          )}
        >
          <div className="flex items-center gap-5">
            <span className="font-bold font-heading text-5xl tracking-tight">
              hello world
            </span>
            <SparkleIcon className="size-8 fill-white" />
          </div>

          <p className="font-heading text-2xl text-neutral-300 leading-relaxed tracking-wide">
            click or tap anywhere to continue.
            <br />
            headphones are recommended.
          </p>
        </div>
      )}
    </div>
  );
}
