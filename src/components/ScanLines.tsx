import { useEffect, useRef } from "react";

/** Horizontal scan bands sweeping downward with a trailing glow —
 * distinct mechanical/broadcast feel vs the organic motifs. */
export function ScanLines({
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
    const bandCount = 3;
    const cycle = 5;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < bandCount; i++) {
        const phase = ((elapsed + (i * cycle) / bandCount) % cycle) / cycle;
        const y = phase * height;
        const grad = ctx.createLinearGradient(0, y - 60, 0, y + 60);
        grad.addColorStop(0, `rgba(${color}, 0)`);
        grad.addColorStop(0.5, `rgba(${color}, 0.12)`);
        grad.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, y - 60, width, 120);

        ctx.strokeStyle = `rgba(${color}, 0.35)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // faint static grid dots
      const spacing = 60;
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          ctx.fillStyle = `rgba(${color}, 0.08)`;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
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
