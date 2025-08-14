'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  { quote: "DataSync gave us real-time visibility and a 30% efficiency lift.", author: "John Smith, Product Manager", avatar: "/images/avatar-john.jpg" },
  { quote: "Intuitive, fast and reliable. Our KPIs finally make sense.", author: "Jane Doe, CEO, TechTrend", avatar: "/images/avatar-jane.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-neutral-bg">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What our clients say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            className="relative p-6 bg-neutral-mid rounded-lg ring-1 ring-white/10 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center mb-4 gap-3">
              <Image src={t.avatar} alt={t.author} width={50} height={50} className="rounded-full" />
              <span className="font-semibold text-text-base">{t.author}</span>
            </div>
            <p className="italic text-text-muted relative pl-6 before:content-['“'] before:absolute before:left-0 before:text-2xl before:text-accent after:content-['”'] after:text-2xl after:text-accent">
              {t.quote}
            </p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
