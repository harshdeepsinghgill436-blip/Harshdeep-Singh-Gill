import { GrowthField } from "@/components/GrowthField";

export function ClosingStatement() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)] py-24 sm:py-32">
      <GrowthField className="pointer-events-none absolute inset-0 h-full w-full opacity-50" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <div className="glow-blue rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-12">
          <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
            "Everything on this page is something I built and ran myself —
            the ads, the funnel, the product. I'm not the cheaper option
            because I skip steps. I'm the faster one, because there's no
            handoff between the person who plans the growth and the person
            who builds it."
          </p>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-blue-light)]">
            — Harshdeep Singh Gill
          </div>
        </div>
      </div>
    </section>
  );
}
