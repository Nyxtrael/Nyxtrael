import Link from 'next/link';
import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import FinalCTA from '../components/FinalCTA';
import { caseStudies } from './case-studies/data';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites tailored to your needs.',
    icon: <CodeBracketIcon className="h-12 w-12 text-accent" />, 
    benefits: [
      'Optimized for speed and SEO',
      'Mobile-first responsive design',
      'Custom functionality with Next.js',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and aesthetic designs that boost user engagement.',
    icon: <PaintBrushIcon className="h-12 w-12 text-accent" />, 
    benefits: [
      'User-centered design process',
      'Interactive prototypes',
      'Consistent brand visuals',
    ],
  },
  {
    title: 'Consulting',
    description: 'Expert guidance on digital strategy and project optimization.',
    icon: <LightBulbIcon className="h-12 w-12 text-accent" />, 
    benefits: [
      'Technical audits and recommendations',
      'Performance optimization strategies',
      'Scalable architecture planning',
    ],
  },
];

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <div className="bg-neutral-dark">
      {/* Hero Section */}
      <Hero />

      {/* About Snippet */}
      <AboutSnippet />

      {/* Services Section */}
      <section className="section-spacing">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in heading-underline">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                className="animate-fade-in-up"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-spacing bg-neutral-mid pattern-grid">
        <div className="container mx-auto">
          <h2 className="section-header text-white animate-fade-in">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.slug}
                title={caseStudy.title}
                description={caseStudy.description}
                slug={caseStudy.slug}
                thumbnail={caseStudy.thumbnail}
                className="animate-fade-in-up"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-block text-accent font-medium hover:text-[#F5F5F5] glow-hover transition-colors"
              aria-label="View all case studies"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
