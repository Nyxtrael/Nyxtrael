import { FaCode, FaPaintBrush, FaBusinessTime } from 'react-icons/fa';

import ServiceCard from '../../components/ServiceCard';

const services = [
  {
    icon: <FaCode className="text-accent text-5xl" />,
    title: 'Web Development',
    description:
      'We build custom, high-performance websites tailored to your business needs, ensuring seamless functionality and scalability.',
    benefits: [
      'Fast load times (under 2 seconds) with Next.js optimization.',
      'Responsive design for all devices.',
      'SEO-ready structure to boost visibility.',
    ],
  },
  {
    icon: <FaPaintBrush className="text-accent text-5xl" />,
    title: 'UI/UX Design',
    description:
      'Our intuitive and visually stunning designs enhance user engagement, crafted to deliver exceptional experiences.',
    benefits: [
      'User-centered designs validated through testing.',
      'Boosts engagement by up to 30% on average.',
      'Consistent branding across all touchpoints.',
    ],
  },
  {
    icon: <FaBusinessTime className="text-accent text-5xl" />,
    title: 'Consulting',
    description:
      'We provide strategic insights to optimize your digital strategy, helping you achieve measurable business growth.',
    benefits: [
      'Tailored technology roadmaps for your goals.',
      'Increase digital ROI by up to 40%.',
      'Expert guidance from industry veterans.',
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* Services Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-background pattern-grid">
        <div className="max-w-5xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 heading-underline">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed">
            Comprehensive solutions to elevate your digital presence and achieve your business goals.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30" />
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-background pattern-grid text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 heading-underline">
            Let’s Work Together
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
            Ready to transform your digital presence? Contact us to discuss how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}