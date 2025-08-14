import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-neutral-bg text-center">
      <motion.h2
        className="text-3xl font-bold mb-4 text-text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Ready to boost your analytics?
      </motion.h2>
      <motion.p
        className="mb-8 text-text-muted max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Let’s create a dashboard that empowers your business with real-time insights.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="/contact"
          className="inline-block bg-gradient-cta text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]"
        >
          Get in touch
        </Link>
      </motion.div>
    </section>
  );
}
