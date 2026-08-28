import { useRef, useState } from "react";
import { Play } from "lucide-react";

export function VideoTestimonial({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    const v = ref.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  }

  return (
    <section className="relative border-y border-[var(--color-line)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-blue)]">
          Straight from a client
        </div>
        <p className="mt-2 text-sm text-[var(--color-dim)]">Recorded, unscripted, on camera.</p>

        <div className="card-hover group relative mx-auto mt-8 aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]">
          <video
            ref={ref}
            src={src}
            poster={poster}
            controls={playing}
            playsInline
            className="h-full w-full object-cover"
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />
          {!playing && (
            <button
              type="button"
              onClick={play}
              aria-label="Play client testimonial video"
              className="absolute inset-0 grid place-items-center bg-black/25 transition-colors hover:bg-black/40"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-blue)] text-white shadow-[0_10px_40px_-8px_rgba(14,118,255,0.7)] transition-transform group-hover:scale-110">
                <Play size={24} fill="currentColor" className="translate-x-0.5" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
