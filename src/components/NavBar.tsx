'use client';

import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/example-work', label: 'Example Work', hasSubmenu: true },
  { href: '/pricing', label: 'Pricing' },
];

const exampleWorkLinks = [
  { href: '/example-work/shop', label: 'ShopTrend', category: 'SaaS & E-Commerce' },
  { href: '/example-work/data', label: 'DataSync', category: 'SaaS & E-Commerce' },
  { href: '/example-work/health', label: 'Health & Wellness', category: 'Creative & Lifestyle' },
  { href: '/example-work/artist', label: 'Artist Portfolio', category: 'Creative & Lifestyle' },
];

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Group links by category for desktop submenu
  const groupedLinks = exampleWorkLinks.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, typeof exampleWorkLinks>);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#1f2937]/90 backdrop-blur-md shadow-lg border-b border-[#2d3748] mb-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-serif font-bold text-[#e5e7eb] hover:text-[#60a5fa] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937]"
        >
          Nyxtrael
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#e5e7eb] focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937]"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />
          ) : (
            <Menu className="h-6 w-6 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.hasSubmenu ? (
              <div key={link.href} className="relative group">
                <button
                  className="text-[#e5e7eb] hover:text-[#60a5fa] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] flex items-center"
                  onClick={toggleSubmenu}
                  aria-expanded={isSubmenuOpen}
                  aria-controls="submenu"
                >
                  {link.label}
                  <ChevronDown className="ml-1 h-4 w-4 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </button>
                <div
                  id="submenu"
                  className={`absolute left-0 mt-2 w-48 bg-[#2d3748] rounded-md shadow-lg py-2 transition-all duration-200 ease-in-out ${
                    isSubmenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {Object.entries(groupedLinks).map(([category, links]) => (
                    <div key={category}>
                      <p className="px-4 py-2 text-[#9ca3af] text-xs font-semibold uppercase">{category}</p>
                      {links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-[#e5e7eb] text-sm hover:bg-[#60a5fa] hover:text-[#0d1117] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#e5e7eb] hover:text-[#60a5fa] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] text-lg font-inter"
              >
                {link.label}
              </Link>
            )
          ))}
          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[#60a5fa] text-[#0d1117] hover:shadow-[#60a5fa]/50 transition-all duration-300 font-inter font-medium focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] shadow-md"
          >
            Contact
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-start space-y-4 px-4 py-4 bg-[#2d3748]">
          {navLinks.map((link) => (
            link.hasSubmenu ? (
              <div key={link.href} className="w-full">
                <button
                  className="text-[#e5e7eb] hover:text-[#60a5fa] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] flex items-center w-full text-left text-lg font-inter"
                  onClick={toggleSubmenu}
                  aria-expanded={isSubmenuOpen}
                  aria-controls="mobile-submenu"
                >
                  {link.label}
                  <ChevronDown className="ml-2 h-4 w-4 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                </button>
                <div
                  id="mobile-submenu"
                  className={`pl-4 mt-2 space-y-2 transition-all duration-200 ease-in-out ${
                    isSubmenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {Object.entries(groupedLinks).map(([category, links]) => (
                    <div key={category}>
                      <p className="px-4 py-2 text-[#9ca3af] text-xs font-semibold uppercase">{category}</p>
                      {links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-[#e5e7eb] text-sm hover:text-[#60a5fa] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] font-inter"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#e5e7eb] hover:text-[#60a5fa] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] text-lg font-inter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            href="/contact"
            className="w-full text-center inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-[#60a5fa] text-[#0d1117] hover:shadow-[#60a5fa]/50 transition-all duration-300 font-inter font-medium focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#1f2937] shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;