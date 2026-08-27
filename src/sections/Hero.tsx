import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

const DISCIPLINES = [
  { k: "MARKETING", d: "Google Search Ads, funnels, positioning" },
  { k: "SALES", d: "Offers, follow-up, closing systems" },
  { k: "BUILD", d: "SaaS, AI tooling, full-stack shipping" },
];

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
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      el.style.transform = `translate(${x}px, ${y}px)`;
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden />
      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-40 right-[-15%] h-[420px] w-[420px] rounded-full opacity-25 blur-[110px] transition-transform duration-500 ease-out sm:h-[560px] sm:w-[560px]"
        style={{ background: "radial-gradient(circle, var(--color-signal) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-paper-dim)] transition-all duration-700 ease-out"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-signal)] opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
          </span>
          Open to select partnerships
        </div>

        <h1
          className="mt-7 font-display text-[15vw] leading-[0.94] tracking-tight text-[var(--color-paper)] transition-all duration-700 ease-out sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(24px)",
            transitionDelay: "80ms",
          }}
        >
          Harshdeep
          <br />
          <span className="italic text-[var(--color-signal)]">Singh Gill.</span>
        </h1>

        <p
          className="mt-7 max-w-xl text-base leading-relaxed text-[var(--color-paper-dim)] transition-all duration-700 ease-out sm:text-xl"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transitionDelay: "180ms",
          }}
        >
          Growth partner for founders tired of stitching together a marketer,
          a closer, and a developer. I run the ad campaigns, build the sales
          system that turns leads into revenue, and ship the product itself —
          in code I write myself.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(16px)",
            transitionDelay: "280ms",
          }}
        >
          <Magnetic strength={0.4}>
            <a
              href="#work"
              className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)]"
            >
              See the work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3.5 text-sm text-[var(--color-paper)] transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)]"
            >
              Start a conversation
            </a>
          </Magnetic>
        </div>

        {/* Signature: three-discipline stack bar */}
        <div
          className="mt-16 grain-line border-t border-[var(--color-line)] pt-6 transition-all duration-700 ease-out sm:mt-20"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(16px)",
            transitionDelay: "380ms",
          }}
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {DISCIPLINES.map((d, i) => (
              <div key={d.k} className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-[var(--color-signal)]">0{i + 1}</span>
                <div>
                  <div className="font-mono text-sm tracking-[0.15em] text-[var(--color-paper)]">
                    {d.k}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-paper-dim)]">{d.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
