'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    title: 'Summer Elegance',
    description: 'Light, breezy styles perfect for the season.',
    image: '/images/summer-elegance.jpg',
    href: '/example-work/shop/collections/summer-elegance',
  },
  {
    title: 'Timeless Classics',
    description: 'Iconic pieces that never go out of style.',
    image: '/images/timeless-classics.jpg',
    href: '/example-work/shop/collections/timeless-classics',
  },
  {
    title: 'Street Style',
    description: 'Bold, urban looks for the modern trendsetter.',
    image: '/images/street-style.jpg',
    href: '/example-work/shop/collections/street-style',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 px-4 bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Collections
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-[#bfdbfe] mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore our curated collections designed to inspire your wardrobe.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-70"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{collection.title}</h3>
              <p className="text-[#bfdbfe] mb-4">{collection.description}</p>
              <Link
                href={collection.href}
                className="inline-block bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-[#1f2937] px-6 py-2 rounded-lg font-semibold hover:bg-[#ff9e63] transition-colors"
              >
                Shop Collection
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}