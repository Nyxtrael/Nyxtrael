// src/components/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingCart, Heart } from 'lucide-react';

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full px-6 md:px-16 py-4 flex justify-between items-center bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <Link
        href="/"
        className="text-fuchsia-400 font-bold text-2xl hover:text-fuchsia-300 transition-colors"
        aria-label="Go to Home page"
      >
        Nyxtrael
      </Link>

      <div className="flex space-x-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-white hover:text-fuchsia-400 transition-colors ${
              pathname === link.href ? 'font-bold text-fuchsia-400' : ''
            }`}
            aria-label={`Go to ${link.label} page`}
          >
            {link.label}
          </Link>
        ))}

        {/* Wishlist and Cart icons */}
        <Link
          href="/wishlist"
          aria-label="View Wishlist"
          title="View Wishlist"
          className="relative p-2 text-white hover:text-fuchsia-400 transition-transform"
        >
          <Heart className="w-6 h-6" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 bg-pink-600 text-xs rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>
        <Link
          href="/cart"
          aria-label="View Cart"
          title="View Cart"
          className="relative p-2 text-white hover:text-fuchsia-400 transition-transform"
        >
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