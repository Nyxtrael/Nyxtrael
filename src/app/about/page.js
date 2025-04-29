'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
  const [stars, setStars] = useState([]);
  const [currentProject, setCurrentProject] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  const projects = [
    {
      title: 'Anime Character – Sunroom Diaries, 2025',
      description: 'A serene anime character in a sunlit room, created for a client’s personal portfolio.',
      src: '/images/sunroom-diaries/cover.png',
      href: '/Portfolio/sunroom-diaries',
      alt: 'Anime Character – Sunroom Diaries cover',
    },
    {
      title: 'Gothic Figure – Red Requiem, 2025',
      description: 'A gothic figure in a dark, mystical setting, designed for a music project.',
      src: '/images/red-requiem/cover.png',
      href: '/Portfolio/red-requiem',
      alt: 'Gothic Figure – Red Requiem cover',
    },
  ];

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic client-side validation
    if (!name || !email || !message) {
      setFormError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError('');
    setFormSuccess('Message sent successfully! I’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1A1A2E,#2A2A3E)] overflow-hidden scroll-smooth">
      {/* Title fallback for SEO */}
      <div className="sr-only">
        <h1>About Nyxtrael – Designer Profile</h1>
        <p>Learn about Nyxtrael, a self-taught designer specializing in illustrations, web design, and video editing.</p>
      </div>

      {/* Gradient defs */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF69B4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        poster="/images/stars-fallback.jpg"
        aria-hidden="true"
      >
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            style={{ width: '8px', height: '8px', top: star.top, left: star.left }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      {/* Avatar */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <Image
            src="/images/persona.png"
            alt="Stylized illustration representing Nyxtrael"
            width={128}
            height={128}
            className="w-32 h-32 object-cover rounded-full border-4 border-pink-500 shadow-lg mb-6"
          />
        </motion.div>
        <h1 className="text-4xl font-bold mb-2">About Nyxtrael</h1>
        <p className="text-gray-300 text-lg leading-relaxed">Discover My Journey and Creative Process</p>
      </section>

      {/* Expanded Description */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-white text-lg leading-[1.6] mb-4">
          I’m <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nyxtrael</span>, a self-taught designer passionate about blending creativity with functionality in every project. My journey began five years ago when I picked up a digital pen to create my first anime illustration. What started as a hobby quickly turned into a full-time pursuit as I faced challenges like mastering complex design tools on my own and learning to balance artistic vision with client needs.
        </p>
        <p className="text-white text-lg leading-[1.6]">
          A pivotal moment came in 2023 when I landed my first major project—a website redesign for a local artist. The tight deadline and high expectations pushed me to refine my process, leading to the structured workflow I use today. Now, I specialize in illustrations, web design, and video editing, helping clients bring their ideas to life with a touch of magic.
        </p>
      </motion.section>

      {/* Services with Interactive Hover Effects */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-100 text-base">
          {[
            { title: 'Visual Artistry', description: 'Custom illustrations for personal and commercial use.', icon: '🎨' },
            { title: 'Digital Alchemy', description: 'Responsive SEO-optimized websites.', icon: '🖥️' },
            { title: 'Memory in Motion', description: 'Video edits for reels and promotional content.', icon: '🎬' },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 p-4 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Creative Process - Timeline Infographic */}
      <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-8">My Creative Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-500"></div>
          {[
            { step: 'Consultation', description: 'We discuss your needs and vision.', icon: '💬' },
            { step: 'Design', description: 'I create a draft and refine it.', icon: '✍️' },
            { step: 'Delivery', description: 'Final delivery, ready for launch.', icon: '🚀' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex items-center mb-12 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className={`w-1/2 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-lg font-semibold text-white">{item.step}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Me */}
      <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-4">Why Work With Me</h2>
        <ul className="text-gray-100 space-y-4 text-lg">
          {['Art meets functionality.', 'Listening to your vision.', 'No ghosting, only results.'].map((text, idx) => (
            <motion.li key={idx} whileHover={{ scale: 1.05 }} className="p-4 rounded-lg bg-white/5">
              <svg className="inline-block w-6 h-6 mr-2" viewBox="0 0 24 24" fill="url(#gradient)">
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Expanded Testimonials */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-100 text-base">
          {[
            {
              quote: "Nyxtrael created an amazing website for my photography portfolio! The design was intuitive, and she incorporated my feedback perfectly, delivering the project ahead of schedule.",
              author: "John, Photographer @LumenEye",
              logo: "/images/clients/lumeneye-logo.png",
            },
            {
              quote: "The illustrations for my game were beyond expectations. Nyxtrael captured the exact vibe I wanted and helped solve some design challenges I hadn’t even considered.",
              author: "Maria, Game Dev @PixelWitch",
              logo: "/images/clients/pixelwitch-logo.png",
            },
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="transition rounded p-6 bg-white/5">
              <Image
                src={item.logo}
                alt={`${item.author} logo`}
                width={50}
                height={50}
                className="w-12 h-12 object-contain mx-auto mb-4"
              />
              <p className="italic">“{item.quote}”</p>
              <span className="block text-sm text-neutral-400 mt-2">{item.author}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Notable Projects with Slider */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Notable Projects</h2>
        <div className="relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="group relative block overflow-hidden rounded-lg transition-transform hover:scale-105 mx-auto max-w-md"
          >
            <Image
              src={projects[currentProject].src}
              alt={projects[currentProject].alt}
              width={800}
              height={600}
              className="h-[300px] w-full object-cover transition duration-300 group-hover:brightness-110 rounded"
            />
            <div className="p-3 bg-gradient-to-t from-black/80 to-black/30 absolute bottom-0 w-full">
              <p className="text-sm text-white font-semibold">{projects[currentProject].title}</p>
              <p className="text-xs text-neutral-300 mt-1">{projects[currentProject].description}</p>
              <Link href={projects[currentProject].href} className="mt-2 text-xs text-pink-400 hover:text-pink-300 hover:translate-x-1 transition">
                View Details
              </Link>
            </div>
          </motion.div>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </motion.section>

      {/* Contact Section with Functional Form */}
      <section className="text-center max-w-xl mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleFormSubmit}
          className="bg-white/5 p-6 rounded-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 h-32"
              required
            />
            {formError && <p className="text-red-400 text-sm">{formError}</p>}
            {formSuccess && <p className="text-green-400 text-sm">{formSuccess}</p>}
            <button
              type="submit"
              className="w-full bg-pink-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 hover:animate-pulse text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Send Message
            </button>
          </div>
        </form>
        <Link
          href="/contact"
          className="mt-4 inline-block text-pink-400 font-semibold px-4 py-2 rounded-full border border-pink-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out z-10"
          aria-label="Contact Nyxtrael for a custom project"
        >
          Or Contact Me Directly →
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-neutral-400 pb-10">
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:nyxtrael@example.com"
            className="hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Email Nyxtrael"
          >
            <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/nyxtrael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Visit Nyxtrael on Instagram"
          >
            <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
          </a>
          <a
            href="https://x.com/nyxtrael"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Visit Nyxtrael on X"
          >
            <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}