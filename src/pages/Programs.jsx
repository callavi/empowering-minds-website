import { useMemo, useEffect, useState } from "react";
import ProgramCard from "../components/common/ProgramCard";
import ProgramModal from "../components/sections/ProgramModal";
import CTASection from "../components/ui/CTASection";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { categories } from "../data/siteContent";
import { getAllPrograms } from "../services/programAPI";

export default function Programs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPrograms() {
      try {
        setLoading(true);
        setError("");
        const result = await getAllPrograms();
        const programsFromApi = Array.isArray(result?.data) ? result.data : result;
        setPrograms(programsFromApi);
      } catch {
        setError("Unable to load programs. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, []);

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      const matchesCategory =
        category === "All" || program.category === category;
      const query = search.trim().toLowerCase();

      const title = program.title || "";
      const description = program.description || "";
      const audience = program.audience || "";

      const matchesSearch =
        !query ||
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        audience.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [programs, category, search]);

  return (
    <main>
      <PageHero
        // eyebrow="Programs"
        title="A professional catalogue of transformational learning journeys"
        description="Search by need, filter by category, and explore program details built for institutions, teams, and learners."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Catalogue"
            title="Find the right program for your audience"
            description="Use the search and filters below to discover flagship offerings and specialist interventions."
          />

          <div className="mt-5 grid gap-4 rounded-[10px] border border-[var(--color-border)] bg-white p-4 shadow-sm md:grid-cols-[1fr_auto] md:p-5">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search programs, audience, or outcomes"
              className="w-full rounded-[10px] border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-secondary)] sm:px-5"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-[10px] border border-[var(--color-border)] px-4 py-3 outline-none transition focus:border-[var(--color-secondary)] sm:px-5"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <p className="col-span-full">Loading programs...</p>
            ) : error ? (
              <p className="col-span-full">{error}</p>
            ) : filteredPrograms.length === 0 ? (
              <p className="col-span-full">No programs available.</p>
            ) : (
              filteredPrograms.map((program, index) => (
                <ProgramCard
                  key={program._id || program.id || index}
                  program={program}
                  onView={setSelectedProgram}
                  delay={index * 0.05}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Want help selecting the right learning path?"
        description="We can recommend the best-fit program or shape a tailored cohort based on your goals and audience."
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </main>
  );
}
