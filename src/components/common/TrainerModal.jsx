import { useEffect } from "react";
import { X } from "lucide-react";

export default function TrainerModal({ trainer, onClose }) {
  useEffect(() => {
    if (!trainer) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [trainer, onClose]);

  useEffect(() => {
    if (!trainer) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [trainer]);

  if (!trainer) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trainer-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close trainer profile"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-[var(--color-surface)] shadow-2xl sm:flex-row">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[var(--color-text)] backdrop-blur-sm transition-colors hover:bg-black/20"
        >
          <X size={20} strokeWidth={1.8} />
        </button>

        {/* Image */}
        <div className="h-72 shrink-0 bg-[var(--color-primary)] sm:h-auto sm:w-[38%]">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10">
          {trainer.role && (
            <p className="pr-12 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              {trainer.role}
            </p>
          )}

          <h2
            id="trainer-modal-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            {trainer.name}
          </h2>

          {trainer.designation && (
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
              {trainer.designation}
            </p>
          )}

          {/* Bio */}
          {trainer.bio && (
            <div className="mt-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
                About
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                {trainer.bio}
              </p>
            </div>
          )}

          {/* Expertise */}
          {trainer.expertise?.length > 0 && (
            <div className="mt-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
                Areas of Expertise
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {trainer.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}