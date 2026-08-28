import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed inset-x-0 top-0 z-50 border-b bg-[var(--color-bg)] transition-[border-color] duration-300 ${
        scrolled ? "border-[var(--color-line)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Harshdeep Singh Gill
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-dim)] sm:flex">
          <a href="#work" className="underline-grow pb-0.5 transition-colors hover:text-white">
            Work
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] text-white sm:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-[var(--color-line)] bg-[var(--color-bg)] sm:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            <a
              href="#work"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.1em] text-[var(--color-dim)] transition-colors hover:bg-[var(--color-surface)] hover:text-white"
            >
              Work
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
