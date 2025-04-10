'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white px-6 py-24 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('/textures/stardust.png')] opacity-10 animate-pulse" />

      <section className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🌐 Web Design</h1>
        <p className="text-lg italic text-purple-300 mb-12">Gothic elegance meets functional magic. Let's conjure your site.</p>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
        {/* One-Pager */}
        <div className="bg-[#20112d] backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-purple-500/40 transition-all transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-2 text-white">📄 One-Pager</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>🎯 Single page site</li>
            <li>📱 Mobile responsive</li>
            <li>✨ Animated sections</li>
            <li>🚀 Fast delivery</li>
          </ul>
          <p className="mt-4 text-fuchsia-400 font-semibold">90€</p>
          <Link href="/order?type=web&package=onepager">
            <span className="block mt-4 w-full px-4 py-2 text-sm rounded-full bg-purple-600 hover:bg-purple-500 transition shadow-md text-center">🛠️ Start with One-Pager</span>
          </Link>
        </div>

        {/* Mini Portfolio */}
        <div className="bg-[#261634] backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-purple-500/40 transition-all transform hover:-translate-y-1 relative min-h-[280px]">
          <div className="absolute top-2 right-2 bg-purple-700 text-xs text-white px-2 py-1 rounded-full animate-pulse">⭐ Recommended</div>
          <h3 className="text-xl font-bold mb-2 text-white">📁 Mini Portfolio</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>🔒 Custom domain setup</li>
            <li>🎨 Typography & colors</li>
            <li>📱 Responsive layout</li>
            <li>⚡ Subtle animations</li>
          </ul>
          <p className="mt-4 text-fuchsia-400 font-semibold">140€</p>
          <Link href="/order?type=web&package=portfolio">
            <span className="block mt-4 w-full px-4 py-2 text-sm rounded-full bg-purple-600 hover:bg-purple-500 transition shadow-md text-center">📁 Get Mini Portfolio</span>
          </Link>
        </div>

        {/* Custom Magic Site */}
        <div className="bg-[#2d1b3f] backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-purple-500/40 transition-all transform hover:-translate-y-1 min-h-[280px]">
          <h3 className="text-xl font-bold mb-2 text-white">🧙‍♂️ Custom Magic Site</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>🧠 Creative briefing</li>
            <li>🎥 Custom animations & effects</li>
            <li>🧬 Multi-page immersive site</li>
            <li>✉️ Ongoing collaboration</li>
          </ul>
          <p className="mt-4 text-fuchsia-400 font-semibold">Starting from 220€</p>
          <Link href="/order?type=web&package=magic">
            <span className="block mt-4 w-full px-4 py-2 text-sm rounded-full bg-purple-600 hover:bg-purple-500 transition shadow-md text-center">🌟 Build from Scratch</span>
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="max-w-5xl mx-auto mt-20 text-white relative z-10">
        <h2 className="text-2xl font-semibold mb-6">🧰 What You Get</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-neutral-300">
          <div className="hover:scale-105 transition-transform">🔒 Custom domain setup</div>
          <div className="hover:scale-105 transition-transform">🎨 Typography & colors</div>
          <div className="hover:scale-105 transition-transform">📱 Responsive layout</div>
          <div className="hover:scale-105 transition-transform">✨ Tailored animations</div>
          <div className="hover:scale-105 transition-transform">🧪 No-code or custom code</div>
          <div className="hover:scale-105 transition-transform">🚀 Hosting assistance</div>
        </div>
      </section>

      {/* How it Works + FAQ */}
      <section className="mt-20 max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        <div>
          <h2 className="text-2xl font-semibold mb-4">🛠️ How It Works</h2>
          <ol className="space-y-2 text-sm text-neutral-300 list-decimal list-inside">
            <li>📦 Choose your web package</li>
            <li>📝 Share your project goals</li>
            <li>🎨 Receive initial concept & layout</li>
            <li>🧪 Revisions & polish</li>
            <li>🚀 Launch & delivery</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">❓ FAQ</h2>
          <ul className="space-y-4 text-sm text-neutral-300">
            <li><strong className="text-white">Can I edit the site myself?</strong> — Yes! I can set up an editable version for you.</li>
            <li><strong className="text-white">Do you offer domain + hosting?</strong> — I’ll guide you through setup or provide support.</li>
            <li><strong className="text-white">Can I upgrade later?</strong> — Absolutely. Let’s grow it together.</li>
          </ul>
        </div>
      </section>

      <div className="text-center mt-20">
        <Link href="/order?type=web">
          <span className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-sm font-semibold shadow-md">🌐 Let’s Build Your Site</span>
        </Link>
      </div>
    </main>
  );
}
