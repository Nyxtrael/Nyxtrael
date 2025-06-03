'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const mockWorks = [
  { id: 1, title: 'Abstract Harmony', category: 'Illustrations', image: '/images/abstract-harmony.jpg' },
  { id: 2, title: 'Minimalist Web Design', category: 'Web Design', image: '/images/web-design.jpg' },
  { id: 3, title: 'Dreamy Animation', category: 'Animations', image: '/images/animation.jpg' },
  { id: 4, title: 'Floral Sketch', category: 'Illustrations', image: '/images/floral-sketch.jpg' },
  { id: 5, title: 'Portfolio Site', category: 'Web Design', image: '/images/portfolio-site.jpg' },
  { id: 6, title: 'Motion Graphics', category: 'Animations', image: '/images/motion-graphics.jpg' },
];
const categories = ['All', 'Illustrations', 'Web Design', 'Animations'];

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All');
  const filtered = mockWorks.filter(work => filter === 'All' || work.category === filter);

  return (
    <section className="py-12 bg-[#f5f5f5] dark:bg-[#2d3748]">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1f2937] dark:text-[#e5e7eb]">
        My Work
      </h2>
      <div className="flex justify-center mb-6 items-center gap-2">
        <label htmlFor="category-filter" className="text-[#1f2937] dark:text-[#e5e7eb] font-medium">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#e9d5ff] focus:ring-2 focus:ring-[#d8b4fe]"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {filtered.map(work => (
          <motion.div
            key={work.id}
            className="relative transition-transform transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={work.image}
              alt={work.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center">
              <p className="text-white text-center opacity-0 hover:opacity-100 transition-opacity">{work.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}