"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const caseStudies = [
  {
    slug: "startup-landing",
    title: "BrightCRM – Landing Page for CRM Application",
    description: "A responsive landing page encouraging demo sign-ups.",
    thumbnail: "/images/startup-landing.jpg",
    path: "/case-studies/startup-landing",
  },
  {
    slug: "ecommerce-redesign",
    title: "ShopTrend – E-commerce Store Redesign",
    description: "Redesign of an e-commerce store with enhanced UX.",
    thumbnail: "/images/ecommerce-redesign.jpg",
    path: "/case-studies/ecommerce-redesign",
  },
  {
    slug: "saas-dashboard",
    title: "DataSync – SaaS Analytics Dashboard",
    description: "An intuitive analytics dashboard for a SaaS application.",
    thumbnail: "/images/saas-dashboard.jpg",
    path: "/case-studies/saas-dashboard",
  },
  {
    slug: "photographer-portfolio",
    title: "PortraitPro – Photographer Portfolio Website",
    description: "A photo gallery with fast loading and fullscreen mode.",
    thumbnail: "/images/photographer-portfolio.jpg",
    path: "/case-studies/photographer-portfolio",
  },
  {
    slug: "taskmaster-pwa",
    title: "TaskMaster – Task Management PWA",
    description: "A progressive web app for task management, working offline.",
    thumbnail: "/images/taskmaster-pwa.jpg",
    path: "/case-studies/taskmaster-pwa",
  },
  {
    slug: "neon-ritual",
    title: "NeonRitual – AI Illustration Art Website",
    description: "An immersive website featuring animated AI illustrations.",
    thumbnail: "/images/neon-ritual.jpg",
    path: "/case-studies/neon-ritual",
  },
];

export default function CaseStudiesPage() {
  const [particles, setParticles] = useState([]);

  // Generate particles on the client side
  useEffect(() => {
    const numParticles = 20;
    const newParticles = Array.from({ length: numParticles }, () => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      animateCyFrom: Math.random() * 100,
      animateCyTo: Math.random() * 100,
      animateCxFrom: Math.random() * 100,
      animateCxTo: Math.random() * 100,
      dur: Math.random() * 5 + 5,
      begin: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main role="main" className="min-h-screen relative overflow-hidden bg-neutral-dark">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" className="fill-accent/30" />
              <stop offset="100%" className="fill-transparent" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {particles.map((particle, i) => (
            <circle
              key={i}
              cx={`${particle.cx}%`}
              cy={`${particle.cy}%`}
              r="2"
              className="fill-accent/30"
              opacity="0.3"
              filter="url(#glow)"
            >
              <animate
                attributeName="cy"
                from={`${particle.animateCyFrom}%`}
                to={`${particle.animateCyTo}%`}
                dur={`${particle.dur}s`}
                repeatCount="indefinite"
                begin={`${particle.begin}s`}
              />
              <animate
                attributeName="cx"
                from={`${particle.animateCxFrom}%`}
                to={`${particle.animateCxTo}%`}
                dur={`${particle.dur}s`}
                repeatCount="indefinite"
                begin={`${particle.begin}s`}
              />
            </circle>
          ))}
        </svg>
      </div>

      {/* Hero Section */}
      <section className="section-spacing container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-light-gray mb-4 heading-underline">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto mb-8 font-inter leading-relaxed">
            Explore my portfolio of projects, showcasing my expertise in web development, design, and consulting.
          </p>
        </motion.div>
      </section>

      {/* Project Grid Section */}
      <section className="section-spacing container mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              className="card overflow-hidden rounded-2xl border border-accent/30 shadow-card hover:shadow-card-hover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
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