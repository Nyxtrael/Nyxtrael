'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Palette, Globe, Sparkles, Send, Star } from 'lucide-react';
import Link from 'next/link';

const portfolioItems = [
  { id: 1, category: 'branding', title: 'Minimalist Logo', image: '/agency/branding1.jpg', description: 'A clean logo design for a tech startup.' },
  { id: 2, category: 'branding', title: 'Organic Packaging', image: '/agency/branding2.jpg', description: 'Eco-friendly packaging with earthy tones.' },
  { id: 3, category: 'web', title: 'Bold Website', image: '/agency/web1.jpg', description: 'A vibrant website for a fashion brand.' },
  { id: 4, category: 'web', title: 'Modern UI', image: '/agency/web2.jpg', description: 'Sleek and modern UI for a SaaS product.' },
  { id: 5, category: 'campaign', title: 'Retro Campaign', image: '/agency/campaign1.jpg', description: 'A nostalgic ad campaign with 80s vibes.' },
  { id: 6, category: 'campaign', title: 'Playful Poster', image: '/agency/campaign2.jpg', description: 'A fun poster for a children’s event.' },
];

const testimonials = [
  { name: 'Alex Carter', role: 'CEO, TechTrend', quote: 'Their branding gave our startup a fresh identity!' },
  { name: 'Maya Lopez', role: 'Founder, EcoGoods', quote: 'The website design was bold and exactly what we needed.' },
  { name: 'Sam Reed', role: 'Marketing Lead, FunEvents', quote: 'The campaign brought back so many memories—loved the retro style!' },
];

const AgencyPage = () => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="scroll-smooth">
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .hero-bg {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96c93d);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }
          .retro-bg {
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="2" fill="%23f4a261"/></svg>'), linear-gradient(to bottom, #e76f51, #f4a261);
            background-size: 20px 20px;
          }
          .organic-pattern {
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M25,30 Q35,40 45,30 T45,10 Q35,0 25,10 T5,30 Q15,40 25,30" fill="%23a7c957" opacity="0.2"/></svg>'), #f1f1f1;
            background-size: 50px 50px;
          }
          .portfolio-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            <span className="block text-yellow-300">SparkVibe Agency</span>
            Branding & Web Design
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            We craft unique, eye-catching designs that bring your vision to life.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-100 transition"
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Branding Section - Minimalist Style */}
      <section className="py-20 px-4 bg-white text-gray-800">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                <Palette className="text-teal-500" /> Branding Solutions
              </h2>
              <p className="text-lg leading-relaxed">
                Clean, minimalist branding that speaks volumes. From logos to packaging, we create timeless designs that resonate with your audience.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/agency/branding-sample.jpg" alt="Branding Sample" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Web Design Section - Bold Style */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                <Globe className="text-yellow-300" /> Web Design
              </h2>
              <p className="text-lg leading-relaxed">
                Bold, vibrant websites that capture attention. We build responsive, user-friendly sites with a flair for creativity.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/agency/web-sample.jpg" alt="Web Design Sample" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Campaigns Section - Retro Style */}
      <section className="py-20 px-4 retro-bg text-white">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-pink-300" /> Creative Campaigns
              </h2>
              <p className="text-lg leading-relaxed">
                Retro-inspired campaigns with a modern twist. From posters to digital ads, we bring nostalgia and innovation together.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/agency/campaign-sample.jpg" alt="Campaign Sample" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 organic-pattern text-gray-800">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Our Portfolio</h2>
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'branding', 'web', 'campaign'].map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-semibold capitalize transition ${
                  filter === category ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="portfolio-card bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-100 text-gray-800">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-teal-500 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-2">
            <Send className="text-yellow-300" /> Let’s Create Together
          </h2>
          <p className="text-lg mb-8">
            Ready to bring your ideas to life? Reach out and let’s craft something extraordinary.
          </p>
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full max-w-md p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-md p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          <textarea
              placeholder="Your Message"
              className="w-full max-w-md p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              rows={4}
            ></textarea>
            <button className="px-6 py-3 bg-yellow-300 text-teal-600 font-semibold rounded-full hover:bg-yellow-400 transition">
              Send Message
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AgencyPage;