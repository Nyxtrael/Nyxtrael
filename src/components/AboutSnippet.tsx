'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSnippet: React.FC = () => {
  return (
    <section className="section bg-[#0d1117] grain-overlay py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
          <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Personal Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael - Front-end Developer specializing in React and Next.js"
              width={300}
              height={300}
              className="rounded-full border-4 border-[#38bdf8]/50 hover:border-[#facc15]/50 shadow-md hover:shadow-[#38bdf8]/50 transition-all max-w-full h-auto"
              priority
            />
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-[#9ca3af] leading-relaxed font-inter">
              Hi, I’m Nyxtrael—a front-end developer specializing in React and Next.js. I build fast, responsive web applications with a focus on user experience and performance.
            </p>
            <div className="space-y-2">
              <p className="text-[#e5e7eb] font-inter">
                <span className="text-[#38bdf8] font-semibold">12+ Frontend UI Concepts Designed</span>
              </p>
              <p className="text-[#e5e7eb] font-inter">
                <span className="text-[#38bdf8] font-semibold">3 Years Learning & Building With Next.js</span>
              </p>
              <p className="text-[#e5e7eb] font-inter">
                <span className="text-[#38bdf8] font-semibold">100% Deadlines Met</span> in Personal & Practice Projects
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#0d1117] px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-[#38bdf8]/50 transition-all duration-300"
              aria-label="Learn more about Nyxtrael"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;