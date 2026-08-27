const PILLARS = [
  {
    tag: "Marketing",
    title: "Finding the buyer, not just the click",
    body: "I run Gills Marketing Agency, building Google Search Ads systems and funnels for HVAC contractors — positioning, landing pages, and the follow-up that turns a click into a booked job.",
  },
  {
    tag: "Sales",
    title: "The system that closes what marketing brings in",
    body: "Traffic without a close is wasted spend. I build the offer, the follow-up sequences, and the sales motion around the leads — so the funnel doesn't leak between 'interested' and 'paid.'",
  },
  {
    tag: "Build",
    title: "AI, SaaS, and the tooling underneath it all",
    body: "I write the code myself — React, TypeScript, Supabase, AI-powered tooling. When a business needs the actual product built, not just marketed, I build that too, end to end.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative border-t border-[var(--color-line)] py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
            Why one person
          </div>
          <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-tight text-[var(--color-paper)] sm:text-5xl">
            Most growth work fails at the{" "}
            <em className="italic text-[var(--color-signal-soft)]">handoffs</em>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-paper-dim)] sm:text-lg">
            The marketer doesn't understand the funnel. The funnel builder
            doesn't understand the code. The developer doesn't understand the
            offer. Every handoff is where good work goes to die — so I
            collapsed the handoffs. I run all three.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:mt-16 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.tag}
              className="card-tilt group relative bg-[var(--color-ink)] p-7 sm:p-8"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-mint)]">
                {p.tag}
              </div>
              <h3 className="underline-grow mt-4 inline font-display text-xl leading-snug text-[var(--color-paper)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-paper-dim)]">
                {p.body}
              </p>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--color-signal)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
