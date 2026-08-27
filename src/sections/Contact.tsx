import { ArrowUpRight, Mail, ExternalLink } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-[var(--color-line)] py-24 sm:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[50vh] -translate-y-1/2 opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(50% 60% at 50% 50%, var(--color-signal), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-signal)]">
          Let's talk
        </div>
        <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-[var(--color-paper)] sm:text-7xl">
          Got something to{" "}
          <em className="italic text-[var(--color-signal-soft)]">grow</em>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-paper-dim)] sm:text-lg">
          Whether it's the marketing, the sales system, or the product
          itself that's missing — tell me where you're stuck.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={0.3}>
            <a
              href="mailto:harshdeepsinghgill436@gmail.com"
              className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-[var(--color-signal)] px-6 py-4 text-sm font-semibold text-[var(--color-ink)] sm:px-8 sm:text-base"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">harshdeepsinghgill436@gmail.com</span>
              <span className="sm:hidden">Email me</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a
              href="https://github.com/harshdeepsinghgill436-blip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-4 text-sm text-[var(--color-paper)] transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] sm:px-8 sm:text-base"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="font-mono text-xs text-[var(--color-paper-dim)]">
          © {new Date().getFullYear()} Harshdeep Singh Gill
        </div>
        <div className="font-mono text-xs text-[var(--color-paper-dim)]">
          Marketing · Sales · Build
        </div>
      </div>
    </footer>
  );
}
