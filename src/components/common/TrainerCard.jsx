import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TrainerCard({
  trainer,
  onViewProfile,
  profilePath,
}) {
  const visibleExpertise = trainer.expertise?.slice(0, 4) || [];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Trainer Image */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[var(--color-primary)]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Soft image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Role */}
        {trainer.role && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {trainer.role}
          </p>
        )}

        {/* Name */}
        <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
          {trainer.name}
        </h3>

        {/* Designation */}
        {trainer.designation && (
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
            {trainer.designation}
          </p>
        )}

        {/* Expertise */}
        {visibleExpertise.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {visibleExpertise.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-6">
            {profilePath ? (
            <Link
                to={profilePath}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
                View profile
                <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </Link>
            ) : (
            <button
                type="button"
                onClick={() => onViewProfile?.(trainer)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
                View profile
                <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </button>
            )}
        </div>
      </div>
    </article>
  );
}