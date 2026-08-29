import { useEffect, useRef } from "react";

/** Static-ish spiderweb of connected nodes, gently breathing —
 * distinct from FlowLines (nodes drift freely here they're anchored
 * with a subtle sway). */
export function WebLines({
  className,
  count = 22,
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

    const nodes = Array.from({ length: count }, () => ({
      bx: Math.random(), by: Math.random(),
      phase: Math.random() * Math.PI * 2,
    }));

    let raf = 0, elapsed = 0, lastT = 0;
    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      if (!reduceMotion) elapsed += dt;
      ctx.clearRect(0, 0, width, height);

      const px = nodes.map((n) => ({
        x: (n.bx + Math.sin(elapsed * 0.3 + n.phase) * 0.01) * width,
        y: (n.by + Math.cos(elapsed * 0.25 + n.phase) * 0.01) * height,
      }));

      const linkDist = Math.min(width, height) * 0.32;
      ctx.strokeStyle = `rgba(${color}, 0.12)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < px.length; i++) {
        for (let j = i + 1; j < px.length; j++) {
          const dx = px[i].x - px[j].x, dy = px[i].y - px[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < linkDist) {
            ctx.moveTo(px[i].x, px[i].y);
            ctx.lineTo(px[j].x, px[j].y);
          }
        }
      }
      ctx.stroke();

      ctx.fillStyle = `rgba(${color}, 0.5)`;
      for (const p of px) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [count, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
