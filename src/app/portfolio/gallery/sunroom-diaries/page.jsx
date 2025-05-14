'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function SunroomDiariesPage() {
  const [showPrompt, setShowPrompt] = useState(false);

  const galleryImages = [
    {
      src: '/images/sunroom-diaries/1.png',
      alt: 'Illustration of a girl with a cup in a sunlit room from Sunroom Diaries series'
    },
    {
      src: '/images/sunroom-diaries/2.png',
      alt: 'Illustration of a girl reading in a sunlit room from Sunroom Diaries series'
    },
    {
      src: '/images/sunroom-diaries/3.png',
      alt: 'Illustration of a girl with a book in a sunlit room from Sunroom Diaries series'
    }
  ];

  return (
    <>
      <Head>
        <title>Sunroom Diaries – Nature Illustrations – Nyxtrael</title>
        <meta
          name="description"
          content="Explore Sunroom Diaries by Nyxtrael, a cozy series of anime-style illustrations inspired by nature and morning light, perfect for personal and editorial use."
        />
      </Head>

     

      <div
        className="min-h-screen bg-gradient-to-b from-[#FFF9E6] to-[#E6E6FA] text-[#333333] px-4 py-10"
      >
        

        <div id="main-content" className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Sunroom Diaries</h1>
          <p className="italic text-[#666666] mb-4">
            "In the stillness of sunlight, thoughts drift like dust."
          </p>
          <p className="text-base max-w-2xl mx-auto">
            A series of illustrations inspired by nature and tranquility, created for personal and commercial projects.
            Each piece is crafted with attention to detail, from sketch to final render. Created using SDXL and ComfyUI.
          </p>

          <div className="flex justify-center gap-2 mt-4">
            <span className="bg-[#EEE] text-[#555] px-3 py-1 text-xs rounded-full">#cozy</span>
            <span className="bg-[#EEE] text-[#555] px-3 py-1 text-xs rounded-full">#anime</span>
            <span className="bg-[#EEE] text-[#555] px-3 py-1 text-xs rounded-full">#slice of life</span>
          </div>
        </div>

        {/* Cover */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/sunroom-diaries/cover.png"
            alt="Cover illustration from Sunroom Diaries series"
            width={1200}
            height={600}
            className="w-full max-w-5xl max-h-[500px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Gallery */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="rounded-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105 border border-[#D3D3D3] shadow-sm"
              />
            ))}
          </div>

          {/* Prompt reveal */}
          <div
            className="mt-6 text-sm text-purple-600 cursor-pointer hover:underline"
            onClick={() => setShowPrompt(!showPrompt)}
          >
            ► Reveal prompt
          </div>
          {showPrompt && (
            <pre className="mt-2 bg-black text-green-400 p-4 rounded text-xs overflow-x-auto">
"A young woman sits by the window in the warm morning light, sipping tea, surrounded by houseplants and soft shadows. An atmosphere of quiet introspection and domestic peace. Ultra detailed, cinematic framing, soft focus, SDXL model."
            </pre>
          )}

          {/* Details */}
          <div className="mt-6 text-sm space-y-1">
            <p>🧠 Engine: <strong>ComfyUI</strong></p>
            <p>🧬 Model: <strong>SDXL</strong></p>
            <p>🖼️ Works: <strong>{galleryImages.length}</strong></p>
          </div>

          {/* Devlog */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-2">📖 Devlog</h3>
            <ul className="list-disc ml-5 text-sm text-[#333333]">
              <li><strong>March 12:</strong> Began searching for the perfect morning light — warm, soft, yet not overexposed.</li>
              <li><strong>March 13:</strong> Style exploration inspired by nostalgic 90s anime, focusing on expression and light interplay.</li>
              <li><strong>March 15:</strong> Final adjustments to color palette, composition and tagging. Each frame tells a quiet story.</li>
              <li><strong>April 10:</strong> Series completed and ready for clients.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link href="https://nyxtrael.com/start-a-project">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition focus:outline-none focus:ring-2 ring-purple-400">
                ✨ I want one like this!
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-[#666] border-t border-neutral-300 pt-6">
          Email: nyxtrael@example.com | Instagram: @nyxtrael | Twitter: @nyxtrael |{' '}
          <Link href="/faq" className="underline hover:text-purple-600">FAQ</Link> |{' '}
          <Link href="/terms" className="underline hover:text-purple-600">Terms of Service</Link> |{' '}
          <Link href="/refund" className="underline hover:text-purple-600">Refund Policy</Link> |{' '}
          <Link href="/contact" className="underline hover:text-purple-600">Contact</Link>
        </footer>
      </div>
    </>
  );
}
