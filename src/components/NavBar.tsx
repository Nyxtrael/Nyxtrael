"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu as HeadlessMenu } from '@headlessui/react';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    // Case Studies handled separately
    { href: '/contact', label: 'Contact' },
  ];

  const caseStudyLinks = [
    { href: '/case-studies/startup-landing', label: 'BrightCRM' },
    { href: '/case-studies/ecommerce-redesign', label: 'ShopTrend' },
    { href: '/case-studies/saas-dashboard', label: 'DataSync' },
    { href: '/case-studies/photographer-portfolio', label: 'PortraitPro' },
    { href: '/case-studies/taskmaster-pwa', label: 'TaskMaster' },
    { href: '/case-studies/neon-ritual', label: 'NeonRitual' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark shadow-md border-b border-gray-800 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-heading font-bold text-light-gray hover:text-dark-accent transition-colors">
            Nyxtrael
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-light-gray transition-colors hover:text-dark-accent ${isActive(link.href) ? 'text-dark-accent after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-dark-accent' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Case Studies Dropdown */}
          <HeadlessMenu as="div" className="relative">
            {({ open }) => (
              <>
                <HeadlessMenu.Button
                  className="relative flex items-center text-light-gray transition-colors hover:text-dark-accent focus:outline-none"
                  aria-expanded={open}
                >
                  Case Studies
                </HeadlessMenu.Button>

                <AnimatePresence>
                  {open && (
                    <HeadlessMenu.Items
                      as={motion.div}
                      static
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute mt-2 w-48 bg-dark rounded-md shadow-lg ring-1 ring-gray-800 py-2 focus:outline-none"
                      role="menu"
                    >
                      {caseStudyLinks.map((item) => (
                        <HeadlessMenu.Item key={item.href}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              role="menuitem"
                              tabIndex={0}
                              className={`block px-4 py-2 text-sm ${active ? 'bg-dark-accent text-white' : 'text-light-gray'} transition-colors`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                      ))}
                    </HeadlessMenu.Items>
                  )}
                </AnimatePresence>
              </>
            )}
          </HeadlessMenu>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-4 rounded-xl px-4 py-2 border border-dark-accent text-light-gray hover:bg-dark-accent hover:text-black transition-all duration-300 font-medium"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="text-light-gray p-2 focus:outline-none"
          >
            {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-dark border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-light-gray text-lg border-b border-gray-800 hover:bg-dark-accent hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-left px-4 py-3 text-light-gray text-lg border-b border-gray-800 hover:bg-dark-accent hover:text-white transition-colors"
                >
                  Case Studies
                </button>
                <div className="flex flex-col">
                  {caseStudyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-2 text-light-gray text-base border-b border-gray-800 hover:bg-dark-accent hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-lg border-t border-gray-800 text-light-gray hover:bg-dark-accent hover:text-white transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
