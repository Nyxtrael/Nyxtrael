import { caseStudies } from "../case-studies/data";
import CaseStudyCard from "../../components/CaseStudyCard";

export default async function Home() {
  // Użyj caseStudies jako źródła danych
  const featuredCaseStudies = caseStudies.slice(0, 3); // Ogranicz do 3 pozycji

  return (
    <main className="min-h-screen bg-background">
      {/* Inne sekcje strony */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCaseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                title={caseStudy.title}
                description={caseStudy.description}
                slug={caseStudy.slug}
                thumbnail={caseStudy.thumbnail || caseStudy.image} // Fallback na image
              />
            ))}
          </div>
        </div>
      </section>
      {/* Inne sekcje strony */}
    </main>
  );
}