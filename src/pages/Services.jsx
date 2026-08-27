import { serviceGroups } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function Services() {
  return (
    <main>
      <PageHero
        // eyebrow="Services"
        title="Development solutions for people, leaders, students, and institutions"
        description="Explore the core service areas we use to build confidence, capability, and long-term impact."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Service Areas"
            title="Designed for transformation at every level"
            description="Each service area can be delivered as a workshop, series, bootcamp, cohort, or customized intervention."
          />
          <div className="mt-12 space-y-8">
            {serviceGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <FadeIn
                  key={group.id}
                  delay={index * 0.05}
                  className="rounded-[32px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_45px_rgba(35,66,78,0.05)] sm:p-8"
                  id={group.id}
                >
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
                        <Icon size={26} />
                      </div>
                      <h2 className="mt-5 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
                        {group.title}
                      </h2>
                      <p className="mt-4 text-base leading-8 text-slate-600">
                        {group.description}
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {group.services.map((service) => (
                        <div
                          key={service}
                          className="rounded-[24px] bg-[var(--color-background)] p-4 text-sm font-semibold text-[var(--color-primary)] sm:p-5"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a customized intervention for your team or institution?"
        description="We can tailor delivery formats, cohorts, and outcomes around your exact development goals."
      />
    </main>
  );
}
