'use client';

import { motion } from 'framer-motion';
import { useState } from 'react'; // Added missing import
import Image from 'next/image';

const blogPosts = [
  { id: 1, title: '5 Smoothie Recipes', category: 'Diet', excerpt: 'Boost your day with these nutritious smoothies.', image: '/images/smoothie-recipes.jpg' },
  { id: 2, title: 'Home Workout Tips', category: 'Training', excerpt: 'Stay fit with these simple home exercises.', image: '/images/home-workout.jpg' },
  { id: 3, title: 'Mindful Eating Guide', category: 'Health', excerpt: 'Learn to eat mindfully for better health.', image: '/images/mindful-eating.jpg' },
];
const categories = ['All', 'Diet', 'Training', 'Health'];

export default function BlogPreview() {
  const [filter, setFilter] = useState('All');
  const filtered = blogPosts.filter(post => filter === 'All' || post.category === filter);

  return (
    <section className="py-12 bg-white dark:bg-[#1f2937]">
      <motion.h2
        className="text-3xl font-bold text-center mb-6 text-[#1f2937] dark:text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Blog & Tips
      </motion.h2>
      <div className="flex justify-center mb-6 items-center gap-2">
        <label htmlFor="blog-filter" className="text-[#1f2937] dark:text-[#e5e7eb] font-medium">
          Filter by Category:
        </label>
        <select
          id="blog-filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#10b981] focus:ring-2 focus:ring-[#14b8a6]"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {filtered.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-[#f5f5f5] dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">{post.title}</h3>
            <p className="text-[#4b5563] dark:text-[#bfdbfe] mb-4">{post.excerpt}</p>
            <button className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#34d399] transition">
              Read More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}