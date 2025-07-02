import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-bg text-center relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Bring Your Idea to Life?
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s collaborate to create a high-performance web solution. I’ll respond within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold bg-gradient-cta text-neutral-dark hover:shadow-accent/50 transition-all duration-300"
            aria-label="Get in touch with Nyxtrael to start your project"
          >
            Get in Touch
            <MessageSquare className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      {/* Wavy Separator */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" fill="#0d1117">
          <path d="M0,0 C300,40 600,0 900,40 1200,80 1200,120 1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;