import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
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

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-dark shadow-md border-b border-gray-800"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-bold text-light-gray hover:text-dark-accent glow-hover">
          Nyxtrael
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.label === 'Case Studies' ? (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="text-light-gray hover:text-dark-accent transition-colors"
                >
                  {link.label}
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-dark rounded-md shadow-lg ring-1 ring-gray-800 py-2 hidden md:group-hover:block">
                  {caseStudyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-light-gray text-sm hover:bg-dark-accent hover:text-white"
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
                className="text-light-gray hover:text-dark-accent transition-colors"
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

        {/* Mobile Navigation - Simplified */}
        <div className="md:hidden flex items-center">
          <div className="text-light-gray p-2">
            <Menu className="h-8 w-8" aria-label="Open menu" />
          </div>
          <div className="absolute top-16 left-0 w-full bg-dark shadow-lg md:hidden">
            {navLinks.map((link) => (
              link.label === 'Case Studies' ? (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-light-gray text-lg border-b border-gray-800"
                  >
                    {link.label}
                  </Link>
                  {caseStudyLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-2 text-light-gray text-base border-b border-gray-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-light-gray text-lg border-b border-gray-800"
                >
                  {link.label}
                </Link>
              )
            ))}
            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="block px-4 py-3 text-lg border-t border-gray-800 text-light-gray"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;