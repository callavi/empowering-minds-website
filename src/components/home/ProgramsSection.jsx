import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgramCard from "../common/ProgramCard";

const programs = [
  {
    category: "LONG TERM",
    icon: "🎓",
    title: "Human Capital Development",
    description: "Transform into a high-impact people leader with advanced strategic capabilities.",
    price: "₹89,250",
    duration: "24 Weeks Program",
    startDate: "13 June 2026",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-muted)]",
  },
  {
    category: "STRATEGIC",
    icon: "🎓",
    title: "Leadership Excellence",
    description: "Develop confident leaders capable of driving innovation and organizational growth.",
    price: "₹12,000",
    duration: "12 Weeks Program",
    startDate: "20 July 2026",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] to-[var(--color-soft-accent)]",
  },
  {
    category: "SPECIALIST",
    icon: "🤝",
    title: "Faculty Development",
    description: "Master modern teaching strategies and transformational leadership practices.",
    price: "₹29,500",
    duration: "6 Weeks Program",
    startDate: "10 August 2026",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-soft-accent)]",
  },
  {
    category: "SPECIALIST",
    icon: "📘",
    title: "Instructional Design",
    description: "Create engaging, high-impact digital learning experiences for modern learners.",
    price: "₹29,500",
    duration: "6 Weeks Program",
    startDate: "10 August 2026",
    topAccent: "bg-gradient-to-r from-[#F65A8B] to-[#FF95B8]",
  },
  {
    category: "STRATEGIC",
    icon: "🧭",
    title: "Change Leadership",
    description: "Lead organizational change with confidence, clarity, and measurable outcomes.",
    price: "₹39,500",
    duration: "10 Weeks Program",
    startDate: "15 September 2026",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-muted)]",
  },
  {
    category: "LONG TERM",
    icon: "📈",
    title: "Talent Strategy",
    description: "Design future-ready people strategies that align learning, performance, and growth.",
    price: "₹49,000",
    duration: "20 Weeks Program",
    startDate: "01 October 2026",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] to-[var(--color-soft-accent)]",
  },
  {
    category: "SPECIALIST",
    icon: "💡",
    title: "Digital Learning",
    description: "Build learner-centric programs with AI-enabled tools for hybrid delivery.",
    price: "₹24,000",
    duration: "8 Weeks Program",
    startDate: "22 October 2026",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-soft-accent)]",
  },
  {
    category: "SPECIALIST",
    icon: "🧠",
    title: "Executive Coaching",
    description: "Accelerate leadership impact with practical coaching and peer learning.",
    price: "₹34,500",
    duration: "12 Weeks Program",
    startDate: "05 November 2026",
    topAccent: "bg-gradient-to-r from-[#F65A8B] to-[#FF95B8]",
  },
];

export default function ProgramsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const maxIndex = Math.max(programs.length - visibleCards, 0);
  const currentStartIndex = Math.min(startIndex, maxIndex);

  const nextSlide = () => {
    setStartIndex((current) => Math.min(current + 1, maxIndex));
  };

  const prevSlide = () => {
    setStartIndex((current) => Math.max(current - 1, 0));
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              Featured learning paths
            </p>
            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              Trending & new launch programs
            </h2>
          </div>

          <div className="flex gap-3 self-start sm:gap-4">
            <button
              type="button"
              onClick={prevSlide}
              disabled={currentStartIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-secondary)] hover:text-white disabled:cursor-not-allowed disabled:border-[var(--color-border)] disabled:text-[var(--color-muted)] disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              disabled={currentStartIndex === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-secondary)] hover:text-white disabled:cursor-not-allowed disabled:border-[var(--color-border)] disabled:text-[var(--color-muted)] disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white shadow-sm">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentStartIndex * (100 / visibleCards)}%)` }}
          >
            {programs.map((program, index) => (
              <div key={index} className="w-full shrink-0 px-2 py-6 md:w-1/2 lg:w-1/4 lg:px-3">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
