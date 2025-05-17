'use client';

import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Analytics from '../components/Analytics';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className="text-center py-10 text-gray-500">
      <div className="flex justify-center space-x-6 mb-6">
        <motion.a
          href="mailto:nyxtrael@gmail.com"
          aria-label="Email Nyxtrael"
          className="p-3 rounded-full hover:bg-[#F5EDE4]/20 hover:text-[#8A4A21] transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
          </svg>
        </motion.a>
        <motion.a
          href="https://instagram.com/nyxtrael"
          target="_blank"
          rel="noreferrer"
          aria-label="Nyxtrael on Instagram"
          className="p-3 rounded-full hover:bg-[#F5EDE4]/20 hover:text-[#8A4A21] transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </motion.a>
        <motion.a
          href="https://x.com/nyxtrael"
          target="_blank"
          rel="noreferrer"
          aria-label="Nyxtrael on X"
          className="p-3 rounded-full hover:bg-[#F5EDE4]/20 hover:text-[#8A4A21] transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z" />
          </svg>
        </motion.a>
      </div>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
        © {new Date().getFullYear()} Nyxtrael. All rights reserved.
      </p>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Creative Agency – Branding & Web Design</title>
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-500 text-white px-3 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="opacity-20 w-full h-full bg-[url('/images/particles.svg')] bg-center bg-cover animate-fadeIn" />
        </div>
        <ThemeProvider>
          <Analytics />
          <header className="sticky top-0 z-50 bg-[#1a0e2a]/90 backdrop-blur-md w-full">
            <Navbar />
          </header>
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}