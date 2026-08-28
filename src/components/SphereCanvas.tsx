import { useEffect, useRef } from "react";

/**
 * A rotating wireframe sphere rendered on Canvas 2D — points distributed
 * via a Fibonacci sphere, connected by proximity, projected with simple
 * perspective. No WebGL dependency; runs at native resolution with DPR
 * scaling and respects prefers-reduced-motion.
 */
export function SphereCanvas({
  className,
  pointCount = 220,
  radius = 1,
  color = "14, 118, 255",
}: {
  className?: string;
  pointCount?: number;
  radius?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fibonacci sphere point distribution
    const points: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < pointCount; i++) {
      const y = 1 - (i / (pointCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

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

    let angleY = 0;
    let angleX = 0.3;
    let raf = 0;
    let lastT = 0;

    function frame(t: number) {
      if (!ctx || !canvas) return;
      const dt = lastT ? (t - lastT) / 1000 : 0;
      lastT = t;
      if (!reduceMotion) angleY += dt * 0.18;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.42 * radius;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected = points.map((p) => {
        // rotate Y then X
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;
        const perspective = 1 / (2 - z2);
        return {
          x: cx + x1 * scale * perspective,
          y: cy + y1 * scale * perspective,
          z: z2,
        };
      });

      // connect nearby points — only check a local index window, since
      // Fibonacci sphere ordering keeps consecutive indices spatially
      // close. Avoids an O(n²) pass every frame.
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = `rgba(${color}, 0.1)`;
      ctx.beginPath();
      const window = Math.min(14, projected.length - 1);
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let k = 1; k <= window; k++) {
          const j = i + k;
          if (j >= projected.length) break;
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < scale * 0.32) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();

      // draw points, brighter when facing viewer
      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        const alpha = 0.25 + depth * 0.55;
        const size = 0.8 + depth * 1.4;
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [pointCount, radius, color]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
