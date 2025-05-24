import Link from "next/link";
import { Instagram, Youtube, Twitter, Linkedin, Github, Briefcase, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://x.com/yourprofile', icon: Twitter, label: 'Twitter profile' },
    { href: 'https://linkedin.com/in/yourprofile', icon: Linkedin, label: 'LinkedIn profile' },
    { href: 'https://github.com/yourprofile', icon: Github, label: 'GitHub profile' },
    { href: 'https://fiverr.com/yourprofile', icon: Briefcase, label: 'Fiverr profile' },
    { href: 'https://instagram.com/yourprofile', icon: Instagram, label: 'Instagram profile' },
    { href: 'https://youtube.com/yourprofile', icon: Youtube, label: 'YouTube profile' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-dark border-t border-gray-800 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
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

          {/* Column 3: Socials + Contact */}
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
                    className="transform transition-all duration-200 hover:scale-110 hover:shadow-neon glow-hover"
                  >
                    <Icon className="h-6 w-6 text-dark-accent hover:text-light-gray" />
                  </Link>
                );
              })}
            </div>
            <Link
              href="mailto:hello@nyxtrael.com"
              className="text-medium-gray hover:text-dark-accent transition-colors duration-200 font-inter flex justify-center md:justify-start items-center space-x-2"
              aria-label="Email contact"
            >
              <Mail className="h-5 w-5 text-dark-accent" />
              <span>hello@nyxtrael.com</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;