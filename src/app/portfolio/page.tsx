'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type Project = {
  slug: string;
  title: string;
  category: 'SaaS & E-Commerce' | 'Creative & Lifestyle' | 'Demos';
  coverImage: string;
  excerpt: string;
  metric: string;
};

const projects: Project[] = [
  // Case studies
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    excerpt: 'Modernized storefront with conversion-focused UX and filtering.',
    metric: '+25% conversion increase',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    excerpt: 'Real‑time analytics with optimized rendering and caching.',
    metric: '40% faster load time',
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    excerpt: 'Vibrant landing for courses with strong CLS/LCP scores.',
    metric: '90+ PageSpeed score',
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    excerpt: 'Minimal gallery with buttery transitions and SEO details.',
    metric: '50% more engagement',
  },

  // Demos (link to dedicated pages via [slug] redirect)
  {
    slug: 'cms',
    title: 'CMS Demo – Admin Panel & CRUD',
    category: 'Demos',
    coverImage: '/images/portfolio/cms-demo-cover.jpg',
    excerpt: 'Auth screen, roles, content CRUD, media, settings, audit log.',
    metric: 'Full in‑memory UX',
  },
  {
    slug: 'payments',
    title: 'Subscriptions & Payments',
    category: 'Demos',
    coverImage: '/images/portfolio/payments-cover.jpg',
    excerpt: 'Stripe‑like checkout, webhooks console and billing portal.',
    metric: 'Ready for Stripe',
  },
  {
    slug: 'forms',
    title: 'Advanced Forms – Multi‑step + Upload',
    category: 'Demos',
    coverImage: '/images/portfolio/forms-cover.jpg',
    excerpt: 'Conditional fields, drag&drop, draft save, mock API submit.',
    metric: 'High‑conversion UX',
  },
  {
    slug: 'realtime',
    title: 'Realtime Chat & Notifications',
    category: 'Demos',
    coverImage: '/images/portfolio/realtime-cover.jpg',
    excerpt: 'Presence, typing indicator, desktop notifications (no backend).',
    metric: 'Live feel',
  },
  {
    slug: 'seo-i18n',
    title: 'SEO + i18n Showcase',
    category: 'Demos',
    coverImage: '/images/portfolio/seo-i18n-cover.jpg',
    excerpt: 'Localized routes, hreflang alternates, JSON‑LD, OG/Twitter.',
    metric: 'Clean metadata',
  },
];

const categories = ['All', 'SaaS & E-Commerce', 'Creative & Lifestyle', 'Demos'] as const;

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--color-bg) 0%, var(--color-card) 50%, var(--color-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(var(--accent-rgb), 0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(var(--accent-rgb), 0.08) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All');

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
          <div className="absolute inset-0 bg-neutral-bg/85 backdrop-blur-sm" />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-4 drop-shadow-lg">
            Portfolio
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-inter leading-relaxed">
            Explore case studies and interactive demos — the fastest way to see how I build.
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Category Filters */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-inter font-semibold ${
                  selectedCategory === category
                    ? 'bg-accent text-neutral-900'
                    : 'bg-neutral-mid text-text-base hover:bg-accent hover:text-neutral-900'
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
            Projects & Demos
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="bg-neutral-mid rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Image
                  src={project.coverImage}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-text-base">{project.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full ring-1 ring-white/10 bg-neutral-bg">{project.category}</span>
                  </div>
                  <p className="text-text-muted mb-2">{project.excerpt}</p>
                  <p className="text-accent text-sm mb-4">{project.metric}</p>
                  <Link
                    href={`/example-work/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-900 px-4 py-2 rounded-lg font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`View ${project.title}`}
                  >
                    View
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
          Want results like these?
          <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-10 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tell me about your idea — I’ll propose a plan and timeline the same day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold bg-gradient-cta text-neutral-900 hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Get in touch with Nyxtrael"
          >
            Send a message
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
