import { SphereCanvas } from "@/components/SphereCanvas";

export function ClosingStatement() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)] py-24 sm:py-32">
      <SphereCanvas
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        pointCount={180}
        radius={0.9}
      />
      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
          I don't work like a consultant who hands over a report and
          leaves. I work as a{" "}
          <span className="text-[var(--color-blue-light)]">growth partner</span>{" "}
          — in the business, building the systems myself, until they run
          and grow on their own.
        </p>
      </div>
    </section>
  );
}
