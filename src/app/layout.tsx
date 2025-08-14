import type { Metadata } from 'next';
import '../styles/globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: {
    default: 'Nyxtrael — Conversion‑focused Web Design & Next.js Development',
    template: '%s | Nyxtrael',
  },
  description:
    'Conversion‑focused Next.js sites for SaaS & e‑commerce. Ship in 14 days. Measurable wins or I fix it free.',
  openGraph: {
    title: 'Nyxtrael — Conversion‑focused Web Design & Next.js Development',
    description:
      'Next.js + UX expertise for e‑commerce & SaaS. Ship in 14 days with measurable gains.',
    url: 'https://nyxtrael.com',
    siteName: 'Nyxtrael',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyxtrael — Web Design & Next.js',
    description: 'Ship in 14 days. Conversion‑focused builds for e‑commerce & SaaS.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://nyxtrael.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nyxtrael',
  url: 'https://nyxtrael.com',
  logo: 'https://nyxtrael.com/og-image.jpg',
  sameAs: [
    'https://nyxtrael.com'
  ],
  founder: {
    '@type': 'Person',
    name: 'Nyxtrael',
    jobTitle: 'Front‑end Developer',
  },
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Web design & Next.js development',
      areaServed: 'Worldwide',
      provider: {
        '@type': 'Organization',
        name: 'Nyxtrael'
      }
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://nyxtrael.com" />
      </head>
      <body className="font-inter bg-neutral-bg text-text-base">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
