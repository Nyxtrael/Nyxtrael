'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChevronDown, Clock, Code, Headphones, HelpCircle, X, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .form-input {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid #38bdf8;
    background-color: #0d1117;
    color: #e5e7eb;
  }
  .form-input:focus {
    outline: none;
    box-shadow: 0 0 0 2px #38bdf8;
  }
  .form-checkbox {
    accent-color: #38bdf8;
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 100% !important;
    }
  }
  .pricing-card {
    padding: 1rem;
    background: #1f2937;
    border: 1px solid #38bdf8/30;
    border-radius: 0.5rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }
  .pricing-card:hover {
    border-color: #facc15/50;
    box-shadow: 0 0 10px #38bdf8/50;
    transform: scale(1.02);
  }
  .pricing-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #e5e7eb;
  }
  .pricing-card .price {
    font-size: 2rem;
    font-weight: bold;
    color: #38bdf8;
    margin: 1rem 0;
  }
  .pricing-card .description {
    color: #9ca3af;
    margin-bottom: 1rem;
  }
  .pricing-card .details {
    color: #e5e7eb;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  .pricing-card ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }
  .pricing-card ul li {
    display: flex;
    align-items: center;
    color: #e5e7eb;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  .pricing-card ul li span {
    margin-right: 0.5rem;
  }
  .pricing-card .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #38bdf8;
    color: #0d1117;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .pricing-card .cta:hover {
    background: #facc15;
    box-shadow: 0 0 10px #38bdf8/50;
  }
  .pricing-card .popular {
    position: absolute;
    top: 0;
    right: 0;
    background: #38bdf8;
    color: #0d1117;
    padding: 0.25rem 0.75rem;
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

interface ExampleWork {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
}

const exampleWorkProjects: ExampleWork[] = [
  {
    title: 'ShopTrend – E-commerce Redesign',
    description: 'A modern e-commerce store with enhanced UX and vibrant design.',
    thumbnail: '/images/portfolio/shoptrend-cover.jpg',
    href: '/portfolio/shoptrend',
  },
  {
    title: 'DataSync – SaaS Analytics Dashboard',
    description: 'An intuitive analytics dashboard for real-time insights.',
    thumbnail: '/images/portfolio/datasync-cover.jpg',
    href: '/portfolio/datasync',
  },
  {
    title: 'Health & Wellness – Diet Plans',
    description: 'A dynamic one-pager promoting health courses and tips.',
    thumbnail: '/images/portfolio/health-wellness-cover.jpg',
    href: '/portfolio/health-wellness',
  },
];

const plans = [
  {
    name: 'Basic',
    price: '$199 / ~€179',
    description: 'Perfect for small businesses or startups needing a simple, high-quality website.',
    duration: '1-2 weeks',
    pages: 'Up to 3 pages',
    support: '1 month',
    features: [
      { name: 'Responsive design', value: true, tooltip: 'Optimized for all devices' },
      { name: 'Revisions', value: 2, tooltip: 'Number of design iterations' },
      { name: 'SEO', value: 'Basic', tooltip: 'Basic search engine optimization' },
      { name: 'Contact form', value: false, tooltip: 'Integrated contact form' },
      { name: 'CMS / Stripe', value: false, tooltip: 'Content management or payment integration' },
    ],
    cta: 'Get Started',
    link: '/contact?plan=Basic',
  },
  {
    name: 'Standard',
    price: '$399 / ~€359',
    description: 'Ideal for growing businesses needing a robust, feature-rich website.',
    duration: '2-4 weeks',
    pages: 'Up to 6 pages',
    support: '3 months',
    features: [
      { name: 'Responsive design', value: true, tooltip: 'Optimized for all devices' },
      { name: 'Revisions', value: 5, tooltip: 'Number of design iterations' },
      { name: 'SEO', value: 'Full', tooltip: 'Comprehensive search engine optimization' },
      { name: 'Contact form', value: true, tooltip: 'Integrated contact form' },
      { name: 'CMS / Stripe', value: false, tooltip: 'Content management or payment integration' },
    ],
    cta: 'Get Started',
    link: '/contact?plan=Standard',
    isPopular: true,
  },
  {
    name: 'Premium',
    price: '$599–$699 / ~€549–€649',
    description: 'For complex projects requiring advanced features and ongoing support.',
    duration: '4-6 weeks',
    pages: 'Up to 10 pages',
    support: '6 months',
    features: [
      { name: 'Responsive design', value: true, tooltip: 'Optimized for all devices' },
      { name: 'Revisions', value: 'Unlimited', tooltip: 'Unlimited design iterations' },
      { name: 'SEO', value: 'Full', tooltip: 'Comprehensive search engine optimization' },
      { name: 'Contact form', value: true, tooltip: 'Integrated contact form' },
      { name: 'CMS / Stripe', value: true, tooltip: 'Content management or payment integration' },
    ],
    cta: 'Request Project',
    link: '/contact?plan=Premium',
  },
];

const faqs = [
  { question: 'What payment methods do you accept?', answer: 'I accept credit cards, PayPal, and bank transfers via Stripe.', category: 'Payments' },
  { question: 'Can I upgrade my plan later?', answer: 'Yes, you can upgrade your plan at any time. Contact me to adjust your plan.', category: 'Upgrades' },
  { question: 'What does “unlimited revisions” mean?', answer: 'Unlimited revisions in the Premium plan mean you can request as many changes as needed during the project timeline.', category: 'Support' },
  { question: 'How long does it take to complete a project?', answer: 'Project timelines vary: Basic (1-2 weeks), Standard (2-4 weeks), and Premium (4-6 weeks).', category: 'Support' },
  { question: 'Do you offer refunds?', answer: 'If you’re not satisfied within 14 days, I offer a full refund of the initial deposit.', category: 'Payments' },
  { question: 'Is a deposit required?', answer: 'Yes, a 30% deposit is required upfront, with the balance due upon project completion.', category: 'Payments' },
];

export default function PricingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [faqFilter, setFaqFilter] = useState('All');
  const [customPlan, setCustomPlan] = useState({
    pages: 5,
    revisions: 0,
    seo: false,
    contactForm: false,
    cms: false,
  });
  const router = useRouter();

  const calculateCustomPrice = () => {
    let price = 199;
    if (customPlan.pages > 3 && customPlan.pages <= 6) price += (customPlan.pages - 3) * 50;
    if (customPlan.pages > 6) price += 150 + (customPlan.pages - 6) * 50;
    price += Math.max(0, customPlan.revisions - 2) * 25;
    if (customPlan.seo) price += 100;
    if (customPlan.contactForm) price += 50;
    if (customPlan.cms) price += 150;
    return Math.min(Math.round(price), 699);
  };

  const toggleFaq = (index: number | null) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const filteredFaqs = faqFilter === 'All' ? faqs : faqs.filter((faq) => faq.category === faqFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFaqOpen(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRequestCustomPlan = () => {
    const price = calculateCustomPrice();
    const queryParams = new URLSearchParams({
      pages: customPlan.pages.toString(),
      revisions: customPlan.revisions.toString(),
      seo: customPlan.seo.toString(),
      contactForm: customPlan.contactForm.toString(),
      cms: customPlan.cms.toString(),
      price: price.toString(),
    }).toString();
    router.push(`/contact?${queryParams}`);
  };

  return (
    <main className="min-h-screen bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-24 bg-neutral-bg text-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />
        </div>
        <motion.div
          className="relative z-10 container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            Pricing Plans
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose a transparent, flexible plan tailored to your needs—no hidden costs. Get a custom quote after a free consultation.
            <br />
            <Link href="#custom-plan" className="underline text-accent hover:text-yellow-400">Build your own plan</Link>
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Pricing Cards */}
      <section className="py-24 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Select Your Plan
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="pricing-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {plan.isPopular && (
                  <span className="popular">Most Popular</span>
                )}
                <h3 className="mb-4">{plan.name}</h3>
                <p className="price mb-4">{plan.price}</p>
                <p className="description mb-4">{plan.description}</p>
                <p className="details mb-2">Delivery: {plan.duration}</p>
                <p className="details mb-2">Pages: {plan.pages}</p>
                <p className="details mb-6">Support: {plan.support}</p>
                <ul className="mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={feature.name} className="flex items-center">
                      {typeof feature.value === 'boolean' ? (
                        <span className={feature.value ? 'text-accent' : 'text-text-muted-secondary'} aria-label={feature.tooltip}>
                          {feature.value ? <Check className="mr-3" /> : <X className="mr-3" />}
                        </span>
                      ) : (
                        <span className="text-accent">{feature.value}</span>
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.link}
                  className="cta"
                  aria-label={`Start ${plan.name} plan`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Example Realizations */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            See What I’ve Built
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} loop={true} breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
            {exampleWorkProjects.map((project, idx) => (
              <SwiperSlide key={project.title}>
                <motion.div
                  className="relative bg-neutral-mid rounded-xl overflow-hidden border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg to-transparent opacity-70" />
                  <div className="relative p-6">
                    <h3 className="text-xl font-semibold text-text-base mb-2">{project.title}</h3>
                    <p className="text-text-muted mb-4">{project.description}</p>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-dark py-2 px-5 rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300"
                      aria-label={`View ${project.title}`}
                    >
                      View Project
                      <ArrowRight className="w-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="section-divider" />

      {/* Comparison Table (Desktop) / Carousel (Mobile) */}
      <section className="py-24 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Compare Plans
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-text-base border-collapse">
              <thead>
                <tr className="bg-gradient-cta text-neutral-dark sticky top-0 shadow-md">
                  <th className="p-4 text-left text-sm font-semibold">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`p-4 text-center text-sm font-semibold ${plan.isPopular ? 'bg-accent/20' : ''}`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={index % 2 === 0 ? 'bg-neutral-mid/50' : 'bg-neutral-bg hover:bg-accent/10'}
                  >
                    <td className="p-4 text-sm" title={feature.tooltip}>
                      {feature.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="p-4 text-center text-sm">
                        {typeof plan.features[index].value === 'boolean' ? (
                          <span
                            className={plan.features[index].value ? 'text-accent' : 'text-text-muted-secondary'}
                            aria-label={feature.tooltip}
                          >
                            {plan.features[index].value ? (
                              <Check className="w-6 h-6 mx-auto text-accent hover:text-yellow-400 transition-colors" />
                            ) : (
                              <X className="w-6 h-6 mx-auto text-text-muted-secondary hover:text-yellow-400 transition-colors" />
                            )}
                          </span>
                        ) : (
                          <span className="text-accent">{plan.features[index].value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
              {plans.map((plan) => (
                <SwiperSlide key={plan.name}>
                  <motion.div
                    className="p-6 bg-neutral-mid rounded-xl shadow-md border border-accent/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold text-text-base mb-4 text-center">{plan.name}</h3>
                    <p className="text-3xl font-bold text-accent mb-4 text-center">{plan.price}</p>
                    <p className="text-text-muted text-base mb-4">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center text-text-base">
                          {typeof feature.value === 'boolean' ? (
                            <span className={feature.value ? 'text-accent' : 'text-text-muted-secondary'} aria-label={feature.tooltip}>
                              {feature.value ? (
                                <Check className="w-6 h-6 mr-3 text-accent hover:text-yellow-400 transition-colors" />
                              ) : (
                                <X className="w-6 h-6 mr-3 text-text-muted-secondary hover:text-yellow-400 transition-colors" />
                              )}
                            </span>
                          ) : (
                            <span className="text-accent">{feature.value}</span>
                          )}
                          <span className="ml-3">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Custom Plan Calculator */}
      <section id="custom-plan" className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Build Your Custom Plan
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto pricing-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-text-base font-medium mb-2">Number of Pages (Base: $199 for 1-3)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={customPlan.pages}
                  onChange={(e) => setCustomPlan({ ...customPlan, pages: parseInt(e.target.value) || 1 })}
                  className="form-input w-full"
                />
              </div>
              <div>
                <label className="block text-text-base font-medium mb-2">Number of Revisions (Base: 2, +$25 each)</label>
                <input
                  type="number"
                  min="0"
                  value={customPlan.revisions}
                  onChange={(e) => setCustomPlan({ ...customPlan, revisions: parseInt(e.target.value) || 0 })}
                  className="form-input w-full"
                />
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="seo"
                  checked={customPlan.seo}
                  onChange={(e) => setCustomPlan({ ...customPlan, seo: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="seo" className="text-text-base">Add Full SEO (+$100)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="contactForm"
                  checked={customPlan.contactForm}
                  onChange={(e) => setCustomPlan({ ...customPlan, contactForm: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="contactForm" className="text-text-base">Add Contact Form (+$50)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="cms"
                  checked={customPlan.cms}
                  onChange={(e) => setCustomPlan({ ...customPlan, cms: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="cms" className="text-text-base">Add CMS/Stripe (+$150)</label>
              </div>
              <div className="text-center">
                <p className="price mb-4">Estimated Price: ${calculateCustomPrice()}</p>
                <button
                  onClick={handleRequestCustomPlan}
                  className="cta"
                  aria-label="Request custom plan"
                >
                  Request Custom Plan
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Trust Badges */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Me?
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Clock className="w-12 h-12 text-accent mb-4 hover:text-yellow-400 transition-colors" />
              <h3 className="text-xl font-semibold text-text-base mb-2">Delivery Guarantee</h3>
              <p className="text-text-muted">100% on-time delivery or free fixes.</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code className="w-12 h-12 text-accent mb-4 hover:text-yellow-400 transition-colors" />
              <h3 className="text-xl font-semibold text-text-base mb-2">Code Quality</h3>
              <p className="text-text-muted">Clean, maintainable code with best practices.</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Headphones className="w-12 h-12 text-accent mb-4 hover:text-yellow-400 transition-colors" />
              <h3 className="text-xl font-semibold text-text-base mb-2">Dedicated Support</h3>
              <p className="text-text-muted">Support tailored to your plan’s duration.</p>
            </motion.div>
          </div>
          <motion.blockquote
            className="text-center text-xl text-text-muted italic max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            “Nyxtrael’s work was worth every penny—our site paid for itself in months.” – Jane Doe, Startup Founder
          </motion.blockquote>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ Section with Filters */}
      <section className="py-24 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-text-base mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-4">
            {['All', 'Payments', 'Support', 'Upgrades'].map((category) => (
              <button
                key={category}
                onClick={() => setFaqFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  faqFilter === category
                    ? 'bg-accent text-neutral-dark'
                    : 'bg-neutral-mid text-text-base hover:bg-accent hover:text-neutral-dark'
                } transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid rounded-xl shadow-md border border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus-outline-none focus:ring-2 focus:ring-accent"
                  aria-expanded={faqOpen === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-accent mr-3 hover:text-yellow-400 transition-colors" />
                    <span className="text-lg font-semibold text-text-base">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transform transition-transform hover:text-yellow-400 ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="p-6 pt-0 text-text-muted"
                  >
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <section className="py-24 bg-neutral-bg text-center">
        <motion.h2
          className="text-5xl font-bold text-text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Launch Your Project?
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Start today with a free consultation and a tailored plan for your needs.
        </motion.p>
        <motion.div
          className="md:sticky bottom-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-dark py-4 px-8 text-lg rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Start your project now"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}