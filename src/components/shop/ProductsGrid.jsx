'use client';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';
import { Plus } from 'lucide-react';

export default function ProductsGrid({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <section id="products" className="relative z-10 max-w-7xl mx-auto py-12 px-6 fade-in-bottom">
      <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
        🛍️ Our Magical Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
  key={item.id}
  className="relative bg-[#1e162f] p-6 rounded-2xl shadow-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,105,180,0.2)] border border-[#3A3A4E] group"
>
            {/* Placeholder or real image */}
            <div className="relative overflow-hidden rounded-md aspect-video mb-4">
              <Image
                src={item.image || '/images/placeholder-product.jpg'}
                alt={item.title || 'Product image'}
                fill
                className="object-cover w-full h-full rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Tag - Optional */}
            {item.tag && (
              <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {item.tag}
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            {/* Short Description */}
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-2">
              {item.shortDescription || 'Beautiful digital art for your projects.'}
            </p>

            {/* Price and Add-to-Cart */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-pink-400">{item.price}€</span>

              <button
                onClick={() => addToCart(item)}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-4 py-2 rounded-full text-white text-sm font-semibold transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <Plus size={18} className="animate-pulse" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
