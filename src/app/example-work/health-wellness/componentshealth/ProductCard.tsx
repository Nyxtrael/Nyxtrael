'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  { id: 1, title: '30-Day Diet Plan', description: 'A balanced plan for sustainable weight loss.', image: '/images/diet-plan.jpg' },
  { id: 2, title: 'Protein Supplement', description: 'Boost your workouts with premium protein.', image: '/images/protein-supplement.jpg' },
  { id: 3, title: 'Recipe Book', description: 'Healthy recipes for every meal.', image: '/images/recipe-book.jpg' },
];

export default function ProductCard() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#1f2937]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Recommended Products
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">{product.title}</h3>
            <p className="text-[#4b5563] mb-4">{product.description}</p>
            <motion.button
              className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#14b8a6] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}