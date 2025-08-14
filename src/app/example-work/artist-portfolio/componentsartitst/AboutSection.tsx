'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <Image
          src="/images/profile-male.jpg"
          alt="Ethan Carter portrait"
          width={320}
          height={320}
          className="rounded-full ring-2 ring-white/80 shadow-[0_0_0_6px_rgba(11,15,20,0.85)]"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-base">About Ethan Carter</h2>
        <p className="text-text-muted">
          I’m a visual artist and photographer focused on portraiture and editorial storytelling. My work blends natural light with subtle direction to capture mood, intimacy, and a sense of place. I’m available for commissions worldwide.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-text-base">Portraits</span>
          <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-text-base">Editorial</span>
          <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-text-base">Color Grading</span>
          <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-text-base">Studio Lighting</span>
          <span className="px-3 py-1 rounded-full ring-1 ring-white/10 bg-neutral-mid text-text-base">Analog Film</span>
        </div>
      </motion.div>
    </section>
  );
}
