'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const projects = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    video: '/videos/shoptrend-demo.mp4',
    problem: 'The client needed a modernized e-commerce store to boost conversions, facing issues with outdated design and complex navigation.',
    solution: 'Redesigned the interface with a focus on modern UX trends, introducing intuitive mega-dropdown menus, streamlined product cards, and a simplified checkout process.',
    features: [
      { title: 'Enhanced Navigation', description: 'Introduced a mega-dropdown menu for seamless browsing.' },
      { title: 'Product Cards', description: 'Redesigned cards with high-quality visuals and quick actions.' },
      { title: 'Checkout Optimization', description: 'Simplified checkout to reduce cart abandonment.' },
    ],
    results: [
      { metric: '+25%', detail: 'Increase in conversion rates.' },
      { metric: '+30%', detail: 'Longer average session duration.' },
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    role: 'UX/UI design and front-end development',
    gallery: ['/images/portfolio/shoptrend-1.png', '/images/portfolio/shoptrend-2.png', '/images/portfolio/shoptrend-3.png'],
    testimonial: { quote: 'The new ShopTrend exceeded our expectations—sales have soared!', author: 'Emily Carter, CEO' },
    liveLink: 'https://shoptrend-demo.vercel.app',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    video: null,
    problem: 'Needed an intuitive dashboard for real-time data analytics with a focus on performance.',
    solution: 'Developed a responsive dashboard with real-time charts and a user-friendly interface.',
    features: [
      { title: 'Real-time Charts', description: 'Integrated Chart.js for dynamic data visualization.' },
      { title: 'Responsive Design', description: 'Ensured usability across devices.' },
      { title: 'Custom Filters', description: 'Added flexible data filtering options.' },
    ],
    results: [
      { metric: '40%', detail: 'Faster load times.' },
      { metric: '95+', detail: 'Lighthouse performance score.' },
    ],
    techStack: ['Next.js', 'Chart.js', 'Tailwind CSS'],
    role: 'Front-end development and UI design',
    gallery: ['/images/portfolio/datasync-1.png', '/images/portfolio/datasync-2.png'],
    testimonial: { quote: 'DataSync’s dashboard is a game-changer for our analytics.', author: 'Mark Lee, SaaS CEO' },
    liveLink: null,
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    video: null,
    problem: 'Required a vibrant one-pager to promote health courses with a focus on user engagement.',
    solution: 'Created a visually appealing, mobile-first one-pager with clear CTAs and SEO optimization.',
    features: [
      { title: 'Vibrant Design', description: 'Used bold colors and imagery to attract users.' },
      { title: 'SEO Optimization', description: 'Improved discoverability with meta tags.' },
      { title: 'Mobile-first', description: 'Ensured seamless experience on all devices.' },
    ],
    results: [
      { metric: '90+', detail: 'PageSpeed score.' },
      { metric: '20%', detail: 'Increase in user sign-ups.' },
    ],
    techStack: ['Next.js', 'Tailwind CSS'],
    role: 'UI/UX design and front-end development',
    gallery: ['/images/portfolio/health-wellness-1.png', '/images/portfolio/health-wellness-2.png'],
    testimonial: { quote: 'The one-pager perfectly captures our brand’s energy.', author: 'Sarah Brown, Health Coach' },
    liveLink: null,
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    video: null,
    problem: 'Needed an elegant portfolio to showcase a visual artist’s work.',
    solution: 'Designed a minimalist portfolio with a focus on showcasing artwork and smooth navigation.',
    features: [
      { title: 'Minimalist Design', description: 'Clean layout to highlight artwork.' },
      { title: 'Gallery Navigation', description: 'Intuitive controls for browsing.' },
      { title: 'Responsive Layout', description: 'Optimized for all screen sizes.' },
    ],
    results: [
      { metric: '50%', detail: 'Increase in user engagement.' },
      { metric: '85+', detail: 'Accessibility score.' },
    ],
    techStack: ['Next.js', 'Tailwind CSS'],
    role: 'UI design and front-end development',
    gallery: ['/images/portfolio/artist-portfolio-1.png', '/images/portfolio/artist-portfolio-2.png'],
    testimonial: { quote: 'My portfolio now truly reflects my art’s essence.', author: 'Alex Turner, Artist' },
    liveLink: null,
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

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

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

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
            {project.excerpt} (Concept Project)
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