'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ProductsGrid({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#2A2A3E]/50 border border-[#3A3A4E] p-6 rounded-2xl shadow-md hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-600/10 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 z-10"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <p className="text-neutral-400 mb-2">{product.description}</p>
            <p className="text-fuchsia-400 font-semibold mb-4">€{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 z-10"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}