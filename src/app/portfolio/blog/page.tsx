'use client';

import { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Search, Tag, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  { id: 1, title: 'The Future of Web Design', category: 'Tech', date: 'May 10, 2025', views: 1200, excerpt: 'Exploring the latest trends shaping the digital landscape.', image: '/blog/post1.jpg' },
  { id: 2, title: 'Holographic UI Trends', category: 'Design', date: 'May 8, 2025', views: 950, excerpt: 'How holographic interfaces are revolutionizing user experience.', image: '/blog/post2.jpg' },
  { id: 3, title: 'AI in Creative Branding', category: 'Branding', date: 'May 6, 2025', views: 800, excerpt: 'Leveraging AI to enhance branding strategies.', image: '/blog/post3.jpg' },
  { id: 4, title: '3D Animation Techniques', category: 'Tech', date: 'May 4, 2025', views: 650, excerpt: 'Mastering 3D animations for modern websites.', image: '/blog/post4.jpg' },
];

const BlogPage = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
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
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-x-hidden">
      <style>
        {`
          @keyframes hologram {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .holo-bg {
            background: linear-gradient(45deg, #00d4ff, #ff00e6, #00ffcc);
            background-size: 200% 200%;
            animation: hologram 10s ease infinite;
          }
          .neon-text {
            text-shadow: 0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 20px #00d4ff;
          }
          .particle {
            position: absolute;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            animation: float 6s infinite;
          }
          @keyframes float {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.2); }
            100% { transform: translateY(0) scale(1); }
          }
        `}
      </style>
      <div className="absolute inset-0 holo-bg opacity-20 pointer-events-none z-0" />
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
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
          className="text-5xl md:text-7xl font-bold neon-text"
        >
          HoloBlog Hub
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Dive into the cutting-edge world of design and technology.
        </p>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 sticky top-8 h-fit bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4 neon-text">Categories</h3>
          {['all', 'Tech', 'Design', 'Branding'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`block w-full text-left p-2 mb-2 rounded-lg transition ${
                filter === category ? 'bg-teal-500 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </aside>

        {/* Post Grid */}
        <main className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              className="bg-gray-800/70 backdrop-blur-md rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05, rotate: 2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-teal-300 mb-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> {post.views}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="mt-4 inline-block text-teal-400 hover:text-teal-300 underline">
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center bg-gray-900/50 backdrop-blur-md mt-8">
        <p className="text-gray-400 neon-text text-sm">
          © {new Date().getFullYear()} SparkVibe Agency |{' '}
          <Link href="/contact" className="hover:text-teal-400">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default BlogPage;