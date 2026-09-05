import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TrainerCard({
  trainer,
  onViewProfile,
  profilePath,
  featured = false,
}) {
  const visibleExpertise = trainer.expertise?.slice(0, featured ? 6 : 4) || [];

  return (
    <article
      className={`
        group flex h-full overflow-hidden rounded-3xl
        border border-[var(--color-border)]
        bg-[var(--color-surface)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${featured ? "lg:flex-row" : "flex-col"}
      `}
    >
      {/* Trainer Image */}
      <div
        className={`
          relative overflow-hidden bg-[var(--color-primary)]
          ${featured
            ? "aspect-[4/4.5] lg:aspect-auto lg:w-[38%]"
            : "aspect-[4/4.5]"}
        `}
      >
        <img
          src={trainer.image}
          alt={trainer.name}
          className="
            h-full w-full object-cover object-top
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`
          flex flex-1 flex-col
          ${featured ? "p-7 sm:p-9 lg:p-10" : "p-6 sm:p-7"}
        `}
      >
        {/* Featured label */}
        {featured && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Founder & Lead Trainer
          </p>
        )}

        {/* Role */}
        {trainer.role && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            {trainer.role}
          </p>
        )}

        {/* Name */}
        <h3
          className={`
            font-semibold tracking-tight text-[var(--color-text-secondary)]
            ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}
          `}
        >
          {trainer.name}
        </h3>

        {/* Designation */}
        {trainer.designation && (
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
            {trainer.designation}
          </p>
        )}

        {/* Featured Bio */}
        {featured && trainer.bio && (
          <p className="mt-5 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
            {trainer.bio}
          </p>
        )}

        {/* Expertise */}
        {visibleExpertise.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {visibleExpertise.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border border-[var(--color-border)]
                  bg-[var(--color-background)]
                  px-3 py-1.5
                  text-xs font-medium
                  text-[var(--color-text-muted)]
                "
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
              className="
                inline-flex items-center gap-2
                text-sm font-semibold
                text-[var(--color-text-secondary)]
                transition-colors duration-200
                hover:text-[var(--color-primary)]
              "
            >
              View profile
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => onViewProfile?.(trainer)}
              className="
                inline-flex items-center gap-2
                text-sm font-semibold
                text-[var(--color-text-secondary)]
                transition-colors duration-200
                hover:text-[var(--color-primary)]
              "
            >
              View profile
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}