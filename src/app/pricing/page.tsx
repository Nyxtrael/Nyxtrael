'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check, ChevronDown, Clock, Code, Headphones, HelpCircle, X, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

// Custom CSS for animations and styles
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes slide-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes fade-in-fast {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes scale-in {
    0% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  .animate-slide-up {
    animation: slide-up 1s ease-in-out;
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
  .animate-fade-in-fast {
    animation: fade-in-fast 0.5s ease-in-out;
  }
  .animate-scale-in {
    animation: scale-in 0.3s ease-in-out;
  }
  .hero-bg {
    background: linear-gradient(135deg, #0d1117 0%, #1f2937 100%);
    position: relative;
    overflow: hidden;
  }
  .hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 20%, rgba(20, 184, 166, 0.3) 0%, transparent 70%);
    animation: pulse-slow 10s ease-in-out infinite;
  }
  .hero-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 80%, rgba(253, 230, 138, 0.2) 0%, transparent 70%);
    animation: pulse-slow 12s ease-in-out infinite;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(20, 184, 166, 0.3);
  }
  .gradient-separator {
    height: 2px;
    background: linear-gradient(to right, #14b8a6, #fde68a);
  }
  .form-input {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid #14b8a6;
    background-color: #0d1117;
    color: #e5e7eb;
  }
  .form-input:focus {
    outline: none;
    box-shadow: 0 0 0 2px #14b8a6;
  }
  .form-checkbox {
    accent-color: #14b8a6;
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 100% !important;
    }
  }
  .pricing-card {
    padding: 1rem;
    background: #1f2937;
    border: 1px solid #14b8a6/30;
    border-radius: 0.5rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }
  .pricing-card:hover {
    border-color: #fde68a/50;
    box-shadow: 0 0 10px #14b8a6/50;
    transform: scale(1.02); /* Smooth scale effect without opacity change */
  }
  .pricing-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #e5e7eb;
  }
  .pricing-card .price {
    font-size: 2rem;
    font-weight: bold;
    color: #14b8a6;
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
    background: #14b8a6;
    color: #0d1117;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .pricing-card .cta:hover {
    background: #fde68a;
    box-shadow: 0 0 10px #14b8a6/50;
  }
  .pricing-card .popular {
    position: absolute;
    top: 0;
    right: 0;
    background: #14b8a6;
    color: #0d1117;
    padding: 0.25rem 0.75rem;
    border-bottom-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

// Define the ExampleWork type
interface ExampleWork {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
}

// Define the example work projects data
const exampleWorkProjects: ExampleWork[] = [
  {
    title: 'ShopTrend – E-commerce Redesign',
    description: 'A modern e-commerce store with enhanced UX and vibrant design.',
    thumbnail: '/images/shoptrend.jpg',
    href: '/example-work/shop',
  },
  {
    title: 'DataSync – SaaS Analytics Dashboard',
    description: 'An intuitive analytics dashboard for real-time insights.',
    thumbnail: '/images/datasync.jpg',
    href: '/example-work/data',
  },
  {
    title: 'Health & Wellness – Diet & Exercise Plans',
    description: 'A dynamic one-pager promoting health courses and tips.',
    thumbnail: '/images/health-wellness.jpg',
    href: '/example-work/health',
  },
];

export default function PricingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [faqFilter, setFaqFilter] = useState('All');
  const [customPlan, setCustomPlan] = useState({
    pages: 5, // Set to 5 as per screenshot
    revisions: 0,
    seo: false,
    contactForm: false,
    cms: false,
  });
  const router = useRouter();

  const plans = [
    {
      name: 'Basic',
      price: '$199 / ~€179',
      description: '1–3 pages, no CMS, 1 contact form',
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
      link: '/contact',
    },
    {
      name: 'Standard',
      price: '$399 / ~€359',
      description: '3–6 pages, contact form, CMS, SEO',
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
      link: '/contact',
      isPopular: true,
    },
    {
      name: 'Premium',
      price: '$599–$699 / ~€549–€649',
      description: '7–10 pages, CMS, Stripe, advanced features',
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
      link: '/contact',
    },
  ];

  const faqs = [
    { question: 'What payment methods do you accept?', answer: 'We accept credit cards, PayPal, and bank transfers via Stripe.', category: 'Payments' },
    { question: 'Can I upgrade my plan later?', answer: 'Yes, you can upgrade your plan at any time. Contact us to adjust your plan.', category: 'Upgrades' },
    { question: 'What does “unlimited revisions” mean?', answer: 'Unlimited revisions in the Premium plan mean you can request as many changes as needed during the project timeline.', category: 'Support' },
    { question: 'How long does it take to complete a project?', answer: 'Project timelines vary: Basic (1-2 weeks), Standard (2-4 weeks), and Premium (4-6 weeks).', category: 'Support' },
  ];

  const calculateCustomPrice = () => {
    let price = 199; // Base price for 1-3 pages (Basic)
    // Add $50 per page from 4-6 to reach $399 (Standard), then $50 per page from 7-10 to $699 (Premium)
    if (customPlan.pages > 3 && customPlan.pages <= 6) price += (customPlan.pages - 3) * 50; // $50 per page from 4-6
    if (customPlan.pages > 6) price += 150 + (customPlan.pages - 6) * 50; // $150 for 6 pages, +$50 per page up to 10
    // Revisions start at 2 (included in base), add $25 per additional revision
    price += Math.max(0, customPlan.revisions - 2) * 25;
    // Add-ons
    if (customPlan.seo) price += 100; // Full SEO
    if (customPlan.contactForm) price += 50; // Contact form
    if (customPlan.cms) price += 150; // CMS/Stripe
    // Cap the price at $699 (Premium max)
    return Math.min(Math.round(price), 699);
  };

  const toggleFaq = (index: number | null) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const filteredFaqs = faqFilter === 'All' ? faqs : faqs.filter((faq) => faq.category === faqFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

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
    <div className="min-h-screen bg-[#0d1117]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="hero-bg relative grain-overlay py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0d1117]/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] mb-4 animate-fade-in">
            Flexible Plans for Projects Big or Small
          </h1>
          <p className="text-lg text-[#9ca3af] mb-12 max-w-3xl mx-auto font-inter animate-fade-in" style={{ animationDelay: '0.2s' }}>
            High-quality design and development tailored to your needs, delivered with precision and care.
            <br />
            <span className="text-[#14b8a6]"><a href="#custom-plan" className="underline">Build your own</a></span>
          </p>
          <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Pricing Cards */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="pricing-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.name === 'Standard' && (
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
                    <li key={feature.name} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      {typeof feature.value === 'boolean' ? (
                        <span className={feature.value ? 'text-[#14b8a6]' : 'text-[#6b7280]'} aria-label={feature.tooltip}>
                          {feature.value ? <Check className="mr-3" /> : <X className="mr-3" />}
                        </span>
                      ) : (
                        <span className="text-[#14b8a6]">{feature.value}</span>
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
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Example Realizations */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-[#e5e7eb] mb-8 text-center animate-fade-in">
            See What We’ve Built
          </h2>
          <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
          <Swiper spaceBetween={20} slidesPerView={1} loop={true} breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
            {exampleWorkProjects.map((project, idx) => (
              <SwiperSlide key={project.title}>
                <div className="relative bg-[#1f2937] rounded-xl overflow-hidden border border-[#14b8a6]/30 hover:border-[#fde68a]/50 hover:shadow-[#14b8a6]/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-70"></div>
                  <div className="relative p-6">
                    <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{project.title}</h3>
                    <p className="text-[#9ca3af] mb-4 font-inter">{project.description}</p>
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 bg-[#14b8a6] text-[#0d1117] py-2 px-5 rounded-lg font-inter font-semibold hover:bg-[#fde68a] hover:shadow-[#14b8a6]/50 transition-all duration-300"
                      aria-label={`View ${project.title}`}
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Comparison Table (Desktop) / Carousel (Mobile) */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-[#e5e7eb] mb-8 text-center animate-fade-in">
            Compare Plans
          </h2>
          <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-[#e5e7eb] border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#14b8a6] to-[#fde68a] text-[#0d1117] sticky top-0 shadow-md">
                  <th className="p-4 text-left text-sm font-semibold font-inter">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`p-4 text-center text-sm font-semibold font-inter ${plan.isPopular ? 'bg-[#14b8a6]/20' : ''}`}
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
                    className={index % 2 === 0 ? 'bg-[#1f2937]/50' : 'bg-[#0d1117] hover:bg-[#14b8a6]/10'}
                  >
                    <td className="p-4 text-sm font-inter" title={feature.tooltip}>
                      {feature.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="p-4 text-center text-sm font-inter">
                        {typeof plan.features[index].value === 'boolean' ? (
                          <span
                            className={plan.features[index].value ? 'text-[#14b8a6]' : 'text-[#6b7280]'}
                            aria-label={feature.tooltip}
                          >
                            {plan.features[index].value ? (
                              <Check className="w-6 h-6 mx-auto text-[#14b8a6] hover:text-[#fde68a] transition-colors" />
                            ) : (
                              <X className="w-6 h-6 mx-auto text-[#6b7280] hover:text-[#fde68a] transition-colors" />
                            )}
                          </span>
                        ) : (
                          <span className="text-[#14b8a6]">{plan.features[index].value}</span>
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
                  <div className="p-6 bg-[#1f2937] rounded-xl shadow-md border border-[#14b8a6]/30 animate-fade-in">
                    <h3 className="text-2xl font-serif font-semibold text-[#e5e7eb] mb-4 text-center">{plan.name}</h3>
                    <p className="text-3xl font-bold text-[#14b8a6] mb-4 text-center">{plan.price}</p>
                    <p className="text-[#9ca3af] text-base mb-4 font-inter">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center text-[#e5e7eb] text-base font-inter">
                          {typeof feature.value === 'boolean' ? (
                            <span className={feature.value ? 'text-[#14b8a6]' : 'text-[#6b7280]'} aria-label={feature.tooltip}>
                              {feature.value ? (
                                <Check className="w-6 h-6 mr-3 text-[#14b8a6] hover:text-[#fde68a] transition-colors" />
                              ) : (
                                <X className="w-6 h-6 mr-3 text-[#6b7280] hover:text-[#fde68a] transition-colors" />
                              )}
                            </span>
                          ) : (
                            <span className="text-[#14b8a6]">{feature.value}</span>
                          )}
                          <span className="ml-3">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Custom Plan Calculator */}
      <section id="custom-plan" className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-[#e5e7eb] mb-8 text-center animate-fade-in">
            Build Your Custom Plan
          </h2>
          <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
          <div className="max-w-2xl mx-auto pricing-card animate-fade-in">
            <div className="space-y-6">
              <div>
                <label className="block text-[#e5e7eb] font-inter mb-2">Number of Pages (Base: $199 for 1-3)</label>
                <input
                  type="number"
                  min="1"
                  max="10" // Cap at Premium's max pages
                  value={customPlan.pages}
                  onChange={(e) => setCustomPlan({ ...customPlan, pages: parseInt(e.target.value) || 1 })}
                  className="form-input w-full"
                />
              </div>
              <div>
                <label className="block text-[#e5e7eb] font-inter mb-2">Number of Revisions (Base: 2, +$25 each)</label>
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
                <label htmlFor="seo" className="text-[#e5e7eb] font-inter">Add Full SEO (+$100)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="contactForm"
                  checked={customPlan.contactForm}
                  onChange={(e) => setCustomPlan({ ...customPlan, contactForm: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="contactForm" className="text-[#e5e7eb] font-inter">Add Contact Form (+$50)</label>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  id="cms"
                  checked={customPlan.cms}
                  onChange={(e) => setCustomPlan({ ...customPlan, cms: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="cms" className="text-[#e5e7eb] font-inter">Add CMS/Stripe (+$150)</label>
              </div>
              <div className="text-center">
                <p className="price mb-4">Estimated Price: ${calculateCustomPrice()}</p>
                <button
                  onClick={handleRequestCustomPlan}
                  className="cta"
                  aria-label="Request custom plan"
                >
                  Request Custom Plan
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Trust Badges */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-[#e5e7eb] mb-8 text-center animate-fade-in">
            Why Choose Us?
          </h2>
          <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center animate-fade-in">
              <Clock className="w-12 h-12 text-[#14b8a6] mb-4 hover:text-[#fde68a] transition-colors" />
              <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">
                Delivery Guarantee
              </h3>
              <p className="text-[#9ca3af] font-inter">100% on-time delivery or we fix it for free.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Code className="w-12 h-12 text-[#14b8a6] mb-4 hover:text-[#fde68a] transition-colors" />
              <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">
                Code Quality
              </h3>
              <p className="text-[#9ca3af] font-inter">Clean, maintainable code with best practices.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Headphones className="w-12 h-12 text-[#14b8a6] mb-4 hover:text-[#fde68a] transition-colors" />
              <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">
                Dedicated Support
              </h3>
              <p className="text-[#9ca3af] font-inter">Support tailored to your plan’s duration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* FAQ Section with Filters */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-[#e5e7eb] mb-8 text-center animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
          <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-4 animate-fade-in">
            {['All', 'Payments', 'Support', 'Upgrades'].map((category) => (
              <button
                key={category}
                onClick={() => setFaqFilter(category)}
                className={`px-4 py-2 rounded-lg font-inter text-sm ${
                  faqFilter === category
                    ? 'bg-[#14b8a6] text-[#0d1117]'
                    : 'bg-[#1f2937] text-[#e5e7eb] hover:bg-[#14b8a6]/20 hover:text-[#fde68a]'
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1f2937] rounded-xl shadow-md border border-[#14b8a6]/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                  aria-expanded={faqOpen === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-[#14b8a6] mr-3 hover:text-[#fde68a] transition-colors" />
                    <span className="text-lg font-serif font-semibold text-[#e5e7eb] font-inter">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#14b8a6] transform transition-transform hover:text-[#fde68a] ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="p-6 pt-0 text-[#9ca3af] font-inter animate-fade-in-fast"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Final CTA */}
      <section className="section bg-[#0d1117] text-center grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#e5e7eb] mb-4 animate-fade-in">
            Ready to Launch? Let’s Work Together
          </h2>
          <p className="text-lg text-[#9ca3af] mb-8 max-w-2xl mx-auto font-inter animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Start your project today and experience exceptional design and development.
          </p>
          <div className="md:sticky bottom-4 z-50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#14b8a6] text-[#0d1117] py-4 px-8 text-lg rounded-lg font-inter font-semibold hover:bg-[#fde68a] hover:shadow-[#14b8a6]/50 transition-all duration-300 animate-pulse-slow md:py-5 md:px-10"
              aria-label="Start your project now"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}