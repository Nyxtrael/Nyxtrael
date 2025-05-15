'use client';                           // ← Must be the very first line

import '../styles/globals.css';        // ← Global CSS only in root layout
import Head from 'next/head';          // ← In App Router you can also use `export const metadata = { ... }`
import Navbar from '../components/Navbar';
import Analytics from '../components/Analytics';
import { ThemeProvider } from '../context/ThemeContext';
import { CartProvider } from '../context/CartContext';
import { WishlistProvider } from '../context/WishlistContext';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Creative Agency – Branding & Web Design</title>
        {/* Preload custom font for performance */}
        <link
          rel="preload"
          href="/fonts/Inter-VariableFont_slnt,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Discover unique branding and web design solutions from a creative agency with diverse styles and innovative approaches."
        />
        <meta
          name="keywords"
          content="branding, web design, creative agency, design solutions, portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content="Creative Agency – Branding & Web Design" />
        <meta
          property="og:description"
          content="Discover unique branding and web design solutions from a creative agency with diverse styles and innovative approaches."
        />
        <meta
          property="og:image"
          content="https://nyxtrael.netlify.app/agency/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://nyxtrael.netlify.app/portfolio/agency"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://nyxtrael.netlify.app/portfolio/agency"
        />
      </Head>
      <body className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0a0d14] overflow-x-hidden">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-3 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        {/* Decorative background shapes (subtle) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="opacity-20 w-full h-full bg-[url('/images/particles.svg')] bg-center bg-cover animate-fadeIn" />
        </div>
        <WishlistProvider>
          <CartProvider>
            <ThemeProvider>
              <Analytics />
              <header className="sticky top-0 z-50 bg-[#1a0e2a]/90 backdrop-blur-md w-full">
                <Navbar />
              </header>
              {/* Animate sections on scroll */}
              <AnimatePresence>
                <motion.main
                  id="main-content"
                  className="flex-grow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {children}
                </motion.main>
              </AnimatePresence>
              <footer className="pt-10 pb-6 px-4 border-t border-coral-500/20 text-sm text-neutral-400 text-center bg-gray-900">
                <div className="flex justify-center space-x-6 mb-4">
                  <a
                    href="mailto:nyxtrael@example.com"
                    aria-label="Email Nyxtrael"
                    className="p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    {/* email SVG */}
                  </a>
                  <a
                    href="https://www.instagram.com/nyxtrael"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Nyxtrael on Instagram"
                    className="p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    {/* instagram SVG */}
                  </a>
                  <a
                    href="https://x.com/nyxtrael"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Nyxtrael on X"
                    className="p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    {/* X SVG */}
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <p className="text-neutral-400">
                    © {new Date().getFullYear()} Nyxtrael
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/faq" className="hover:text-teal-400 underline">
                      FAQ
                    </Link>
                    <Link href="/terms" className="hover:text-teal-400 underline">
                      Terms of Service
                    </Link>
                    <Link href="/refund" className="hover:text-teal-400 underline">
                      Refund Policy
                    </Link>
                    <Link href="/contact" className="hover:text-teal-400 underline">
                      Contact
                    </Link>
                  </div>
                </div>
              </footer>
            </ThemeProvider>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
