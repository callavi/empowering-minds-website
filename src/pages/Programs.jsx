import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProgramCard from "../components/common/ProgramCard";
import ProgramModal from "../components/sections/ProgramModal";
import CTASection from "../components/ui/CTASection";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { serviceGroups } from "../data/siteContent";

export default function Programs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlGroupId = searchParams.get("group");

  const selectedGroupId =
    serviceGroups.some((group) => group.id === urlGroupId)
      ? urlGroupId
      : serviceGroups[0]?.id || null;

  const [selectedProgram, setSelectedProgram] =
    useState(null);

  const selectedGroup = serviceGroups.find(
    (group) => group.id === selectedGroupId
  );

  const handleGroupChange = (groupId) => {
    setSearchParams(
      { group: groupId },
      { replace: true }
    );
  };

  return (
    <main>
      {/* Hero */}
      <PageHero
        eyebrow="Programs"
        title="Learning journeys designed around real needs"
        description="Explore our areas of development across educational institutions, corporate organisations, individual growth, and trainer development."
        primaryCta={{
          label: "Find Your Program",
          to: "#programs",
        }}
        secondaryCta={{
          label: "Talk to Us",
          to: "/contact"
        }}
      />

      {/* Programs */}
      <section className="py-16 sm:py-20 lg:py-24" id="programs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Explore our offerings"
            title="Choose an area of development"
            description="Select a service group to explore the learning and development areas available for your needs."
          />

          {/* Service group selector */}
          <div className="mt-8 overflow-x-auto pb-2">
            <div
              className="flex min-w-max gap-2 rounded-full border border-[var(--color-border)] bg-white p-1.5 shadow-sm"
              role="tablist"
              aria-label="Service groups"
            >
              {serviceGroups.map((group) => {
                const isSelected =
                  group.id === selectedGroupId;

                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() =>
                      handleGroupChange(group.id)
                    }
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? "bg-[var(--color-primary)] text-white shadow-sm"
                        : "text-[var(--color-primary)] hover:bg-[var(--color-soft-accent)]"
                    }`}
                  >
                    {group.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected service group */}
          {selectedGroup && (
            <div className="mt-12">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                  {selectedGroup.eyebrow}
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
                  {selectedGroup.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {selectedGroup.description}
                </p>
              </div>

              {/* Service cards */}
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {selectedGroup.areas.map(
                  (program, index) => (
                    <ProgramCard
                      key={program.id}
                      program={{
                        ...program,
                        serviceGroup:
                          selectedGroup.id,
                      }}
                      onView={setSelectedProgram}
                      delay={index * 0.05}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Not sure where to begin?"
        description="Tell us what you are trying to achieve and we can help you identify the most relevant area of development for your organisation, team, or professional journey."
        secondaryLabel="Learn More"
        secondaryTo="/services"
      />

      {/* Program details / callback */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </main>
  );
}