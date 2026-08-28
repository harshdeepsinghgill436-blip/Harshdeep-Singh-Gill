export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <div className="font-mono text-xs text-[var(--color-dimmer)]">
          © {new Date().getFullYear()} Harshdeep Singh Gill
        </div>
      </div>
    </footer>
  );
}
