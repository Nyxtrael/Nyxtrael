'use client';

export default function AboutHero() {
  return (
    <section role="banner" className="relative min-h-[60vh] flex items-center section-spacing bg-[#1f2937]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/background-video.webm" type="video/webm" />
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1f2937]/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto text-center relative z-10 bg-gradient-to-b from-[#1f2937]/40 to-[#1f2937]/20 backdrop-blur-md shadow-2xl rounded-xl border border-[#a855f7]/30 p-8">
        <h1
          className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] mb-4"
          aria-label="About Me"
        >
          About Me
          <span className="block w-1/4 h-1 bg-gradient-to-r from-[#a855f7] to-[#c084fc] mx-auto mt-2"></span>
        </h1>

        <p
          className="text-xl md:text-2xl text-[#9ca3af] max-w-3xl mx-auto font-inter leading-relaxed"
        >
          I build sleek, fast, and scalable websites using React & Next.js — crafted for startups, creators, and SaaS teams.
        </p>
      </div>
    </section>
  );
}