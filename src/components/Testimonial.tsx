import { Quote } from "lucide-react";
import { useLightbox } from "@/components/Lightbox";

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
  const showLightbox = useLightbox();
  const alt = `Message from ${name}`;

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
          <button
            type="button"
            onClick={() => showLightbox({ src: img, alt })}
            className="card-hover zoomable mx-auto mt-8 block max-w-sm overflow-hidden rounded-xl border border-[var(--color-line)]"
            aria-label={`View full message from ${name}`}
          >
            <img src={img} alt={alt} loading="lazy" className="w-full object-contain" />
          </button>
        )}
      </div>
    </section>
  );
}
