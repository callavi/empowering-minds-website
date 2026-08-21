import { Brain, Briefcase, Check, ArrowUpRight,HeartHandshake, Network } from "lucide-react";
import { serviceGroups } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import FeatureCard from "../components/ui/FeatureCard";

const developmentAreas = [
  {
    icon: Brain,
    title: "Mindset & Performance",
    description:
      "Building emotional regulation, resilience, focus, confidence, and the ability to sustain performance under pressure.",
  },
  {
    icon: Briefcase,
    title: "Professional & Corporate Skills",
    description:
      "Strengthening communication, workplace effectiveness, professional behaviour, and practical skills for modern organisations.",
  },
  {
    icon: Network,
    title: "Cognitive & Leadership Development",
    description:
      "Developing decision-making, leadership maturity, strategic thinking, and the cognitive capabilities needed for effective performance.",
  },
  {
    icon: HeartHandshake,
    title: "Interpersonal & Instructional Techniques",
    description:
      "Improving interpersonal effectiveness, communication, classroom engagement, and practical approaches to learning and development.",
  },
];

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Human capital development built around real outcomes"
        description="We design structured development interventions for educational institutions and corporate organisations, combining behavioural, emotional, and performance-focused capabilities."
      />
      {/* Core Development Areas */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Development Areas"
            title="Development that goes beyond technical skills"
            description="Our work brings together performance, emotional intelligence, communication, leadership, behavioural alignment, and practical professional skills."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {developmentAreas.map((area, index) => (
              <FeatureCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                variant="dark"
                delay={index * 0.06}
                className="min-h-[180px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      {serviceGroups.map((group, groupIndex) => {
        const AudienceIcon = group.icon;

        return (
          <section
            key={group.id}
            id={group.id}
            className={
              groupIndex % 2 === 0
                ? "bg-white py-16 sm:py-20 lg:py-24"
                : "bg-[var(--color-background)] py-16 sm:py-20 lg:py-24"
            }
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Audience introduction */}
              <FadeIn>
                <div className="flex items-start justify-between gap-8">
                  <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                      {group.eyebrow}
                    </p>

                    <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                      {group.title}
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                      {group.description}
                    </p>
                  </div>

                  <div
                    className="
                      hidden h-16 w-16 shrink-0 items-center justify-center
                      rounded-[22px]
                      bg-[var(--color-soft-accent)]
                      text-[var(--color-secondary)]
                      sm:flex
                    "
                  >
                    <AudienceIcon size={29} />
                  </div>
                </div>
              </FadeIn>

              {/* Service areas */}
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {group.areas.map((area, areaIndex) => (
                  <FadeIn
                    key={area.id}
                    delay={areaIndex * 0.06}
                    className="
                      h-full rounded-[32px]
                      border border-[var(--color-border)]
                      bg-white
                      p-6
                      shadow-[0_18px_45px_rgba(35,66,78,0.05)]
                      sm:p-8
                    "
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className="
                          mt-1 shrink-0
                          text-sm font-bold tracking-[0.15em]
                          text-[var(--color-secondary)]
                        "
                      >
                        {String(areaIndex + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-black tracking-tight text-[var(--color-primary)]">
                            {area.title}
                          </h3>

                          <ArrowUpRight
                            size={21}
                            className="
                              mt-1 shrink-0
                              text-[var(--color-secondary)]
                            "
                          />
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    {/* Development areas */}
                    <div className="mt-7 border-t border-[var(--color-border)] pt-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                        Development Areas
                      </p>
                      <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {area.modules.map((module) => (
                          <li key={module} className="flex items-start gap-3">
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-[var(--color-secondary)]"
                            />

                            <span className="text-sm leading-6 text-[var(--color-primary)]">
                              {module}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      {/* Delivery */}
      <section className="relative overflow-hidden [background-image:var(--gradient-brand)] py-20 sm:py-24 lg:py-32">
        {/* Ambient brand glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 -top-32
            h-96 w-96 rounded-full
            bg-[var(--color-secondary)]/10
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-40 -left-32
            h-96 w-96 rounded-full
            bg-white/5
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Our Approach
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Structured development.
                <br />
                <span className="text-white/60">
                  Measurable performance.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                We do not simply conduct workshops. Our interventions are
                structured around institutional and organisational objectives,
                with a focus on behavioural alignment, resilience, capability,
                and sustainable performance.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-16 bg-[var(--color-secondary)]" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  Human Capital Development
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Looking for a development intervention?"
        description="Tell us about your institution, organisation, or development goals and we can explore the right approach together."
      />
    </main>
  );
}