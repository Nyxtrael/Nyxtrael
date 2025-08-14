'use client';
import { motion } from 'framer-motion';

export default function HeroForms() {
  return (
    <section className="relative h-[46vh] min-h-[360px] flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_60%)]" />
      <motion.div
        className="relative z-10 space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase tracking-widest text-accent/90 text-xs">Demo • Multi-step + Upload</p>
        <h1 className="text-5xl font-serif font-bold text-text-base">Advanced Forms That Convert</h1>
        <p className="text-lg text-text-muted">Multi-step UX, conditional fields, drag-and-drop upload, save draft, live validation.</p>
        <a href="#demo" className="inline-block mt-2 px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-md shadow hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]">
          Try the live form
        </a>
      </motion.div>
    </section>
  );
}
