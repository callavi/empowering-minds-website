import { X } from "lucide-react";
import { createElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIconFromName } from "../../utils/iconMap";

export default function ProgramModal({ program, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!program) {
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
  }, [program, onClose]);

  const outcomes = Array.isArray(program?.outcomes) ? program.outcomes : [];

  if (!program) {
    return null;
  }

  const whatsappText = `Hello Empowering Minds,\nI am interested in:\n${program.title}\n\nPlease share more details.`;
  const whatsappUrl = `https://wa.me/919794278786?text=${encodeURIComponent(whatsappText)}`;

  const handleEnquireNow = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--color-primary)]/35 px-3 py-4 backdrop-blur-[3px] sm:px-4 sm:py-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-[24px] bg-white shadow-2xl sm:rounded-[32px]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${program.title} details`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition hover:bg-[var(--color-background)] sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          aria-label="Close program details"
        >
          <X size={18} />
        </button>

        <div className="hide-scrollbar max-h-[90vh] overflow-y-auto p-5 pr-4 sm:p-8 sm:pr-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[var(--color-soft-accent)] text-[var(--color-secondary)] sm:h-16 sm:w-16 sm:rounded-[24px]">
            {createElement(getIconFromName(program.icon), { size: 28 })}
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
            {program.category}
          </p>
          <h3 className="mt-3 pr-12 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
            {program.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {program.description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Price
              </p>
              <p className="mt-3 font-semibold text-[var(--color-primary)]">{program.price}</p>
            </div>
            <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Audience
              </p>
              <p className="mt-3 font-semibold text-[var(--color-primary)]">{program.audience}</p>
            </div>
            <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Format
              </p>
              <p className="mt-3 font-semibold text-[var(--color-primary)]">{program.format}</p>
            </div>
            <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Duration
              </p>
              <p className="mt-3 font-semibold text-[var(--color-primary)]">{program.duration}</p>
            </div>
            <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Start Date
              </p>
              <p className="mt-3 font-semibold text-[var(--color-primary)]">{program.startDate}</p>
            </div>
            <div className="rounded-[20px] bg-[var(--color-background)] p-4 sm:rounded-[24px] sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Next start
              </p>
              <p className="mt-3 font-semibold text-[var(--color-primary)]">{program.startDate}</p>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-background)] p-4 sm:rounded-[28px] sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Outcomes
            </p>
            <div className="mt-4 space-y-3">
              {outcomes.map((outcome) => (
                <p
                  key={outcome}
                  className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  {outcome}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleEnquireNow}
              className="flex w-full items-center justify-center rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Enquire Now
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-center text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-background)]"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
