import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

const variants = {
  dark: {
    background: "[background-image:var(--gradient-primary)]",
    eyebrow: "text-[var(--color-soft-accent)]",
    description: "text-white/70",
    decoration:
      "bg-[var(--color-secondary)]/20",
  },

  brand: {
    background: "[background-image:var(--gradient-brand)]",
    eyebrow: "text-white/70",
    description: "text-white/75",
    decoration:
      "bg-white/10",
  },

  soft: {
    background: "[background-image:var(--gradient-soft)]",
    eyebrow: "text-[var(--color-secondary)]",
    title: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
    decoration:
      "bg-[var(--color-secondary)]/10",
  },
};

export default function CTASection({
  title,
  description,
  eyebrow = "Let’s build what’s next",
  primaryLabel = "Schedule a consultation",
  primaryTo = "/contact",
  secondaryLabel = "Browse programs",
  secondaryTo = "/programs",
  variant = "dark",
}) {
  const styles = variants[variant] ?? variants.dark;
  const isLight = variant === "soft";

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn
          className={`
            relative isolate overflow-hidden
            rounded-[var(--radius-xl)]
            px-6 py-10
            shadow-[var(--shadow-xl)]
            sm:rounded-[36px] sm:px-10 sm:py-14
            lg:px-14 lg:py-16
            ${styles.background}
          `}
        >
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute -right-16 -top-16
              h-48 w-48 rounded-full blur-3xl
              ${styles.decoration}
            `}
          />

          <div
            aria-hidden="true"
            className={`
              pointer-events-none absolute -bottom-20 left-1/3
              h-40 w-40 rounded-full blur-3xl
              ${styles.decoration}
            `}
          />

          <div
            className={`
              relative flex flex-col gap-10
              lg:flex-row lg:items-center lg:justify-between
              lg:gap-12
            `}
          >
            <div className="max-w-2xl">
              <p
                className={`
                  text-xs font-semibold uppercase
                  tracking-[0.24em]
                  sm:text-sm sm:tracking-[0.32em]
                  ${styles.eyebrow}
                `}
              >
                {eyebrow}
              </p>

              <h2
                className={`
                  mt-4 text-3xl font-black tracking-tight
                  sm:text-4xl lg:text-5xl
                  ${isLight ? styles.title : "text-white"}
                `}
              >
                {title}
              </h2>

              <p
                className={`
                  mt-5 max-w-xl text-sm leading-7
                  sm:text-base sm:leading-8
                  ${styles.description}
                `}
              >
                {description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <CTAButton to={primaryTo} variant="primary">
                {primaryLabel}
              </CTAButton>

              <CTAButton
                to={secondaryTo}
                variant={isLight ? "secondary" : "ghost"}
              >
                {secondaryLabel}
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}