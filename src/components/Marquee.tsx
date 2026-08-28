export function Marquee({ items, speed = 26 }: { items: string[]; speed?: number }) {
  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-surface)] py-4">
      <div
        className="flex w-max gap-8 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-dim)]"
          >
            {item}
            <span className="text-[var(--color-blue)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
