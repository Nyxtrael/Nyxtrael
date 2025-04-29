'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function ShopHero() {
  return (
    <section className="text-center fade-in-up mb-20 relative px-6">
      {/* Gwiazdki animowane (opcjonalnie dołożyć na potem) */}

      <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
        <ShoppingCart className="text-pink-400 animate-pulse w-8 h-8" />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Shop – Magical Creations
        </span>
      </h1>

      <p className="text-neutral-300 text-lg max-w-2xl mx-auto leading-relaxed">
        Discover <span className="text-pink-400 font-semibold">magical</span> digital products ready to <span className="text-pink-400">elevate</span> your projects and unleash creativity.
      </p>

      <p className="text-xs italic text-neutral-500 mt-4">
        Demo Store — No real purchases available.{' '}
        <Link href="/contact" className="underline text-pink-400 hover:text-pink-300 transition">
          Learn more
        </Link>
      </p>

      <Link href="#products">
        <button className="btn-nyx mt-10 hover:scale-105 hover:shadow-pink-500/40 transition-all flex items-center gap-2 px-8 py-3 text-lg">
          ✨ Explore Products
        </button>
      </Link>

      {/* Gradient na tło */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-gradient-radial from-pink-500 via-purple-800 to-black"></div>
    </section>
  );
}
