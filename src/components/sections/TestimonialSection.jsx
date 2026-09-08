import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";
import { testimonials } from "../../data/siteContent";

export default function TestimonialSection() {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Perspectives"
          title="What our partners say"
          description="Our work is ultimately measured by the difference it makes in people, teams, and organisations."
          align="center"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.name + index}
              delay={index * 0.06}
            >
              <article
                className="
                  flex h-full flex-col
                  rounded-3xl
                  border border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-7
                  shadow-[var(--shadow-sm)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[var(--shadow-lg)]
                  sm:p-8
                "
              >
                {/* Quote mark */}
                <div
                  aria-hidden="true"
                  className="
                    font-serif text-4xl leading-none
                    text-[var(--color-primary)]/40
                  "
                >
                  “
                </div>

                {/* Quote */}
                <blockquote
                  className="
                    mt-4 flex-1
                    text-base leading-7
                    text-[var(--color-secondary)]/80
                    sm:text-lg sm:leading-8
                  "
                >
                  {testimonial.quote}
                </blockquote>

                {/* Attribution */}
                <div className="mt-7 border-t border-[var(--color-border)] pt-5">
                  <p className="text-sm font-semibold text-[var(--color-secondary)]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">
                    {testimonial.role}
                  </p>

                  <p className="text-xs font-medium text-[var(--color-primary)]">
                    {testimonial.organisation}
                  </p>

                  {testimonial.programme && (
                    <p className="mt-3 text-xs font-medium text-[var(--color-primary)]">
                      {testimonial.programme}
                    </p>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}