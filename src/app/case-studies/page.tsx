import CaseStudyCard from "../../components/CaseStudyCard";
import { caseStudies } from "./data";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background pattern-grid">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-12 heading-underline">
          Case Studies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.slug}
              title={cs.title}
              thumbnail={cs.thumbnail}
              description={cs.description}
              slug={cs.slug} // Dodajemy slug do nawigacji
            />
          ))}
        </div>
      </div>
    </div>
  );
}