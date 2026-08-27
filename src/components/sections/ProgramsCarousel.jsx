import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgramCard from "../common/ProgramCard";
import ProgramModal from "./ProgramModal";
import { getAllPrograms } from "../../services/programAPI";

export default function ProgramsCarousel() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);

  const maxIndex = Math.max(programs.length - visibleCards, 0);

  const handlePrev = () => {
    setCurrentStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStartIndex((prev) => Math.min(prev + 1, maxIndex));
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

  useEffect(() => {
    let isMounted = true;

    const fetchPrograms = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const result = await getAllPrograms();
        const fetchedPrograms = result?.data || [];

        if (!isMounted) return;

        setPrograms(fetchedPrograms);
        setCurrentStartIndex(0);
      } catch (error) {
        if (!isMounted) return;

        setErrorMessage(
          error?.message || "Sorry, we couldn't load programs. Please try again later."
        );
        setPrograms([]);
      } finally {
        if (isMounted) {
        setIsLoading(false);
        }
      }
    };

    fetchPrograms();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-center sm:justify-between lg:mb-12">
          <div className="min-w-0">
            <h2 className="text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              Upcoming Programs / Workshops
            </h2>
          </div>

          <div className="flex gap-3 self-start sm:gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStartIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-secondary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentStartIndex === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-secondary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="pt-2 text-sm font-medium text-[#666]">Loading programs...</div>
        ) : errorMessage ? (
          <div className="pt-2 text-sm font-medium text-[#666]">{errorMessage}</div>
        ) : programs.length === 0 ? (
          <div className="pt-2 text-sm font-medium text-[#666]">No programs available.</div>
        ) : (
          <div className="overflow-hidden pt-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentStartIndex * (100 / visibleCards)}%)`,
              }}
            >
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/4 lg:px-3"
                >
                  <ProgramCard
                    program={program}
                    delay={
                      index >= currentStartIndex &&
                      index < currentStartIndex + visibleCards
                        ? (index - currentStartIndex) * 0.05
                        : 0
                    }
                    onView={() => setSelectedProgram(program)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
}
