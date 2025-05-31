'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Paintbrush, Rocket, Truck, Globe, Heart, Users, Download, FileText } from 'lucide-react';

// Custom CSS for subtle animations and background effects
const customStyles = `
  .hero-bg {
    background: linear-gradient(135deg, #0d1117 0%, #1f2937 100%);
    position: relative;
    overflow: hidden;
  }
  .hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 20%, rgba(96, 165, 250, 0.3) 0%, transparent 70%);
    animation: pulse-slow 10s ease-in-out infinite;
  }
  .hero-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    animation: pulse-slow 12s ease-in-out infinite;
  }
  .timeline-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3rem;
  }
  @media (max-width: 768px) {
    .timeline-item {
      flex-direction: column;
      text-align: center;
    }
    .timeline-item .timeline-content {
      width: 100% !important;
      text-align: center !important;
      padding: 1rem;
    }
    .timeline-item .timeline-icon {
      width: 100% !important;
      margin-top: 1rem;
    }
  }
`;

// Case study data
const caseStudy = {
  slug: 'nonprofit-overhaul',
  title: 'Non-Profit Website Overhaul',
  industry: 'Non-Profit',
  client: 'Community Hope Foundation',
  techStack: [
    { name: 'Next.js 14', details: 'App Router, ISR' },
    { name: 'TailwindCSS', details: 'Custom theming' },
    { name: 'WCAG 2.1', details: 'Accessibility checklist' },
    { name: 'Lighthouse', details: 'Score: 98 accessibility' },
  ],
  role: 'Full-Stack Developer',
  heroImage: '/images/case-studies/nonprofit-hero.jpg',
  galleryImages: [
    '/images/case-studies/nonprofit-1.jpg',
    '/images/case-studies/nonprofit-2.jpg',
    '/images/case-studies/nonprofit-3.jpg',
  ],
  problem:
    'The Community Hope Foundation’s website suffered from poor accessibility, making it difficult for users with disabilities to navigate. Additionally, the outdated design failed to engage donors effectively, resulting in missed opportunities for fundraising.',
  solution:
    'We revamped the website to meet WCAG 2.1 standards, ensuring accessibility for all users. The design was modernized with Tailwind CSS, focusing on intuitive navigation and donor engagement features like simplified donation forms and impactful visuals.',
  process: [
    {
      title: 'Planning',
      icon: Rocket,
      description:
        'Conducted an accessibility audit and collaborated with the client to define goals focused on WCAG compliance and donor engagement.',
    },
    {
      title: 'Design',
      icon: Paintbrush,
      description:
        'Developed a clean, accessible design using Tailwind CSS, prioritizing high-contrast visuals and screen-reader compatibility.',
    },
    {
      title: 'Development',
      icon: Code,
      description:
        'Built the site with Next.js, implementing semantic HTML, ARIA landmarks, and keyboard navigation support.',
    },
    {
      title: 'Delivery',
      icon: Truck,
      description:
        'Launched the site with comprehensive training for the non-profit team, ensuring they could manage content effectively.',
    },
  ],
  results: [
    { value: '+40%', label: 'Increase in Donations', icon: Heart },
    { value: 'WCAG 2.1', label: 'Compliance Achieved', icon: Globe },
    { value: 'Improved', label: 'User Engagement', icon: Users },
  ],
  businessImpact: 'Increased annual donations by €200,000 through enhanced donor engagement.',
  challenges: [
    {
      title: 'Challenge: Balancing Aesthetics with Accessibility',
      description: 'Ensuring the site was visually appealing while meeting strict WCAG 2.1 guidelines required careful component design and testing.',
    },
    {
      title: 'Decision: Simplified Donation Flow',
      description: 'We prioritized a streamlined donation process, reducing form fields and adding visual cues to guide users, which significantly boosted conversions.',
    },
    {
      title: 'Lesson Learned: Underestimation of Complexity',
      description: 'Clients often underestimate the complexity of accessibility. We learned to allocate more time for user testing with diverse audiences.',
    },
    {
      title: 'What We’d Do Differently',
      description: 'Incorporate automated accessibility testing earlier in the development process to catch issues sooner.',
    },
  ],
  testimonial: {
    quote: 'Working with Nyxtrael was a game-changer. Donations increased dramatically after the relaunch, and our community can now engage with us more easily.',
    author: 'Sarah Blake',
    role: 'Fundraising Director, Community Hope Foundation',
  },
};

// Map icon strings to actual Lucide icons
const iconMap = {
  Rocket: Rocket,
  Paintbrush: Paintbrush,
  Code: Code,
  Truck: Truck,
};

