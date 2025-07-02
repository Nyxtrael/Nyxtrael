import { notFound } from 'next/navigation';
import CaseStudyClient from '../../../components/CaseStudyClient';

const projects = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    video: '/videos/shoptrend-demo.mp4',
    problem: 'The client needed a modernized e-commerce store to boost conversions, facing issues with outdated design and complex navigation.',
    solution: 'Redesigned the interface with a focus on modern UX trends, introducing intuitive mega-dropdown menus, streamlined product cards, and a simplified checkout process.',
    features: [
      { title: 'Enhanced Navigation', description: 'Introduced a mega-dropdown menu for seamless browsing.' },
      { title: 'Product Cards', description: 'Redesigned cards with high-quality visuals and quick actions.' },
      { title: 'Checkout Optimization', description: 'Simplified checkout to reduce cart abandonment.' },
    ],
    results: [
      { metric: '+25%', detail: 'Increase in conversion rates.' },
      { metric: '+30%', detail: 'Longer average session duration.' },
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    role: 'UX/UI design and front-end development',
    gallery: ['/images/portfolio/shoptrend-1.png', '/images/portfolio/shoptrend-2.png', '/images/portfolio/shoptrend-3.png'],
    testimonial: { quote: 'The new ShopTrend exceeded our expectations—sales have soared!', author: 'Emily Carter, CEO' },
    liveLink: 'https://shoptrend-demo.vercel.app',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    video: null,
    problem: 'Needed an intuitive dashboard for real-time data analytics with a focus on performance.',
    solution: 'Developed a responsive dashboard with real-time charts and a user-friendly interface.',
    features: [
      { title: 'Real-time Charts', description: 'Integrated Chart.js for dynamic data visualization.' },
      { title: 'Responsive Design', description: 'Ensured usability across devices.' },
      { title: 'Custom Filters', description: 'Added flexible data filtering options.' },
    ],
    results: [
      { metric: '40%', detail: 'Faster load times.' },
      { metric: '95+', detail: 'Lighthouse performance score.' },
    ],
    techStack: ['Next.js', 'Chart.js', 'Tailwind CSS'],
    role: 'Front-end development and UI design',
    gallery: ['/images/portfolio/datasync-1.png', '/images/portfolio/datasync-2.png'],
    testimonial: { quote: 'DataSync’s dashboard is a game-changer for our analytics.', author: 'Mark Lee, SaaS CEO' },
    liveLink: null,
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    video: null,
    problem: 'Required a vibrant one-pager to promote health courses with a focus on user engagement.',
    solution: 'Created a visually appealing, mobile-first one-pager with clear CTAs and SEO optimization.',
    features: [
      { title: 'Vibrant Design', description: 'Used bold colors and imagery to attract users.' },
      { title: 'SEO Optimization', description: 'Improved discoverability with meta tags.' },
      { title: 'Mobile-first', description: 'Ensured seamless experience on all devices.' },
    ],
    results: [
      { metric: '90+', detail: 'PageSpeed score.' },
      { metric: '20%', detail: 'Increase in user sign-ups.' },
    ],
    techStack: ['Next.js', 'Tailwind CSS'],
    role: 'UI/UX design and front-end development',
    gallery: ['/images/portfolio/health-wellness-1.png', '/images/portfolio/health-wellness-2.png'],
    testimonial: { quote: 'The one-pager perfectly captures our brand’s energy.', author: 'Sarah Brown, Health Coach' },
    liveLink: null,
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    video: null,
    problem: 'Needed an elegant portfolio to showcase a visual artist’s work.',
    solution: 'Designed a minimalist portfolio with a focus on showcasing artwork and smooth navigation.',
    features: [
      { title: 'Minimalist Design', description: 'Clean layout to highlight artwork.' },
      { title: 'Gallery Navigation', description: 'Intuitive controls for browsing.' },
      { title: 'Responsive Layout', description: 'Optimized for all screen sizes.' },
    ],
    results: [
      { metric: '50%', detail: 'Increase in user engagement.' },
      { metric: '85+', detail: 'Accessibility score.' },
    ],
    techStack: ['Next.js', 'Tailwind CSS'],
    role: 'UI design and front-end development',
    gallery: ['/images/portfolio/artist-portfolio-1.png', '/images/portfolio/artist-portfolio-2.png'],
    testimonial: { quote: 'My portfolio now truly reflects my art’s essence.', author: 'Alex Turner, Artist' },
    liveLink: null,
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return <CaseStudyClient project={project} />;
}