import { ArrowRight, CalendarDays} from "lucide-react";
import { createElement } from "react";
import { getIconFromName } from "../../utils/iconMap";

export default function ProgramCard({ program, onView }) {
  return (
    <div className="flex h-full min-h-[400px] w-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[420px]">
      <div
  className="h-[4px] w-full"
  style={{
    background:
      "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 55%, var(--color-muted) 100%)",
  }}
/>

      <div className="flex h-full flex-col p-4 sm:p-5">
        <div className="rounded-lg bg-[var(--color-soft-accent)] py-4">
  <div className="flex justify-center">
    {createElement(getIconFromName(program.icon), {
      size: 22,
      className: "text-[var(--color-secondary)]",
    })}
  </div>
</div>

        <div className="mt-3">
          <span className="inline-flex max-w-full rounded-full border border-[var(--color-border)] bg-[var(--color-soft-accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
            {program.category}
          </span>
        </div>

        <h3 className="mt-4 min-h-[64px] text-base font-semibold leading-6 text-[var(--color-primary)] sm:min-h-[72px] sm:text-lg">
          {program.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#666]">
          {program.description}
        </p>

        <div className="mt-3 min-h-[68px] space-y-1 text-sm leading-6 text-[#666]">
          <p>{program.price}</p>
          <p>{program.duration}</p>
        </div>

        <div className="my-3 border-t border-gray-200" />

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="min-w-0 flex-1 text-xs font-medium text-[#555]">
            <div className="flex items-center gap-1">
            <CalendarDays size={14} />
              <span className="break-words">{program.startDate}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onView(program)}
            className="shrink-0 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)] transition-opacity hover:opacity-80"
          >
            <span className="inline-flex items-center gap-1">
              View
              <ArrowRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
