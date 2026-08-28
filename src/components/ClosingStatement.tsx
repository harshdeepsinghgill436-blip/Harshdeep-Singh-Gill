import { GrowthField } from "@/components/GrowthField";
import { Quote } from "lucide-react";

export function ClosingStatement() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)] py-24 sm:py-32">
      <GrowthField className="pointer-events-none absolute inset-0 h-full w-full opacity-50" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <div className="glow-card relative rounded-2xl border border-[var(--color-blue)]/20 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-2)] p-8 sm:p-14">
          <Quote size={26} className="text-[var(--color-blue)]" />
          <p className="font-quote mt-5 text-[1.75rem] font-normal italic leading-[1.15] tracking-tight text-white sm:text-[2.35rem]">
            One person built every case study above — strategy, build, and
            follow-through, with nothing lost in the handoff between them.
            That's what a growth partner means: not cheaper because steps
            get skipped, faster because none do.
          </p>
          <div className="mt-8 flex items-center gap-3 border-t border-[var(--color-line)] pt-6">
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-blue)] to-transparent" />
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-blue-light)]">
              Harshdeep Singh Gill
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
