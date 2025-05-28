'use client';

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section role="banner" className="relative min-h-[60vh] flex items-center section-spacing bg-gradient-to-b from-neutral-dark to-neutral-mid">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stars.png"
          alt="Stars background"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto text-center relative z-10 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-md shadow-2xl rounded-xl border border-accent/30 p-8">
        <h1
          className="text-5xl md:text-6xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-4 heading-underline animate-fade-in"
          aria-label="About Me"
        >
          About Me
        </h1>

        <p
          className="text-xl md:text-2xl text-[#F5F5F5] max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          I build sleek, fast, and scalable websites using React & Next.js — crafted for startups, creators and SaaS teams.
        </p>
      </div>

      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  );
}