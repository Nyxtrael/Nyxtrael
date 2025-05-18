'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Services' },
    
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      role="navigation"
      className={`fixed w-full px-6 md:px-16 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#1a0e2a]/90 backdrop-blur-md shadow-md'
            : 'bg-gray-100/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* Logo + Name */}
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label="Go to Home page"
      >
        <Image
          src="/images/logo.png"
          alt="Nyxtrael Logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-fuchsia-400 font-bold text-2xl hover:text-fuchsia-300 transition-colors">
          Nyxtrael
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] px-2 py-1 rounded ${
                pathname === link.href ? 'text-fuchsia-400' : ''
              }`}
              aria-label={`Go to ${link.label} page`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-400"
                  layoutId="underline"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com/nyxtrael"
            target="_blank"
            rel="noreferrer"
            aria-label="Nyxtrael on Instagram"
            className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://x.com/nyxtrael"
            target="_blank"
            rel="noreferrer"
            aria-label="Nyxtrael on X"
            className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-2"
          >
            <SiX size={24} />
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-2"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>

        {/* Hire Me CTA */}
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a]"
          aria-label="Hire Nyxtrael"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#1a0e2a]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white text-2xl hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] px-4 py-2 rounded ${
                    pathname === link.href ? 'text-fuchsia-400 underline' : ''
                  }`}
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-6 mt-6">
                <a
                  href="https://instagram.com/nyxtrael"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Nyxtrael on Instagram"
                  className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-3"
                >
                  <FaInstagram size={32} />
                </a>
                <a
                  href="https://x.com/nyxtrael"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Nyxtrael on X"
                  className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-3"
                >
                  <SiX size={32} />
                </a>
              </div>
              <button
                onClick={toggleDarkMode}
                className="text-white hover:text-fuchsia-400 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] p-3 mt-4"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? <BsSun size={32} /> : <BsMoon size={32} />}
              </button>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-[#A855F7] to-[#D946EF] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-[#1a0e2a] mt-4"
                aria-label="Hire Nyxtrael"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}