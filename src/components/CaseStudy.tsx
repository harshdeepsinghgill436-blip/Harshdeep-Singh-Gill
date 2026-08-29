import { Expand } from "lucide-react";
import { useLightbox } from "@/components/Lightbox";
import { SphereCanvas } from "@/components/SphereCanvas";
import { FlowLines } from "@/components/FlowLines";
import { GrowthField } from "@/components/GrowthField";
import { PulseGrid } from "@/components/PulseGrid";

type Shot = { src: string; caption: string };
type Stat = { value: string; label: string };

export function CaseStudy({
  eyebrow,
  title,
  titleAccent,
  description,
  stats,
  shots,
  bg = "flow",
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  stats?: Stat[];
  shots: Shot[];
  /** Which subtle animated background motif this section uses. */
  bg?: "flow" | "sphere" | "growth" | "pulse";
}) {
  const showLightbox = useLightbox();

  return (
    <section
      id={eyebrow.toLowerCase().replace(/\s+/g, "-")}
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {bg === "flow" && (
        <FlowLines className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
      )}
      {bg === "sphere" && (
        <SphereCanvas
          className="pointer-events-none absolute right-[-10%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 opacity-30"
          pointCount={140}
          radius={0.85}
        />
      )}
      {bg === "growth" && (
        <GrowthField className="pointer-events-none absolute inset-0 h-full w-full opacity-40" count={40} />
      )}
      {bg === "pulse" && (
        <PulseGrid className="pointer-events-none absolute inset-0 h-full w-full opacity-50" />
      )}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-blue)]">
          {eyebrow}
        </div>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
          {title} <span className="text-[var(--color-blue-light)]">{titleAccent}</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-dim)] sm:text-lg">
          {description}
        </p>

        {/* Stat row — numbered, Sharplink-style */}
        {stats && stats.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="bg-[var(--color-surface)] p-4 sm:p-5">
                <div className="font-mono text-[10px] text-[var(--color-blue)]">0{i + 1}</div>
                <div className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-[var(--color-dim)]">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-10 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-dimmer)]">
          <Expand size={11} /> Tap any screenshot to zoom in
        </p>

        {/* Screenshot grid — small, uncropped, tap to zoom */}
        <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {shots.map((shot) => (
            <figure
              key={shot.caption}
              className="card-hover overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)]"
            >
              <button
                type="button"
                onClick={() => showLightbox({ src: shot.src, alt: shot.caption })}
                className="zoomable group relative flex aspect-[4/3] w-full items-center justify-center bg-[var(--color-surface-2)] p-2"
                aria-label={`Zoom: ${shot.caption}`}
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                  <Expand size={13} />
                </span>
              </button>
              <figcaption className="border-t border-[var(--color-line)] px-3 py-2.5 text-[11px] leading-snug text-[var(--color-dim)]">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
