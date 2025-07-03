'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials({ testimonials = [], currentIndex, onNext, onPrev }: { testimonials?: { quote: string; author: string; avatar: string }[]; currentIndex: number; onNext: () => void; onPrev: () => void }) {
  // Ensure currentIndex is within bounds
  const safeIndex = currentIndex % (testimonials.length || 1);
  const testimonial = testimonials[safeIndex] || null;

  if (!testimonial) {
    return null; // Return null if no testimonials are provided
  }

  return (
    <section className="py-16 px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What My Clients Say
      </motion.h2>
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.blockquote
            key={safeIndex}
            className="relative p-6 bg-gray-800 rounded-lg shadow-md flex items-center"
            initial={{ x: safeIndex === 0 ? 0 : '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center w-full">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <span className="font-semibold text-[#e5e7eb]">{testimonial.author}</span>
                <p className="italic text-[#bfdbfe] relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-2xl before:text-[#e9d5ff] after:content-['”'] after:text-2xl after:text-[#e9d5ff]">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </motion.blockquote>
        </motion.div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={onPrev}
            className="px-4 py-2 bg-[#e9d5ff] text-[#1f2937] rounded hover:bg-[#d8b4fe] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-[#e9d5ff] text-[#1f2937] rounded hover:bg-[#d8b4fe] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}