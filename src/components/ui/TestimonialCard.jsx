import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

export default function TestimonialCard({ quote, name, role, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="h-full rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_45px_rgba(35,66,78,0.05)] sm:p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
        <Quote size={20} />
      </div>
      <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{quote}</p>
      <div className="mt-6">
        <p className="font-bold text-[var(--color-primary)]">{name}</p>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </FadeIn>
  );
}
