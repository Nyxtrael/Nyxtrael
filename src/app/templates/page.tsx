'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const templates = [
  {
    path: '/templates/saas-landing',
    title: 'SaaS Landing',
    description: 'A custom Next.js landing page template with pricing and FAQ sections, designed for speed and flexibility.',
    preview: '/images/templates/saas-landing.webp',
    category: 'Landing Pages',
    type: 'Free',
    github: 'https://github.com/nyxtrael/saas-landing',
  },
  {
    path: '/templates/admin-dashboard',
    title: 'Admin Dashboard',
    description: 'A Tailwind-based dashboard template for analytics, offering a structured framework for data visualization.',
    preview: '/images/templates/admin-dashboard.webp',
    category: 'Dashboards',
    type: 'Free',
    github: 'https://github.com/nyxtrael/admin-dashboard',
  },
  {
    path: '/templates/portfolio-showcase',
    title: 'Portfolio Showcase',
    description: 'A creative portfolio template for photographers, built with a modern design pattern.',
    preview: '/images/templates/portfolio-showcase.webp',
    category: 'Portfolios',
    type: 'Free',
    github: 'https://github.com/nyxtrael/portfolio-showcase',
  },
  {
    path: '/templates/ecommerce-store',
    title: 'E-commerce Store',
    description: 'An e-commerce landing page template with a product grid, optimized for online sales.',
    preview: '/images/templates/ecommerce-store.webp',
    category: 'E-commerce',
    type: 'Free',
    github: 'https://github.com/nyxtrael/ecommerce-store',
  },
  {
    path: '/templates/ui-components',
    title: 'UI Components',
    description: 'A collection of reusable Tailwind UI components, perfect for rapid prototyping.',
    preview: '/images/templates/ui-components.webp',
    category: 'UI Components',
    type: 'Open-Source',
    github: 'https://github.com/nyxtrael/ui-components',
  },
];

const customStyles = `
  .section-divider {
    height: 40px;
    background: linear-gradient(to right, #e9d5ff, #d8b4fe);
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
  }
  .card {
    transition: all 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  .badge {
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 0.75rem;
  }
  .mockup {
    position: relative;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 0.8rem;
  }
  .mockup img {
    transform: translateY(-8%);
  }
  .frosted {
    backdrop-filter: blur(4px);
    background: rgba(255, 255, 255, 0.05);
  }
  .process-item {
    border-bottom: 1px dashed #d8b4fe;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    position: relative;
  }
  .process-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .process-icon {
    font-size: 1.5rem;
    color: #d8b4fe;
    margin-bottom: 0.5rem;
  }
`;

