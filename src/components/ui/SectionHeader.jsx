import FadeIn from "./FadeIn";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeIn className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)] sm:text-sm sm:tracking-[0.32em]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
