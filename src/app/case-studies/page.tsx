import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from "./data";

export default function CaseStudiesPage() {
  return (
    <main role="main" className="min-h-screen relative overflow-hidden bg-neutral-dark">
      {/* Static Background Gradient and Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-white/10 to-neutral-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-50" />
      </div>

      {/* Hero Section */}
      <section className="section-spacing container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-light-gray mb-4 heading-underline">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto mb-8 font-inter leading-relaxed animate-fade-in-delay">
            Explore my portfolio of projects, showcasing my expertise in web development, design, and consulting.
          </p>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="section-spacing container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={study.slug}
              className="card overflow-hidden rounded-2xl border border-accent/30 shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-transform transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Link href={study.path} className="group block relative h-0 pb-[66.66%]" aria-label={study.title}>
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-xl font-semibold text-light-gray mb-1 font-montserrat">
                    {study.title}
                  </h3>
                  <p className="text-medium-gray text-sm font-inter leading-snug">
                    {study.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-neutral-mid text-medium-gray text-center border-t border-accent/20">
        <div className="container mx-auto space-y-4">
          <h3 className="text-lg font-semibold text-light-gray font-montserrat">Portfolio</h3>
          <p className="text-sm font-inter">Discover the projects that define my craft.</p>
          <nav aria-label="Footer navigation" className="space-x-6">
            <Link href="/services" className="hover:text-accent transition-colors font-inter">
              Services
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors font-inter">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}