import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon, CogIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#3b82f6]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Key Features of DataSync
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        >
          <ChartBarIcon className="h-12 w-12 text-[#3b82f6] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">Real-Time Analytics</h3>
          <p className="text-[#6b7280] dark:text-[#bfdbfe]">
            Get instant updates on your business metrics.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        >
          <ClockIcon className="h-12 w-12 text-[#3b82f6] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">Time Filtering</h3>
          <p className="text-[#6b7280] dark:text-[#bfdbfe]">
            Easily switch between daily, weekly, or monthly data views.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        >
          <CogIcon className="h-12 w-12 text-[#3b82f6] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">Customizable Widgets</h3>
          <p className="text-[#6b7280] dark:text-[#bfdbfe]">
            Tailor the dashboard to fit your specific needs.
          </p>
        </motion.div>
      </div>
      {/* Dashboard Mockup */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src="/images/datasync-dashboard-mockup.jpg"
          alt="DataSync Dashboard Mockup"
          width={800}
          height={500}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}