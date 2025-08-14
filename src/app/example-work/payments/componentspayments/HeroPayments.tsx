'use client';
import { motion } from 'framer-motion';

export default function HeroPayments() {
  return (
    <section className="relative h-[56vh] min-h-[420px] flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_60%)]" />
      <motion.div
        className="relative z-10 space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="uppercase tracking-widest text-accent/90 text-xs">Demo • Subscriptions & Payments</p>
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-text-base">Sell Plans in Minutes</h1>
        <p className="text-lg text-text-muted">Checkout, subscriptions, portal & webhooks — all in one polished flow.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <a href="#plans" className="px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-md shadow hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]">
            Choose a plan
          </a>
          <a href="#checkout" className="px-6 py-3 ring-1 ring-white/10 rounded-md text-text-base hover:ring-white/20">
            Go to checkout
          </a>
        </div>
      </motion.div>
    </section>
  );
}
