import { useState } from "react";
import {
  trainerPageContent,
  trainerProfile,
  trainers,
} from "../data/siteContent";
import TrainerModal from "../components/sections/TrainerModal";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";

export default function TrainerProfile() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <main>
      <PageHero
        eyebrow="Trainer Profile"
        title={trainerPageContent.heroTitle}
        description={trainerPageContent.heroDescription}
        primaryCta={{ label: "Talk to our team", to: "/contact" }}
        secondaryCta={{ label: "Explore programs", to: "/programs" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeIn className="overflow-hidden rounded-[36px] border border-[var(--color-border)]">
            <img
              src={trainerProfile.image}
              alt={trainerProfile.name}
              className="h-[450px] min-h-[240px] w-full object-cover"
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <SectionHeader
              eyebrow="Featured Trainer"
              title={trainerProfile.name}
              description={trainerProfile.intro}
            />
            {/* <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
              {trainerProfile.role}
            </p> */}
            
            {/* <div className="mt-8 grid gap-4">
              {trainerProfile.highlights.map((highlight, index) => (
                <FadeIn
                  key={highlight}
                  delay={0.12 + index * 0.05}
                  className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-sm"
                >
                  {highlight}
                </FadeIn>
              ))}
            </div> */}
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Trainers"
            title="A trainer network built for practical transformation"
            description="Each trainer contributes deep facilitation experience and a clear understanding of what learners need to apply in real environments."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
                  aria-label={`View details for ${trainer.name}`}
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                      {trainer.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {trainer.role}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {trainer.shortBio}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {trainer.expertise.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Learn With Us"
            title="Designed for learning that translates into action"
            description="Our trainer approach balances reflective learning with professional rigor so participants leave with more than inspiration."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {trainerPageContent.learnPoints.map((point, index) => (
              <FadeIn
                key={point.title}
                delay={index * 0.06}
                className="rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {point.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a workshop or capability-building journey?"
        description="Connect with Empowering Minds to design trainer-led programs that align with your learners, teams, or institutional goals."
        primaryLabel="Contact Empowering Minds"
        primaryTo="/contact"
        secondaryLabel="View programs"
        secondaryTo="/programs"
      />

      <TrainerModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </main>
  );
}
