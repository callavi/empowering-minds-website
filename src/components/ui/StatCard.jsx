import FadeIn from "./FadeIn";

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <FadeIn
      delay={delay}
      className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_45px_rgba(35,66,78,0.08)]"
    >
      <p className="text-4xl font-black tracking-tight text-[var(--color-primary)]">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
    </FadeIn>
  );
}
