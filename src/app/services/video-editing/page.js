'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function VideoEditingPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🎬 Video Editing</h1>
        <p className="text-neutral-400 mb-8 text-lg">
          Rhythm, atmosphere, and emotion — your story, cut to the soul.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Short Spark */}
          <div className="bg-[#15111f] rounded-xl p-6 shadow-md hover:shadow-purple-500/20 transition flex flex-col justify-between">
            <div className="flex flex-col gap-4 flex-grow">
              <h2 className="text-xl font-bold">Short Spark</h2>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>🎞️ Up to 60 seconds</li>
                <li>🔊 Sound design & pacing</li>
                <li>📦 2 Revisions</li>
                <li>⏱️ 24–48h delivery</li>
              </ul>
              <p className="font-semibold text-fuchsia-400 mt-2">Price: 30€</p>
              
              <p className="text-xs text-neutral-500 mt-1">Best for: Reels / YouTube </p>
            </div>
            <Link href="/order?type=video&package=shortspark">
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition mt-4">
                🎬 Start with this package
              </button>
            </Link>
          </div>

          {/* Narrative Flow */}
          <div className="bg-[#1e162f] border border-purple-500 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition relative flex flex-col justify-between">
            <div className="absolute top-2 right-2 bg-purple-700 text-xs px-2 py-1 rounded-full">Best for trailers / promo reels</div>
            <div className="flex flex-col gap-4 flex-grow">
              <h2 className="text-xl font-bold">Narrative Flow</h2>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>🎬 2–3 mins cinematic edit</li>
                <li>🎵 Music sync, transitions, rhythm cuts</li>
                <li>✍️ Script polishing & voiceover cue suggestions</li>
                <li>🛠️ 3 Revisions</li>
              </ul>
              <p className="font-semibold text-fuchsia-400 mt-2">Price: 60€</p>
              
              <p className="text-xs text-neutral-500 mt-1">Best for: YouTube / Music Video / Product Demo</p>
            </div>
            <Link href="/order?type=video&package=narrative">
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition mt-4">
                🎬 Start with this package
              </button>
            </Link>
          </div>

          {/* Full Feature Bundle */}
          <div className="bg-[#15111f] rounded-xl p-6 shadow-md hover:shadow-purple-500/20 transition flex flex-col justify-between">
            <div className="flex flex-col gap-4 flex-grow">
              <h2 className="text-xl font-bold">Full Feature Bundle</h2>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>📽️ Up to 6 minutes</li>
                <li>🎞️ Complete storytelling, custom pacing</li>
                <li>🎧 Licensed audio support</li>
                <li>🔁 4 Revisions + editing feedback loop</li>
                <li>🧠 Visual storytelling consult</li>
              </ul>
              <p className="font-semibold text-fuchsia-400 mt-2">Price: 95–110€</p>
              
              <p className="text-xs text-neutral-500 mt-1">Includes licensed music support, storyboard guidance, pacing feedback.</p>
              <p className="text-xs text-neutral-500">Best for: Reels / YouTube / Music Video / Product Demo</p>
            </div>
            <Link href="/order?type=video&package=feature">
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition mt-4">
                🎬 Start with this package
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-20 text-white">
        <h2 className="text-2xl font-semibold mb-4">🎁 Optional Add-ons</h2>
        <table className="w-full text-sm text-left text-neutral-300 border border-purple-800">
          <thead className="bg-purple-900 text-white">
            <tr>
              <th className="px-4 py-2">Add-on</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-purple-800"><td className="px-4 py-2">+ Licensed music track</td><td className="px-4 py-2">+10–20€</td></tr>
            <tr className="border-t border-purple-800"><td className="px-4 py-2">+ Sound design FX</td><td className="px-4 py-2">+15€</td></tr>
            <tr className="border-t border-purple-800"><td className="px-4 py-2">+ 4K render</td><td className="px-4 py-2">+5€</td></tr>
            <tr className="border-t border-purple-800"><td className="px-4 py-2">+ Social cuts (15s, 30s)</td><td className="px-4 py-2">+10€</td></tr>
            <tr className="border-t border-purple-800"><td className="px-4 py-2">+ Rush delivery (24h)</td><td className="px-4 py-2">+20€</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mt-20 max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row justify-between gap-12 text-white">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">🛠️ How It Works</h2>
          <ol className="space-y-2 text-sm text-neutral-300 list-decimal list-inside">
            <li>🎯 Choose a package</li>
            <li>📥 Submit footage + notes</li>
            <li>✂️ First cut + your feedback</li>
            <li>🛠️ Revisions + polish</li>
            <li>📦 Final delivery (MP4 / 4K if needed)</li>
          </ol>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">❓ FAQ</h2>
          <ul className="space-y-4 text-sm text-neutral-300">
            <li><strong className="text-white">Can I submit raw phone footage?</strong> — Yes! As long as it’s not filmed on a potato.</li>
            <li><strong className="text-white">Can you help with script/timing?</strong> — Absolutely. Rhythm, structure, and cue guidance included.</li>
            <li><strong className="text-white">Do I get all versions?</strong> — You’ll get final + 1–2 alt versions if needed.</li>
            <li><strong className="text-white">What format do I get?</strong> — MP4 1080p/4K, + vertical versions on request.</li>
            <li><strong className="text-white">Can you edit music videos or reels?</strong> — Totally. If it moves and makes noise, I can probably make it cooler.</li>
          </ul>
        </div>
      </section>

      <div className="text-center mt-20 max-w-5xl mx-auto">
        <Link href="/contact?type=video">
          <span className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-sm font-semibold shadow-md hover:shadow-pink-500/30 transition">📩 Let’s Edit Something Beautiful</span>
        </Link>
      </div>
    </main>
  );
}
