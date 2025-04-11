'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function IllustrationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white px-6 py-24 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('/textures/stardust.png')] opacity-10 animate-pulse" />

      <section className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎨 Illustrations</h1>
        <p className="text-lg italic text-purple-300 mb-12">Visions shaped through light, myth, and silence.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
        <div className="bg-[#20112d] backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-fuchsia-500/40 transition-all transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-2 text-white">🌱 Mini</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>🖼️ 2 AI-generated artworks</li>
            <li>🔍 Upscaled to 4K</li>
            <li>⏱️ 24h delivery</li>
            <li>❌ No revisions</li>
          </ul>
          <p className="mt-4 text-fuchsia-400 font-semibold">5€</p>
          <Link href="/order?type=image&images=2&style=custom&package=Mini">
            <span className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition shadow-md text-center">🖌️ Get This Artwork</span>
          </Link>
        </div>

        <div className="bg-[#261634] backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-fuchsia-500/40 transition-all transform hover:-translate-y-1 relative">
          <div className="absolute top-2 right-2 bg-fuchsia-700 text-xs text-white px-2 py-1 rounded-full">⭐ Recommended</div>
          <h3 className="text-xl font-bold mb-2 text-white">🌟 Scene</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>🖼️ 4 Artworks</li>
            <li>✨ Upscaled + Prompt <span title={'Receive optimized resolution and a custom-written prompt.'}>ⓘ</span></li>
            <li>♻️ 1 Revision</li>
            <li>🎨 Style Selection</li>
          </ul>
          <p className="mt-4 text-fuchsia-400 font-semibold">9€</p>
          <Link href="/order?type=image&images=4&style=custom&package=Scene">
            <span className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition shadow-md text-center">🖌️ Commission Now</span>
          </Link>
        </div>

        <div className="bg-[#2d1b3f] backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-fuchsia-500/40 transition-all transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-2 text-white">🌌 Divine Bundle</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>🖼️ 8 Artworks</li>
            <li>🧠 Prompt + Style consult <span title={'Tailored artistic direction, prompt writing and stylistic cohesion.'}>ⓘ</span></li>
            <li>♻️ 2 Revisions</li>
            <li>🧬 Full Concept Styling</li>
          </ul>
          <p className="mt-4 text-fuchsia-400 font-semibold">16€</p>
          <Link href="/order?type=image&images=8&style=custom&package=Divine">
            <span className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition shadow-md text-center">✨ Summon Vision</span>
          </Link>
        </div>
      </section>

      <section className="mt-20 max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">🖼️ Example Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Image src="/images/preview-cozy.jpg" alt="Cozy Style Example" width={400} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <Image src="/images/preview-divine.jpg" alt="Divine Style Example" width={400} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <Image src="/images/preview-gothic.jpg" alt="Gothic Style Example" width={400} height={300} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        </div>
      </section>

      <section className="mt-20 max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
        <div>
          <h2 className="text-2xl font-semibold mb-4">🛠️ How It Works</h2>
          <ol className="space-y-2 text-sm text-neutral-300 list-decimal list-inside">
            <li>📦 Select your desired package</li>
            <li>📝 Send a brief through the contact form</li>
            <li>🔮 Receive a custom prompt draft</li>
            <li>🎁 Delivery of final artworks + optional revisions</li>
            <li>💾 Receive downloadable PNGs to bask in your glory</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">❓ FAQ</h2>
          <ul className="space-y-4 text-sm text-neutral-300">
            <li><strong className="text-white">How do you deliver the files?</strong> — High-res PNG via email or download link.</li>
            <li><strong className="text-white">Can I use it commercially?</strong> — Yes, commercial licensing available upon request.</li>
            <li><strong className="text-white">Can I request a custom style?</strong> — Absolutely. Let’s talk.</li>
          </ul>
        </div>
      </section>

      <div className="text-center mt-20">
        <Link href="/order">
          <span className="inline-block px-6 py-3 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-sm font-semibold shadow-md">🎨 Commission a Piece</span>
        </Link>
      </div>
    </main>
  );
}
