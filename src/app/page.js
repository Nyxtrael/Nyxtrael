"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white px-6 py-12 md:px-16">
      {/* HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4">Where AI Meets Myth</h1>
        <p className="text-neutral-400 mb-8">
          Explore illustrations forged from silence and starlight.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/series">
            <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition">
              Enter Series
            </button>
          </Link>
          <Link href="/services">
            <button className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition">
              Explore Services
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES QUICK OVERVIEW */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Nyxtrael offers...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm">Visual Art – Custom AI-generated illustrations across mythic and cozy styles</p>
          </div>
          <div>
            <div className="text-4xl mb-2">💻</div>
            <p className="text-sm">Web Design – Elegant, fast, animated portfolio pages</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🎬</div>
            <p className="text-sm">Video Edits – Cinematic, rhythmic edits for reels or storytelling</p>
          </div>
        </div>
      </section>

      {/* FEATURED ART */}
      <section className="text-center max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">See what dreams are made of</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/series/sunroom-diaries">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/sunroom-diaries/cover.jpg"
                alt="Sunroom Diaries"
                className="h-[300px] w-full object-cover hover:scale-105 transition"
              />
            </div>
          </Link>
          <Link href="/series/red-requiem">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/red-requiem/cover.jpg"
                alt="Red Requiem"
                className="h-[300px] w-full object-cover hover:scale-105 transition"
              />
            </div>
          </Link>
          <Link href="/series/astral-divines">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/astral-divines/cover.jpg"
                alt="Astral Divines"
                className="h-[300px] w-full object-cover hover:scale-105 transition"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="text-center max-w-xl mx-auto mb-20">
        <blockquote className="italic text-purple-300">
          “Simple, beautiful, and somehow personal.”
        </blockquote>
        <p className="mt-2 text-sm text-neutral-400">— Anonymous Client · April 8, 2025</p>
      </section>
    </main>
  );
}