import { Quote } from "lucide-react";
import testimonialDrew from "@/assets/work/testimonial-drew.jpg";
import testimonialDiscord from "@/assets/work/testimonial-discord.jpg";

const QUOTES = [
  {
    quote: "I've been impressed so far with his depth of knowledge and technical capabilities building our platform from the ground up.",
    name: "Drew Knapp",
    context: "Founder & CEO, A Greater Town",
    img: testimonialDrew,
  },
  {
    quote: "I find this very useful and valuable.",
    name: "Daniel",
    context: "DH Marketing",
  },
  {
    quote: "Y'all are some professionals, dayum.",
    name: "Magou",
    context: "Community member, High Society",
    img: testimonialDiscord,
  },
];

export function Proof() {
  return (
    <section id="proof" className="relative border-t border-[var(--color-line)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
          Proof, not promises
        </div>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-[var(--color-paper)] sm:text-5xl">
          Unscripted, from the people I've{" "}
          <em className="italic text-[var(--color-signal-soft)]">built with</em>.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-ink-soft)] p-7"
            >
              <Quote size={20} className="text-[var(--color-signal)]" />
              <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-[var(--color-paper)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--color-line)] pt-4">
                <div className="text-sm font-medium text-[var(--color-paper)]">{t.name}</div>
                <div className="font-mono text-xs text-[var(--color-paper-dim)]">{t.context}</div>
              </figcaption>
              {t.img && (
                <div className="mt-4 overflow-hidden rounded-lg border border-[var(--color-line)]">
                  <img src={t.img} alt={`Message from ${t.name}`} loading="lazy" className="w-full object-cover" />
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
