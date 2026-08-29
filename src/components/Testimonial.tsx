import { Quote, Expand } from "lucide-react";
import { useLightbox } from "@/components/Lightbox";
import { DriftLines } from "@/components/DriftLines";

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
    <section className="relative overflow-hidden border-y border-[var(--color-line)] py-20 sm:py-28">
      <DriftLines className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
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
            className="card-hover zoomable group relative mx-auto mt-8 flex aspect-[4/3] w-full max-w-[220px] items-center justify-center overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-2"
            aria-label={`View full message from ${name}`}
          >
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
              <Expand size={13} />
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
