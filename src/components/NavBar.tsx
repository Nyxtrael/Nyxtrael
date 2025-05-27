import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies', hasSubmenu: true },
  { href: '/pricing', label: 'Pricing' },
  { href: '/templates', label: 'Templates' },
];

const caseStudyLinks = [
  { href: '/case-studies/startup-landing', label: 'BrightCRM' },
  { href: '/case-studies/ecommerce-redesign', label: 'ShopTrend' },
  { href: '/case-studies/saas-dashboard', label: 'DataSync' },
  { href: '/case-studies/photographer-portfolio', label: 'PortraitPro' },
  { href: '/case-studies/taskmaster-pwa', label: 'TaskMaster' },
  { href: '/case-studies/neon-ritual', label: 'NeonRitual' },
];

const NavBar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md shadow-lg border-b border-gray-800/50 mb-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-heading font-bold text-white hover:text-teal-400 glow-hover focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
        >
          Nyxtrael
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            link.hasSubmenu ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-white hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center"
                >
                  {link.label}
                  <ChevronDown className="ml-1 h-4 w-4 text-teal-400" aria-hidden="true" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-dark/90 backdrop-blur-md rounded-md shadow-lg ring-1 ring-gray-800/50 py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 ease-in-out group-hover:delay-0 delay-300">
                  {caseStudyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-white text-sm hover:bg-teal-500 hover:text-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {link.label}
              </Link>
            )
          ))}
          {/* CTA Button */}
          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white hover:from-purple-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 glow-hover font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;