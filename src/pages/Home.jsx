import { useState } from "react";
import {
  empowerUContent,
  homepageSections,
  impactStats,
  testimonials,
  trainers,
} from "../data/siteContent";
import ProgramsCarousel from "../components/sections/ProgramsCarousel";
import TrainerModal from "../components/sections/TrainerModal";
import CTAButton from "../components/ui/CTAButton";
import CTASection from "../components/ui/CTASection";
import FeatureCard from "../components/ui/FeatureCard";
import FadeIn from "../components/ui/FadeIn";
import SectionHeader from "../components/ui/SectionHeader";
import StatCard from "../components/ui/StatCard";
import TestimonialCard from "../components/ui/TestimonialCard";

const heroOverlayOpacity = 0.2;
const heroGradientOpacity = {
  from: 0.5,
  via: 0.66,
  to: 0.88,
};

export default function Home() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <main>
      <section
        className="relative overflow-hidden bg-[var(--color-primary)] pt-32 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-[var(--color-primary)]"
          style={{ opacity: heroOverlayOpacity }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-primary)]"
          style={{
            opacity: 1,
            backgroundImage: `linear-gradient(to bottom, rgba(35, 66, 78, ${heroGradientOpacity.from}), rgba(35, 66, 78, ${heroGradientOpacity.via}), rgba(35, 66, 78, ${heroGradientOpacity.to}))`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FadeIn className="max-w-2xl">
              <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:mt-8 sm:text-5xl lg:text-6xl">
                Where Human{" "}
                <span className="text-[var(--color-secondary)]">Potential</span>
                .
                <br />
                Meets{" "}
                <span className="text-[var(--color-secondary)]">
                  Structured Development
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
                We design structured developmental interventions aligned with
                measurable institutional and organisational outcomes. We do not
                only conduct workshops. We engineer ecosystems which transform
                employees into performance multipliers leading to enhanced
                productivity & accelerated profits
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <CTAButton to="/programs">Explore Programs</CTAButton>
                <CTAButton to="/contact" variant="ghost">
                  Schedule Consultation
                </CTAButton>
              </div>

              {/* <div className="mt-16 grid gap-4 sm:grid-cols-3">
                {impactStats.slice(0, 3).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-200">
                      {stat.label}
                    </p>
                    <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div> */}
            </FadeIn>

            {/* <FadeIn delay={0.1} className="relative">
              <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-[#00000030] backdrop-blur-xl sm:p-8">
                <div className="rounded-[24px] bg-white/95 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                    Live cohort
                  </p>
                  <h2 className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
                    Certified Learning & Development Manager
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Modern learning strategies for HR, L&D, and executive
                    development with practical, human-centered training tools.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[var(--color-background)] p-4 text-sm text-slate-600">
                      <p className="font-semibold text-[var(--color-primary)]">â‚¹29,500 + 18% GST</p>
                    </div>
                    <div className="rounded-3xl bg-[var(--color-background)] p-4 text-sm text-slate-600">
                      <p className="font-semibold text-[var(--color-primary)]">
                        04 Weeks Live Â· 06 Weeks Blended
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </section>

      <ProgramsCarousel />

      {/* <section className="border-y border-[#DCECF5] bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Trusted by institutions and people teams
            </p>
            <div className="grid gap-4 text-sm font-semibold text-[var(--color-primary)] sm:grid-cols-3 lg:grid-cols-6">
              {trustedPartners.map((partner) => (
                <div key={partner} className="rounded-full bg-[var(--color-background)] px-4 py-3 text-center">
                  {partner}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section> */}

      <section className="bg-[var(--color-background)] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <p className="mb-4 text-lg font-semibold tracking-[0.2em] text-[var(--color-secondary)] sm:text-2xl sm:tracking-[0.3em]">
                Who We Are
              </p>

              <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {homepageSections.whoWeAre}
              </p>

              <h3 className="mt-4 text-xl font-bold text-[var(--color-primary)] sm:text-2xl">
                {homepageSections.intersectionIntro}
              </h3>

              <div className="mt-4 space-y-3">
                {homepageSections.intersectionAreas.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-soft-accent)]">
                      <item.icon className="h-5 w-5 text-[var(--color-secondary)]" />
                    </div>

                    <span className="text-base font-semibold text-[var(--color-primary)] sm:text-lg">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-[10px] bg-[var(--color-muted)]/30 blur-3xl sm:-right-6 sm:-top-6 sm:h-32 sm:w-32" />

                <div className="overflow-hidden rounded-[15px] border border-[var(--color-border)] bg-white shadow-[0_28px_70px_rgba(35,66,78,0.12)]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                    alt="Empowering Minds"
                    className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[450px]"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Discover Our Approach"
            title="Transformation that starts with clarity and ends in action"
          />
          <FadeIn className="mt-8 max-w-3xl">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              {homepageSections.approachIntro}
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {homepageSections.approachPillars.map((pillar, index) => (
              <FeatureCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Testimonials"
            title="What our partners say about the experience"
            description="Stories from institutions and teams who have seen stronger confidence, alignment, and growth."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.name} {...item} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Impact"
            title="Measurable growth across people, programs, and partnerships"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Trainer Profile"
            title="Meet the experts behind every learning experience"
            description="Our facilitators combine behavioural insight, practical frameworks, and delivery experience across institutions and teams."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {trainers.map((trainer, index) => (
              <FadeIn
                key={trainer.id}
                delay={index * 0.08}
                className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setSelectedTrainer(trainer)}
                  className="block w-full cursor-pointer text-left"
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                      {trainer.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-[var(--color-primary)]">
                      {trainer.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {trainer.shortBio}
                    </p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 flex justify-start">
            <CTAButton to="/trainer-profile" variant="ghost">
              Explore Trainer Profile
            </CTAButton>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Empower U"
            title="A signature initiative for personal and professional growth"
            description={empowerUContent.intro}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn className="rounded-[32px] bg-[var(--color-primary)] p-8 text-white shadow-[0_28px_70px_rgba(35,66,78,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                Growth Platform
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight">
                {empowerUContent.heroTitle}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-200">
                {empowerUContent.heroDescription}
              </p>
              <div className="mt-8">
                <CTAButton to="/empower-u" variant="ghost">
                  Discover Empower U
                </CTAButton>
              </div>
            </FadeIn>
            <div className="grid gap-6">
              {empowerUContent.focusAreas.slice(0, 3).map((area, index) => {
                const Icon = area.icon;

                return (
                  <FadeIn
                    key={area.title}
                    delay={index * 0.06}
                    className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[var(--color-primary)]">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {area.description}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to create meaningful transformation?"
        description="Whether you are developing leaders, preparing students, or strengthening institutions, we can shape a learning experience that fits your goals."
      />

      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </main>
  );
}
