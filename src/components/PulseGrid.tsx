import { useEffect, useRef } from "react";

/**
 * A soft grid of pulsing dots with organic, staggered breathing —
 * intentionally loose and non-mechanical (unlike the wireframe
 * sphere) for use in the hero where rigidity reads as cold.
 */
export function PulseGrid({
  className,
  spacing = 46,
  color = "14, 118, 255",
}: {
  className?: string;
  spacing?: number;
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
    const cx0 = 0.5;
    const cy0 = 0.4;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dx = x / width - cx0;
          const dy = y / height - cy0;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(elapsed * 0.6 - dist * 6) * 0.5 + 0.5;
          const falloff = Math.max(0, 1 - dist * 1.3);
          const alpha = wave * falloff * 0.35;
          if (alpha < 0.01) continue;
          const size = 0.8 + wave * falloff * 1.6;
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
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
  }, [spacing, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
