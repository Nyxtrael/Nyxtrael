'use client';

import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/images/abstract-lines-poster.jpg"
      >
        <source src="/videos/abstract-lines-3d.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
          Building Modern Web Experiences
        </h1>
        <p className="text-xl md:text-3xl text-text-secondary mb-10 font-light tracking-wide">
          Front-end developer specializing in sleek, high-performance web applications.
        </p>
        <Link
          href="/case-studies"
          className="inline-block bg-accent text-white px-10 py-5 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-xl"
        >
          View Case Studies
        </Link>
      </div>
    </section>
  );
};

export default Hero;