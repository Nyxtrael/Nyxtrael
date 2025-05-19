'use client';

import { useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-text-primary hover:text-accent">
          NyxCorp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-text-primary hover:text-accent hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-text-primary hover:text-accent hover:underline">
            About
          </Link>
          <Link href="/services" className="text-text-primary hover:text-accent hover:underline">
            Services
          </Link>
          <Link href="/case-studies" className="text-text-primary hover:text-accent hover:underline">
            Case Studies
          </Link>
          <Link href="/contact" className="text-text-primary hover:text-accent hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <div> {/* Use div instead of React.Fragment */}
                <Menu.Button className="text-text-primary focus:outline-none">
                  {open ? (
                    <FontAwesomeIcon icon={faXmark} className="h-8 w-8" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className="h-8 w-8" />
                  )}
                </Menu.Button>
                <Transition
                  as="div"
                  enter="transition duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-4 mt-2 w-48 bg-surface rounded-md shadow-lg ring-1 ring-gray-800 py-2">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/"
                          className={`block px-4 py-2 text-text-primary ${
                            active ? 'bg-accent text-white' : ''
                          }`}
                        >
                          Home
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/about"
                          className={`block px-4 py-2 text-text-primary ${
                            active ? 'bg-accent text-white' : ''
                          }`}
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/services"
                          className={`block px-4 py-2 text-text-primary ${
                            active ? 'bg-accent text-white' : ''
                          }`}
                        >
                          Services
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/case-studies"
                          className={`block px-4 py-2 text-text-primary ${
                            active ? 'bg-accent text-white' : ''
                          }`}
                        >
                          Case Studies
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="/contact"
                          className={`block px-4 py-2 text-text-primary ${
                            active ? 'bg-accent text-white' : ''
                          }`}
                        >
                          Contact
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