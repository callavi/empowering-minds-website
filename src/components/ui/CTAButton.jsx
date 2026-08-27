import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTAButton({
  to = "/contact",
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-[var(--color-secondary)] text-white hover:bg-[#8d5728] shadow-[0_16px_35px_rgba(169,106,45,0.22)]",
    secondary:
      "border border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-background)]",
    ghost:
      "border border-white/25 bg-white/10 text-white hover:bg-white/20",
  };

  return (
    <Link
      to={to}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition sm:w-auto sm:px-6 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );

}
