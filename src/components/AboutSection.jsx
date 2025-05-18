'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { skills } from '../data/skills';
import { timeline } from '../data/timeline';
import { SiNextdotjs, SiTailwindcss, SiFramer } from 'react-icons/si';
import { useState } from 'react';

// Map skill icons
const skillIcons = {
  SiNextdotjs: SiNextdotjs,
  SiTailwindcss: SiTailwindcss,
  SiFramer: SiFramer,
};

// Motion-wrapped Link
const MotionLink = motion(Link);

export default function AboutSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section
      className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#111827]/50 to-[#0F172A]/30 backdrop-blur-md rounded-3xl my-10"
      id="about-me"
    >
      <svg className="w-full h-4 text-[#A855F7]/20" preserveAspectRatio="none">
        <path d="M0 0 L200 100 L400 0 Z" fill="currentColor" />
      </svg>

      {/* Title and Subtitle */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold font-playfair mb-2 bg-gradient-to-r from-[#A855F7] to-[#6B21A8] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl font-inter text-[#A855F7] mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.p>

      {/* Main Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Avatar with Skeleton */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 5, ring: '0 0 0 4px #D946EF' }}
          transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          {!isImageLoaded && (
            <div className="w-[180px] h-[180px] rounded-full bg-gray-700/50 animate-pulse" />
          )}
          <Image
            src="/images/Persona.png"
            alt="Nyxtrael Avatar"
            width={180}
            height={180}
            className={`rounded-full border-4 border-[#A855F7] hover:border-[#D946EF] transition-all duration-300 shadow-lg ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6 text-[#E5E7EB] drop-shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg md:text-xl font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I am an independent web designer and developer with a passion for creating engaging digital experiences.
          </motion.p>
          <motion.ul
            className="text-lg md:text-xl font-inter leading-relaxed list-disc list-inside text-left max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <li>Over 5 years of experience in web design and development.</li>
            <li>Specializing in Next.js, Tailwind CSS, and Framer Motion.</li>
            <li>Passionate about animations and performance optimization.</li>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold font-inter mb-6 text-[#E5E7EB]">
          My Skills
        </h3>
        <div className="space-y-6">
          {skills.map((skill, idx) => {
            const Icon = skillIcons[skill.icon];
            return (
              <motion.div
                key={skill.name}
                className="flex items-center gap-4 max-w-md mx-auto group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-[#A855F7] group-hover:text-[#D946EF] transition-colors duration-300" size={24} />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-lg font-semibold text-[#E5E7EB]">{skill.name}</span>
                    <span className="text-sm text-[#A855F7]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#A855F7] to-[#D946EF] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.9 + idx * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                {/* Tooltip */}
                <div className="absolute left-0 top-[-40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0F172A]/90 text-white text-sm px-3 py-1 rounded-md shadow-lg pointer-events-none">
                  {skill.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold font-inter mb-6 text-[#E5E7EB]">
          My Journey Timeline
        </h3>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#A855F7]/30 rounded-full" />
          {timeline.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              className={`flex items-center mb-8 ${
                idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 px-4 text-right">
                {idx % 2 === 0 && (
                  <>
                    <h4 className="text-xl font-semibold text-[#A855F7]">{milestone.year}</h4>
                    <p className="text-lg text-[#E5E7EB]">{milestone.event}</p>
                    <p className="text-sm text-gray-400">{milestone.description}</p>
                  </>
                )}
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-[#A855F7] rounded-full text-white text-xl z-10">
                {milestone.icon}
              </div>
              <div className="w-1/2 px-4 text-left">
                {idx % 2 !== 0 && (
                  <>
                    <h4 className="text-xl font-semibold text-[#A855F7]">{milestone.year}</h4>
                    <p className="text-lg text-[#E5E7EB]">{milestone.event}</p>
                    <p className="text-sm text-gray-400">{milestone.description}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial */}
      <motion.div
        className="mt-12 bg-[#0F172A]/40 backdrop-blur-md p-8 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl text-[#E5E7EB] italic">
          "Nyxtrael’s design skills brought our vision to life with stunning animations!"
        </p>
        <p className="mt-4 font-semibold text-[#A855F7]">- Sarah Johnson, Creative Lead</p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.7 }}
        viewport={{ once: true }}
      >
        <MotionLink
          href="/case-studies"
          className="bg-gradient-to-r from-[#A855F7] to-[#6B21A8] text-white px-8 py-4 rounded-full font-semibold font-inter shadow-lg hover:shadow-2xl transform transition-all duration-300 relative overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px #A855F7' }}
          whileTap={{ scale: 0.95 }}
          onMouseDown={(e) => {
            const ripple = document.createElement('span');
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.className = 'absolute w-0 h-0 rounded-full bg-white/20 animate-ripple';
            e.currentTarget.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
          }}
          aria-label="See Case Studies"
        >
          See Case Studies
        </MotionLink>
      </motion.div>

      <svg className="w-full h-4 text-[#A855F7]/20 rotate-180" preserveAspectRatio="none">
        <path d="M0 0 L200 100 L400 0 Z" fill="currentColor" />
      </svg>
    </section>
  );
}