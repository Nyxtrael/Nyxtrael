'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

type Case = {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  excerpt: string;
  metric: string;
  details: string;
};

// Case studies renderowane inline:
const inlineCases: Case[] = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    excerpt: 'A modern e-commerce store redesign to boost conversions.',
    metric: '+25% conversion increase',
    details:
      'Complete UX overhaul: faster filtering, clearer product hierarchy and optimized checkout. Measurable conversion uplift and better retention.',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    excerpt: 'An intuitive dashboard for real-time analytics.',
    metric: '40% faster load time',
    details:
      'Virtualized tables, request batching and cache-first patterns. The dashboard feels instant and handles large datasets smoothly.',
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    excerpt: 'A vibrant one-pager for health courses.',
    metric: '90+ PageSpeed score',
    details:
      'Clean layout, image optimization and preloading critical assets. Great CLS/LCP translated to SEO gains.',
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    excerpt: 'An elegant portfolio for a visual artist.',
    metric: '50% more engagement',
    details:
      'Minimal UI that lets artwork shine. Smooth transitions, keyboard navigation and accessible lightbox.',
  },
];

// Dema mają własne podstrony — tutaj tylko redirect:
const externalRoutes: Record<string, string> = {
  cms: '/example-work/cms',
  payments: '/example-work/payments',
  forms: '/example-work/forms',
  realtime: '/example-work/realtime',
  'seo-i18n': '/example-work/seo-i18n/en', // domyślnie EN
};

export default function ExampleWork() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params as { slug: string };

  // Jeśli to demo, przekieruj na właściwą stronę
  useEffect(() => {
    if (slug in externalRoutes) {
      router.replace(externalRoutes[slug]);
    }
  }, [slug, router]);

  const project = inlineCases.find((p) => p.slug === slug);

  if (slug in externalRoutes) {
    // podczas redirectu nie renderuj nic, żeby uniknąć mignięcia
    return null;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-bg flex items-center justify-center">
        <p className="text-text-muted">
          Project not found.{' '}
          <a href="/portfolio" className="underline hover:text-accent">
            Back to Portfolio
          </a>
        </p>
      </div>
    );
  }

  return (
    <main className="bg-neutral-bg font-inter">
      {/* Header projektu */}
      <section className="relative min-h-[40vh] flex items-center py-16 bg-neutral-bg">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            className="object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-neutral-bg/85 backdrop-blur-sm" />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-base mb-4 drop-shadow-lg">
            {project.title}
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-inter leading-relaxed">
            {project.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-text-base">{project.category}</span>
            <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-accent">{project.metric}</span>
          </div>
        </motion.div>
      </section>

      {/* Szczegóły */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto bg-neutral-mid rounded-2xl p-6 ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-text-muted mb-6">{project.details}</p>
            <p className="text-accent text-lg mb-6">
              <strong>Result:</strong> {project.metric}
            </p>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Back to Portfolio"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Portfolio
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
