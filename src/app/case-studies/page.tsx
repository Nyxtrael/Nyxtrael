'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Define Scope type
type Scope = 'Large' | 'Medium' | 'Small';

const caseStudiesData = [
  {
    id: 1,
    title: 'E-Commerce Platform Revamp',
    description: 'Revamped an outdated e-commerce platform into a modern, user-centric experience.',
    industry: 'Retail',
    type: 'Web App',
    tech: ['Next.js', 'Tailwind'],
    image: '/images/case-studies/ecommerce.jpg',
    impact: 35,
    scope: 'Large' as Scope,
    date: '2025-03-15',
    results: [
      '35% increase in conversion rates',
      '50% faster page load times',
      'Improved mobile responsiveness',
    ],
    link: '/case-studies/ecommerce-revamp',
  },
  {
    id: 2,
    title: 'SaaS Dashboard Redesign',
    description: 'Redesigned a SaaS dashboard for a tech startup, enhancing user engagement.',
    industry: 'Technology',
    type: 'Dashboard',
    tech: ['Next.js', 'Supabase'],
    image: '/images/case-studies/saas.jpg',
    impact: 20,
    scope: 'Medium' as Scope,
    date: '2025-02-10',
    results: [
      '20% reduction in user churn',
      'Enhanced data visualization',
      'Streamlined user workflows',
    ],
    link: '/case-studies/saas-dashboard',
  },
  {
    id: 3,
    title: 'Non-Profit Website Overhaul',
    description: 'Transformed a non-profit’s website to improve accessibility and boost donations.',
    industry: 'Non-Profit',
    type: 'Landing Page',
    tech: ['Next.js', 'Tailwind'],
    image: '/images/case-studies/nonprofit.jpg',
    impact: 40,
    scope: 'Small' as Scope,
    date: '2025-01-20',
    results: [
      '40% increase in donations',
      'WCAG 2.1 compliance achieved',
      'Improved user engagement',
    ],
    link: '/case-studies/nonprofit-overhaul',
  },
];

export default function CaseStudiesPage() {
  const [sortBy, setSortBy] = useState('Newest');
  const [filterType, setFilterType] = useState('All');
  const [filterTech, setFilterTech] = useState('All');

  const sortOptions = ['Newest', 'Impact', 'Scope'];
  const typeOptions = ['All', 'Web App', 'Landing Page', 'Dashboard'];
  const techOptions = ['All', 'Next.js', 'Tailwind', 'Supabase'];

  const filteredStudies = caseStudiesData
    .filter((study) => filterType === 'All' || study.type === filterType)
    .filter((study) => filterTech === 'All' || study.tech.includes(filterTech))
    .sort((a, b) => {
      if (sortBy === 'Newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'Impact') return b.impact - a.impact;
      if (sortBy === 'Scope') {
        const scopeOrder: Record<Scope, number> = { Large: 3, Medium: 2, Small: 1 };
        return scopeOrder[b.scope] - scopeOrder[a.scope];
      }
      return 0;
    });

  return (
    <div className="min-h-screen case-studies bg-[#0d1117]">
      {/* Hero Section */}
      <section className="relative grain-overlay py-24 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e0e] to-[#0a0a0a] animate-gradient-x -z-10"
        ></motion.div>
        <motion.div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
            animation: 'pulse-slow 10s ease-in-out infinite',
          }}
        ></motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-montserrat font-bold text-text-base mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Success Stories
        </motion.h1>
        <motion.p
          className="text-lg text-text-muted mb-12 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Discover how I solve real business challenges with clean code and intuitive design.
        </motion.p>
        <div className="gradient-separator w-1/4 mx-auto mb-12"></div>
      </section>

      {/* Filters and Sorting */}
      <section className="section bg-neutral-dark grain-overlay">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="appearance-none bg-neutral-mid text-text-base font-inter py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Filter by type"
                >
                  {typeOptions.map((option) => (
                    <option key={option} value={option}>
                      Type: {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
              </div>
              <div className="relative">
                <select
                  value={filterTech}
                  onChange={(e) => setFilterTech(e.target.value)}
                  className="appearance-none bg-neutral-mid text-text-base font-inter py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Filter by technology"
                >
                  {techOptions.map((option) => (
                    <option key={option} value={option}>
                      Tech: {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
              </div>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-neutral-mid text-text-base font-inter py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Sort by"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort by: {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent" />
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                className="relative card overflow-hidden rounded-xl bg-neutral-mid shadow-card hover:shadow-card-hover group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-text-base font-inter bg-neutral-mid/50 px-3 py-1 rounded-full">
                    {study.tech.join(', ')}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-text-base mb-3 font-montserrat">{study.title}</h3>
                  <p className="text-text-muted text-base mb-4 font-inter">{study.description}</p>
                  <Link
                    href={study.link}
                    className="inline-flex items-center btn-primary py-2 px-5 hover-lift shimmer-effect"
                    aria-label={`View case study for ${study.title}`}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2 icon-button-dark" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-dark text-center grain-overlay">
        <div className="container">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-text-base mb-4 gradient-text font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let’s Create Your Success Story
          </motion.h2>
          <motion.p
            className="text-lg text-text-muted mb-8 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your business? Contact us to discuss your project and see how we can help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contact"
              className="inline-block btn-primary py-4 px-8 text-lg animate-pulse-shadow hover-lift shimmer-effect glow-pulse"
              aria-label="Contact us to start your project"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}