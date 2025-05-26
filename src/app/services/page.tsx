import Head from 'next/head';
import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites tailored to your needs.',
    icon: <CodeBracketIcon className="h-12 w-12 text-accent" />,
    benefits: [
      'Optimized for speed and SEO',
      'Mobile-first responsive design',
      'Custom functionality with Next.js',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and aesthetic designs that boost user engagement.',
    icon: <PaintBrushIcon className="h-12 w-12 text-accent" />,
    benefits: [
      'User-centered design process',
      'Interactive prototypes',
      'Consistent brand visuals',
    ],
  },
  {
    title: 'Consulting',
    description: 'Expert guidance on digital strategy and project optimization.',
    icon: <LightBulbIcon className="h-12 w-12 text-accent" />,
    benefits: [
      'Technical audits and recommendations',
      'Performance optimization strategies',
      'Scalable architecture planning',
    ],
  },
];

const processSteps = [
  {
    title: 'Free Consultation',
    description: 'We discuss your goals and requirements.',
  },
  {
    title: 'Proposal & Timeline',
    description: 'You receive a detailed project outline.',
  },
  {
    title: 'Design & Build',
    description: 'I create your custom website step by step.',
  },
  {
    title: 'Launch & Support',
    description: 'Your site goes live and stays in good hands.',
  },
];

export default function Services() {
  return (
    <main className="bg-neutral-dark overflow-hidden">
      <Head>
        <title>Services – Nyxtrael</title>
        <meta
          name="description"
          content="Nyxtrael offers professional web development, UI/UX design, and consulting services. Discover fast, responsive, and SEO-optimized solutions."
        />
      </Head>

      {/* Services Hero Section with Gradient */}
      <section className="relative min-h-[60vh] flex items-center py-20 bg-gradient-to-br from-neutral-dark to-neutral-mid">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-brand/20 animate-gradient-x opacity-50" />
        <div className="absolute inset-0 pattern-grid opacity-20 animate-slide-up" />
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat heading-underline bg-gradient-to-r from-white to-accent bg-clip-text text-transparent text-white animate-fade-in">
            My Services
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F5F5] mb-10 leading-relaxed font-inter animate-fade-in-delay">
            Fast, modern websites for startups, creators, and SaaS — crafted with speed, design and performance in mind.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-gradient-to-b from-neutral-mid to-neutral-dark section-spacing">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-montserrat heading-underline animate-fade-in">
            What I Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing bg-neutral-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-montserrat heading-underline animate-fade-in">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent text-white font-montserrat font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-light-gray mb-2 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-medium-gray font-inter">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-spacing bg-gradient-to-br from-brand/30 to-accent/30 text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-montserrat heading-underline animate-fade-in">
            Let’s Work Together
          </h2>
          <p className="text-lg md:text-xl text-[#F5F5F5] mb-10 leading-relaxed font-inter animate-fade-in-delay">
            Ready to transform your digital presence? Let’s discuss how I can help.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Left Option: Quick Quote Form */}
            <div className="flex-1 max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4 font-montserrat animate-slide-up">
                Prefer a quick quote?
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name-quick" className="sr-only">Your Name</label>
                  <input
                    id="name-quick"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="email-quick" className="sr-only">Your Email</label>
                  <input
                    id="email-quick"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="message-quick" className="sr-only">Your Message</label>
                  <textarea
                    id="message-quick"
                    placeholder="Tell me about your project"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                    disabled
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary inline-block text-xl font-semibold font-montserrat text-white hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
                  disabled
                >
                  Get in Touch
                </button>
              </form>
            </div>

            {/* Right Option: Link to Case Studies */}
            <div className="flex-1 max-w-md flex flex-col items-center">
              <h3 className="text-lg font-semibold text-white mb-4 font-montserrat animate-slide-up">
                Not sure yet?
              </h3>
              <p className="text-medium-gray mb-6 font-inter">
                Explore my portfolio to see how I’ve helped others bring their ideas to life.
              </p>
              <Link
                href="/case-studies"
                className="btn-outline inline-block text-xl font-semibold font-montserrat text-white hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}