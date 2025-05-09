'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VideoEditingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] text-white overflow-hidden">

      <Head>
        <title>Video Editing – Nyxtrael</title>
        <meta name="description" content="Professional video editing services for reels, intros, and promos. Choose from Short Spark, Narrative Flow, or Full Feature Bundle packages." />
        <meta property="og:title" content="Video Editing – Nyxtrael" />
        <meta property="og:description" content="Transform your videos with Nyxtrael’s professional editing services." />
        <meta property="og:image" content="/images/video-editing-og.jpg" />
      </Head>

      <a href="#video-editing-section" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">
        Skip to content
      </a>

      <div className="absolute inset-0 pointer-events-none bg-[url('/textures/stardust.png')] opacity-10 animate-pulse" />
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 z-0" poster="/images/stars-fallback.jpg" aria-hidden="true">
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      <section id="video-editing-section" className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold text-center mb-8">
          🎞️ Video Editing Services
        </motion.h1>
        <p className="text-neutral-400 text-center text-lg mb-24">Rhythm, atmosphere, and emotion — your story, cut to the soul.</p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-12 fade-in">
          {[{title: '⚡ Short Spark', features: ['🎞️ Up to 60 seconds', '🔊 Sound design & pacing', '📦 2 Revisions', '⏱️ 24–48h delivery'], price: '30€', link: '/order?type=video&package=shortspark'},
            {title: '🎬 Narrative Flow', features: ['🎬 2–3 min cinematic edit', '🎵 Music sync & transitions', '✍️ Script polish & cues', '🔁 3 Revisions'], price: '60€', link: '/order?type=video&package=narrative', badge: '⭐ Best for promos'},
            {title: '🎥 Full Feature Bundle', features: ['📽️ Up to 6 minutes', '🎞️ Full storytelling edit', '🎧 Licensed audio support', '🛠️ 4 Revisions + feedback loop'], price: '95–110€', link: '/order?type=video&package=feature'}]
          .map((card, idx) => (
            <div key={idx} className="relative bg-[#2A2A3E]/50 p-8 rounded-xl shadow-md hover:shadow-pink-500/30 border border-[#3A3A4E] transition flex flex-col">
              {card.badge && <div className="absolute top-2 right-2 text-xs bg-purple-700 px-2 py-1 rounded-full">{card.badge}</div>}
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <ul className="text-sm text-neutral-400 space-y-2 mb-6">
                {card.features.map((feature, fidx) => <li key={fidx}>{feature}</li>)}
              </ul>
              <p className="text-fuchsia-400 font-bold mb-2">{card.price}</p>
              <Link href={card.link} className="w-full">
                <button className="w-full bg-purple-600 py-3 rounded-full hover:bg-purple-700 transition font-semibold">Start with this package</button>
              </Link>
            </div>
          ))}
        </motion.div>

        <div className="my-32 border-t border-white/10"></div>

        <section className="fade-in">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 whitespace-nowrap">
            <img src="/icons/addons.svg" alt="Add-ons" width="20" height="20" />
            Optional Add-ons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["Licensed music track (+10-20€)", "Sound design FX (+15€)", "4K Render (+5€)", "Social cuts (15s, 30s) (+10€)", "Rush delivery 24h (+20€)"]
            .map((addon, idx) => (
              <div key={idx} className="flex items-center p-4 bg-[#2A2A3E]/50 border border-[#3A3A4E] rounded-xl hover:shadow-pink-500/30 transition">
                <input type="checkbox" className="accent-pink-500 mr-4" />
                <span>{addon}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-400 text-xs mt-4 text-center">
            Learn more about licensing in our <Link href="/terms#license" className="text-pink-400 hover:text-pink-300 underline">Terms of Service</Link>.
          </p>
        </section>

        <div className="my-32 border-t border-white/10"></div>

        <section className="fade-in">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <img src="/icons/process.svg" alt="Process" width="20" height="20" />
            How It Works
          </h2>
          <ul className="space-y-8">
            {["Choose a package", "Submit footage + notes", "First cut + feedback", "Revisions + polish", "Final delivery (MP4/4K)"]
              .map((step, idx) => (
                <li key={idx} className="flex gap-4 text-neutral-300 items-start">
                  <img src={`/icons/step${idx+1}.svg`} alt="Step" width="24" height="24" />
                  <span>{step}</span>
                </li>
              ))}
          </ul>
        </section>

        <section className="mt-32 fade-in">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <img src="/icons/faq.svg" alt="FAQ" width="20" height="20" />
            FAQ
          </h2>
          <div className="space-y-4">
            {["Can I submit phone footage?", "Can you help with timing/script?", "Do I get multiple versions?", "What format do I get?", "Can you edit music videos or reels?"]
              .map((q, idx) => (
              <details key={idx} className="bg-[#2A2A3E]/50 border border-[#3A3A4E] p-4 rounded-lg transition-all">
                <summary className="font-semibold text-neutral-200 cursor-pointer">{q}</summary>
                <p className="text-neutral-400 mt-2">Of course! We ensure quality edits regardless of footage quality, with multiple outputs and MP4/4K support.</p>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center mt-32">
          <Link href="/contact?type=video">
            <span className="inline-block px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-base font-semibold shadow-md hover:shadow-pink-500/30 transition">
              📩 Let’s Edit Something Beautiful
            </span>
          </Link>
          <p className="text-neutral-400 text-sm mt-4">
            By proceeding, you agree to our <Link href="/terms#privacy" className="text-pink-400 hover:text-pink-300 underline">Privacy Note</Link>.
          </p>
        </div>

        <footer className="max-w-6xl mx-auto mt-32 text-center text-neutral-400 text-sm fade-in">
          <p>
            © {new Date().getFullYear()} Nyxtrael | <Link href="/faq" className="text-pink-400 hover:text-pink-300">FAQ</Link> | <Link href="/terms" className="text-pink-400 hover:text-pink-300">Terms of Service</Link> | <Link href="/refund" className="text-pink-400 hover:text-pink-300">Refund Policy</Link> | <Link href="/terms#privacy" className="text-pink-400 hover:text-pink-300">Privacy Note</Link> | <Link href="/contact" className="text-pink-400 hover:text-pink-300">Contact</Link>
          </p>
        </footer>
      </section>
    </main>
  );
}
