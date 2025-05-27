import { Metadata } from 'next';

   export const metadata: Metadata = {
     metadataBase: new URL('https://nyxtrael.com'),
     title: 'Case Studies - Nyxtrael Portfolio',
     description: 'Explore Nyxtrael’s portfolio of case studies, showcasing expertise in web development, UI/UX design, and consulting through modern, responsive projects.',
     openGraph: {
       title: 'Case Studies - Nyxtrael Portfolio',
       description: 'Explore Nyxtrael’s portfolio of case studies, showcasing expertise in web development, UI/UX design, and consulting through modern, responsive projects.',
       url: 'https://nyxtrael.com/case-studies',
       siteName: 'Nyxtrael',
       images: [
         {
           url: '/images/case-studies-og-image.jpg',
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
       images: ['/images/case-studies-og-image.jpg'],
     },
   };

   export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
     return <>{children}</>;
   }