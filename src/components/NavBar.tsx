'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MenuIcon, XIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Debug hydration issue
  useEffect(() => {
    console.log('NavBar label for /portfolio:', navLinks.find((link) => link.href === '/portfolio')?.label);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-neutral-bg/90 backdrop-blur-md shadow-lg border-b border-neutral-mid"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-text-base bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-bg"
        >
          Nyxtrael
        </Link>

        <button
          className="md:hidden text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-bg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6 text-text-muted hover:text-accent transition-colors" />
          ) : (
            <MenuIcon className="h-6 w-6 text-text-muted hover:text-accent transition-colors" />
          )}
        </button>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-text-base hover:text-accent transition-colors duration-300 ${
                pathname === link.href ? 'border-b-2 border-accent' : ''
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-bg text-lg font-inter`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-gradient-cta text-neutral-dark hover:shadow-accent/50 hover:scale-105 transition-all duration-300 font-inter font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-bg shadow-md"
          >
            Contact
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <motion.div
        id="mobile-menu"
        className="md:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0, x: '100%' }}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-start space-y-4 px-4 py-4 bg-neutral-mid">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg text-text-base hover:text-accent transition-colors duration-300 ${
                pathname === link.href ? 'border-l-4 border-accent pl-2' : ''
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-bg font-inter`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="w-full text-center inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gradient-cta text-neutral-dark hover:shadow-accent/50 hover:scale-105 transition-all duration-300 font-inter font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-bg shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;