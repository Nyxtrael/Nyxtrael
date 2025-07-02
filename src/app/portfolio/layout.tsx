import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: 'Portfolio – Nyxtrael, Front-end Developer',
  description: 'Explore Nyxtrael’s portfolio of web development and UI/UX design projects, showcasing impactful solutions for startups and creators.',
  openGraph: {
    title: 'Portfolio – Nyxtrael, Front-end Developer',
    description: 'Discover my projects, from e-commerce redesigns to SaaS dashboards, each crafted to deliver results.',
    url: 'https://nyxtrael.com/portfolio',
    images: ['/og-image-portfolio.jpg'],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}