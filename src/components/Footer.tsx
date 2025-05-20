import Link from 'next/link';
import { XMarkIcon, CameraIcon, BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-surface py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://twitter.com" target="_blank" aria-label="X profile">
            <XMarkIcon className="h-6 w-6 text-accent hover:text-opacity-80 transition-colors" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram profile">
            <CameraIcon className="h-6 w-6 text-accent hover:text-opacity-80 transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn profile">
            <BuildingOfficeIcon className="h-6 w-6 text-accent hover:text-opacity-80 transition-colors" />
          </Link>
          <Link href="mailto:hello@nyxcorp.com" aria-label="Email contact">
            <EnvelopeIcon className="h-6 w-6 text-accent hover:text-opacity-80 transition-colors" />
          </Link>
        </div>

        {/* Contact Link */}
        <Link href="mailto:hello@nyxcorp.com" className="text-text-secondary hover:text-accent">
          hello@nyxcorp.com
        </Link>

        {/* Copyright */}
        <p className="text-sm text-text-secondary mt-2">
          © 2025 NyxCorp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;