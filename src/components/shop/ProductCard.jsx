'use client';

import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-[#1e162f] p-6 rounded-2xl shadow-md hover:shadow-pink-500/30 transition transform hover:scale-105 border border-[#3A3A4E] overflow-hidden group fade-in-bottom"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Placeholder image or real image */}
      <div className="relative overflow-hidden rounded-md aspect-video mb-4">
        <Image
          src={hovered && product.imageHover ? product.imageHover : product.image}
          alt={product.title}
          fill
          className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90 rounded-md"
        />
      </div>

      {/* Tags (NEW, HOT, etc.) */}
      {product.tag && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.tag}
        </span>
      )}

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>

      {/* Short description */}
      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Price */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-pink-400">{product.price}€</span>

        {/* Add to cart button */}
        <button
          onClick={() => addToCart(product)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-4 py-2 rounded-full text-white text-sm font-semibold transition transform hover:scale-105"
        >
          <Plus size={18} className="animate-pulse" /> Add
        </button>
      </div>
    </div>
  );
}
