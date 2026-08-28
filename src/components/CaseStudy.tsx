type Shot = { src: string; caption: string };
type Stat = { value: string; label: string };

export function CaseStudy({
  eyebrow,
  title,
  titleAccent,
  description,
  stats,
  shots,
  tags,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  stats: Stat[];
  shots: Shot[];
  tags: string[];
}) {
  return (
    <section id={eyebrow.toLowerCase().replace(/\s+/g, "-")} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-blue)]">
          {eyebrow}
        </div>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
          {title} <span className="text-[var(--color-blue-light)]">{titleAccent}</span>
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-dim)] sm:text-lg">
          {description}
        </p>

        {/* Stat row */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--color-surface)] p-4 sm:p-5">
              <div className="font-display text-xl font-semibold text-[var(--color-blue-light)] sm:text-2xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-[var(--color-dim)]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Screenshot grid — small, uncropped cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {shots.map((shot) => (
            <figure
              key={shot.caption}
              className="card-hover overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)]"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[var(--color-surface-2)] p-2">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <figcaption className="border-t border-[var(--color-line)] px-3 py-2.5 text-[11px] leading-snug text-[var(--color-dim)]">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-dim)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
