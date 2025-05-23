// src/app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  title: 'Nyxtrael – Freelance Front-end Developer & Web Designer',
  description:
    'Tworzę nowoczesne, responsywne strony i aplikacje webowe (React, Next.js). Zobacz moje portfolio i skontaktuj się!',
  openGraph: {
    title: 'Nyxtrael – Freelance Front-end Developer & Web Designer',
    description:
      'Specjalista front-end oferujący szybkie, estetyczne strony internetowe. Sprawdź moje projekty i porozmawiajmy o Twoim!',
    url: 'https://nyxtrael.com',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-text-primary font-body">
        <NavBar />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}