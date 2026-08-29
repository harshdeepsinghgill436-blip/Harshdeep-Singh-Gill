import { useEffect, useRef } from "react";

/** Warm rising embers drifting upward with flicker — distinct from
 * DriftLines' diagonal streaks. */
export function EmberField({
  className,
  count = 40,
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

    const embers = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.03 + Math.random() * 0.05,
      flicker: Math.random() * Math.PI * 2,
      size: 1 + Math.random() * 2,
    }));

    let raf = 0;
    let lastT = 0;
    let elapsed = 0;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;

      ctx.clearRect(0, 0, width, height);

      for (const e of embers) {
        if (!reduceMotion) {
          e.y -= e.speed * dt;
          if (e.y < -0.05) {
            e.y = 1.05;
            e.x = Math.random();
          }
        }
        const flick = Math.sin(elapsed * 3 + e.flicker) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(${color}, ${0.3 * flick})`;
        ctx.beginPath();
        ctx.arc(e.x * width, e.y * height, e.size, 0, Math.PI * 2);
        ctx.fill();
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
