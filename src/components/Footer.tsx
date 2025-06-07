import Link from "next/link";
import { Instagram, Youtube, Twitter, Linkedin, Github, Briefcase, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://x.com/Nyxtrael', icon: Twitter, label: 'Twitter profile' },
    { href: 'https://www.linkedin.com/in/nyxtrael-nyxtrael-928670368/', icon: Linkedin, label: 'LinkedIn profile' },
    { href: 'https://github.com/Nyxtrael', icon: Github, label: 'GitHub profile' },
    { href: 'https://fiverr.com/yourprofile', icon: Briefcase, label: 'Fiverr profile' },
    { href: 'https://instagram.com/yourprofile', icon: Instagram, label: 'Instagram profile' },
    { href: 'https://youtube.com/yourprofile', icon: Youtube, label: 'YouTube profile' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  const exampleWorkLinks = [
    { href: '/example-work/shop', label: 'ShopTrend' },
    { href: '/example-work/data', label: 'DataSync' },
    { href: '/example-work/health', label: 'Health & Wellness' },
    { href: '/example-work/pricing', label: 'Pricing' },
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-dark to-gray-900 border-t border-gray-800 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Logo + Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-light-gray font-montserrat mb-2">Nyxtrael</h3>
            <p className="text-medium-gray text-sm mb-4 font-inter">
              Crafting modern web experiences with passion.
            </p>
            <p className="text-medium-gray text-sm font-inter">
              Built with Next.js · © 2025 Nyxtrael
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-gray font-montserrat mb-4">Explore</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-medium-gray hover:text-dark-accent transition-colors duration-200 font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Example Work Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-gray font-montserrat mb-4">Example Work</h4>
            <ul className="space-y-2">
              {exampleWorkLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-medium-gray hover:text-dark-accent transition-colors duration-200 font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials + Contact */}
          <div>
            <h4 className="text-lg font-semibold text-light-gray font-montserrat mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    aria-label={link.label}
                    className="transform transition-all duration-300 hover:scale-110 hover:shadow-neon hover:animate-pulse glow-hover"
                  >
                    <Icon className="h-6 w-6 text-dark-accent hover:text-light-gray" />
                  </Link>
                );
              })}
            </div>
            <Link
              href="mailto:nyxtrael@gmail.com"
              className="text-medium-gray hover:text-dark-accent transition-colors duration-200 font-inter flex justify-center md:justify-start items-center space-x-2"
              aria-label="Email contact"
            >
              <Mail className="h-5 w-5 text-dark-accent" />
              <span>nyxtrael@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;