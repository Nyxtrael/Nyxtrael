'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Clock, Check } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'Eco-Friendly Brand Launch',
    client: 'GreenLeaf Co.',
    date: 'March 2023',
    duration: '4 months',
    result: '200% growth in eco-conscious sales',
    image: '/case-studies/cs1.jpg',
    description: 'Developed a sustainable brand identity with organic packaging.',
  },
  {
    id: 2,
    title: 'Nature-Inspired Website',
    client: 'WildHaven',
    date: 'July 2024',
    duration: '3 months',
    result: '50% increase in user retention',
    image: '/case-studies/cs2.jpg',
    description: 'Created a serene website design reflecting natural beauty.',
  },
  {
    id: 3,
    title: 'Organic Campaign',
    client: 'EarthFest',
    date: 'February 2025',
    duration: '2 months',
    result: '150% attendance boost',
    image: '/case-studies/cs3.jpg',
    description: 'Designed a campaign promoting environmental awareness.',
  },
];

const timeline = [
  { step: 'Research', time: 'Week 1', content: 'Gathering client insights and nature inspiration.' },
  { step: 'Concept', time: 'Weeks 2-3', content: 'Sketching organic design ideas.' },
  { step: 'Execution', time: 'Weeks 4-8', content: 'Building and refining the project.' },
  { step: 'Launch', time: 'Week 9', content: 'Final delivery with a green touch.' },
];

const CaseStudiesPage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure leaf particles are only rendered on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream-100 text-forest-900 font-serif relative overflow-hidden">
      <style>
        {`
          @keyframes watercolor {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .watercolor-bg {
            background: linear-gradient(135deg, #d4a373, #a3bffa, #8bc34a);
            background-size: 200% 200%;
            animation: watercolor 15s ease infinite;
            opacity: 0.3;
          }
          .leaf-particle {
            position: absolute;
            background: rgba(139, 195, 74, 0.5);
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
            animation: drift 8s infinite;
          }
          @keyframes drift {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(45deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          .ripple-hover {
            transform-origin: center;
            transition: transform 0.5s ease;
          }
          .ripple-hover:hover {
            transform: scale(1.05) rotate(2deg);
          }
          .vine-line {
            position: absolute;
            height: 2px;
            background: linear-gradient(to right, transparent, #8bc34a, transparent);
            animation: grow 1.5s ease-out forwards;
          }
          @keyframes grow {
            from { width: 0; }
            to { width: 100%; }
          }
        `}
      </style>
      <div className="absolute inset-0 watercolor-bg pointer-events-none z-0" />
      {isClient && [...Array(15)].map((_, i) => (
        <div
          key={i}
          className="leaf-particle"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-forest-800"
        >
          Nature Crafted Cases
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-earth-600">
          Growing success through organic design solutions.
        </p>
      </header>

      {/* Case Studies Grid */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="bg-earth-50/80 rounded-lg overflow-hidden shadow-md ripple-hover"
              whileHover={{ scale: 1.05, rotate: 2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-forest-700 mb-2">{study.title}</h2>
                <p className="text-earth-600 text-sm mb-2">Client: {study.client}</p>
                <p className="text-moss-500 text-xs flex items-center"><Clock className="w-4 h-4 mr-1" /> {study.duration}</p>
                <Link href={`/case-studies/${study.id}`} className="mt-4 inline-block text-forest-600 hover:text-forest-500 underline">
                  Explore Case <ArrowRight className="inline ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-forest-800 mb-8">Growth Timeline</h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                className="flex-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative">
                  <div className="vine-line absolute left-1/2 transform -translate-x-1/2 top-0 h-2 w-full" />
                  <div className="bg-earth-50/80 p-4 rounded-lg shadow-md text-center">
                    <div className="w-6 h-6 bg-moss-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Check className="w-4 h-4 text-cream-100" />
                    </div>
                    <h3 className="text-lg font-semibold text-forest-700">{item.step}</h3>
                    <p className="text-earth-600 text-sm">{item.time}</p>
                    <p className="text-moss-500 mt-2">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center bg-earth-900/50">
        <p className="text-earth-400 text-sm">
          © {new Date().getFullYear()} SparkVibe Agency |{' '}
          <Link href="/contact" className="hover:text-forest-500">Connect With Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;