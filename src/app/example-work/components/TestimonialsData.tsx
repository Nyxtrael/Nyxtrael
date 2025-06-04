'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "DataSync revolutionized our analytics process, giving us real-time insights that drove a 30% increase in efficiency.",
    author: "John Smith, DataSync Product Manager",
    avatar: "/images/avatar-john.jpg",
  },
  {
    quote: "The intuitive design and powerful features of DataSync have transformed how we track our KPIs. Highly recommend!",
    author: "Jane Doe, CEO of TechTrend",
    avatar: "/images/avatar-jane.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#3b82f6]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={index}
            className="relative p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <span className="font-semibold text-[#1f2937] dark:text-[#e5e7eb]">{testimonial.author}</span>
            </div>
            <p className="italic text-[#6b7280] dark:text-[#bfdbfe] relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-2xl before:text-[#3b82f6] after:content-['”'] after:text-2xl after:text-[#3b82f6]">
              {testimonial.quote}
            </p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}