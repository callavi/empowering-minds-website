import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceGroups } from "../../data/siteContent";
import FadeIn from "../ui/FadeIn";

export default function ProgramsPreview () {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
            What We Offer
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            Development built around
            <span className="text-[var(--color-secondary)]">
              {" "}
              real needs.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore our structured development services for
            institutions, organisations, individuals, and trainers.
          </p>
        </FadeIn>

        {/* Service Groups */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-6">
          {serviceGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <FadeIn
                key={group.id}
                delay={index * 0.06}
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:p-8">
                  {/* Accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-secondary)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon + eyebrow */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-soft-accent)] text-[var(--color-secondary)]">
                      <GroupIcon size={22} strokeWidth={1.8} />
                    </div>

                    <p className="pt-1 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                      {group.eyebrow}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-[1.7rem]">
                      {group.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {group.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mt-7 flex-1 border-t border-[var(--color-border)] pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]">
                      Includes
                    </p>

                    <div className="mt-4 space-y-3">
                      {group.areas.map((area) => (
                        <div
                          key={area.id}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />

                          <p className="text-sm font-medium leading-6 text-[var(--color-primary)]">
                            {area.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More */}
                  <div className="mt-7 border-t border-[var(--color-border)] pt-6">
                    <Link
                      to={`/programs?group=${group.id}#programs`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] transition-all duration-300 group-hover:gap-3"
                    >
                      Learn more
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}