export default function Templates() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Landing Pages', 'Dashboards', 'Portfolios', 'E-commerce', 'UI Components'];
  const types = ['All', 'Free', 'Open-Source'];

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = filterCategory === 'All' || template.category === filterCategory;
    const matchesType = filterType === 'All' || template.type === filterType;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <main className="bg-neutral-bg font-inter text-text-base">
      <style>{customStyles}</style>

      {/* Hero Section with Video */}
      <section className="relative min-h-[50vh] flex items-center py-20 bg-neutral-bg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
            aria-hidden="true"
          >
            <source src="/videos/templates.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-bg/60" />
        </div>
        <div className="container mx-auto text-center z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Free Templates
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-muted mb-6">
            Custom designs built for speed, style, and accessibility.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              className="bg-gradient-to-r from-accent to-yellow-400 text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Browse all templates"
            >
              Browse All
            </motion.button>
            <motion.button
              className="bg-gradient-to-r from-accent to-yellow-400 text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
              aria-label="Get a custom template"
            >
              Get a Custom Template
            </motion.button>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* For Who Section */}
      <section className="py-20 bg-neutral-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">For Who?</h2>
          <p className="text-base text-text-muted mb-6">These free templates are perfect for:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              className="p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold">Startup Founders</h3>
              <p className="text-sm">Quick launches with custom designs.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold">Web Developers</h3>
              <p className="text-sm">Optimize with Next.js frameworks.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold">UI Designers</h3>
              <p className="text-sm">Build with reusable components.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold">Agencies</h3>
              <p className="text-sm">Deliver scalable solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Filter Section */}
      <section className="py-12 bg-neutral-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Filter Templates</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border rounded bg-neutral-mid text-text-base focus:ring-2 focus:ring-accent"
            >
              {['All', 'Landing Pages', 'Dashboards', 'Portfolios', 'E-commerce', 'UI Components'].map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border rounded bg-neutral-mid text-text-base focus:ring-2 focus:ring-accent"
            >
              {['All', 'Free', 'Open-Source'].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search by name or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-auto px-4 py-2 border rounded bg-neutral-mid text-text-base focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-neutral-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Template Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.path}
                className="card bg-neutral-mid rounded-lg overflow-hidden border border-accent/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mockup">
                  <img src={template.preview} alt={`${template.title} preview (custom template design)`} className="w-full h-56 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{template.title}</h3>
                  <p className="text-text-muted text-sm">{template.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className={`badge ${template.type === 'Free' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                      {template.type}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link
                      href={template.path}
                      className="flex-1 bg-gradient-to-r from-accent to-yellow-400 text-neutral-dark px-3 py-2 rounded-lg text-center hover:opacity-90 transition-all duration-300"
                      aria-label={`Preview ${template.title}`}
                    >
                      Preview
                    </Link>
                    {template.github && (
                      <Link
                        href={template.github}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg text-center hover:opacity-90 transition-all duration-300"
                        aria-label={`Download ${template.title}`}
                      >
                        Download
                      </Link>
                    )}
                    {template.github && (
                      <Link
                        href={template.github}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg text-center hover:opacity-90 transition-all duration-300"
                        aria-label={`View ${template.title} on GitHub`}
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                  <div className="mt-3 text-sm">
                    <button
                      className="text-accent hover:underline"
                      onClick={() => navigator.clipboard.writeText(`npx create-nyxtrael-app@latest ${template.path.split('/')[2]}`)}
                      aria-label={`Copy install snippet for ${template.title}`}
                    >
                      Copy install: npx create-nyxtrael-app@latest {template.path.split('/')[2]}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* How I Build Templates Section */}
      <section className="py-20 bg-neutral-bg frosted rounded-lg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">How I Build Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="process-item p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="process-icon">🎨</div>
              <h3 className="text-xl font-semibold mt-2">Design & Structure</h3>
              <p className="text-base text-text-muted mt-2">Creating innovative layouts with a focus on user-friendly design and structure.</p>
            </motion.div>
            <motion.div
              className="process-item p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="process-icon">⚙️</div>
              <h3 className="text-xl font-semibold mt-2">Develop & Optimize</h3>
              <p className="text-base text-text-muted mt-2">Building with Next.js and Tailwind, optimized for performance and SEO.</p>
            </motion.div>
            <motion.div
              className="process-item p-6 bg-neutral-mid rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="process-icon">✨</div>
              <h3 className="text-xl font-semibold mt-2">Customize & Refine</h3>
              <p className="text-base text-text-muted mt-2">Offering customization with responsive, adaptable designs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Call to Action / Footer */}
      <section className="py-12 bg-neutral-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Design?</h2>
          <p className="text-base text-text-muted mb-6">Explore resources or connect with me.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-yellow-400 text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              aria-label="Contact for custom template"
            >
              Let's Talk
            </Link>
            <Link
              href="https://github.com/nyxtrael"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              aria-label="View GitHub FAQ"
            >
              GitHub / FAQ
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="email"
              placeholder="Subscribe for updates..."
              className="px-4 py-2 border rounded-l bg-neutral-mid text-text-base focus:ring-2 focus:ring-accent"
              aria-label="Newsletter email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <button
              className="bg-gradient-to-r from-accent to-yellow-400 text-neutral-dark px-4 py-2 rounded-r font-semibold hover:opacity-90 transition-all duration-300"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-text-muted mt-4">Get notified about the latest template releases!</p>
        </div>
      </section>
    </main>
  );
}