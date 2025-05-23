"use client";

import { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    {
      href: '/case-studies',
      label: 'Case Studies',
      dropdown: [
        { href: '/case-studies/startup-landing', label: 'BrightCRM' },
        { href: '/case-studies/ecommerce-redesign', label: 'ShopTrend' },
        { href: '/case-studies/saas-dashboard', label: 'DataSync' },
        { href: '/case-studies/photographer-portfolio', label: 'PortraitPro' },
        { href: '/case-studies/taskmaster-pwa', label: 'TaskMaster' },
        { href: '/case-studies/neon-ritual', label: 'NeonRitual' },
      ],
    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-bold text-light-gray hover:text-dark-accent glow-hover">
          Nyxtrael
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            link.dropdown ? (
              <Menu key={index} as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <Menu.Button
                      as={Link}
                      href={link.href}
                      className={`text-light-gray hover:text-dark-accent transition-colors flex items-center space-x-1 ${
                        pathname === link.href || pathname.startsWith('/case-studies/') ? 'text-dark-accent' : ''
                      }`}
                      onClick={(e) => {
                        if (open) e.preventDefault(); // Prevent navigation if dropdown is open
                      }}
                    >
                      <span>{link.label}</span>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </Menu.Button>
                    <Transition
                      as="div"
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Menu.Items className="absolute mt-2 w-48 bg-dark rounded-md shadow-lg ring-1 ring-gray-800 py-2">
                        {link.dropdown.map((item) => (
                          <Menu.Item key={item.href}>
                            {({ active, close }) => (
                              <Link
                                href={item.href}
                                className={`block px-4 py-2 text-light-gray text-sm ${
                                  active || pathname === item.href ? 'bg-dark-accent text-white' : ''
                                }`}
                                onClick={() => close()} // Close dropdown on click
                              >
                                {item.label}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-light-gray hover:text-dark-accent transition-colors ${
                  pathname === link.href ? 'text-dark-accent after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-dark-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
          {/* CTA Button */}
          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 border border-dark-accent text-light-gray hover:bg-dark-accent hover:text-black transition-all duration-300 glow-hover font-medium"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            {({ open, close }) => (
              <div>
                <Menu.Button
                  className="text-light-gray focus:outline-none p-2"
                  aria-label={open ? 'Close menu' : 'Open menu'}
                >
                  {open ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <MenuIcon className="h-8 w-8" />
                  )}
                </Menu.Button>
                <Transition
                  as="div"
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-x-full"
                  enterTo="opacity-100 translate-x-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-full"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 bg-dark rounded-md shadow-lg ring-1 ring-gray-800 py-2 backdrop-blur-md">
                    {navLinks.map((link) => (
                      link.dropdown ? (
                        <div key={link.label}>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={link.href}
                                className={`block px-4 py-3 text-light-gray text-lg ${
                                  active || pathname === link.href ? 'bg-dark-accent text-white' : ''
                                }`}
                                onClick={() => close()} // Close menu on click
                              >
                                {link.label}
                              </Link>
                            )}
                          </Menu.Item>
                          {link.dropdown.map((item) => (
                            <Menu.Item key={item.href}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={`block px-6 py-2 text-light-gray text-base ${
                                    active || pathname === item.href ? 'bg-dark-accent text-white' : ''
                                  }`}
                                  onClick={() => close()} // Close menu on click
                                >
                                  {item.label}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      ) : (
                        <Menu.Item key={link.href}>
                          {({ active }) => (
                            <Link
                              href={link.href}
                              className={`block px-4 py-3 text-light-gray text-lg ${
                                active || pathname === link.href ? 'bg-dark-accent text-white' : ''
                              }`}
                              onClick={() => close()} // Close menu on click
                            >
                              {link.label}
                            </Link>
                          )}
                        </Menu.Item>
                      )
                    ))}
                    {/* Mobile CTA */}
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          href="/contact"
                          className={`block px-4 py-3 text-lg border-t border-gray-800 ${
                            active ? 'bg-dark-accent text-white' : 'text-light-gray'
                          }`}
                          onClick={() => close()} // Close menu on click
                        >
                          Let's Talk
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;