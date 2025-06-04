'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Working with Ethan was an incredible experience – he captured our emotions perfectly and made the shoot feel effortless.",
    author: "Anna K., Client",
    avatar: "/images/avatar-anna.jpg",
  },
  {
    quote: "Ethan’s talent for capturing the essence of my story through his lens was remarkable. I’m thrilled with the results!",
    author: "James L., Client",
    avatar: "/images/avatar-james.jpg",
  },
];

export default function Testimonials() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={index}
            className="relative p-6 bg-gray-800 rounded-lg shadow-md"
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
              <span className="font-semibold text-[#e5e7eb]">{testimonial.author}</span>
            </div>
            <p className="italic text-[#bfdbfe] relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-2xl before:text-[#e9d5ff] after:content-['”'] after:text-2xl after:text-[#e9d5ff]">
              {testimonial.quote}
            </p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}