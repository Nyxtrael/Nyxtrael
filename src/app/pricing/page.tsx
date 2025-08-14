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
    background: linear-gradient(to bottom, var(--color-bg) 0%, var(--color-card) 50%, var(--color-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(var(--accent-rgb), 0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(var(--accent-rgb), 0.08) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .form-input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 0;
    background-color: rgb(var(--card-rgb) / 1);
    color: var(--color-text);
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
  }
  .form-input:focus {
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.9), 0 0 0 4px rgb(var(--bg-rgb));
  }
  .form-checkbox {
    accent-color: rgb(var(--accent-rgb));
  }
  @media (max-width: 768px) {
    .swiper-slide { width: 100% !important; }
  }
  .pricing-card {
    padding: 1rem;
    background: rgb(var(--card-rgb) / 1);
    border-radius: 1rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08),  0 8px 24px rgba(0,0,0,0.25);
  }
  .pricing-card:hover {
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.16),  0 12px 32px rgba(0,0,0,0.35);
    transform: translateY(-2px);
  }
  .pricing-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
  }
  .pricing-card .price {
    font-size: 2rem;
    font-weight: 800;
    color: rgb(var(--accent-rgb));
    margin: 1rem 0;
  }
  .pricing-card .description {
    color: var(--color-muted);
    margin-bottom: 1rem;
  }
  .pricing-card .details {
    color: var(--color-text);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    opacity: 0.9;
  }
  .pricing-card ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }
  .pricing-card ul li {
    display: flex;
    align-items: center;
    color: var(--color-text);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .pricing-card ul li span { margin-right: 0.5rem; }
  .pricing-card .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-image: linear-gradient(135deg, var(--color-accent), var(--color-accent-hover));
    color: #0a0f14;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    font-weight: 700;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 8px 24px rgba(var(--accent-rgb), 0.25);
  }
  .pricing-card .cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 28px rgba(var(--accent-rgb), 0.35);
  }
  .pricing-card .popular {
    position: absolute;
    top: 0;
    right: 0;
    background: rgb(var(--accent-rgb));
    color: #0a0f14;
    padding: 0.25rem 0.75rem;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: 0.75rem;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }
  .pricing-compare {
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
  }
  .pricing-compare th, .pricing-compare td {
    padding: 0.85rem 1rem;
  }
  .pricing-compare thead th {
    background: rgb(var(--accent-rgb));
    color: #0a0f14;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .pricing-compare tbody tr + tr td {
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
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
    href: '/example-work/shoptrend',
  },
  {
    title: 'DataSync – SaaS Analytics Dashboard',
    description: 'An intuitive analytics dashboard for real-time insights.',
    thumbnail: '/images/portfolio/datasync-cover.jpg',
    href: '/example-work/datasync',
  },
  {
    title: 'Health & Wellness – Diet Plans',
    description: 'A dynamic one-pager promoting health courses and tips.',
    thumbnail: '/images/portfolio/health-wellness-cover.jpg',
    href: '/example-work/health-wellness',
  },
];

