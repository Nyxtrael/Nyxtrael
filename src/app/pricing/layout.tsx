import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: 'Pricing – Nyxtrael, Front-end Developer',
  description: 'Explore transparent pricing plans for web development and UI/UX design services, tailored to your needs with no hidden costs.',
  openGraph: {
    title: 'Pricing – Nyxtrael, Front-end Developer',
    description: 'Choose from flexible plans or build a custom solution for your web project. Free consultation included.',
    url: 'https://nyxtrael.com/pricing',
    images: ['/og-image-pricing.jpg'],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}