"use client";

import Aurora from "@/components/react-bits/aurora";
import Grainient from "@/components/react-bits/grainient";

export function PreBackdrop({ progress }: { progress: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
    >
      <Aurora
        amplitude={0.5 + progress * 0.2}
        blend={1}
        colorStops={["#A855F7", "#B497CF", "#5227FF"]}
        speed={0.75 + progress * 3}
      />
    </div>
  );
}

export function PostBackdrop({ beatPulse }: { beatPulse: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full">
        <Grainient
          blendAngle={0}
          blendSoftness={0.05}
          centerX={0}
          centerY={0}
          className="opacity-75"
          color1="#bc95ff"
          color2="#ffffff"
          color3="#b68bff"
          colorBalance={0}
          contrast={1}
          gamma={1}
          grainAmount={0.08}
          grainAnimated={false}
          grainScale={2}
          noiseScale={2}
          rotationAmount={500}
          saturation={1}
          timeSpeed={10}
          warpAmplitude={50}
          warpFrequency={5}
          warpSpeed={2}
          warpStrength={1}
          zoom={1}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(23, 23, 23, ${beatPulse * 0.04}), transparent)`,
        }}
      />
    </div>
  );
}
