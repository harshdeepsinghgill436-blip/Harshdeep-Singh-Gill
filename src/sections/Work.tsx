import { ArrowUpRight } from "lucide-react";
import highSociety from "@/assets/work/high-society.jpg";
import ledgerline from "@/assets/work/ledgerline.jpg";
import smallBizTalks from "@/assets/work/smallbiztalks.jpg";
import zes from "@/assets/work/zes.jpg";

const PROJECTS = [
  {
    name: "High Society",
    role: "Full platform — designed, built, and scaled solo",
    img: highSociety,
    stats: ["20 new members in the first 3 weeks", "Private branded app shipped", "New affiliate channel stood up"],
    desc: "A Discord-style community platform built from the ground up — job board, marketplace, and learning center — using Telegram as the persistent storage backend.",
    tags: ["React", "TypeScript", "Vite", "Full-stack"],
  },
  {
    name: "Ledgerline",
    role: "Multi-wallet crypto dashboard",
    img: ledgerline,
    stats: ["6 deal types in one tool", "Every field recalculates live", "Cap rate, cash flow, CoC return, 1% rule"],
    desc: "A real estate deal-analysis and portfolio tool — every number recalculates instantly as inputs change, built for people actually running the numbers on properties.",
    tags: ["React", "Alchemy API", "CoinGecko API"],
  },
  {
    name: "Small Business Talks",
    role: "Lead-gen funnel & content system for client Drew Knapp",
    img: smallBizTalks,
    stats: ["Real client moved page 3 to page 1 in 3 weeks", "21 media items packaged per feature", "Published on a DA 60 host site"],
    desc: "A full media and lead-gen funnel — the Local Visibility Score quiz, email sequences, and syndicated podcast/video placements built to rank small business clients fast.",
    tags: ["Funnel design", "SEO", "Email marketing"],
  },
  {
    name: "Z Email System",
    role: "Self-hosted cold email SaaS",
    img: zes,
    stats: ["AI lead parsing from raw text/CSV", "Unlimited sequenced follow-up steps", "Multi-client sub-accounts, self-hosted"],
    desc: "A cold-email automation tool sold as a one-time purchase instead of a subscription — self-hosted, so operators aren't renting a platform they don't own.",
    tags: ["Supabase", "Cron automation", "AI parsing"],
  },
];

export function Work() {
  return (
    <section id="work" className="relative border-t border-[var(--color-line)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
              Selected work
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-[var(--color-paper)] sm:text-5xl">
              Shipped, not{" "}
              <em className="italic text-[var(--color-signal-soft)]">mocked up</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[var(--color-paper-dim)]">
            Products and campaigns I built and ran myself — real users, real
            client results, real code in production.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-paper-dim)]"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-[var(--color-line)]">
                <img
                  src={p.img}
                  alt={`${p.name} product screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl text-[var(--color-paper)]">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-paper-dim)]">{p.role}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-[var(--color-paper-dim)] transition-colors group-hover:text-[var(--color-signal)]"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-paper-dim)]">
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-1.5 border-t border-[var(--color-line)] pt-5">
                  {p.stats.map((s) => (
                    <li
                      key={s}
                      className="flex items-baseline gap-2 font-mono text-xs text-[var(--color-mint)]"
                    >
                      <span className="text-[var(--color-signal)]">▸</span>
                      <span className="text-[var(--color-paper-dim)]">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-paper-dim)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
