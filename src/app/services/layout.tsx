import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: 'Services – Nyxtrael, Front-end Developer',
  description: 'Explore professional web development, UI/UX design, and consulting services tailored for startups and businesses.',
  openGraph: {
    title: 'Services – Nyxtrael, Front-end Developer',
    description: 'Discover fast, responsive, and SEO-optimized web solutions to elevate your digital presence.',
    url: 'https://nyxtrael.com/services',
    images: ['/og-image-services.jpg'],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}