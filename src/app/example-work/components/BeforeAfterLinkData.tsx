import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BeforeAfterLink() {
  return (
    <section className="py-16 px-4 bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        See the Transformation
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-[#bfdbfe] mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the Before vs After comparisons to see how we transformed DataSync’s key features.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="/case-studies/saas-dashboard/before-after"
          className="inline-block bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-[#1f2937] px-8 py-4 rounded-lg font-semibold hover:bg-[#ff9e63] transition-colors shadow-md"
        >
          View Before vs After
        </Link>
      </motion.div>
    </section>
  );
}