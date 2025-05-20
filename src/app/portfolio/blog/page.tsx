'use client';

import { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Search, Tag, Clock, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Ensure images exist in /public/images/blog/ directory
const blogPosts = [
  { id: 1, title: 'The Future of Web Design', category: 'Tech', date: 'May 10, 2025', views: 1200, excerpt: 'Exploring the latest trends shaping the digital landscape.', image: '/images/blog/post1.png' },
  { id: 2, title: 'Holographic UI Trends', category: 'Design', date: 'May 8, 2025', views: 950, excerpt: 'How holographic interfaces are revolutionizing user experience.', image: '/images/blog/post2.png' },
  { id: 3, title: 'AI in Creative Branding', category: 'Branding', date: 'May 6, 2025', views: 800, excerpt: 'Leveraging AI to enhance branding strategies.', image: '/images/blog/post3.png' },
  { id: 4, title: '3D Animation Techniques', category: 'Tech', date: 'May 4, 2025', views: 650, excerpt: 'Mastering 3D animations for modern websites.', image: '/images/blog/post4.png' },
];

const BlogPage = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * 360,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white font-sans relative overflow-hidden">
      <style>
        {`
          @keyframes orbit {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .particle {
            position: absolute;
            background: radial-gradient(circle, rgba(255, 105, 180, 0.8), rgba(255, 215, 0, 0.6));
            border-radius: 50%;
            animation: orbit 25s linear infinite;
            box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
          }
          .card-hover {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }
          .card-hover:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 20px 40px rgba(255, 105, 180, 0.4), 0 0 15px rgba(255, 215, 0, 0.3);
          }
          .accent-gradient {
            background: linear-gradient(135deg, #FF69B4, #FFD700, #00CED1);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .glass-card {
            background: rgba(30, 30, 40, 0.9);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 105, 180, 0.2);
            border-radius: 1.5rem;
          }
        `}
      </style>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${25 + particle.speed * 100}s`,
          }}
          animate={{
            rotate: 360,
            transition: { duration: 25 + particle.speed * 100, repeat: Infinity, ease: 'linear' },
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-bold accent-gradient leading-tight"
          style={{ textShadow: '0 0 20px rgba(255, 105, 180, 0.7)' }}
        >
          Cosmic Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto"
        >
          Dive into a galaxy of design, technology, and creative innovation.
        </motion.p>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-1/5 sticky top-16 h-fit glass-card p-8 rounded-xl shadow-2xl">
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the cosmos..."
                className="w-full p-4 bg-gray-900/70 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400 font-medium"
                disabled
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-pink-400 border-b border-pink-500/30 pb-2">
            Categories
          </h3>
          {['All', 'Tech', 'Design', 'Branding'].map((category) => (
            <button
              key={category}
              className="block w-full text-left p-3 mb-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors disabled:opacity-70"
              disabled
            >
              {category}
            </button>
          ))}
        </aside>

        {/* Post Grid */}
        <main className="lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="card-hover glass-card p-6 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative w-full h-64 mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/fallback.png'; // Fallback image if the original fails to load
                  }}
                />
              </div>
              <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 text-sm font-medium rounded-full mb-3">
                {post.category}
              </span>
              <h2 className="text-2xl font-bold text-teal-300 mb-3 leading-snug">{post.title}</h2>
              <p className="text-gray-400 text-base mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {post.date}</span>
                <span className="flex items-center"><Eye className="w-4 h-4 mr-1.5" /> {post.views}</span>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="mt-5 inline-block text-teal-400 hover:text-teal-300 font-semibold underline decoration-2 decoration-teal-400/50 transition-colors"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center bg-gray-900/80 backdrop-blur-md mt-16">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} CosmicVibe Studio |{' '}
          <Link href="/contact" className="text-pink-400 hover:text-pink-300 font-medium">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;