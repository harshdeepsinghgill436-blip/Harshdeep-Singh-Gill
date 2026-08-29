import { SnowField } from "@/components/SnowField";
import { Quote } from "lucide-react";

export function ClosingStatement() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)] py-24 sm:py-32">
      <SnowField className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <div className="glow-card relative rounded-2xl border border-[var(--color-blue)]/20 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-2)] p-8 sm:p-14">
          <Quote size={26} className="text-[var(--color-blue)]" />
          <p className="mt-5 text-2xl font-medium leading-snug tracking-tight text-white sm:text-[2rem]">
            A growth partner is worth an entire team. I combine high-level
            sales and marketing with the underlying tech to build
            self-sustaining profit loops that compound without me in the
            room.
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
