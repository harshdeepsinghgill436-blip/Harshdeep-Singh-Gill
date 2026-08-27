export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-line)]/60 bg-[var(--color-ink)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg tracking-tight text-[var(--color-paper)]">
          HSG
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-paper-dim)] sm:flex">
          <a href="#work" className="transition-colors hover:text-[var(--color-paper)]">
            Work
          </a>
          <a href="#approach" className="transition-colors hover:text-[var(--color-paper)]">
            Approach
          </a>
          <a href="#proof" className="transition-colors hover:text-[var(--color-paper)]">
            Proof
          </a>
          <a href="#contact" className="transition-colors hover:text-[var(--color-paper)]">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-[var(--color-line)] px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-paper)] transition-colors hover:border-[var(--color-paper-dim)]"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
