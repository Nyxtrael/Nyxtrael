import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'),
  title: 'Get in Touch – Nyxtrael, Front-end Developer',
  description: 'Share your project idea and get a tailored quote within 24 hours. Let’s create something amazing together!',
  openGraph: {
    title: 'Get in Touch – Nyxtrael, Front-end Developer',
    description: 'Share your project idea and get a tailored quote within 24 hours. Let’s create something amazing together!',
    url: 'https://nyxtrael.com/contact',
    images: ['/og-image-contact.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}