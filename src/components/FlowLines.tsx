import { useEffect, useRef } from "react";

/**
 * Animated flowing connection lines — evokes pipelines/systems.
 * Distinct visual language from SphereCanvas: horizontal drifting
 * nodes linked by curved paths, rather than a rotating 3D form.
 */
export function FlowLines({
  className,
  nodeCount = 26,
  color = "14, 118, 255",
}: {
  className?: string;
  nodeCount?: number;
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

    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02,
      phase: Math.random() * Math.PI * 2,
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

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          if (n.x < -0.05) n.x = 1.05;
          if (n.x > 1.05) n.x = -0.05;
          if (n.y < -0.05) n.y = 1.05;
          if (n.y > 1.05) n.y = -0.05;
        }
      }

      const px = nodes.map((n) => ({
        x: n.x * width,
        y: n.y * height + Math.sin(elapsed * 0.5 + n.phase) * 12,
      }));

      const linkDist = Math.min(width, height) * 0.28;
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${color}, 0.12)`;
      ctx.beginPath();
      for (let i = 0; i < px.length; i++) {
        for (let j = i + 1; j < px.length; j++) {
          const dx = px[i].x - px[j].x;
          const dy = px[i].y - px[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.moveTo(px[i].x, px[i].y);
            ctx.lineTo(px[j].x, px[j].y);
          }
        }
      }
      ctx.stroke();

      for (const p of px) {
        ctx.fillStyle = `rgba(${color}, 0.5)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [nodeCount, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
