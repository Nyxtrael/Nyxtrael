'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Code, Paintbrush, Lightbulb, MessageCircle, Rocket, Clock, Brain, Globe, Wrench, Puzzle } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './Section';
import AboutHero from './AboutHero';

const expertiseItems = [
  {
    title: 'Web Development',
    description: 'Crafting fast, responsive websites with Next.js and React, focusing on clean code and optimal performance.',
    result: 'Built 20+ portfolio websites with 90+ PageSpeed scores.',
    icon: <Code className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-centered interfaces with sleek prototypes and engaging layouts.',
    result: 'Created 15+ UI/UX designs, boosting user engagement by 30%.',
    icon: <Paintbrush className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Consulting',
    description: 'Providing expert guidance on digital strategy, performance optimization, and scalable architecture.',
    result: 'Optimized 5+ mock projects for speed and SEO.',
    icon: <Lightbulb className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
];

const whyWorkWithMeItems = [
  {
    title: 'Direct Communication',
    description: 'Collaborate directly via Slack or Zoom with regular updates for full transparency.',
    icon: <MessageCircle className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Tailored Solutions',
    description: 'Every project starts with understanding your unique needs, ensuring a perfect fit.',
    icon: <Puzzle className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Timely Delivery',
    description: 'I plan meticulously to deliver on time, every time, without cutting corners.',
    icon: <Clock className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
];

const techStack = [
  { name: 'React', logo: '/images/tech-react.png' },
  { name: 'Next.js', logo: '/images/tech-nextjs.png' },
  { name: 'Tailwind CSS', logo: '/images/tech-tailwind.png' },
  { name: 'TypeScript', logo: '/images/tech-typescript.png' },
  { name: 'Figma', logo: '/images/tech-figma.png' },
];

const journeyItems = [
  {
    year: '2021',
    title: 'Learning the Basics',
    description: 'Started my journey by mastering HTML, CSS, and JavaScript, building small static websites.',
    icon: <Brain className="w-8 h-8 text-accent hover:text-yellow-400 transition-colors" />,
    caseStudyLink: null,
  },
  {
    year: '2022',
    title: 'First Steps',
    description: 'Learned React and built small personal sites like **MiniPortfolio** to explore design and functionality.',
    icon: <Code className="w-8 h-8 text-accent hover:text-yellow-400 transition-colors" />,
    caseStudyLink: null,
  },
  {
    year: '2023',
    title: 'Portfolio Growth',
    description: 'Developed **DataSync**, a SaaS dashboard for my portfolio, focusing on real-time UX with Next.js and Chart.js.',
    icon: <Globe className="w-8 h-8 text-accent hover:text-yellow-400 transition-colors" />,
    caseStudyLink: '/example-work/datasync',
  },
  {
    year: '2024',
    title: 'Expanding Skills',
    description: 'Created **ShopTrend**, an e-commerce redesign, and built responsive templates with Tailwind CSS.',
    icon: <Wrench className="w-8 h-8 text-accent hover:text-yellow-400 transition-colors" />,
    caseStudyLink: '/example-work/shoptrend',
  },
  {
    year: '2025',
    title: 'Freelance & Mastery',
    description: 'Refining skills with projects like **Health & Wellness**, aiming for global freelance opportunities.',
    icon: <Rocket className="w-8 h-8 text-accent hover:text-yellow-400 transition-colors" />,
    caseStudyLink: '/example-work/health-wellness',
  },
  {
    year: '2026',
    title: 'Future Goals',
    description: 'Planning to explore AI-driven development and Web3, delivering cutting-edge solutions.',
    icon: <Lightbulb className="w-8 h-8 text-accent hover:text-yellow-400 transition-colors" />,
    caseStudyLink: null,
  },
];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
  .timeline-gradient {
    background: linear-gradient(to bottom, #38bdf8, #facc15);
  }
`;

export default function About() {
  return (
    <main suppressHydrationWarning>
      <style>{customStyles}</style>

      <AboutHero />

      <div className="section-divider" />

      <Section title="My Story" bgClass="bg-neutral-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center prose prose-invert prose-headings:text-text-base prose-p:text-text-muted prose-a:text-accent prose-a:hover:text-yellow-400">
          <div className="aspect-square w-full max-w-xs mx-auto">
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael – Front-end Developer specializing in React and Next.js"
              width={300}
              height={300}
              className="rounded-full border-4 border-accent/50 hover:border-yellow-400/50 shadow-md hover:shadow-accent/50 transition-all duration-300"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Beginnings</h3>
            <p>
              I’m [Your Name], known online as Nyxtrael, a front-end developer passionate about crafting sleek, high-performance web applications with React and Next.js.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Key Projects</h3>
            <p>
              My journey began with a love for coding and design, leading to impactful projects like <Link href="/example-work/datasync" className="underline">DataSync</Link>, a SaaS dashboard, <Link href="/example-work/shoptrend" className="underline">ShopTrend</Link>, an e-commerce redesign, and a <Link href="/example-work/health-wellness" className="underline">health-focused one-pager</Link>.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-4">My Mission</h3>
            <p>
              I believe in transparent communication and continuous learning, staying updated with trends like AI and UX best practices to deliver exceptional value to clients.
            </p>
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      <Section title="My Journey" pattern bgClass="bg-neutral-bg">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-gradient h-full md:block hidden" />
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.year}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`w-1/2 p-6 relative ${index % 2 === 0 ? 'pr-8' : 'pl-8'} hover:shadow-accent/50 transition-all duration-300 rounded-lg`}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent md:block hidden"
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />
                <h3 className="text-xl font-semibold text-text-base mb-2">{item.year} - {item.title}</h3>
                <p className="text-text-muted font-inter">{item.description}</p>
                {item.caseStudyLink && (
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={item.caseStudyLink}
                      className="inline-block mt-2 text-accent hover:text-yellow-400 font-inter text-sm underline"
                      aria-label={`View ${item.title} project from ${item.year}`}
                    >
                      See This Project
                    </Link>
                  </motion.div>
                )}
              </motion.div>
              <div className="w-1/2 flex justify-center">
                <div className="bg-neutral-mid p-4 rounded-full shadow-md">{item.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      <Section title="My Expertise" pattern bgClass="bg-neutral-bg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseItems.map((item) => (
            <motion.div
              key={item.title}
              className="bg-neutral-mid p-6 rounded-2xl border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4" aria-hidden="true">{item.icon}</span>
              <h3 className="text-2xl font-semibold text-text-base mb-2">{item.title}</h3>
              <p className="text-text-muted font-inter">{item.description}</p>
              <p className="text-accent font-inter mt-2">{item.result}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      <Section title="Why Work With Me?" bgClass="bg-neutral-bg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyWorkWithMeItems.map((item) => (
            <motion.div
              key={item.title}
              className="bg-neutral-mid p-6 rounded-2xl border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4" aria-hidden="true">{item.icon}</span>
              <h3 className="text-xl font-semibold text-text-base mb-2">{item.title}</h3>
              <p className="text-text-muted font-inter">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      <Section title="My Tech Stack" pattern bgClass="bg-neutral-bg">
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={80}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-neutral-mid text-text-base text-sm px-2 py-1 rounded">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      <Section title="Let’s Work Together" bgClass="bg-neutral-bg">
        <p className="text-center text-xl text-text-muted mb-6 max-w-3xl mx-auto font-inter">
          Ready to discuss your project? I’m fluent in English and Polish, ready to collaborate globally, and I’ll respond within 24 hours.
        </p>
        <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold bg-gradient-cta text-neutral-dark hover:shadow-accent/50 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Get in touch with Nyxtrael"
          >
            Get in Touch
            <MessageCircle className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nyxtrael-nyxtrael-928670368/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold bg-transparent border-2 border-accent text-text-base hover:bg-accent hover:text-neutral-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="View Nyxtrael's LinkedIn profile"
          >
            View LinkedIn
          </Link>
        </div>
      </Section>
    </main>
  );
}