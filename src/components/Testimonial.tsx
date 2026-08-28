import { Quote } from "lucide-react";

export function Testimonial({
  quote,
  name,
  context,
  img,
}: {
  quote: string;
  name: string;
  context: string;
  img?: string;
}) {
  return (
    <section className="relative border-y border-[var(--color-line)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Quote size={28} className="mx-auto text-[var(--color-blue)]" />
        <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
          "{quote}"
        </blockquote>
        <div className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-dim)]">
          {name} — {context}
        </div>
        {img && (
          <div className="card-hover mx-auto mt-8 max-w-sm overflow-hidden rounded-xl border border-[var(--color-line)]">
            <img src={img} alt={`Message from ${name}`} loading="lazy" className="w-full object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}
