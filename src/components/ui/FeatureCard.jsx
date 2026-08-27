import FadeIn from "./FadeIn";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  delay = 0,
}) {
  return (
    <FadeIn
      delay={delay}
      className={`h-full rounded-[28px] border border-[var(--color-border)] bg-[var(--color-background)] p-5 shadow-[0_18px_45px_rgba(35,66,78,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(169,106,45,0.12)] sm:p-6 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
        <Icon size={26} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-[var(--color-primary)] sm:text-xl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </FadeIn>
  );
}
