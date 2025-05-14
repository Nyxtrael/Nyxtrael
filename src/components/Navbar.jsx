// src/components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingCart, Heart } from 'lucide-react';

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="w-full px-6 md:px-16 py-4 flex justify-between items-center bg-gray-900 sticky top-0 z-50 shadow-md">
      <Link
        href="/"
        className="text-fuchsia-400 font-bold text-2xl hover:text-fuchsia-300 transition-colors"
        aria-label="Go to Home page"
      >
        Nyxtrael
      </Link>

      <div className="flex space-x-6 items-center">
        <Link
          href="/"
          className="text-white hover:text-fuchsia-400 transition-colors"
          aria-label="Go to Home page"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-fuchsia-400 transition-colors"
          aria-label="Go to About page"
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className="text-white hover:text-fuchsia-400 transition-colors"
          aria-label="Go to Portfolio page"
        >
          Portfolio
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-fuchsia-400 transition-colors"
          aria-label="Go to Services page"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-fuchsia-400 transition-colors"
          aria-label="Go to Contact page"
        >
          Contact
        </Link>

        {/* Wishlist and Cart icons */}
        <Link href="/wishlist" aria-label="View Wishlist" className="relative p-2 text-white hover:text-fuchsia-400 transition-transform">
          <Heart className="w-6 h-6" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 bg-pink-600 text-xs rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>
        <Link href="/cart" aria-label="View Cart" className="relative p-2 text-white hover:text-fuchsia-400 transition-transform">
          <ShoppingCart className="w-6 h-6" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 bg-pink-600 text-xs rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}