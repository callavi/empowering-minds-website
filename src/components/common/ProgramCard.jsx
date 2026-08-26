import { ArrowRight, Check } from "lucide-react";
import { createElement } from "react";
import { getIconFromName } from "../../utils/iconMap";

export default function ProgramCard({ program, onView }) {
  const {
    title,
    description,
    modules = [],
    price,
    priceLabel,
    ctaLabel = "Request a Callback",
    icon,
    serviceGroup,
  } = program;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-[0_18px_45px_rgba(35,66,78,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(35,66,78,0.09)]">
      {/* Brand accent */}
      <div
        aria-hidden="true"
        className="h-[4px] w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 55%, var(--color-muted) 100%)",
        }}
      />

      <div className="flex h-full flex-col p-6 sm:p-7">
        {/* Icon + service group */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
            {icon ? (
              createElement(getIconFromName(icon), {
                size: 22,
              })
            ) : (
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-secondary)]" />
            )}
          </div>

          {serviceGroup && (
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-soft-accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
              {serviceGroup.replaceAll("-", " ")}
            </span>
          )}
        </div>

        {/* Title + description */}
        <div className="mt-6">
          <h3 className="text-xl font-black tracking-tight text-[var(--color-primary)] sm:text-2xl">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* Development areas */}
        {modules.length > 0 && (
          <div className="mt-6 border-t border-[var(--color-border)] pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
              Development Areas
            </p>

            <ul className="mt-4 space-y-2.5">
              {modules.slice(0, 5).map((module) => (
                <li key={module} className="flex items-start gap-2.5">
                  <Check
                    size={15}
                    className="mt-1 shrink-0 text-[var(--color-secondary)]"
                  />

                  <span className="text-sm leading-6 text-[var(--color-primary)]">
                    {module}
                  </span>
                </li>
              ))}
            </ul>

            {modules.length > 5 && (
              <p className="mt-3 text-xs font-medium text-slate-500">
                + {modules.length - 5} more development areas
              </p>
            )}
          </div>
        )}

        {/* Price + CTA */}
        <div className="mt-auto pt-7">
          <div className="mb-5 border-t border-[var(--color-border)] pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Investment
            </p>

            <p className="mt-1 text-lg font-bold text-[var(--color-primary)]">
              {priceLabel || price || "Contact us"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onView(program)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--color-secondary)]"
          >
            {ctaLabel}

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </article>
  );
}