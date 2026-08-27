import CTAButton from "./CTAButton";
import FadeIn from "./FadeIn";

export default function CTASection({
  title,
  description,
  primaryLabel = "Schedule a consultation",
  primaryTo = "/contact",
  secondaryLabel = "Browse programs",
  secondaryTo = "/programs",
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="overflow-hidden rounded-[28px] bg-[var(--color-primary)] px-5 py-10 text-white shadow-[0_28px_70px_rgba(35,66,78,0.18)] sm:rounded-[36px] sm:px-8 sm:py-12 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)] sm:text-sm sm:tracking-[0.32em]">
                Let&apos;s build what&apos;s next
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <CTAButton to={primaryTo} variant="primary">
                {primaryLabel}
              </CTAButton>
              <CTAButton to={secondaryTo} variant="ghost">
                {secondaryLabel}
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
