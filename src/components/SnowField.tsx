import { useEffect, useRef } from "react";

/** Tiny blue snowflakes drifting upward with a gentle sway — replaces
 * round "orb" particles with a distinct 6-point flake shape. */
export function SnowField({
  className,
  count = 55,
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

    const flakes = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.02 + Math.random() * 0.035,
      size: 4.5 + Math.random() * 5,
      sway: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.6,
    }));

    let raf = 0, elapsed = 0, lastT = 0;

    function drawFlake(x: number, y: number, size: number, angle: number, alpha: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(angle);
      ctx!.strokeStyle = `rgba(${color}, ${alpha})`;
      ctx!.lineWidth = Math.max(1, size * 0.16);
      for (let i = 0; i < 3; i++) {
        ctx!.beginPath();
        ctx!.moveTo(-size, 0);
        ctx!.lineTo(size, 0);
        ctx!.stroke();
        ctx!.rotate(Math.PI / 3);
      }
      ctx!.restore();
    }

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;
      ctx.clearRect(0, 0, width, height);

      for (const f of flakes) {
        if (!reduceMotion) {
          f.y -= f.speed * dt;
          f.rotation += f.spin * dt;
          if (f.y < -0.05) {
            f.y = 1.05;
            f.x = Math.random();
          }
        }
        const swayX = Math.sin(elapsed * 0.6 + f.sway) * 0.015;
        const alpha = 0.35 + Math.sin(elapsed * 1.2 + f.sway) * 0.2;
        drawFlake(
          (f.x + swayX) * width,
          f.y * height,
          f.size,
          f.rotation,
          Math.max(0.15, alpha)
        );
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [count, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
