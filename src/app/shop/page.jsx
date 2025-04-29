'use client';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductsGrid from '../../components/shop/ProductsGrid';
import ShopHero from '../../components/shop/ShopHero';
import CartModal from '../../components/shop/CartModal';
import products from '../../data/products.json';
import { motion } from 'framer-motion';

export default function ShopPage() {
  const { cartItems } = useContext(CartContext);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] overflow-hidden scroll-smooth">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        poster="/images/stars-fallback.jpg"
        aria-hidden="true"
      >
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            style={{ width: '8px', height: '8px', top: star.top, left: star.left }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <ShopHero />
        <ProductsGrid products={products} />
        <CartModal items={cartItems || []} /> {/* Bezpieczne przekazanie items */}
      </div>

      <footer className="text-center text-neutral-400 pb-10 mt-24">
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:nyxtrael@example.com"
            className="hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Email Nyxtrael"
          >
            <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/nyxtrael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Visit Nyxtrael on Instagram"
          >
            <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          </a>
          <a
            href="https://x.com/nyxtrael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Visit Nyxtrael on X"
          >
            <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}