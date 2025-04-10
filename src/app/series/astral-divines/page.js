// src/app/series/astral-divines/page.js
import Image from "next/image";
import Link from "next/link";

const gallery = [1, 2, 3, 4];

export default function AstralDivines() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">Astral Divines</h1>
        <p className="italic text-lg text-purple-300 mb-4">
          "Golden silence, carved in cosmic light."
        </p>
        <p className="text-neutral-400 mb-6">
          Golden-haired deities woven from stardust, guardians of cosmic balance draped in light. Created with SDXL + ComfyUI.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="bg-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">#divineRadiance</span>
          <span className="bg-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">#spacegoddess</span>
          <span className="bg-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">#mythicalAI</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {gallery.map((n) => (
          <div key={n} className="rounded-lg overflow-hidden hover:scale-105 transition duration-300">
            <Image
              src={`/images/astral-divines/${n}.jpg`}
              alt={`Astral Divines ${n}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <details className="mt-6 text-sm text-purple-300">
          <summary className="cursor-pointer">🔮 Reveal Invocation</summary>
          <pre className="bg-neutral-900 text-green-400 p-4 mt-2 rounded-md overflow-auto text-xs">
"cosmic goddess floating in space, golden flowing hair like solar flares, white silk robe adorned with stars, ethereal elegance, galaxy background, radiant expression, SDXL + ComfyUI, anime celestial style"
          </pre>
        </details>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-pink-400 mb-2">📜 Devlog</h2>
          <ul className="list-disc list-inside text-sm space-y-1 text-neutral-300">
            <li>🪐 March 17: Starfire inspiration – generated galactic backdrops using SDXL with LoRA blending.</li>
            <li>🌌 March 18: Iterated goddess poses for symbolic symmetry and divine posture.</li>
            <li>🌟 March 19: Finalized palette with radiant gold, celestial blues, and silken whites.</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link href="/order">
            <button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-full transition">
              ✨ Request a Vision Like This
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
