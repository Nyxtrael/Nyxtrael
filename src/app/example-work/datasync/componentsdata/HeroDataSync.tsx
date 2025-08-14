'use client';
import { motion } from 'framer-motion';

export default function HeroDataSync() {
  return (
    <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center text-center px-6">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/datasync-hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/datasync-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-bg/60 to-neutral-bg/80" />
      </div>

      <motion.div
        className="relative space-y-4 max-w-3xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-widest text-accent/90 text-xs">Realtime Analytics</p>
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-text-base drop-shadow-xl">
          Unlock Actionable Insights
        </h1>
        <p className="text-lg text-text-muted">
          A live analytics dashboard that turns your data into clear decisions.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href="#dashboard" className="px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-md shadow hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]">
            View Demo
          </a>
          <a href="#pricing" className="px-6 py-3 ring-1 ring-white/10 rounded-md text-text-base hover:ring-white/20">
            See Pricing
          </a>
        </div>
      </motion.div>
    </section>
  );
}
