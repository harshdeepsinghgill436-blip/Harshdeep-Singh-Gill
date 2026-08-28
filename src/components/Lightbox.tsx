import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { X } from "lucide-react";

type LightboxState = { src: string; alt: string } | null;

const LightboxContext = createContext<(img: { src: string; alt: string }) => void>(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<LightboxState>(null);

  const show = useCallback((img: { src: string; alt: string }) => setOpen(img), []);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <LightboxContext.Provider value={show}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-full max-w-full animate-[lightbox-in_0.2s_cubic-bezier(0.16,1,0.3,1)_both] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}
