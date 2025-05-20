export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  overview: string;
  approach: string[];
  tools: string[];
  outcomes: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-revamp',
    title: 'E-Commerce Platform Revamp',
    description: 'Redesigned an e-commerce platform, increasing conversions by 30%.',
    overview:
      'A mid-sized retail company approached us to overhaul their outdated e-commerce platform, which suffered from poor user experience and low conversion rates. Our goal was to modernize the platform, improve performance, and boost sales.',
    approach: [
      'Conducted user research to identify pain points in the existing platform.',
      'Designed a new UI/UX with a focus on intuitive navigation and mobile responsiveness.',
      'Rebuilt the platform using Next.js for faster load times and SEO benefits.',
      'Integrated a secure payment gateway and streamlined the checkout process.',
    ],
    tools: ['Next.js', 'React', 'Figma', 'Stripe', 'Tailwind CSS'],
    outcomes: [
      'Increased conversion rates by 30% within the first three months.',
      'Reduced page load time from 5 seconds to under 2 seconds.',
      'Improved mobile user retention by 25%.',
    ],
  },
  {
    slug: 'corporate-dashboard',
    title: 'Corporate Dashboard',
    description: 'Built a data-driven dashboard for real-time business insights.',
    overview:
      'A corporate client needed a centralized dashboard to monitor key business metrics in real-time. We delivered a solution that provided actionable insights and improved decision-making efficiency.',
    approach: [
      'Collaborated with stakeholders to define key metrics and data sources.',
      'Designed a clean, interactive UI with data visualization components.',
      'Developed the dashboard using React and integrated it with their existing APIs.',
      'Ensured scalability to handle large datasets and future integrations.',
    ],
    tools: ['React', 'TypeScript', 'Chart.js', 'REST APIs', 'Tailwind CSS'],
    outcomes: [
      'Enabled real-time monitoring, saving the team 10 hours per week.',
      'Improved data accuracy with automated API syncing.',
      'Received positive feedback for the intuitive and responsive design.',
    ],
  },
  {
    slug: 'startup-landing',
    title: 'Startup Landing Page',
    description: 'Created a sleek landing page to boost user engagement.',
    overview:
      'A tech startup needed a landing page to launch their new product and attract early adopters. We crafted a visually appealing and high-converting page tailored to their target audience.',
    approach: [
      'Analyzed the target audience to create a user-focused design.',
      'Built a responsive landing page with Next.js and animated elements using Framer Motion.',
      'Optimized for SEO to increase organic reach.',
      'Integrated a call-to-action for early sign-ups with form validation.',
    ],
    tools: ['Next.js', 'Framer Motion', 'Figma', 'Google Analytics', 'Tailwind CSS'],
    outcomes: [
      'Achieved a 40% sign-up rate from initial traffic.',
      'Ranked on the first page of Google for targeted keywords within 6 weeks.',
      'Increased user engagement through smooth animations and fast load times.',
    ],
  },
];