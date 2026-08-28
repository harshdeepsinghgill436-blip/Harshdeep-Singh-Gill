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
          A marketing agency, a sales team, and a dev shop each solve one
          piece — and lose time and context at every handoff between them.
          What's above is <span className="text-[var(--color-blue-light)]">one person</span>{" "}
          who ran the ads, built the funnel, and shipped the product,
          across four completely different businesses. That's not
          breadth for its own sake — it's why nothing here got lost in
          translation on the way from strategy to something that ships.
        </p>
      </div>
    </section>
  );
}
