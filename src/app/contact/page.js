'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Email is invalid.';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white px-6 py-24 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('/textures/stardust.png')] opacity-10 animate-pulse" />

      <section className="max-w-4xl mx-auto text-center relative z-10 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-2">
          ✉️ Contact
        </h1>
        <p className="text-lg italic text-purple-300 mb-2">Interested in a collaboration or commission? Let&apos;s connect.</p>
        <p className="text-sm text-neutral-400 mb-12">Use the form below. I’ll respond within 24 hours.</p>
        <div className="w-12 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-pink-500 mx-auto rounded-full mb-8" />
      </section>

      <section className="max-w-2xl mx-auto bg-[#1f132d] p-8 rounded-xl shadow-lg relative z-10">
        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle className="w-5 h-5" /> Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name or studio name"
                className={`w-full p-3 rounded-md bg-[#2a1b3d] text-white ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-purple-500'}`}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your contact email address"
                className={`w-full p-3 rounded-md bg-[#2a1b3d] text-white ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-purple-500'}`}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm mb-1">Service</label>
              <select
                id="service"
                name="service"
                className="w-full p-3 rounded-md bg-[#2a1b3d] text-white focus:ring-2 focus:ring-purple-500"
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="illustration">Illustration</option>
                <option value="web">Web Design</option>
                <option value="video">Video Editing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Describe what you need. The more detail, the better."
                className={`w-full p-3 rounded-md bg-[#2a1b3d] text-white resize-y min-h-[140px] ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-purple-500'}`}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              />
              {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="sparkle-button w-full px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-sm font-semibold shadow-md hover:shadow-pink-500/30 transition relative overflow-hidden"
            >
              📨 Send Message
            </button>
          </form>
        )}
      </section>

      <style jsx>{`
        .fade-in {
          animation: fadeInUp 1.2s ease forwards;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .sparkle-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-30deg);
          animation: sparkleTrail 2s infinite;
        }
        @keyframes sparkleTrail {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </main>
  );
}
