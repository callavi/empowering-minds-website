import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary: `
    bg-[var(--color-primary)]
    text-white
    shadow-[var(--shadow-warm)]
    hover:bg-[var(--color-rust-light)]
    hover:-translate-y-0.5
  `,

  secondary: `
    border border-[var(--color-border)]
    bg-[var(--color-surface)]
    text-[var(--color-secondary)]
    shadow-[var(--shadow-sm)]
    hover:border-[var(--color-primary)]
    hover:text-[var(--color-primary)]
    hover:-translate-y-0.5
  `,

  ghost: `
    border border-white/30
    bg-white/10
    text-white
    hover:bg-white/20
    hover:-translate-y-0.5
  `,
};

export default function CTAButton({
  as: Component = Link,
  to,
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  ...props
}) {
  const styles = variants[variant] ?? variants.primary;

  const destinationProps =
    Component === Link
      ? { to }
      : { href };

  return (
    <Component
      {...destinationProps}
      {...props}
      className={`
        group inline-flex w-full items-center justify-center
        gap-2 rounded-[var(--radius-pill)]
        px-5 py-3 text-center text-sm font-semibold
        transition duration-[var(--transition-base)]
        ease-[var(--ease-brand)]
        sm:w-auto sm:px-6
        ${styles}
        ${className}
      `}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="
            transition-transform
            duration-[var(--transition-fast)]
            group-hover:translate-x-1
          "
        />
      )}
    </Component>
  );
}