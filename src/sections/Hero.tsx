import { ArrowUpRight } from "lucide-react";

const DISCIPLINES = [
  { k: "MARKETING", d: "Google Search Ads, funnels, positioning" },
  { k: "SALES", d: "Offers, follow-up, closing systems" },
  { k: "BUILD", d: "SaaS, AI tooling, full-stack shipping" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 noise"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-signal) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rise flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
          </span>
          Available for select partnerships
        </div>

        <h1
          className="rise mt-8 font-display text-[13vw] leading-[0.95] tracking-tight text-[var(--color-paper)] sm:text-7xl md:text-8xl lg:text-[7rem]"
          style={{ animationDelay: "80ms" }}
        >
          Harshdeep
          <br />
          <span className="italic text-[var(--color-signal)]">Singh Gill.</span>
        </h1>

        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-paper-dim)] sm:text-xl"
          style={{ animationDelay: "150ms" }}
        >
          I'm a growth partner — not a marketer who outsources the build, and
          not a developer who outsources the strategy. I run the marketing,
          close the sales, and build the product myself. One person, the
          whole stack.
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3.5 text-sm text-[var(--color-paper)] transition-colors hover:border-[var(--color-paper-dim)]"
          >
            Start a conversation
          </a>
        </div>

        {/* Signature element: the three-discipline stack bar */}
        <div
          className="rise mt-20 grain-line border-t border-[var(--color-line)] pt-6"
          style={{ animationDelay: "300ms" }}
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {DISCIPLINES.map((item, i) => (
              <div key={item.k} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--color-signal)]">
                  0{i + 1}
                </span>
                <div>
                  <div className="font-mono text-sm tracking-[0.15em] text-[var(--color-paper)]">
                    {item.k}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-paper-dim)]">
                    {item.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
