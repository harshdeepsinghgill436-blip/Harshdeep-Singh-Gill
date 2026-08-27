import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--color-line)] bg-[var(--color-ink)] shadow-lg shadow-black/20"
          : "border-transparent bg-gradient-to-b from-[var(--color-ink)]/70 to-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg tracking-tight text-[var(--color-paper)]">
          HSG
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-paper-dim)] sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-[var(--color-paper)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--color-signal)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-[var(--color-line)] px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-paper)] transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-signal)] sm:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-paper)] sm:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-ink)] sm:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.1em] text-[var(--color-paper-dim)] transition-colors hover:bg-[var(--color-ink-soft)] hover:text-[var(--color-paper)]"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
