import { useEffect, useRef } from "react";

/** Small dots orbiting slowly around a fixed center — distinct from
 * sphere/flow/growth/pulse: circular motion, not drift or waves. */
export function OrbitDots({
  className,
  count = 24,
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

    const dots = Array.from({ length: count }, (_, i) => ({
      ring: i % 3,
      offset: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.15,
      size: 1 + Math.random() * 1.8,
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
      const cx = width / 2;
      const cy = height / 2;
      const baseR = Math.min(width, height) * 0.32;

      for (const d of dots) {
        const r = baseR * (0.5 + d.ring * 0.25);
        const angle = elapsed * d.speed * (d.ring % 2 === 0 ? 1 : -1) + d.offset;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r * 0.55;
        ctx.fillStyle = `rgba(${color}, 0.5)`;
        ctx.beginPath();
        ctx.arc(x, y, d.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let ring = 0; ring < 3; ring++) {
        const r = baseR * (0.5 + ring * 0.25);
        ctx.strokeStyle = `rgba(${color}, 0.08)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.55, 0, 0, Math.PI * 2);
        ctx.stroke();
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
