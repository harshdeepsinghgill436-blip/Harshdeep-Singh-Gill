import { useEffect, useRef } from "react";

/** Concentric rings expanding outward from center, fading as they
 * grow — distinct pulse-wave motif for the video testimonial. */
export function RippleWaves({
  className,
  color = "14, 118, 255",
}: {
  className?: string;
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

    let raf = 0;
    let elapsed = 0;
    let lastT = 0;
    const ringCount = 4;
    const cycle = 3.2;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;

      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height * 0.42;
      const maxR = Math.max(width, height) * 0.6;

      for (let i = 0; i < ringCount; i++) {
        const phase = ((elapsed + (i * cycle) / ringCount) % cycle) / cycle;
        const r = phase * maxR;
        const alpha = (1 - phase) * 0.22;
        if (alpha <= 0.005) continue;
        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
