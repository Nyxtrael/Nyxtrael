'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Code, Paintbrush, Lightbulb, MessageCircle, Rocket, Clock } from 'lucide-react';
import Section from './Section';
import AboutHero from './AboutHero';

const expertiseItems = [
  {
    title: 'Web Development',
    description: 'I create fast, responsive websites using modern technologies like Next.js and React, ensuring clean code and optimal performance.',
    result: 'Built 20+ websites and apps with 99% client satisfaction.',
    icon: <Code className="h-12 w-12 text-[#a855f7] hover:text-[#c084fc] transition-colors" />,
  },
  {
    title: 'UI/UX Design',
    description: 'I design intuitive interfaces with a focus on user experience, delivering sleek prototypes and visually appealing layouts.',
    result: 'Designed interfaces for 15+ projects, boosting engagement by 25%.',
    icon: <Paintbrush className="h-12 w-12 text-[#a855f7] hover:text-[#c084fc] transition-colors" />,
  },
  {
    title: 'Consulting',
    description: 'I offer expert guidance on digital projects, helping you optimize performance and plan scalable solutions.',
    result: 'Improved app performance by 30% for 5+ clients.',
    icon: <Lightbulb className="h-12 w-12 text-[#a855f7] hover:text-[#c084fc] transition-colors" />,
  },
];

const whyWorkWithMeItems = [
  {
    title: 'Direct Communication',
    description: 'Work directly with me—no middlemen. I ensure clear, transparent updates at every stage.',
    icon: <MessageCircle className="h-12 w-12 text-[#a855f7] hover:text-[#c084fc] transition-colors" />,
  },
  {
    title: 'Tailored Solutions',
    description: 'I focus on your unique goals, delivering customized results that align with your vision.',
    icon: <Rocket className="h-12 w-12 text-[#a855f7] hover:text-[#c084fc] transition-colors" />,
  },
  {
    title: 'Timely Delivery',
    description: 'I prioritize deadlines, ensuring your project is completed on time without compromising quality.',
    icon: <Clock className="h-12 w-12 text-[#a855f7] hover:text-[#c084fc] transition-colors" />,
  },
];

const techStack = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Figma'];

const journeyItems = [
  {
    year: '2022',
    title: 'The Beginning',
    description: 'Started my journey as a front-end developer, focusing on React and building small projects for local businesses.',
  },
  {
    year: '2023',
    title: 'First Big Project',
    description: 'Delivered my first major SaaS dashboard for a startup, which led to a 20% increase in their user engagement.',
  },
  {
    year: '2024',
    title: 'Freelance Expansion',
    description: 'Expanded my freelance services, working with clients globally and specializing in Next.js and UI/UX design.',
  },
  {
    year: '2025',
    title: 'Today',
    description: 'Continuing to build high-performance web applications, focusing on scalability and user-centric design.',
  },
];

// Custom CSS dla separatorów sekcji
const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #1f2937 0%, #2d3748 50%, #1f2937 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
  }
`;

export default function About() {
  return (
    <main suppressHydrationWarning>
      <style>{customStyles}</style>

      <AboutHero />

      {/* Separator */}
      <div className="section-divider"></div>

      <Section title="My Story" bgClass="bg-[#1f2937]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="aspect-square w-full max-w-xs mx-auto">
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael – Front-end Developer specializing in React and Next.js"
              width={300}
              height={300}
              className="rounded-full border-4 border-[#a855f7]/50 hover:border-[#c084fc]/50 shadow-md hover:shadow-[#a855f7]/50 transition-all duration-300"
              priority
            />
          </div>

          <div className="md:col-span-2 prose prose-invert prose-headings:text-[#e5e7eb] prose-p:text-[#9ca3af] prose-a:text-[#a855f7] prose-a:hover:text-[#c084fc]">
            <p>
              I’m Nyxtrael, a passionate front-end developer with a knack for crafting sleek, high-performance web applications. I specialize in React and Next.js, focusing on delivering scalable, user-centric solutions.
            </p>
            <p>
              My journey started with a love for coding and design, evolving into a mission to help startups, creators, and SaaS teams bring their visions to life. I’m committed to transparent communication, tailored solutions, and timely delivery on every project.
            </p>
            <Link
              href="/case-studies"
              className="inline-block bg-gradient-to-r from-[#a855f7] to-[#c084fc] text-[#e5e7eb] px-8 py-4 rounded-lg font-inter text-lg font-semibold hover:shadow-[#a855f7]/70 transition-all duration-300"
              aria-label="View my work in case studies"
            >
              View My Work
            </Link>
          </div>
        </div>
      </Section>

      {/* Separator */}
      <div className="section-divider"></div>

      <Section title="My Journey" pattern bgClass="bg-[#1f2937]">
        <div className="relative max-w-4xl mx-auto">
          {/* Linia czasu */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#a855f7] to-[#c084fc] h-full md:block hidden"></div>
          {journeyItems.map((item, index) => (
            <div
              key={item.year}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:${index % 2 === 0 ? 'text-right' : 'text-left'}`}
            >
              <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{item.year} - {item.title}</h3>
                <p className="text-[#9ca3af] font-inter">{item.description}</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="bg-[#2d3748] p-4 rounded-full shadow-md">
                  <Rocket className="w-8 h-8 text-[#a855f7] hover:text-[#c084fc] transition-colors" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Separator */}
      <div className="section-divider"></div>

      <Section title="My Expertise" pattern bgClass="bg-[#1f2937]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#2d3748] p-6 rounded-2xl border border-[#a855f7]/30 hover:border-[#c084fc]/50 hover:shadow-[#a855f7]/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <span className="mb-4" aria-hidden="true">{item.icon}</span>
              <h3 className="text-2xl font-serif font-semibold text-[#e5e7eb] mb-2">{item.title}</h3>
              <p className="text-[#9ca3af] font-inter">{item.description}</p>
              <p className="text-[#a855f7] font-inter mt-2">{item.result}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Separator */}
      <div className="section-divider"></div>

      <Section title="Why Work With Me?" bgClass="bg-[#1f2937]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyWorkWithMeItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#2d3748] p-6 rounded-2xl border border-[#a855f7]/30 hover:border-[#c084fc]/50 hover:shadow-[#a855f7]/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <span className="mb-4" aria-hidden="true">{item.icon}</span>
              <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{item.title}</h3>
              <p className="text-[#9ca3af] font-inter">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Separator */}
      <div className="section-divider"></div>

      <Section title="My Tech Stack" pattern bgClass="bg-[#1f2937]">
        <ul role="list" className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="bg-[#a855f7] text-[#e5e7eb] px-4 py-2 rounded-full text-sm font-medium font-inter shadow-md hover:bg-[#c084fc] hover:shadow-[#a855f7]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c084fc]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      {/* Separator */}
      <div className="section-divider"></div>

      <Section title="Let’s Work Together" bgClass="bg-[#1f2937]">
        <p className="text-center text-xl text-[#9ca3af] mb-6 max-w-3xl mx-auto font-inter">
          Ready to bring your project to life? Let’s collaborate and create something amazing.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            role="button"
            className="inline-block bg-[#a855f7] text-[#e5e7eb] px-8 py-4 rounded-lg text-xl font-semibold font-inter shadow-md hover:bg-[#c084fc] hover:shadow-[#a855f7]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c084fc] focus:ring-offset-2 focus:ring-offset-[#1f2937]"
            aria-label="Go to contact page"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </main>
  );
}