'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Code, Paintbrush, Lightbulb, UserIcon, CheckCircleIcon, Rocket } from 'lucide-react';
import Section from './Section';
import AboutHero from './AboutHero';

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
    icon: <UserIcon className="h-12 w-12 text-accent" />,
  },
  {
    title: 'Tailored Solutions',
    description: 'I focus on your unique goals, delivering customized results that align with your vision.',
    icon: <Rocket className="h-12 w-12 text-accent" />,
  },
  {
    title: 'Timely Delivery',
    description: 'I prioritize deadlines, ensuring your project is completed on time without compromising quality.',
    icon: <CheckCircleIcon className="h-12 w-12 text-accent" />,
  },
];

const techStack = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma'];

export default function About() {
  return (
    <main suppressHydrationWarning>
      <AboutHero />

      <Section title="My Story" bgClass="bg-neutral-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="aspect-square w-full max-w-xs mx-auto animate-fade-in">
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael – Front-end Developer"
              width={300}
              height={300}
              className="rounded-full border-4 border-accent shadow-card hover:shadow-card-hover transition-shadow duration-300"
              priority
            />
          </div>

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
            <Link
              href="/case-studies"
              className="btn-secondary text-white mt-6 inline-block animate-fade-in"
              aria-label="View my work in case studies"
            >
              View My Work
            </Link>
          </div>
        </div>
      </Section>

      <Section title="My Expertise" pattern bgClass="bg-neutral-mid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-neutral-mid p-6 rounded-2xl card border border-accent/50 shadow-card hover:shadow-card-hover hover:bg-opacity-95 hover:scale-105 transition-all duration-300 animate-fade-in-up flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mb-4" aria-hidden="true">{item.icon}</span>
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#F5F5F5]">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Work With Me?" bgClass="bg-neutral-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyWorkWithMeItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-neutral-mid p-6 rounded-2xl card border border-accent/50 shadow-card hover:shadow-card-hover hover:bg-opacity-95 hover:scale-105 transition-all duration-300 animate-fade-in-up flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mb-4" aria-hidden="true">{item.icon}</span>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#F5F5F5]">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="My Tech Stack" pattern bgClass="bg-neutral-mid">
        <ul role="list" className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {techStack.map((tech, index) => (
            <li
              key={tech}
              className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Let’s Work Together" bgClass="bg-neutral-dark">
        <p className="text-center text-xl text-[#F5F5F5] mb-6 max-w-3xl mx-auto animate-fade-in">
          Ready to bring your project to life? Let’s collaborate and create something amazing.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            role="button"
            className="btn-primary text-white inline-block px-8 py-4 rounded-full text-xl font-semibold font-montserrat shadow-lg animate-glow-pulse hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-500 focus:scale-95 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
            aria-label="Go to contact page"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </main>
  );
}