import FadeIn from "./FadeIn";

const variants = {
  default: {
    card: `
      border border-[var(--color-border)]
      bg-[var(--color-background)]
      shadow-[var(--shadow-lg)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-warm)]
    `,
    icon: `
      bg-[var(--color-soft-accent)]
      text-[var(--color-secondary)]
    `,
    title: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
  },

  minimal: {
    card: `
      bg-transparent
      hover:-translate-y-1
    `,
    icon: `
      bg-[var(--color-soft-accent)]
      text-[var(--color-secondary)]
    `,
    title: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
  },

  accent: {
    card: `
      border border-[var(--color-secondary)]
      bg-[var(--gradient-soft)]
      shadow-[var(--shadow-md)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-warm)]
    `,
    icon: `
      bg-[var(--color-secondary)]
      text-white
    `,
    title: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
  },
  dark: {
    card: `
      [background-image:var(--gradient-primary)]
      shadow-[var(--shadow-dark)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-warm)]
    `,
    icon: `
      bg-white/10
      text-[var(--color-soft-accent)]
    `,
    title: "text-white",
    description: "text-white/70",
  },

  horizontal: {
    card: `
      border border-[var(--color-border)]
      bg-[var(--color-surface)]
      shadow-[var(--shadow-sm)]
      hover:-translate-y-1
      hover:shadow-[var(--shadow-md)]
    `,
    icon: `
      shrink-0
      bg-[var(--color-soft-accent)]
      text-[var(--color-secondary)]
    `,
    title: "text-[var(--color-primary)]",
    description: "text-[var(--color-text-secondary)]",
  },
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  delay = 0,
  variant = "default",
}) {
  const styles = variants[variant] ?? variants.default;
  const horizontal = variant === "horizontal";

  return (
    <FadeIn
      delay={delay}
      className={`
        h-full rounded-[var(--radius-xl)]
        p-5 transition duration-[var(--transition-base)]
        sm:p-6
        ${styles.card}
        ${className}
      `}
    >
      <div
        className={`
          flex gap-4
          ${horizontal ? "items-start" : "flex-col"}
        `}
      >
        {Icon && (
          <div
            className={`
              flex h-14 w-14 items-center justify-center
              rounded-[var(--radius-lg)]
              ${styles.icon}
            `}
          >
            <Icon size={26} strokeWidth={1.8} />
          </div>
        )}

        <div className={horizontal ? "min-w-0" : ""}>
          <h3
            className={`
              text-lg font-bold tracking-tight sm:text-xl
              ${styles.title}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              mt-3 text-sm leading-7
              ${styles.description}
            `}
          >
            {description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}