import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#ff6b6b]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <motion.blockquote
        className="max-w-3xl mx-auto text-center italic text-[#6b7280] dark:text-[#bfdbfe] p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        “DataSync revolutionized our analytics process, giving us real-time insights that drove a 30% increase in efficiency.”
        <span className="block mt-2 font-semibold text-[#1f2937] dark:text-[#e5e7eb]">
          — John Smith, DataSync Product Manager
        </span>
      </motion.blockquote>
    </section>
  );
}