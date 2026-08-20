import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary: `
    bg-[var(--color-secondary)]
    text-white
    shadow-[var(--shadow-warm)]
    hover:bg-[#8d5728]
    hover:-translate-y-0.5
  `,

  secondary: `
    border border-[var(--color-border)]
    bg-[var(--color-surface)]
    text-[var(--color-primary)]
    shadow-[var(--shadow-sm)]
    hover:bg-[var(--color-background)]
    hover:-translate-y-0.5
  `,

  ghost: `
    border border-white/25
    bg-white/10
    text-white
    hover:bg-white/20
    hover:-translate-y-0.5
  `,
};

export default function CTAButton({
  to = "/contact",
  children,
  variant = "primary",
  className = "",
}) {
  const styles = variants[variant] ?? variants.primary;

  return (
    <Link
      to={to}
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

      <ArrowRight
        size={16}
        className="
          transition-transform
          duration-[var(--transition-fast)]
          group-hover:translate-x-1
        "
      />
    </Link>
  );
}