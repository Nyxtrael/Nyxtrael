'use client';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function IllustrationsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] text-white overflow-hidden">
      <Head>
        <title>Illustrations – Custom Anime, Gothic, and Celestial Art – Nyxtrael</title>
        <meta name="description" content="Explore Nyxtrael’s custom illustrations in anime, gothic, and celestial styles for personal and commercial use. Starting at €15 per image." />
      </Head>

      <a href="#illustrations-section" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">Skip to content</a>

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 z-0" poster="/images/stars-fallback.jpg" aria-hidden="true">
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      <section id="illustrations-section" className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-8">🎨 Illustrations</h1>
        <p className="text-neutral-400 text-lg mb-24">Visions shaped through light, myth, and silence.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{
            title: '🌱 Mini',
            features: ['2 high-quality artworks', '4K delivery', 'No revisions', '24h turnaround'],
            price: '15€',
            link: '/order?type=art&package=mini'
          }, {
            title: '🌟 Scene',
            features: ['4 upscaled artworks', 'Style selection', '1 revision', 'High-res PNGs'],
            price: '50€',
            link: '/order?type=art&package=scene'
          }, {
            title: '🌌 Divine Bundle',
            features: ['8 premium artworks', 'Priority service', '2 revisions', 'Full concept design'],
            price: '100€',
            link: '/order?type=art&package=divine'
          }].map((card, idx) => (
<div key={idx} className="relative bg-[#2A2A3E]/50 p-8 rounded-xl shadow-md hover:shadow-pink-500/30 transition flex flex-col border border-[#3A3A4E]">
              <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
              <ul className="text-sm text-neutral-400 space-y-2 mb-6">
                {card.features.map((feature, fidx) => <li key={fidx}>{feature}</li>)}
              </ul>
              <p className="text-fuchsia-400 font-bold mb-2">{card.price}</p>
              <Link href={card.link} className="w-full">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-full hover:from-purple-500 hover:to-pink-400 transition font-semibold">
                  Get This Package
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="my-32 border-t border-white/10"></div>

      <section className="relative z-10 max-w-6xl mx-auto fade-in">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">🛠️ Optional Add-ons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ name: 'Extra character', price: '+20€' }, { name: 'Background scene', price: '+30€' }, { name: 'Rush delivery (24h)', price: '+40€' }, { name: 'Commercial license', price: '+25€' }]
            .map(({ name, price }, idx) => (
              <div key={idx} className="flex items-center justify-between bg-[#2A2A3E]/50 p-4 rounded-lg hover:shadow-pink-500/20 transition border border-[#3A3A4E]">

                <label className="flex items-center gap-3 text-neutral-300">
                  <input type="checkbox" className="accent-pink-500" />
                  {name}
                </label>
                <span className="text-green-400 font-semibold">{price}</span>
              </div>
            ))}
        </div>
        <p className="text-neutral-400 text-xs mt-6 text-center">
          Learn more about licensing in our <Link href="/terms#addons" className="text-pink-400 hover:text-pink-300 underline">Terms of Service</Link>.
        </p>
      </section>

      <div className="my-32 border-t border-white/10"></div>

      <section className="relative z-10 max-w-6xl mx-auto fade-in">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">🖼️ Example Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[{ img: '/images/sunroom-diaries/preview.png', alt: 'Sunlit room' }, { img: '/images/astral-divines/preview.png', alt: 'Celestial goddess' }, { img: '/images/red-requiem/preview.png', alt: 'Gothic cathedral' }]
            .map(({ img, alt }, idx) => (
              <div key={idx} className="relative bg-[#2A2A3E]/50 p-4 rounded-xl hover:shadow-pink-500/30 transition shadow-md overflow-hidden border border-[#3A3A4E]">

                <Image src={img} alt={alt} fill loading="lazy" className="object-cover rounded-lg" />
              </div>
            ))}
        </div>
      </section>

      <div className="my-32 border-t border-white/10"></div>

      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 fade-in">
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">🛠️ How It Works</h2>
          <ul className="space-y-8">
            {["Select your package", "Send a creative brief", "Receive a prompt draft", "Delivery + revisions", "Get final PNG files"]
              .map((step, idx) => (
                <li key={idx} className="flex gap-4 text-neutral-300 items-start">
                  <img src={`/icons/step${idx+1}.svg`} alt="Step" width="24" height="24" />
                  <span>{step}</span>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">❓ FAQ</h2>
          <div className="space-y-4">
            {[{ q: 'How do you deliver the files?', a: 'Via download link or email as high-res PNG.' }, { q: 'Can I use illustrations commercially?', a: 'Yes, with a commercial license add-on.' }, { q: 'Can I request custom styles?', a: 'Absolutely! We can discuss anime, gothic, celestial, or mix styles.' }]
              .map(({ q, a }, idx) => (
                <details key={idx} className="bg-[#2A2A3E]/50 p-4 rounded-lg border border-[#3A3A4E] transition-all">

                  <summary className="font-semibold text-neutral-200 cursor-pointer">{q}</summary>
                  <p className="text-neutral-400 mt-2">{a}</p>
                </details>
              ))}
          </div>
        </div>
      </section>

      <div className="my-32 border-t border-white/10"></div>

      <section className="relative z-10 max-w-3xl mx-auto text-center fade-in">
        <h3 className="text-xl font-semibold mb-8">💬 What Clients Say</h3>
        {['Nyxtrael’s illustrations brought my game to life!', 'The artwork was stunning and delivered ahead of time!', 'Exactly the atmosphere I envisioned.'].map((quote, idx) => (
          <blockquote key={idx} className="italic text-neutral-300 leading-relaxed border-t border-white/10 pt-6">
            “{quote}”
          </blockquote>
        ))}
      </section>

      <div className="text-center mt-32">
        <Link href="https://nyxtrael.com/start-a-project">
          <span className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-base font-semibold shadow-md hover:shadow-pink-500/30 transition">
            🎨 Start Your Artwork
          </span>
        </Link>
      </div>
    </main>
  );
}
