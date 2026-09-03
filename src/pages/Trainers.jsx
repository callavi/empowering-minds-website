import { trainers } from "../data/siteContent";
import TrainerCard from "../components/common/TrainerCard";
import FadeIn from "../components/ui/FadeIn";
import TrainerModal from "../components/common/TrainerModal";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import CTASection from "../components/ui/CTASection";

import { useState } from "react";

export default function Trainers() {
    const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <main className="bg-[var(--color-background)] text-[var(--color-text)]">
        {/* Hero */}
        <PageHero
        eyebrow="Our Trainers"
        title="People Who Turn Experience Into Development"
        description="Our trainers bring together professional experience, practical
                expertise, and a deep understanding of human development to
                create meaningful learning experiences."
        primaryCta={{
            label: "Meet Our Trainers",
            to: "#trainers"
        }}
        secondaryCta={{
            label: "Explore Our Programs",
            to: "/programs"
        }}
        />

      {/* Founder */}
      <section className="bg-[var(--color-background)] py-12 sm:py-16">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
            A Note from the Founder
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--color-secondary)] sm:text-3xl">
            A message from Ira Saha
          </h2>
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="
                flex flex-col gap-7 rounded-[28px]
                border border-white/10
                [background-image:var(--gradient-soft)]
                p-6 shadow-[var(--shadow-lg)]
                sm:flex-row sm:items-center sm:p-8
              "
            >
              {/* Founder image */}
              <div className="shrink-0 self-start sm:self-center">
                <img
                  src="/images/ira-saha.jpg"
                  alt="Ira Saha, Founder of Empowering Minds"
                  className="
                    h-24 w-24 rounded-full object-cover
                    ring-4 ring-white/10
                    sm:h-28 sm:w-28
                  "
                />
              </div>

              {/* Founder content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                  {aboutContent.founderShortTitle}
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-2xl font-black tracking-tight text-[var(--color-secondary)]">
                    {aboutContent.founderName}
                  </h2>

                  <p className="text-sm font-medium text-[var(--color-primary)]/60">
                    {aboutContent.founderRole}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--color-secondary)]/75 sm:text-base">
                  {aboutContent.founderShortNote}
                </p>

                <p className="mt-4 text-sm font-semibold leading-7 text-[var(--color-primary)] sm:text-base">
                  {aboutContent.founderShortClosing}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-12">
            <SectionHeader
            eyebrow="Our Expertise"
            title="A multidisciplinary team"
            description="Our trainer network brings together expertise across
                leadership, finance, entrepreneurship, emotional wellness,
                professional development, sustainability, and organisational
                transformation."
            align="center"
            />
            </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {trainers.map((trainer, index) => (
              <FadeIn key={trainer.id} delay={index * 0.06}>
                <TrainerCard trainer={trainer}
                  onViewProfile={setSelectedTrainer}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
        <CTASection
            title="Looking for the right expertise for your organisation?"
            description="Tell us about your development objectives and we can help
              identify the right training expertise for your audience"
            variant="blush"
            primaryLabel="Find the Right Training Expertise"
            primaryTo="/programs"
            secondaryLabel="Discuss Your Requirements"
            secondaryTo="/contact"
        />
    <TrainerModal
    trainer={selectedTrainer}
    onClose={() => setSelectedTrainer(null)}
    />
    </main>
  );
}