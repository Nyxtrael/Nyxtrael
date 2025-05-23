import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Nyxtrael - Let’s Build Something Great',
  description: 'Get in touch with Nyxtrael for web development, UI/UX design, or SaaS projects. I’ll reply within 24 hours to discuss your idea.',
  openGraph: {
    title: 'Contact Nyxtrael - Let’s Build Something Great',
    description: 'Get in touch with Nyxtrael for web development, UI/UX design, or SaaS projects. I’ll reply within 24 hours to discuss your idea.',
    url: 'https://nyxtrael.com/contact', // Replace with your actual domain
    siteName: 'Nyxtrael',
    images: [
      {
        url: '/images/contact-og-image.jpg', // Ensure this image exists in /public/images
        width: 1200,
        height: 630,
        alt: 'Contact Nyxtrael - Let’s Collaborate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nyxtrael - Let’s Build Something Great',
    description: 'Get in touch with Nyxtrael for web development, UI/UX design, or SaaS projects. I’ll reply within 24 hours to discuss your idea.',
    images: ['/images/contact-og-image.jpg'], // Ensure this image exists in /public/images
  },
};