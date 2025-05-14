'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RedRequiemPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-2 text-red-500">Red Requiem</h1>
        <p className="italic text-neutral-300 mb-4">
          &quot;When red is the only prayer left.&quot;
        </p>
        <p className="max-w-2xl mx-auto text-sm text-neutral-400">
          A gothic-futurist journey through neon cathedrals and divine silence. Created using SDXL and ComfyUI.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-red-900 text-red-300 px-2 py-1 rounded">#neonRitual</span>
          <span className="bg-red-900 text-red-300 px-2 py-1 rounded">#gothicFate</span>
          <span className="bg-red-900 text-red-300 px-2 py-1 rounded">#divineReflection</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <Image
          src="/images/red-requiem/cover.png"
          alt="Red Requiem Cover"
          width={1200}
          height={600}
          className="rounded-xl shadow-xl object-cover mb-8"
        />

        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              src={`/images/red-requiem/${num}.png`}
              alt={`Red Requiem ${num}`}
              width={600}
              height={400}
              className="rounded-lg hover:scale-105 transition-transform duration-300 object-cover"
            />
          ))}
        </div>

        <details className="mt-8">
          <summary className="cursor-pointer text-sm text-red-400">Reveal Invocation</summary>
          <pre className="bg-black text-red-300 p-4 mt-2 rounded border border-red-800 whitespace-pre-wrap text-sm">
{`gothic anime girl in a black Victorian dress, long black hair with red rose accessories, standing in a dark candle-lit cathedral, surrounded by red roses, elegant baroque atmosphere, dramatic lighting, stained glass windows, shadows and soft glow, symmetrical composition, ultra-detailed, 4k`}
          </pre>
        </details>

        <div className="mt-6 space-y-1 text-sm text-neutral-300">
          <p>🧠 Engine: <strong>ComfyUI</strong></p>
          <p>🧬 Model: <strong>SDXL</strong></p>
          <p>🖼 Works: <strong>6</strong></p>
        </div>

        <h3 className="mt-10 text-lg font-semibold text-red-400">📜 Devlog</h3>
        <ul className="list-disc ml-6 mt-2 text-sm text-neutral-400 space-y-1">
          <li>🗓 March 11: Silence broken by neon echoes. Testing urban textures and soft decay.</li>
          <li>🗓 March 12: Generated mythic figures. Cloaked in starlight and divine geometry.</li>
          <li>🗓 March 14: Cathedral rendered. Candelabras lit. Shadows asked no questions.</li>
        </ul>

        <div className="text-center mt-10">
          <Link href="/order">
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg">
              🕯 Summon something like this
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
