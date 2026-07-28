"use client";

import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  type KeyboardEvent,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { PostBackdrop, PreBackdrop } from "./backdrop";
import {
  AUDIO_SRC,
  BEAT_AT,
  type ChatClock,
  type Phase,
  PULSE_PERIOD,
  REVEAL_DURATION,
  REVEAL_EASE,
  REVEAL_END,
  REVEAL_MASK,
} from "./constants";
import { PostDropContent } from "./post-drop";
import { PreDropStage } from "./pre-drop";

function MuteButton({
  hidden,
  muted,
  onToggle,
  variant,
}: {
  hidden?: boolean;
  muted: boolean;
  onToggle: () => void;
  variant: "dark" | "light";
}) {
  return (
    <button
      aria-hidden={hidden}
      aria-label={muted ? "Unmute" : "Mute"}
      className={cn(
        "fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full sm:right-6 sm:bottom-6 sm:size-14",
        variant === "dark"
          ? "bg-neutral-700/50 text-white hover:bg-black/75"
          : "bg-neutral-300/50 text-black hover:bg-white/75"
      )}
      onClick={onToggle}
      tabIndex={hidden ? -1 : undefined}
      type="button"
    >
      {muted ? (
        <VolumeXIcon className="size-6" />
      ) : (
        <Volume2Icon className="size-6" />
      )}
    </button>
  );
}

export function BeatExperience() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const droppedRef = useRef<boolean>(false);
  const rafRef = useRef<number | null>(null);
  const pulseRafRef = useRef<number | null>(null);
  const playingRef = useRef<boolean>(false);
  const chatClockRef = useRef<ChatClock | null>(null);

  const [phase, setPhase] = useState<Phase>("pre");
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [beatPulse, setBeatPulse] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const reduceMotion = useReducedMotion();

  const stopWatching = useEffectEvent(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  });

  const stopPulse = useEffectEvent(() => {
    if (pulseRafRef.current !== null) {
      cancelAnimationFrame(pulseRafRef.current);
      pulseRafRef.current = null;
    }
    setBeatPulse(0);
  });

  const watchPulse = useEffectEvent((audio: HTMLAudioElement) => {
    stopPulse();

    const tick = () => {
      if (audio.paused || audio.ended || audio.muted) {
        setBeatPulse(0);
        pulseRafRef.current = requestAnimationFrame(tick);
        return;
      }

      const t = Math.max(0, audio.currentTime - BEAT_AT);
      const pulsePhase = (t % PULSE_PERIOD) / PULSE_PERIOD;
      // Soft sine bump: 0 → 1 → 0 each period
      const pulse = 0.5 - 0.5 * Math.cos(pulsePhase * Math.PI * 2);
      setBeatPulse(pulse);
      pulseRafRef.current = requestAnimationFrame(tick);
    };

    pulseRafRef.current = requestAnimationFrame(tick);
  });

  const onBeat = useEffectEvent(() => {
    if (droppedRef.current === true) {
      return;
    }
    droppedRef.current = true;
    stopWatching();
    setPhase("post");

    const audio = audioRef.current;
    if (audio !== null && playingRef.current === true) {
      watchPulse(audio);
    }
  });

  const watchBeat = useEffectEvent((audio: HTMLAudioElement) => {
    stopWatching();

    const tick = () => {
      if (droppedRef.current === true) {
        return;
      }
      if (audio.currentTime >= BEAT_AT) {
        onBeat();
        return;
      }
      const p = audio.currentTime / BEAT_AT;
      setProgress(p);
      chatClockRef.current?.seek(audio.currentTime);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  });

  const start = useEffectEvent(async () => {
    const audio = audioRef.current;
    if (audio === null || playingRef.current === true || phase !== "pre") {
      return;
    }

    droppedRef.current = false;
    setProgress(0);
    stopPulse();

    try {
      audio.currentTime = 0;
      audio.muted = muted;
      await audio.play();
      playingRef.current = true;
      setPlaying(true);
      watchBeat(audio);
    } catch {
      playingRef.current = false;
      setPlaying(false);
    }
  });

  const toggleMute = useEffectEvent(() => {
    const audio = audioRef.current;
    if (audio === null) {
      return;
    }
    const next = !audio.muted;
    audio.muted = next;
    setMuted(next);
    if (next) {
      setBeatPulse(0);
    }
  });

  const onAudioEnded = useEffectEvent(() => {
    stopWatching();
    stopPulse();
    playingRef.current = false;
    setPlaying(false);
  });

  const onRevealComplete = useEffectEvent(() => {
    // Also fires for the no-op 0% settle before the drop.
    if (phase === "post") {
      setRevealed(true);
    }
  });

  const onPreKeyDown = useEffectEvent(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        start();
      }
    }
  );

  useEffect(
    () => () => {
      stopWatching();
      stopPulse();
    },
    []
  );

  return (
    <div className="relative min-h-dvh bg-black">
      {/* biome-ignore lint/a11y/useMediaCaption: instrumental bed, no dialogue track */}
      <audio
        onEnded={onAudioEnded}
        preload="auto"
        ref={audioRef}
        src={AUDIO_SRC}
      />

      {/*
        Circle wipe: the post layer sits underneath in normal flow while a
        transparent hole grows from the centre of the pre layer above it.
      */}
      {phase === "post" ? (
        <div className="relative min-h-dvh bg-white text-neutral-900">
          <PostBackdrop beatPulse={beatPulse} />
          {playing ? (
            <MuteButton muted={muted} onToggle={toggleMute} variant="light" />
          ) : null}
          {revealed ? <PostDropContent /> : null}
        </div>
      ) : null}

      {revealed ? null : (
        <motion.div
          animate={{ "--reveal": phase === "post" ? REVEAL_END : "0%" }}
          className="fixed inset-0 z-30 overflow-hidden bg-black text-neutral-100"
          initial={{ "--reveal": "0%" }}
          onAnimationComplete={onRevealComplete}
          style={{ maskImage: REVEAL_MASK, WebkitMaskImage: REVEAL_MASK }}
          transition={{
            duration: reduceMotion ? 0 : REVEAL_DURATION,
            ease: REVEAL_EASE,
          }}
        >
          <PreBackdrop progress={progress} />
          <PreDropStage
            audioRef={audioRef}
            chatClockRef={chatClockRef}
            onPreKeyDown={onPreKeyDown}
            playing={playing}
            start={start}
          />
          {playing ? (
            <MuteButton
              hidden={phase === "post"}
              muted={muted}
              onToggle={toggleMute}
              variant="dark"
            />
          ) : null}
        </motion.div>
      )}
    </div>
  );
}
