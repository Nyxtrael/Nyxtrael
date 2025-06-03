import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ShoppingBagIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#ff6b6b]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Key Features of the Redesign
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        >
          <ShoppingBagIcon className="h-12 w-12 text-[#ff6b6b] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">Enhanced Navigation</h3>
          <p className="text-[#6b7280] dark:text-[#bfdbfe]">
            A new mega-menu simplifies product discovery across categories.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        >
          <DevicePhoneMobileIcon className="h-12 w-12 text-[#ff6b6b] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">Improved Product Cards</h3>
          <p className="text-[#6b7280] dark:text-[#bfdbfe]">
            Clearer CTAs and better visuals enhance the shopping experience.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        >
          <ClockIcon className="h-12 w-12 text-[#ff6b6b] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">Streamlined Checkout</h3>
          <p className="text-[#6b7280] dark:text-[#bfdbfe]">
            Simplified process reduces cart abandonment rates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}