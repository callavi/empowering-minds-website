export default function HumanPotentialVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[520px]"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute inset-[15%] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

      <svg
        viewBox="0 0 520 520"
        className="relative h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer structure */}
        <circle
          cx="260"
          cy="260"
          r="205"
          stroke="var(--color-border)"
          strokeWidth="1"
        />

        <circle
          cx="260"
          cy="260"
          r="165"
          stroke="var(--color-secondary)"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="5 8"
        />

        <circle
          cx="260"
          cy="260"
          r="125"
          stroke="var(--color-primary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Connecting system */}
        <path
          d="M260 135V205M260 315V385M135 260H205M315 260H385"
          stroke="var(--color-primary)"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        <path
          d="M171 171L220 220M349 171L300 220M171 349L220 300M349 349L300 300"
          stroke="var(--color-secondary)"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        {/* Secondary connections */}
        <path
          d="M260 135L349 171L385 260L349 349L260 385L171 349L135 260L171 171L260 135Z"
          stroke="var(--color-secondary)"
          strokeOpacity="0.16"
          strokeWidth="1"
        />

        {/* Outer nodes */}
        {[
          [260, 135],
          [349, 171],
          [385, 260],
          [349, 349],
          [260, 385],
          [171, 349],
          [135, 260],
          [171, 171],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="6"
            fill="var(--color-background)"
            stroke="var(--color-secondary)"
            strokeWidth="2"
          />
        ))}

        {/* Inner nodes */}
        {[
          [220, 220],
          [300, 220],
          [220, 300],
          [300, 300],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            fill="var(--color-primary)"
          />
        ))}

        {/* Central structure */}
        <circle
          cx="260"
          cy="260"
          r="62"
          fill="var(--color-primary)"
        />

        <circle
          cx="260"
          cy="260"
          r="62"
          stroke="var(--color-secondary)"
          strokeOpacity="0.5"
          strokeWidth="2"
        />

        <circle
          cx="260"
          cy="260"
          r="46"
          stroke="white"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        {/* Central mark */}
        <path
          d="M260 228C244 228 232 241 232 257C232 270 239 280 249 286V295H271V286C281 280 288 270 288 257C288 241 276 228 260 228Z"
          fill="var(--color-secondary)"
        />

        <path
          d="M249 300H271M251 307H269"
          stroke="var(--color-secondary)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Centre label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mt-1 text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
            Human
          </p>
          <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-white">
            Potential
          </p>
        </div>
      </div>

      {/* Supporting labels */}
      <div className="absolute left-0 top-[27%] rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
        Psychology
      </div>

      <div className="absolute right-0 top-[27%] rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
        Behaviour
      </div>

      <div className="absolute bottom-[22%] left-[4%] rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
        Emotional Intelligence
      </div>

      <div className="absolute bottom-[22%] right-[4%] rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
        Performance
      </div>
    </div>
  );
}