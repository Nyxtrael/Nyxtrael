'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://x.com/Nyxtrael', icon: Twitter, label: 'Twitter profile' },
    { href: 'https://www.linkedin.com/in/nyxtrael-nyxtrael-928670368/', icon: Linkedin, label: 'LinkedIn profile' },
    { href: 'https://github.com/Nyxtrael', icon: Github, label: 'GitHub profile' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  const exampleWorkLinks = [
    { href: '/example-work/shoptrend', label: 'ShopTrend' },
    { href: '/example-work/datasync', label: 'DataSync' },
    { href: '/example-work/health-wellness', label: 'Health & Wellness' },
    { href: '/example-work/artist-portfolio', label: 'Artist Portfolio' },
  ];

  return (
    <footer className="bg-neutral-bg py-12 border-t border-neutral-mid">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Logo + Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-text-base font-inter mb-2 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Nyxtrael
            </h3>
            <p className="text-text-muted text-sm mb-4 font-inter">
              Crafting modern web experiences with passion.
            </p>
            <p className="text-text-muted-secondary text-sm font-inter">
              Built with Next.js · © {new Date().getFullYear()} Nyxtrael
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-base font-inter mb-4">Explore</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors duration-200 font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Example Work Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-base font-inter mb-4">Portfolio</h4>
            <ul className="space-y-2">
              {exampleWorkLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors duration-200 font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials + Contact */}
          <div>
            <h4 className="text-lg font-semibold text-text-base font-inter mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                    className="transform transition-all duration-300 hover:scale-110 hover:shadow-accent/50"
                  >
                    <Icon className="h-6 w-6 text-accent hover:text-yellow-400" />
                  </Link>
                );
              })}
            </div>
            <Link
              href="mailto:nyxtrael@gmail.com"
              className="text-text-muted hover:text-accent transition-colors duration-200 font-inter flex justify-center md:justify-start items-center space-x-2"
              aria-label="Email Nyxtrael"
            >
              <Mail className="h-5 w-5 text-accent" />
              <span>nyxtrael@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;