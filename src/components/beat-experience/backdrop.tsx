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
        amplitude={0.35 + progress * 0.075}
        blend={1}
        colorStops={["#7cff67", "#B497CF", "#5227FF"]}
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
          color1="#fcc0fb"
          color2="#7d5dfc"
          color3="#d5bbed"
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
