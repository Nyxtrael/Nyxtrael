import { motion } from 'framer-motion';
import { CloudArrowUpIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        How DataSync Works
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-[#bfdbfe] mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform your data into actionable insights in three simple steps.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-[#2d3748] rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-4">
            <CloudArrowUpIcon className="h-12 w-12 text-[#3b82f6]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#e5e7eb]">1. Connect Your Data</h3>
          <p className="text-[#bfdbfe]">
            Seamlessly integrate your data sources with DataSync.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 bg-[#2d3748] rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-4">
            <ChartBarIcon className="h-12 w-12 text-[#3b82f6]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#e5e7eb]">2. View Live Insights</h3>
          <p className="text-[#bfdbfe]">
            Watch your data come to life with real-time visualizations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 bg-[#2d3748] rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-4">
            <LightBulbIcon className="h-12 w-12 text-[#3b82f6]" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#e5e7eb]">3. Make Better Decisions</h3>
          <p className="text-[#bfdbfe]">
            Use actionable insights to drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}