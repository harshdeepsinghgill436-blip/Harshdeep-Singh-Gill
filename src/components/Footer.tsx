export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <div className="font-mono text-xs text-[var(--color-dimmer)]">
          © {new Date().getFullYear()} Harshdeep Singh Gill. All rights reserved.
        </div>
        <div className="mt-2 font-mono text-[10px] leading-relaxed text-[var(--color-dimmer)]">
          This site and its content — design, code, case studies, and testimonials —
          may not be copied, reproduced, or reused without written permission.
        </div>
      </div>
    </footer>
  );
}
