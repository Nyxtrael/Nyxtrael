import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from "./data";

const enhancedCaseStudies = [
  {
    ...caseStudies.find(study => study.slug === 'startup-landing'),
    category: 'SaaS',
    context: 'Client project, SaaS startup – 2024',
    goal: 'Client needed a fast CRM demo page to boost sign-ups.',
    role: 'Design, frontend dev (Next.js), SEO.',
    technologies: 'Next.js, Tailwind CSS, Netlify',
    result: 'Page load time: 1.4s | +22% demo sign-ups in 2 weeks',
    isFeatured: true,
  },
  {
    ...caseStudies.find(study => study.slug === 'ecommerce-redesign'),
    category: 'E-commerce',
    context: 'Client project, E-commerce brand – 2023',
    goal: 'Redesign an e-commerce platform to improve user engagement.',
    role: 'UI/UX design, frontend dev (Next.js).',
    technologies: 'Next.js, Tailwind CSS, Netlify',
    result: 'Improved checkout conversion by 15% | 3-week delivery',
  },
  {
    ...caseStudies.find(study => study.slug === 'saas-dashboard'),
    category: 'SaaS',
    context: 'Personal concept for portfolio – 2024',
    goal: 'Create a modern SaaS dashboard UI for portfolio showcase.',
    role: 'UI/UX design, frontend dev (Next.js).',
    technologies: 'Next.js, Tailwind CSS',
    result: 'Showcased as a portfolio piece | Positive feedback from peers',
  },
  {
    ...caseStudies.find(study => study.slug === 'photographer-portfolio'),
    category: 'Portfolio',
    context: 'Freelance for EU photographer – 2023',
    goal: 'Develop a portfolio website for a professional photographer.',
    role: 'Frontend dev (Next.js), UI design.',
    technologies: 'Next.js, Tailwind CSS, Netlify',
    result: 'Increased client bookings by 30% | 4-week delivery',
  },
  {
    ...caseStudies.find(study => study.slug === 'taskmaster-pwa'),
    category: 'PWA',
    context: 'Personal project – 2024',
    goal: 'Build a progressive web app for task management.',
    role: 'Full-stack dev (Next.js), UI/UX design.',
    technologies: 'Next.js, Tailwind CSS, PWA APIs',
    result: 'Fully offline-capable app | Showcased in portfolio',
  },
  {
    ...caseStudies.find(study => study.slug === 'neon-ritual'),
    category: 'Portfolio',
    context: 'Personal project – 2024',
    goal: 'Create an AI-generated art gallery with neon aesthetics.',
    role: 'Frontend dev (Next.js), AI art generation.',
    technologies: 'Next.js, SDXL, ComfyUI',
    result: 'Highlighted creativity | Positive community feedback',
  },
];

const categories = ['All', 'SaaS', 'E-commerce', 'Portfolio', 'PWA'];

export default function CaseStudiesPage() {
  const featuredStudy = enhancedCaseStudies.find(study => study.isFeatured);
  const otherStudies = enhancedCaseStudies.filter(study => !study.isFeatured);

  return (
    <main role="main" className="min-h-screen relative overflow-hidden bg-neutral-dark">
      <Head>
        <title>Case Studies – Nyxtrael</title>
        <meta
          name="description"
          content="Explore Nyxtrael's case studies showcasing expertise in web development, UI/UX design, and consulting. Discover projects like BrightCRM, ShopTrend, and more."
        />
      </Head>

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

      {/* Categories Filter */}
      <section className="section-spacing container mx-auto">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full font-inter text-base border bg-gray-800 text-gray-300 border-gray-600 hover:bg-gradient-to-br hover:from-accent hover:to-brand hover:text-white hover:border-transparent transition-all animate-fade-in disabled:opacity-50"
              style={{ animationDelay: `${categories.indexOf(category) * 0.1}s` }}
              aria-label={`Filter by ${category}`}
              disabled
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Project (Hero Case Study) */}
      {featuredStudy && (
        <section className="section-spacing container mx-auto">
          <div className="card overflow-hidden rounded-2xl border border-accent/30 shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-transform transition-shadow duration-300 animate-slide-up">
            <Link
              href={featuredStudy.path}
              className="group block relative h-0 pb-[50%] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
              aria-label={featuredStudy.title}
            >
              <Image
                src={featuredStudy.thumbnail}
                alt={featuredStudy.title}
                fill
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h2 className="text-3xl font-semibold text-light-gray mb-1 font-montserrat">
                  {featuredStudy.title}
                </h2>
                <p className="text-medium-gray text-base font-inter leading-snug">
                  {featuredStudy.context}
                </p>
              </div>
              <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent text-white px-4 py-2 rounded-full font-montserrat text-sm font-semibold hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark">
                View Case
              </span>
            </Link>
          </div>
          <div className="mt-8 bg-neutral-mid p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-light-gray mb-2 font-montserrat">Goal</h3>
                <p className="text-medium-gray font-inter">{featuredStudy.goal}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light-gray mb-2 font-montserrat">My Role</h3>
                <p className="text-medium-gray font-inter">{featuredStudy.role}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light-gray mb-2 font-montserrat">Technologies</h3>
                <p className="text-medium-gray font-inter">{featuredStudy.technologies}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light-gray mb-2 font-montserrat">Result</h3>
                <p className="text-medium-gray font-inter">{featuredStudy.result}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-sm font-montserrat">
                {featuredStudy.category}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Project Grid Section */}
      <section className="section-spacing container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
          {otherStudies.map((study, i) => (
            <div
              key={study.slug}
              className="card overflow-hidden rounded-2xl border border-accent/30 shadow-card hover:shadow-card-hover hover:scale-[1.03] transition-transform transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Link
                href={study.path}
                className="group block relative h-0 pb-[66.66%] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
                aria-label={study.title}
              >
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
                  <h2 className="text-xl font-semibold text-light-gray mb-1 font-montserrat">
                    {study.title}
                  </h2>
                  <p className="text-medium-gray text-sm font-inter leading-snug">
                    {study.context}
                  </p>
                </div>
                <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent text-white px-4 py-2 rounded-full font-montserrat text-sm font-semibold hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark">
                  View Case
                </span>
              </Link>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-light-gray mb-1 font-montserrat">Goal</h3>
                    <p className="text-medium-gray text-sm font-inter">{study.goal}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light-gray mb-1 font-montserrat">My Role</h3>
                    <p className="text-medium-gray text-sm font-inter">{study.role}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light-gray mb-1 font-montserrat">Technologies</h3>
                    <p className="text-medium-gray text-sm font-inter">{study.technologies}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light-gray mb-1 font-montserrat">Result</h3>
                    <p className="text-medium-gray text-sm font-inter">{study.result}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-sm font-montserrat">
                    {study.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with CTA */}
      <footer className="py-10 bg-neutral-mid text-medium-gray text-center border-t border-accent/20">
        <div className="container mx-auto space-y-4">
          <h3 className="text-lg font-semibold text-light-gray font-montserrat">Want Something Like These?</h3>
          <p className="text-sm font-inter">Let’s collaborate to bring your vision to life.</p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-accent/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-mid"
          >
            Let’s Talk
          </Link>
        </div>
      </footer>
    </main>
  );
}