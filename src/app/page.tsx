import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import FinalCTA from '../components/FinalCTA';
import { caseStudies } from "./case-studies/data"; // Import danych

const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance websites tailored to your business needs.',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning designs for optimal user experiences.',
  },
  {
    title: 'Consulting',
    description: 'Expert guidance to enhance your digital strategy and growth.',
  },
];

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 3); // Użyj danych z data.ts

  return (
    <>
      <Hero />
      <AboutSnippet />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16 heading-underline">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-surface pattern-grid">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-16 heading-underline">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCaseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.slug}
                title={caseStudy.title}
                description={caseStudy.description}
                slug={caseStudy.slug}
                thumbnail={caseStudy.thumbnail || caseStudy.image} // Dodaj thumbnail z fallbackiem
              />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}