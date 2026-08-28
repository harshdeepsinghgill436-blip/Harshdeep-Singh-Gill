import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-[var(--color-bg)] transition-[border-color] duration-300 ${
        scrolled ? "border-[var(--color-line)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4 sm:justify-start sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Harshdeep Singh Gill
        </a>
      </div>
    </header>
  );
}
