'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const metrics = [
  { value: '12+', label: 'UI Concepts Designed' },
  { value: '3+', label: 'Years with Next.js' },
  { value: '100%', label: 'Deadlines Met' },
];

const AboutSnippet: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-text-base text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
          <span className="block w-1/4 h-0.5 bg-accent/60 mx-auto mt-2" />
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
              className="rounded-full ring-2 ring-white/80 shadow-[0_0_0_6px_rgba(11,15,20,0.85)] transition-all"
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
            <p className="text-lg text-text-muted">
              I’m Nyxtrael, a passionate front-end developer specializing in React and Next.js. I craft fast, responsive web apps that deliver seamless user experiences and drive business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-mid p-4 rounded-xl text-center ring-1 ring-white/10 hover:ring-white/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-2xl font-bold text-accent">{metric.value}</p>
                  <p className="text-text-muted text-sm">{metric.label}</p>
                </motion.div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-block bg-gradient-cta text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition-all duration-300"
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