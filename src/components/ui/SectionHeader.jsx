import FadeIn from "./FadeIn";

const propStyles = {
  underline: "h-[var(--decorative-line-height)] w-[var(--decorative-line-width)]",
  dot: "h-[var(--decorative-dot-size)] w-[var(--decorative-dot-size)] rounded-full",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleClassName = "",
  light = false,
  prop = null,
}) {
  const centered = align === "center";

  const headingColor = light
    ? "text-white"
    : "text-[var(--color-primary)]";

  const eyebrowColor = light
    ? "text-[var(--color-soft-accent)]"
    : "text-[var(--color-secondary)]";

  const descriptionColor = light
    ? "text-white/70"
    : "text-[var(--color-text-secondary)]";

  const propColor = light
    ? "bg-[var(--color-soft-accent)]"
    : "bg-[var(--color-secondary)]";

  return (
    <FadeIn
      className={`
        max-w-3xl
        ${centered ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <p
          className={`
            mb-4 text-xs font-semibold uppercase
            tracking-[0.24em] sm:text-sm sm:tracking-[0.32em]
            ${eyebrowColor}
          `}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`
          text-3xl font-black tracking-tight
          sm:text-4xl lg:text-5xl
          ${headingColor}
          ${titleClassName}
        `}
      >
        {title}
      </h2>

      {prop && propStyles[prop] && (
        <div
          aria-hidden="true"
          className={`
            mt-5
            ${propStyles[prop]}
            ${propColor}
            ${centered ? "mx-auto" : ""}
          `}
        />
      )}

      {description && (
        <p
          className={`
            mt-5 text-sm leading-7
            sm:text-base sm:leading-8 lg:text-lg
            ${descriptionColor}
          `}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}