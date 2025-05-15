'use client';

import { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Search, Tag, Clock, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  { id: 1, title: 'The Future of Web Design', category: 'Tech', date: 'May 10, 2025', views: 1200, excerpt: 'Exploring the latest trends shaping the digital landscape.', image: '/blog/post1.jpg' },
  { id: 2, title: 'Holographic UI Trends', category: 'Design', date: 'May 8, 2025', views: 950, excerpt: 'How holographic interfaces are revolutionizing user experience.', image: '/blog/post2.jpg' },
  { id: 3, title: 'AI in Creative Branding', category: 'Branding', date: 'May 6, 2025', views: 800, excerpt: 'Leveraging AI to enhance branding strategies.', image: '/blog/post3.jpg' },
  { id: 4, title: '3D Animation Techniques', category: 'Tech', date: 'May 4, 2025', views: 650, excerpt: 'Mastering 3D animations for modern websites.', image: '/blog/post4.jpg' },
];

const BlogPage = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
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

    let result = blogPosts;
    if (filter !== 'all') {
      result = result.filter(post => post.category === filter);
    }
    if (search) {
      result = result.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredPosts(result);
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans relative overflow-hidden">
      <style>
        {`
          @keyframes orbit {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .particle {
            position: absolute;
            background: rgba(255, 105, 180, 0.6);
            border-radius: 50%;
            animation: orbit 20s linear infinite;
          }
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
          }
          .accent-gradient {
            background: linear-gradient(135deg, #FF69B4, #FFD700);
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
            animationDuration: `${20 + particle.speed * 100}s`,
          }}
          animate={{
            rotate: 360,
            transition: { duration: 20 + particle.speed * 100, repeat: Infinity, ease: 'linear' },
          }}
        />
      ))}

      {/* Header */}
      <header className="relative z-10 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400"
        >
          Cosmic Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 font-inter max-w-2xl mx-auto"
        >
          Explore the universe of design, tech, and creativity.
        </motion.p>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/4 sticky top-8 h-fit bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the cosmos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-pink-400">Categories</h3>
          {['all', 'Tech', 'Design', 'Branding'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`block w-full text-left p-2 mb-2 rounded-lg transition ${
                filter === category ? 'bg-pink-500 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </aside>

        {/* Post Grid */}
        <main className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              className="card-hover bg-gray-800/70 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-pink-300 mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> {post.views}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block text-pink-400 hover:text-pink-300 underline transition-colors"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center bg-gray-900/70 backdrop-blur-md mt-12">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} CosmicVibe Studio |{' '}
          <Link href="/contact" className="text-pink-400 hover:text-pink-300">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;