export default function NonprofitOverhaulPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="hero-bg relative grain-overlay py-24 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-[#0e0e0e] to-[#0a0a0a] opacity-70 -z-10"
        ></motion.div>
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#e5e7eb] mb-4">
            {caseStudy.title}
          </h1>
        </motion.div>
      </section>

      {/* Key Facts / Summary Section */}
      <section className="section bg-[#1f2937] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#0d1117] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h3 className="text-lg font-serif text-[#e5e7eb] mb-2">Goal</h3>
              <p className="text-[#9ca3af] font-inter">Improve accessibility and UX</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif text-[#e5e7eb] mb-2">Result</h3>
              <p className="text-[#9ca3af] font-inter">+40% donations</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif text-[#e5e7eb] mb-2">Stack</h3>
              <p className="text-[#9ca3af] font-inter">Next.js, Tailwind CSS</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif text-[#e5e7eb] mb-2">Client</h3>
              <p className="text-[#9ca3af] font-inter">{caseStudy.client}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section bg-[#0d1117] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-serif font-bold text-[#e5e7eb] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Problem & Solution
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-[#e5e7eb] mb-4">Problem</h3>
              <p className="text-[#9ca3af] text-base font-inter">{caseStudy.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-[#e5e7eb] mb-4">Solution</h3>
              <p className="text-[#9ca3af] text-base font-inter">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="section bg-[#1f2937] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-serif font-bold text-[#e5e7eb] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudy.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-[#0d1117] p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-serif text-[#e5e7eb] mb-2">{tech.name}</h3>
                <p className="text-[#9ca3af] font-inter">{tech.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-[#0d1117] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-serif font-bold text-[#e5e7eb] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Process
          </motion.h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#60a5fa] h-full md:block hidden"></div>
            {caseStudy.process.map((step, index) => (
              <motion.div
                key={step.title}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`timeline-content w-1/2 p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{step.title}</h3>
                  <p className="text-[#9ca3af] text-base font-inter">{step.description}</p>
                </div>
                <div className="timeline-icon w-1/2 flex justify-center">
                  <div className="bg-[#1f2937] p-4 rounded-full shadow-card">
                    <step.icon className="w-8 h-8 text-slate-400 hover:text-[#60a5fa] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results and Business Impact */}
      <section className="section bg-[#0d1117] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-serif font-bold text-[#e5e7eb] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Results & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={result.label}
                className="bg-[#1f2937] p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <result.icon className="w-10 h-10 text-slate-400 mx-auto mb-4 hover:text-[#60a5fa] transition-colors" />
                <p className="text-3xl font-bold text-[#60a5fa] mb-2">{result.value}</p>
                <p className="text-[#9ca3af] font-inter">{result.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-lg text-[#e5e7eb] text-center font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Business Impact: {caseStudy.businessImpact}
          </motion.p>
        </div>
      </section>

      {/* Challenges and Learnings */}
      <section className="section bg-[#1f2937] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-serif font-bold text-[#e5e7eb] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Challenges & Learnings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudy.challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className="bg-[#0d1117] p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-serif text-[#e5e7eb] mb-2">{challenge.title}</h3>
                <p className="text-[#9ca3af] font-inter">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="section bg-[#0d1117] grain-overlay">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-[#1f2937] p-8 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg italic text-[#e5e7eb] font-inter mb-4">“{caseStudy.testimonial.quote}”</p>
            <p className="text-[#9ca3af] font-inter">
              – {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download PDF / UX Audit */}
      <section className="section bg-[#0d1117] grain-overlay">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="#"
              className="inline-flex items-center bg-[#1e3a8a] text-[#e5e7eb] py-3 px-6 rounded-lg font-inter hover:bg-[#60a5fa] transition-colors"
            >
              <Download className="w-5 h-5 mr-2 text-slate-400 hover:text-[#e5e7eb] transition-colors" />
              Download Project Summary (PDF)
            </Link>
            <Link
              href="#"
              className="inline-flex items-center bg-[#1e3a8a] text-[#e5e7eb] py-3 px-6 rounded-lg font-inter hover:bg-[#60a5fa] transition-colors"
            >
              <FileText className="w-5 h-5 mr-2 text-slate-400 hover:text-[#e5e7eb] transition-colors" />
              See Before/After Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0d1117] text-center grain-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-[#e5e7eb] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Want Similar Results for Your Non-Profit?
          </motion.h2>
          <motion.p
            className="text-lg text-[#9ca3af] mb-8 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s talk about how we can enhance your organization’s online presence and impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="md:sticky bottom-4 z-50"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#1e3a8a] text-[#e5e7eb] py-4 px-8 text-lg rounded-lg font-inter hover:bg-[#60a5fa] transition-colors md:py-5 md:px-10"
              aria-label="Contact us to start your project"
            >
              Let’s Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}