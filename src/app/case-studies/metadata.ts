import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nyxtrael.com'), // Replace with your actual domain
  title: 'Case Studies - Nyxtrael Portfolio',
  description: 'Explore Nyxtrael’s portfolio of case studies, showcasing expertise in web development, UI/UX design, and consulting through modern, responsive projects.',
  openGraph: {
    title: 'Case Studies - Nyxtrael Portfolio',
    description: 'Explore Nyxtrael’s portfolio of case studies, showcasing expertise in web development, UI/UX design, and consulting through modern, responsive projects.',
    url: 'https://nyxtrael.com/case-studies', // Replace with your actual domain
    siteName: 'Nyxtrael',
    images: [
      {
        url: '/images/case-studies-og-image.jpg', // Ensure this image exists in /public/images
        width: 1200,
        height: 630,
        alt: 'Nyxtrael Case Studies Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - Nyxtrael Portfolio',
    description: 'Explore Nyxtrael’s portfolio of case studies, showcasing expertise in web development, UI/UX design, and consulting through modern, responsive projects.',
    images: ['/images/case-studies-og-image.jpg'], // Ensure this image exists in /public/images
  },
};