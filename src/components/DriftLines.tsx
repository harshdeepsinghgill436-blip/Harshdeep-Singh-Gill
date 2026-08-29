import { useEffect, useRef } from "react";

/** Soft diagonal light streaks drifting across the section —
 * distinct from orbit/pulse/flow/growth/scan/sphere. */
export function DriftLines({
  className,
  count = 8,
  color = "14, 118, 255",
}: {
  className?: string;
  count?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const streaks = Array.from({ length: count }, (_, i) => ({
      offset: i / count,
      speed: 0.05 + Math.random() * 0.04,
      width: 60 + Math.random() * 100,
    }));

    let raf = 0;
    let elapsed = 0;
    let lastT = 0;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;

      ctx.clearRect(0, 0, width, height);
      const diag = width + height;

      for (const s of streaks) {
        const pos = ((elapsed * s.speed + s.offset) % 1) * diag * 1.4 - height;
        const grad = ctx.createLinearGradient(pos, 0, pos + s.width, height);
        grad.addColorStop(0, `rgba(${color}, 0)`);
        grad.addColorStop(0.5, `rgba(${color}, 0.06)`);
        grad.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = grad;
        ctx.save();
        ctx.translate(pos, 0);
        ctx.transform(1, 0.6, 0, 1, 0, 0);
        ctx.fillRect(0, -height, s.width, height * 3);
        ctx.restore();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
