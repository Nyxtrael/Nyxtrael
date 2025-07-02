'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  category: string;
  coverImage: string;
  video: string | null;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  results: { metric: string; detail: string }[];
  techStack: string[];
  role: string;
  gallery: string[];
  testimonial: { quote: string; author: string };
  liveLink: string | null;
  excerpt?: string;
}

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--neutral-bg) 0%, var(--neutral-mid) 50%, var(--neutral-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(var(--accent-rgb), 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(var(--accent-rgb), 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function CaseStudyClient({ project }: { project: Project }) {
  return (
    <main className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Case Study Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 bg-neutral-bg">
        <div className="absolute inset-0 z-0">
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={project.coverImage}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
              aria-hidden="true"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.coverImage}
              alt={`${project.title} hero image`}
              fill
              className="object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            {project.title}
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-inter leading-relaxed">
            {project.excerpt || 'A showcase of innovative design and functionality.'} (Concept Project)
          </p>
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg text-lg font-semibold bg-transparent border-2 border-accent text-text-base hover:bg-accent hover:text-neutral-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Visit live ${project.title} site`}
            >
              Visit Live Site
              <ArrowRight className="h-5 w-5" />
            </Link>
          )}
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Problem & Solution */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Problem & Solution
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 prose prose-invert prose-headings:text-text-base prose-p:text-text-muted">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
              <p>{project.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Solution</h3>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Key Features */}
      <section className="py-16 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key Features
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid p-6 rounded-2xl border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Check className="h-6 w-6 text-accent mb-2" />
                <h3 className="text-xl font-semibold text-text-base mb-2">{feature.title}</h3>
                <p className="text-text-muted font-inter">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Gallery */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Gallery
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover rounded-lg border border-accent/30 hover:border-yellow-400/50"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Results */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Results
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-3xl font-bold text-accent">{result.metric}</p>
                <p className="text-text-muted font-inter">{result.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonial */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Testimonial
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <motion.blockquote
            className="text-center text-xl text-text-muted italic max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "{project.testimonial.quote}" – {project.testimonial.author}
          </motion.blockquote>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="py-24 bg-neutral-bg text-center">
        <motion.h2
          className="text-5xl font-bold text-text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready for Your Project?
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-10 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s create something impactful together. I’ll respond within 24 hours.
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
            aria-label={`Get in touch for a ${project.category} project`}
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}