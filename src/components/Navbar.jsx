'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartModal from './shop/CartModal';

export default function Navbar() {
  const pathname = usePathname();
  const { cartItems } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Shop', path: '/shop' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black bg-opacity-60 backdrop-blur-md text-sm text-white sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-purple-500">
          <Image
            src="/logo.png"
            alt="Nyxtrael logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="font-bold text-lg">Nyxtrael</span>
        </Link>

        <div className="flex gap-4 items-center overflow-x-auto">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`px-2 py-1 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                pathname === path
                  ? 'text-white border-b-2 border-pink-500'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          {/* Koszyk */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Modal koszyka */}
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
