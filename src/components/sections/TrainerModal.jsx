import { X } from "lucide-react";
import { useEffect } from "react";

export default function TrainerModal({ trainer, onClose }) {
  useEffect(() => {
    if (!trainer) {
      return undefined;
    }

    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [trainer, onClose]);

  if (!trainer) {
    return null;
  }

  const expertise = Array.isArray(trainer.expertise) ? trainer.expertise : [];
  const highlights = Array.isArray(trainer.highlights) ? trainer.highlights : [];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--color-primary)]/35 px-3 py-4 backdrop-blur-[3px] sm:px-4 sm:py-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[24px] bg-white shadow-2xl sm:rounded-[32px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${trainer.name} details`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition hover:bg-[var(--color-background)] sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          aria-label="Close trainer details"
        >
          <X size={18} />
        </button>

        <div className="hide-scrollbar max-h-[90vh] overflow-y-auto p-5 pr-4 sm:p-8 sm:pr-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-background)]">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-72 w-full object-cover sm:h-[360px] lg:h-full lg:min-h-[420px]"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                {trainer.role}
              </p>
              <h3 className="mt-3 pr-12 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
                {trainer.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {trainer.fullBio}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Experience
                  </p>
                  <p className="mt-3 font-semibold leading-7 text-[var(--color-primary)]">
                    {trainer.experience}
                  </p>
                </div>

                <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Expertise
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {expertise.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--color-primary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-background)] p-4 sm:rounded-[28px] sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                  Highlights
                </p>
                <div className="mt-4 space-y-3">
                  {highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
