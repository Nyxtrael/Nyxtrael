'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image'

export default function SunroomDiariesPage() {
  const [showPrompt, setShowPrompt] = useState(false)

  const galleryImages = [
    '/images/sunroom-diaries/1.jpg',
    '/images/sunroom-diaries/2.jpg',
    '/images/sunroom-diaries/3.jpg',
    '/images/sunroom-diaries/4.jpg',
    '/images/sunroom-diaries/5.jpg',
    '/images/sunroom-diaries/6.jpg',
  ]

  return (
    <div className="min-h-screen bg-[#fff8dc] text-neutral-900 px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Sunroom Diaries</h1>
        <p className="italic text-neutral-700 mb-4">
          "In the stillness of sunlight, thoughts drift like dust."
        </p>
        <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
          A warm, cozy series inspired by early morning light and reflective solitude. Created using SDXL and ComfyUI.
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full">#cozy</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full">#anime</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 text-xs rounded-full">#slice of life</span>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <img
          src="/images/sunroom-diaries/cover.jpg"
          alt="Cover"
          className="w-full max-w-5xl max-h-[500px] object-cover rounded-xl shadow-md"
        />
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Artwork ${index + 1}`}
              className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        <div className="mt-6 text-sm text-purple-600 cursor-pointer hover:underline" onClick={() => setShowPrompt(!showPrompt)}>
          ► Reveal prompt
        </div>
        {showPrompt && (
          <pre className="mt-2 bg-black text-green-400 p-4 rounded">
"A young woman sits by the window in the warm morning light, sipping tea, surrounded by houseplants and soft shadows. An atmosphere of quiet introspection and domestic peace. Ultra detailed, cinematic framing, soft focus, SDXL model."
          </pre>
        )}

        <div className="mt-6 text-sm">
          <p>🧠 Engine: <strong>ComfyUI</strong></p>
          <p>🧬 Model: <strong>SDXL</strong></p>
          <p>🖼️ Works: <strong>6</strong></p>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2">📖 Devlog</h3>
          <ul className="list-disc ml-5 text-sm">
            <li><strong>March 12:</strong> Began searching for the perfect morning light — warm, soft, yet not overexposed.</li>
            <li><strong>March 13:</strong> Style exploration inspired by nostalgic 90s anime, focusing on expression and light interplay.</li>
            <li><strong>March 15:</strong> Final adjustments to color palette, composition and tagging. Each frame tells a quiet story.</li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
  <Link href="/order?style=sunroom">
    <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
      ✨ I want one like this!
    </button>
  </Link>
</div>
      </section>
    </div>
  )
}
