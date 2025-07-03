'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    excerpt: 'A modern e-commerce store redesign to boost conversions.',
    metric: '+25% conversion increase',
    details: 'This project involved a complete overhaul of an existing e-commerce platform, focusing on improving user experience and conversion rates. Key features include a responsive design, optimized checkout process, and enhanced product filtering. The result was a 25% increase in conversions and a more engaging shopping experience.',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    excerpt: 'An intuitive dashboard for real-time analytics.',
    metric: '40% faster load time',
    details: 'DataSync is a custom-built SaaS dashboard designed to provide real-time analytics for business users. The project optimized data rendering and reduced load times by 40%, improving user satisfaction and performance.',
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    excerpt: 'A vibrant one-pager for health courses.',
    metric: '90+ PageSpeed score',
    details: 'This one-pager was created for a health and wellness brand, featuring a clean design and fast loading times. Achieving a 90+ PageSpeed score, it effectively showcases diet plans and courses with a focus on usability.',
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    excerpt: 'An elegant portfolio for a visual artist.',
    metric: '50% more engagement',
    details: 'An elegant portfolio site for a visual artist, designed to highlight their work with a minimalist approach. The site saw a 50% increase in engagement due to its intuitive navigation and stunning visuals.',
  },
];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--neutral-bg) 0%, var(--neutral-mid) 50%, var(--neutral-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
`;

export default function ExampleWork() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params as { slug: string };
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-bg flex items-center justify-center">
        <p className="text-text-muted">Project not found. <a href="/portfolio" className="underline hover:text-accent">Back to Portfolio</a></p>
      </div>
    );
  }

  return (
    <main className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Project Header */}
      <section className="relative min-h-[40vh] flex items-center py-16 bg-neutral-bg">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            className="object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-inter leading-relaxed">
            {project.excerpt}
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Project Details */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-text-muted mb-6">{project.details}</p>
            <p className="text-accent text-lg mb-6"><strong>Result:</strong> {project.metric}</p>
            <button
              onClick={() => router.push('/portfolio')}
              className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Back to Portfolio"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Portfolio
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}