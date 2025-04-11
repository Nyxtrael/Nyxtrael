'use client';

import Link from 'next/link';
import galleryData from '../src/data/galleryData'; 
import Image from 'next/image';
import { useState } from 'react';

export default function SeriesPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [error, setError] = useState('');

  const handleNotifySubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, series: 'dreamless-machines' }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        setError(message || 'Something went wrong');
        return;
      }

      setNotified(true);
      setEmail('');
      setTimeout(() => setNotified(false), 5000);
    } catch (error) {
      console.error('Notify error:', error);
      setError('Server error. Please try again later.');
    }
  };

  const allTags = [
    'All',
    ...Array.from(
      new Set(
        galleryData.flatMap(series => series.tags.map(tag => tag.label))
      )
    ),
  ];

  const filteredSeries = galleryData.filter(series =>
    activeTag === 'All' || series.tags.some(tag => tag.label === activeTag)
  );

  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">🖼 Gallery of Series</h1>
        <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-8">
          A curated collection of AI-generated series — each a world of its own.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-all border border-purple-500 hover:bg-purple-700/30 ${
                activeTag === tag ? 'bg-purple-600 text-white' : 'text-purple-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSeries.map(series => (
            <Link
              key={series.slug}
              href={`/series/${series.slug}`}
              className="bg-[#15111f] rounded-xl overflow-hidden shadow-lg hover:shadow-purple-700/20 transition-all transform hover:-translate-y-1 block"
            >
              <Image
                src={series.image}
                alt={series.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{series.title}</h2>
                <p className="text-sm text-neutral-400 mb-3">{series.description}</p>
                <div className="flex flex-wrap gap-1 text-xs text-purple-400 italic">
                  {(series.tags || []).map(tag => (
                    <span
                      key={tag.label}
                      title={tag.description}
                      className="hover:underline hover:text-purple-300 transition"
                    >
                      #{tag.label.replace(/[#]/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-2">🔮 What’s Next?</h3>
          <p className="text-neutral-400 italic">
            Upcoming: <strong>"Dreamless Machines"</strong> — chrome temples, synthetic memory,
            and silence between pulses.
          </p>

          <form
            onSubmit={handleNotifySubmit}
            className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-[#2d223e] text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              type="submit"
              disabled={notified}
              className={`px-4 py-2 rounded-full transition-all shadow-md ${
                notified
                  ? 'bg-green-600 text-white cursor-default'
                  : 'bg-purple-600 hover:bg-purple-500 text-white hover:shadow-purple-600/50'
              }`}
            >
              {notified ? '✅ You’ll be notified!' : '🔔 Notify Me'}
            </button>
          </form>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </section>
      </section>
    </main>
  );
}