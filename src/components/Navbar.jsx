'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
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
      </div>
    </nav>
  );
}