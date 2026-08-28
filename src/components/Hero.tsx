import { useEffect, useRef, useState } from "react";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 40);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      const el = glowRef.current;
      if (!el) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 50;
      const y = (e.clientY / innerHeight - 0.5) * 50;
      el.style.transform = `translate(${x}px, ${y}px)`;
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-48 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />
      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 opacity-20 blur-[130px] transition-transform duration-500 ease-out"
        style={{ background: "radial-gradient(circle, var(--color-blue) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div
          className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-dim)] transition-all duration-700 ease-out"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(14px)" }}
        >
          Case studies & results
        </div>

        <h1
          className="mt-6 font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-white transition-all duration-700 ease-out sm:text-7xl md:text-8xl"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(24px)",
            transitionDelay: "80ms",
          }}
        >
          Harshdeep
          <br />
          <span className="text-[var(--color-blue-light)]">Singh Gill</span>
        </h1>

        <div
          className="mx-auto mt-10 h-px w-24 bg-[var(--color-blue)] transition-all duration-700 ease-out"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "220ms" }}
        />
      </div>
    </section>
  );
}
