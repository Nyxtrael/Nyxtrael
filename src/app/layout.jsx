import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Analytics from "../components/Analytics";
import { ThemeProvider } from "../context/ThemeContext";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Creative Agency - Branding & Web Design</title>
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
        <meta property="og:title" content="Creative Agency - Branding & Web Design" />
        <meta
          property="og:description"
          content="Discover unique branding and web design solutions from a creative agency with diverse styles and innovative approaches."
        />
        <meta property="og:image" content="https://nyxtrael.netlify.app/agency/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.netlify.app/portfolio/agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.netlify.app/portfolio/agency" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <WishlistProvider>
          <CartProvider>
            <ThemeProvider>
              <Analytics />
              <header className="sticky top-0 z-50 bg-[#1a0e2a]/90 backdrop-blur-md w-full">
                <Navbar />
              </header>
              <main className="flex-grow">{children}</main>
              <footer className="pt-10 pb-6 px-4 border-t border-coral-500/20 text-sm text-neutral-400 text-center bg-gray-900">
                <div className="flex justify-center space-x-6 mb-4">
                  <a
                    href="mailto:nyxtrael@example.com"
                    aria-label="Email Nyxtrael"
                    className="p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white hover:text-teal-400"
                    >
                      <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/nyxtrael"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Nyxtrael on Instagram"
                    className="p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white hover:text-teal-400"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/nyxtrael"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Nyxtrael on X"
                    className="p-2 rounded-full hover:scale-110 transition-transform"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white hover:text-teal-400"
                    >
                      <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z" />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <p className="text-neutral-400">
                    © {new Date().getFullYear()} Nyxtrael
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/faq"
                      className="hover:text-teal-400 underline"
                      aria-label="Visit FAQ page"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/terms"
                      className="hover:text-teal-400 underline"
                      aria-label="Visit Terms of Service page"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="/refund"
                      className="hover:text-teal-400 underline"
                      aria-label="Visit Refund Policy page"
                    >
                      Refund Policy
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-teal-400 underline"
                      aria-label="Visit Contact page"
                    >
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