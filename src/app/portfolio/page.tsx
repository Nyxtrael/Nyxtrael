'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    excerpt: 'A modern e-commerce store redesign to boost conversions.',
    metric: '+25% conversion increase',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    excerpt: 'An intuitive dashboard for real-time analytics.',
    metric: '40% faster load time',
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    excerpt: 'A vibrant one-pager for health courses.',
    metric: '90+ PageSpeed score',
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    excerpt: 'An elegant portfolio for a visual artist.',
    metric: '50% more engagement',
  },
];

const categories = ['All', 'SaaS & E-Commerce', 'Creative & Lifestyle'];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Portfolio Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 bg-neutral-bg">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            Portfolio
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-inter leading-relaxed">
            Explore my projects, from e-commerce redesigns to SaaS dashboards, each crafted to deliver impactful results.
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Category Filters */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-inter font-semibold ${
                  selectedCategory === category
                    ? 'bg-accent text-neutral-dark'
                    : 'bg-neutral-mid text-text-base hover:bg-accent hover:text-neutral-dark'
                } transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="bg-neutral-mid rounded-lg overflow-hidden border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={project.coverImage}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-base mb-2">{project.title}</h3>
                  <p className="text-text-muted mb-2">{project.excerpt}</p>
                  <p className="text-accent text-sm mb-4">{project.metric}</p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-dark px-4 py-2 rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`View ${project.title} case study`}
                  >
                    View Case Study
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 bg-neutral-bg text-center">
        <motion.h2
          className="text-5xl font-bold text-text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Achieve Similar Results?
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-10 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s collaborate to create a high-performance web solution. I’ll respond within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold bg-gradient-cta text-neutral-dark hover:shadow-accent/50 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Get in touch with Nyxtrael"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}