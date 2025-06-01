'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ShoppingBagIcon, ClockIcon } from '@heroicons/react/24/outline';

// Niestandardowe style CSS dla efektów tła, separatorów i animacji
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-in-out;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #ffffff 0%, #1f2937 50%, #ffffff 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
`;

export default function ShopTrendCaseStudy() {
  return (
    <div className="bg-[#ffffff]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          aria-hidden="true"
        >
          <source src="/videos/shopping.webm" type="video/webm" />
          <source src="/videos/shopping.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1f2937]/40" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-serif mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Reimagining Online Fashion – ShopTrend
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-[#bfdbfe]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Modern UX for higher conversion: how a redesign boosted sales
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#before-after"
              className="inline-block bg-[#ec4899] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#f472b6] transition-colors"
            >
              See the Difference
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Project Background */}
      <section className="py-16 px-4 md:px-8 bg-[#f9fafb]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Project Background
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-[#374151] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The old version of ShopTrend was outdated, leading to high cart abandonment rates and poor mobile usability. Key issues included:
        </motion.p>
        <motion.ul
          className="list-disc list-inside max-w-3xl mx-auto text-[#374151]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <li>High bounce rate on mobile devices</li>
          <li>Unintuitive category navigation</li>
          <li>Low click-through rate on recommended products</li>
        </motion.ul>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Solution Highlights */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Solution Highlights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <DevicePhoneMobileIcon className="h-12 w-12 text-[#ec4899]" />, title: "Mobile-first navigation menu", description: "Improved accessibility and ease of use on mobile devices." },
            { icon: <ShoppingBagIcon className="h-12 w-12 text-[#ec4899]" />, title: "Refreshed product card with clear 'Add to Cart' CTA", description: "Increased user engagement and conversions." },
            { icon: <ClockIcon className="h-12 w-12 text-[#ec4899]" />, title: "Faster checkout process (1 page instead of 3)", description: "Reduced cart abandonment rates." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">{item.title}</h3>
              <p className="text-[#374151]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Before & After */}
      <section id="before-after" className="py-16 px-4 md:px-8 bg-[#f9fafb]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Before & After
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/old-design.jpg"
              alt="Old Design"
              width={500}
              height={300}
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
            <p className="mt-2 text-center text-[#374151]">Old design</p>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/new-design.jpg"
              alt="New Design"
              width={500}
              height={300}
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
            <p className="mt-2 text-center text-[#374151]">New design</p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Process */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Process
        </motion.h2>
        <div className="space-y-8 max-w-3xl mx-auto text-[#374151]">
          {[
            { title: "Analytics Research", description: "Identified key areas where users were dropping off." },
            { title: "Design System Creation", description: "Developed a cohesive design system for the brand." },
            { title: "Usability Testing", description: "Tested the new layout with real users to ensure intuitiveness." },
            { title: "Implementation", description: "Built with Next.js and integrated seamlessly with the backend." },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Results */}
      <section className="py-16 px-4 md:px-8 bg-[#f9fafb]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Results
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {[
            { number: "+15%", description: "increase in conversion rate" },
            { number: "2x", description: "longer average session time" },
            { number: "-30%", description: "drop in cart abandonment" },
          ].map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-4xl font-bold text-[#ec4899]">{result.number}</p>
              <p className="mt-2 text-[#374151]">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Gallery */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { src: "/images/homepage.jpg", alt: "Homepage" },
            { src: "/images/product-list.jpg", alt: "Product List" },
            { src: "/images/product-view.jpg", alt: "Product View" },
            { src: "/images/mobile-menu.jpg", alt: "Mobile Menu" },
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
              <p className="mt-2 text-center text-[#374151]">{image.alt}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937] text-center">
        <motion.h2
          className="text-3xl font-serif mb-4 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to revamp your online store?
        </motion.h2>
        <motion.p
          className="mb-8 text-[#bfdbfe]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let’s create a shopping experience that sells.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#ec4899] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#f472b6] transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
}