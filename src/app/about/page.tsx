"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Paintbrush, Lightbulb } from 'lucide-react';
import Section from '../../components/Section';

const expertiseItems = [
  {
    title: 'Web Development',
    description: 'I create fast, responsive websites using modern technologies like Next.js and React, ensuring clean code and optimal performance.',
    icon: <Code className="h-12 w-12 text-accent" />,
  },
  {
    title: 'UI/UX Design',
    description: 'I design intuitive interfaces with a focus on user experience, delivering sleek prototypes and visually appealing layouts.',
    icon: <Paintbrush className="h-12 w-12 text-accent" />,
  },
  {
    title: 'Consulting',
    description: 'I offer expert guidance on digital projects, helping you optimize performance and plan scalable solutions.',
    icon: <Lightbulb className="h-12 w-12 text-accent" />,
  },
];

const whyWorkWithMeItems = [
  {
    title: 'Direct Communication',
    description: 'Work directly with me—no middlemen. I ensure clear, transparent updates at every stage.',
  },
  {
    title: 'Tailored Solutions',
    description: 'I focus on your unique goals, delivering customized results that align with your vision.',
  },
  {
    title: 'Timely Delivery',
    description: 'I prioritize deadlines, ensuring your project is completed on time without compromising quality.',
  },
];

const techStack = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma'];

export default function About() {
  // Parallax effect for hero background
  const parallax = {
    initial: { backgroundPositionY: '0%' },
    whileInView: { backgroundPositionY: '20%' },
    viewport: { once: true },
    transition: { duration: 1, ease: 'easeOut' },
  };

  return (
    <main>
      {/* About Hero Section with Parallax */}
      <section role="banner" className="relative min-h-[60vh] flex items-center section-spacing bg-gradient-to-b from-neutral-dark to-neutral-mid">
        <motion.div
          className="absolute inset-0"
          variants={parallax}
          initial="initial"
          whileInView="whileInView"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/stars.png"
            alt="Stars background"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </motion.div>

        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            aria-label="About Me"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4 heading-underline"
          >
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#F5F5F5] max-w-3xl mx-auto font-inter leading-relaxed"
          >
            I build sleek, fast, and scalable websites using React & Next.js — crafted for startups, creators and SaaS teams.
          </motion.p>
        </div>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </section>

      {/* My Story Section */}
      <Section title="My Story">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            className="aspect-square w-full max-w-xs mx-auto"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.6 }}
          >
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael – Front-end Developer"
              width={300}
              height={300}
              className="rounded-full border-4 border-accent shadow-card hover:shadow-card-hover transition-shadow duration-300"
              priority
            />
          </motion.div>

          <div className="md:col-span-2 prose prose-invert prose-headings:text-white prose-p:text-[#F5F5F5]">
            <p>
              Hi, I’m Nyxtrael—a front-end freelancer specializing in React and Next.js,
              with a strong portfolio of modern, responsive web applications and clean,
              maintainable code.
            </p>
            <p>
              I prioritize transparent communication and meticulous attention to detail
              at every stage of a project. From sleek landing pages and interactive
              prototypes to full-featured SaaS dashboards, I collaborate closely with
              clients to understand their goals and consistently deliver on time.
            </p>
          </div>
        </div>
      </Section>

      {/* My Expertise Section */}
      <Section title="My Expertise" pattern>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="card hover:shadow-card-hover flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="mb-4">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#F5F5F5]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Work With Me Section */}
      <Section title="Why Work With Me?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyWorkWithMeItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="card hover:shadow-card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#F5F5F5]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section title="My Tech Stack" pattern>
        <ul role="list" className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, index) => (
            <motion.li
              key={tech}
              className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* Call to Action Section */}
      <Section title="Let’s Work Together">
        <motion.p
          className="text-center text-xl text-[#F5F5F5] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to bring your project to life? Let’s collaborate and create something amazing.
        </motion.p>
        <div className="text-center">
          <motion.a
            href="/contact"
            role="button"
            className="btn-primary text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            aria-label="Go to contact page"
          >
            Get in Touch
          </motion.a>
        </div>
      </Section>
    </main>
  );
}