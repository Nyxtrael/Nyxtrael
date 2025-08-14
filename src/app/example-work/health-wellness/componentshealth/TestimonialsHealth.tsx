'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Thanks to Alex’s guidance, I’ve never felt healthier. The personalized plan was a game-changer!",
    author: "Marek S., 45",
    avatar: "/images/avatar-marek.jpg",
  },
  {
    quote: "The online consultations made it so easy to stay on track. I highly recommend these services!",
    author: "Anna P., 30",
    avatar: "/images/avatar-anna-p.jpg",
  },
];

export default function TestimonialsHealth() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#1f2937]"
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
            className="relative p-6 bg-white rounded-lg shadow-md"
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
              <span className="font-semibold text-[#1f2937]">{testimonial.author}</span>
            </div>
            <p className="italic text-[#4b5563] relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-2xl before:text-[#10b981] after:content-['”'] after:text-2xl after:text-[#10b981]">
              {testimonial.quote}
            </p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}