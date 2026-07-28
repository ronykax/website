export const BEAT_AT = 8.785;
export const AUDIO_SRC = "/aces.mp3";
/** Approximate post-drop pulse period in seconds (≈ 120 BPM). */
export const PULSE_PERIOD = 0.5;
export const BUBBLE_IN = 0.4;
/**
 * After the last bubble finishes entering, keep it readable this long before
 * the drop — so "give it a second" can land.
 */
export const BUBBLE_HOLD = 1;
/** Circle wipe spans two beats at ~120 BPM. */
export const REVEAL_DURATION = PULSE_PERIOD * 0.75;
export const REVEAL_EASE = [0.65, 0, 0.35, 1] as const;
/**
 * Feathered hole grows from the centre. Soft edge leads the radius with a
 * positive calc only — Safari drops the whole mask if a stop goes negative
 * (e.g. calc(0% - 1.5%)). REVEAL_END overshoots 100% so the edge clears corners.
 */
export const REVEAL_MASK =
  "radial-gradient(circle at 50% 50%, transparent var(--reveal), #000 calc(var(--reveal) + 1.5%))";
export const REVEAL_END = "104%";

export const MESSAGES = [
  { side: "incoming", text: "yoooo" },
  { side: "incoming", text: "who is rony?" },
  { side: "outgoing", text: "no clue" },
  { side: "outgoing", text: "who is he?" },
  { side: "incoming", text: "give it a second" },
] as const;

export const SOCIALS = [
  { href: "https://cal.com/ronykax", label: "Book a Call" },
  { href: "https://github.com/ronykax", label: "GitHub" },
  { href: "https://x.com/ronykax", label: "Twitter" },
  { href: "https://youtube.com/@ronykax", label: "YouTube" },
] as const;

export type Phase = "pre" | "post";
export type Side = "incoming" | "outgoing";

export interface ChatClock {
  seek: (time: number) => void;
}
