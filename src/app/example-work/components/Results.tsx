import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Results() {
  return (
    <section className="py-16 px-4 bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Redesign Impact
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center space-x-4"
        >
          <ChartBarIcon className="h-12 w-12 text-[#ff6b6b]" />
          <div>
            <h3 className="text-xl font-semibold text-[#e5e7eb]">+25% Conversion Rate</h3>
            <p className="text-[#bfdbfe]">Increased sales post-redesign</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center space-x-4"
        >
          <ClockIcon className="h-12 w-12 text-[#ff6b6b]" />
          <div>
            <h3 className="text-xl font-semibold text-[#e5e7eb]">+30% Time on Site</h3>
            <p className="text-[#bfdbfe]">Enhanced user engagement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}