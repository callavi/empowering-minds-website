import { trainers } from "../data/siteContent";
import TrainerCard from "../components/common/TrainerCard";
import FadeIn from "../components/ui/FadeIn";
import TrainerModal from "../components/common/TrainerModal";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import CTASection from "../components/ui/CTASection";
import { aboutContent } from "../data/siteContent";

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
              <FadeIn key={trainer.id} delay={index * 0.06} className={trainer.featured ? "sm:col-span-2 lg:col-span-3" : ""}>
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