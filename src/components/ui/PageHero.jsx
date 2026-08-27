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
    <section className="relative overflow-hidden bg-[var(--color-primary)] pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(169,106,45,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(232,213,209,0.22),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeIn className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] sm:text-sm sm:tracking-[0.32em]">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 lg:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <CTAButton to={primaryCta.to} variant="primary">
              {primaryCta.label}
            </CTAButton>
            <CTAButton to={secondaryCta.to} variant="ghost">
              {secondaryCta.label}
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
