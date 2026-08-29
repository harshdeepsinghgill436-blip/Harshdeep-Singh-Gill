import { SphereCanvas } from "@/components/SphereCanvas";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-32 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />

      <SphereCanvas
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-70 sm:w-[85vw]"
        pointCount={260}
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
          Harshdeep
          <br />
          <span className="text-[var(--color-blue-light)]">Singh Gill</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-dim)] sm:text-lg">
          Growth partner for businesses. Sales, marketing, and the tech
          underneath — built into self-sustaining systems that keep
          growing without me in the room.
        </p>
      </div>
    </section>
  );
}
