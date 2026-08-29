import { useEffect, useRef } from "react";

/** Small twinkling stars scattered across the section. */
export function StarField({
  className,
  count = 70,
  color = "255, 255, 255",
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

    const stars = Array.from({ length: count }, () => ({
      x: Math.random(), y: Math.random(),
      size: 0.6 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
      speed: 1 + Math.random() * 1.5,
    }));

    let raf = 0, elapsed = 0, lastT = 0;
    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = Math.sin(elapsed * s.speed + s.phase) * 0.4 + 0.6;
        ctx.fillStyle = `rgba(${color}, ${0.5 * twinkle})`;
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [count, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
