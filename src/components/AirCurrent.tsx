import { useEffect, useRef } from "react";

/** Subtle flowing air-current lines — soft horizontal wisps drifting
 * sideways, distinct from particle-based motifs (no dots/orbs). */
export function AirCurrent({
  className,
  strands = 6,
  color = "14, 118, 255",
}: {
  className?: string;
  strands?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const lines = Array.from({ length: strands }, (_, i) => ({
      baseY: (i + 0.5) / strands,
      speed: 0.04 + Math.random() * 0.04,
      amp: 0.03 + Math.random() * 0.03,
      freq: 1.2 + Math.random() * 1.3,
      offset: Math.random() * Math.PI * 2,
    }));

    let raf = 0, elapsed = 0, lastT = 0;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;
      ctx.clearRect(0, 0, width, height);

      for (const l of lines) {
        ctx.beginPath();
        const points = 40;
        for (let i = 0; i <= points; i++) {
          const px = (i / points) * width;
          const wave =
            Math.sin((i / points) * Math.PI * l.freq + elapsed * l.speed * 6 + l.offset) *
            l.amp *
            height;
          const py = l.baseY * height + wave;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(${color}, 0.1)`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [strands, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
