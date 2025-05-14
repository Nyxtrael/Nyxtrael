// src/components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
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
      </div>
    </nav>
  );
}