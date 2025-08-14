'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ArtistLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <header className="bg-neutral-bg text-text-base p-4 shadow-md mt-16 relative z-20 border-b border-white/10">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex items-center gap-4"><Link href="/portfolio" className="text-sm underline hover:opacity-90">← Back to Portfolio</Link><Link href="/example-work/artist" className="text-xl font-serif font-bold hover:text-accent transition-colors">Artist Portfolio</Link></div>
          <div className="flex space-x-6 items-center">
            <Link href="#gallery" className="hover:text-accent transition-colors">Work</Link>
            <Link href="#about" className="hover:text-accent transition-colors">About</Link>
            <Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-neutral-mid transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-neutral-bg text-text-muted p-4 text-center border-t border-white/10">
        <p className="text-sm">© {new Date().getFullYear()} Artist Portfolio</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="https://www.linkedin.com/in/nyxtrael-nyxtrael-928670368/" className="hover:text-accent transition-colors" aria-label="LinkedIn profile">
            LinkedIn
          </Link>
          <Link href="https://github.com/nyxtrael" className="hover:text-accent transition-colors" aria-label="GitHub profile">
            GitHub
          </Link>
          <Link href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram profile">
            Instagram
          </Link>
        </div>
      </footer>
    </>
  );
}