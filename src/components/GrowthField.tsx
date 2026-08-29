import { useEffect, useRef } from "react";

/**
 * An upward-drifting particle field with a faint rising-line motif —
 * evokes "growth" directly. Distinct from SphereCanvas (3D rotation)
 * and FlowLines (drifting horizontal nodes): particles here move
 * upward and fade, like a live chart trending up.
 */
export function GrowthField({
  className,
  count = 60,
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

    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.015 + Math.random() * 0.025,
      size: 1 + Math.random() * 2.2,
      drift: (Math.random() - 0.5) * 0.15,
    }));

    let raf = 0;
    let lastT = 0;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reduceMotion) {
          p.y -= p.speed * dt;
          p.x += p.drift * dt * 0.1;
          if (p.y < -0.05) {
            p.y = 1.05;
            p.x = Math.random();
          }
        }
        const alpha = 0.25 + (1 - Math.abs(p.y - 0.5) * 1.4) * 0.35;
        ctx.fillStyle = `rgba(${color}, ${Math.max(0.06, alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // faint rising diagonal reference line
      ctx.strokeStyle = `rgba(${color}, 0.08)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.85);
      ctx.lineTo(width, height * 0.15);
      ctx.stroke();

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
