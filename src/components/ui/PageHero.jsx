import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Talk to us", to: "/contact" },
  secondaryCta = { label: "Explore programs", to: "/programs" },
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-primary)] pt-28 text-white sm:pt-32">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:var(--gradient-primary)]"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 -top-32
          h-[420px] w-[420px]
          rounded-full
          border border-white/10
          bg-[var(--color-secondary)]/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-40 -left-20
          h-[360px] w-[360px]
          rounded-full
          bg-[var(--color-soft-accent)]/10
          blur-3xl
        "
      />

      {/* Decorative ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[8%] top-[22%]
          hidden h-32 w-32
          rounded-full
          border border-[var(--color-secondary)]/30
          sm:block
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <FadeIn className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-[var(--decorative-line-height)] w-[var(--decorative-line-width)] rounded-full bg-[var(--color-secondary)]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-soft-accent)] sm:text-sm sm:tracking-[0.32em]">
              {eyebrow}
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
            {description}
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <CTAButton to={primaryCta.to} variant="primary">
              {primaryCta.label}
            </CTAButton>

            <CTAButton to={secondaryCta.to} variant="ghost">
              {secondaryCta.label}
            </CTAButton>
          </div>
        </FadeIn>

        {/* Bottom accent */}
        <div
          aria-hidden="true"
          className="
            mt-16 h-px w-full
            bg-gradient-to-r
            from-white/15
            via-white/5
            to-transparent
            sm:mt-20
          "
        />
      </div>
    </section>
  );
}