const plans = [
  {
    name: 'Starter Landing Page',
    price: '€99',
    description: 'Modern, responsive one-page website for your brand or personal use. Includes basic SEO, clean design.',
    duration: '● 7 days ○ 3 days (+€20)',
    pages: '1',
    support: 'N/A',
    features: [
      { name: 'Functional website', value: true, tooltip: 'Fully operational site' },
      { name: 'Content upload', value: true, tooltip: 'Initial content integration' },
      { name: 'E-commerce functionality', value: false, tooltip: 'E-commerce features' },
      { name: 'Payment integration', value: false, tooltip: 'Payment gateway setup' },
      { name: 'Speed optimization', value: true, tooltip: 'Performance enhancements' },
      { name: 'Hosting setup', value: true, tooltip: 'Basic hosting configuration' },
      { name: 'Social media icons', value: true, tooltip: 'Social media links' },
      { name: 'Plugins/extensions', value: false, tooltip: 'Additional plugins' },
      { name: 'Revisions', value: 2, tooltip: 'Number of design iterations' },
    ],
    cta: 'Send a message',
    link: '/contact?plan=Starter',
  },
  {
    name: 'Business Website',
    price: '€199',
    description: 'Professional multi-page website with full SEO and contact form. Perfect for freelancers and startups.',
    duration: '● 14 days ○ 7 days (+€20)',
    pages: '6',
    support: '1 month',
    features: [
      { name: 'Functional website', value: true, tooltip: 'Fully operational site' },
      { name: 'Content upload', value: true, tooltip: 'Initial content integration' },
      { name: 'E-commerce functionality', value: false, tooltip: 'E-commerce features' },
      { name: 'Payment integration', value: false, tooltip: 'Payment gateway setup' },
      { name: 'Speed optimization', value: true, tooltip: 'Performance enhancements' },
      { name: 'Hosting setup', value: true, tooltip: 'Basic hosting configuration' },
      { name: 'Social media icons', value: true, tooltip: 'Social media links' },
      { name: 'Plugins/extensions', value: 2, tooltip: 'Number of plugins' },
      { name: 'Revisions', value: 5, tooltip: 'Number of design iterations' },
    ],
    cta: 'Send a message',
    link: '/contact?plan=Business',
    isPopular: true,
  },
  {
    name: 'Custom Website',
    price: '€349',
    description: 'Complete website with CMS integration, Stripe payment setup, advanced SEO and all necessary features.',
    duration: '● 30 days ○ 14 days (+€20)',
    pages: '10',
    support: '3 months',
    features: [
      { name: 'Functional website', value: true, tooltip: 'Fully operational site' },
      { name: 'Content upload', value: true, tooltip: 'Initial content integration' },
      { name: 'E-commerce functionality', value: true, tooltip: 'E-commerce features' },
      { name: 'Payment integration', value: true, tooltip: 'Payment gateway setup' },
      { name: 'Speed optimization', value: true, tooltip: 'Performance enhancements' },
      { name: 'Hosting setup', value: true, tooltip: 'Basic hosting configuration' },
      { name: 'Social media icons', value: true, tooltip: 'Social media links' },
      { name: 'Plugins/extensions', value: 3, tooltip: 'Number of plugins' },
      { name: 'Revisions', value: 'Unlimited', tooltip: 'Unlimited design iterations' },
    ],
    cta: 'Send a message',
    link: '/contact?plan=Custom',
  },
];

const faqs = [
  { question: 'What payment methods do you accept?', answer: 'I accept credit cards, PayPal, and bank transfers via Stripe.', category: 'Payments' },
  { question: 'Can I upgrade my plan later?', answer: 'Yes, you can upgrade your plan at any time. Contact me to adjust your plan.', category: 'Upgrades' },
  { question: 'What does “unlimited revisions” mean?', answer: 'Unlimited revisions in the Custom Website plan mean you can request as many changes as needed during the project timeline.', category: 'Support' },
  { question: 'How long does it take to complete a project?', answer: 'Project timelines vary: Starter (7 days), Business (14 days), and Custom (30 days), with optional fast delivery (+€20).', category: 'Support' },
  { question: 'Do you offer refunds?', answer: 'If you’re not satisfied within 14 days, I offer a full refund of the initial deposit.', category: 'Payments' },
  { question: 'Is a deposit required?', answer: 'Yes, a 30% deposit is required upfront, with the balance due upon project completion.', category: 'Payments' },
];

