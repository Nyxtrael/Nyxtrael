import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: 'Templates – Nyxtrael, Front-end Developer',
  description: 'Explore and customize one-pager templates for various projects and industries.',
  openGraph: {
    title: 'Templates – Nyxtrael, Front-end Developer',
    description: 'Discover customizable one-pager templates for startups, creatives, and more.',
    url: 'https://nyxtrael.com/templates',
    images: ['/og-image-templates.jpg'],
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}