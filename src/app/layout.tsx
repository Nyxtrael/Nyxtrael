import type { Metadata } from 'next';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: 'Nyxtrael – Freelance Front-end Developer & Web Designer',
  description:
    'I create modern, responsive websites and web applications (React, Next.js). Check out my portfolio and get in touch!',
  openGraph: {
    title: 'Nyxtrael – Freelance Front-end Developer & Web Designer',
    description:
      'A front-end specialist offering fast, aesthetic websites. Check out my projects and let’s talk about yours!',
    url: 'https://nyxtrael.com',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}