export default function PricingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [faqFilter, setFaqFilter] = useState('All');
  const [customPlan, setCustomPlan] = useState({
    pages: 3,
    revisions: 2,
    seo: false,
    contactForm: false,
    cms: false,
    eCommerce: false,
    paymentIntegration: false,
  });
  const router = useRouter();

  const calculateCustomPrice = () => {
    let price = 99; // Base price for Starter
    if (customPlan.pages > 1 && customPlan.pages <= 6) price += (customPlan.pages - 1) * 33; // ~€33 per page after 1
    if (customPlan.pages > 6) price += 165 + (customPlan.pages - 6) * 33; // ~€33 per page after 6, up to 10
    price += Math.max(0, customPlan.revisions - 2) * 25; // +€25 per revision after 2
    if (customPlan.seo) price += 100; // Full SEO
    if (customPlan.contactForm) price += 50; // Contact form
    if (customPlan.cms) price += 150; // CMS integration
    if (customPlan.eCommerce) price += 100; // E-commerce functionality
    if (customPlan.paymentIntegration) price += 100; // Payment integration
    return Math.min(Math.round(price), 349); // Cap at Custom price
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
      eCommerce: customPlan.eCommerce.toString(),
      paymentIntegration: customPlan.paymentIntegration.toString(),
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
          <div className="absolute inset-0 bg-neutral-bg/85 backdrop-blur-sm" />
        </div>
        <motion.div
          className="relative z-10 container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-4 drop-shadow-lg">
            Pricing — Transparent & Consistent
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </h1>
          <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose a transparent, flexible plan tailored to your needs—no hidden costs. Get a custom quote after a free consultation.
            <br />
            <Link href="#custom-plan" className="underline text-accent hover:opacity-90">Build your own plan</Link>
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
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
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
                        <span className={feature.value ? 'text-accent' : 'text-text-muted'} aria-label={feature.tooltip}>
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
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </motion.h2>
          <Swiper spaceBetween={20} slidesPerView={1} loop={true} breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
            {exampleWorkProjects.map((project, idx) => (
              <SwiperSlide key={project.title}>
                <motion.div
                  className="relative bg-neutral-mid rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5"
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
                      className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-900 py-2 px-5 rounded-lg font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all duration-300"
                      aria-label={`View ${project.title}`}
                    >
                      View Project
                      <ArrowRight className="h-4 w-4" />
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
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </motion.h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="pricing-compare w-full text-text-base border-collapse">
              <thead>
                <tr className="bg-accent text-neutral-900 sticky top-0 shadow-md">
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
                            className={plan.features[index].value ? 'text-accent' : 'text-text-muted'}
                            aria-label={feature.tooltip}
                          >
                            {plan.features[index].value ? (
                              <Check className="w-6 h-6 mx-auto text-accent hover:opacity-90 transition-colors" />
                            ) : (
                              <X className="w-6 h-6 mx-auto text-text-muted hover:opacity-90 transition-colors" />
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
                            <span className={feature.value ? 'text-accent' : 'text-text-muted'} aria-label={feature.tooltip}>
                              {feature.value ? (
                                <Check className="w-6 h-6 mr-3 text-accent hover:opacity-90 transition-colors" />
                              ) : (
                                <X className="w-6 h-6 mr-3 text-text-muted hover:opacity-90 transition-colors" />
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
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
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
                <label className="block text-text-base font-medium mb-2">Number of Pages (Base: €99 for 1)</label>
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
                <label className="block text-text-base font-medium mb-2">Number of Revisions (Base: 2, +€25 each)</label>
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
                <label htmlFor="seo" className="text-text-base">Add Full SEO (+€100)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="contactForm"
                  checked={customPlan.contactForm}
                  onChange={(e) => setCustomPlan({ ...customPlan, contactForm: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="contactForm" className="text-text-base">Add Contact Form (+€50)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="eCommerce"
                  checked={customPlan.eCommerce}
                  onChange={(e) => setCustomPlan({ ...customPlan, eCommerce: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="eCommerce" className="text-text-base">Add E-commerce (+€100)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="paymentIntegration"
                  checked={customPlan.paymentIntegration}
                  onChange={(e) => setCustomPlan({ ...customPlan, paymentIntegration: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="paymentIntegration" className="text-text-base">Add Payment Integration (+€100)</label>
              </div>
              <div className="text-center">
                <p className="price mb-4">Estimated Price: €{calculateCustomPrice()}</p>
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
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Clock className="w-12 h-12 text-accent mb-4 hover:opacity-90 transition-colors" />
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
              <Code className="w-12 h-12 text-accent mb-4 hover:opacity-90 transition-colors" />
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
              <Headphones className="w-12 h-12 text-accent mb-4 hover:opacity-90 transition-colors" />
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
            <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
          </motion.h2>
          <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-4">
            {['All', 'Payments', 'Support', 'Upgrades'].map((category) => (
              <button
                key={category}
                onClick={() => setFaqFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  faqFilter === category
                    ? 'bg-accent text-neutral-900'
                    : 'bg-neutral-mid text-text-base hover:bg-accent hover:text-neutral-900'
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
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-expanded={faqOpen === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-accent mr-3 hover:opacity-90 transition-colors" />
                    <span className="text-lg font-semibold text-text-base">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transform transition-transform hover:opacity-90 ${
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
          <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Prefer writing? Send me a short message about your project and I'll reply within 24 hours with next steps and pricing.
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
            className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-900 py-4 px-8 text-lg rounded-lg font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Start your project now"
          >
            Send a message
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}