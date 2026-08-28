import { PulseGrid } from "@/components/PulseGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-48 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />

      <PulseGrid className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
          Harshdeep
          <br />
          <span className="text-[var(--color-blue-light)]">Singh Gill</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-dim)] sm:text-lg">
          Growth partner for businesses. Sales, marketing, and the tech
          underneath both — built into self-sustaining systems that keep
          growing without me in the room.
        </p>
      </div>
    </section>
  );
}
