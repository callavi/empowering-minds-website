import { empowerUContent } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function EmpowerU() {
  return (
    <main>
      <PageHero
        eyebrow="Empower U"
        title={empowerUContent.heroTitle}
        description={empowerUContent.heroDescription}
        primaryCta={{ label: "Enquire now", to: "/contact" }}
        secondaryCta={{ label: "Browse programs", to: "/programs" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What Is Empower U"
            title="A practical platform for growth, readiness, and self-development"
            description={empowerUContent.intro}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {[
              "Confidence",
              "Communication",
              "Mindset",
              "Employability",
              "Leadership readiness",
            ].map((item, index) => (
              <FadeIn
                key={item}
                delay={index * 0.05}
                className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 text-sm font-semibold text-[var(--color-primary)] shadow-sm"
              >
                {item}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Focus Areas"
            title="Built around the capabilities that create momentum"
            description="Empower U can be adapted for campus, cohort, and early-career audiences without losing practical relevance."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {empowerUContent.focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <FadeIn
                  key={area.title}
                  delay={index * 0.06}
                  className="rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[var(--color-primary)]">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {area.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn className="rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeader
                eyebrow="Who It Is For"
                title="Created for learners stepping into bigger opportunities"
                description="Empower U supports people who want to build confidence, sharpen readiness, and grow into stronger professional roles."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {empowerUContent.audienceGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2 text-sm font-medium text-[var(--color-primary)]"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn
              delay={0.08}
              className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm sm:p-8"
            >
              <SectionHeader
                eyebrow="Delivery Formats"
                title="Flexible formats for different learning environments"
                description="The initiative can be delivered as a short-format intervention or a more structured developmental journey."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {empowerUContent.deliveryFormats.map((format) => (
                  <div
                    key={format}
                    className="rounded-[24px] bg-white p-5 text-sm font-semibold text-[var(--color-primary)] shadow-sm"
                  >
                    {format}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in bringing Empower U to your learners or teams?"
        description="Reach out to explore workshops, cohorts, bootcamps, and institution-specific Empower U interventions."
        primaryLabel="Ask about Empower U"
        primaryTo="/contact"
        secondaryLabel="See all programs"
        secondaryTo="/programs"
      />
    </main>
  );
}
