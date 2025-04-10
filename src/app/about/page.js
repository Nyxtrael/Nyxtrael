'use client'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white px-6 py-24 md:px-16 relative overflow-hidden">
      {/* Subtle animated background effect */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/textures/stardust.png')] opacity-10 animate-pulse" />

      <section className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🪄 The Storyteller Behind the Stillness</h1>
        <p className="text-lg italic text-purple-300 mb-12">“Where silence meets code, myth awakens.”</p>

        <div className="space-y-6 text-left text-neutral-200 text-md leading-relaxed">
          <p>
            I’m <strong className="text-white">Nyxtrael</strong> — a digital alchemist turning silence into story. My work blends AI precision with an intuitive feel for myth, mood, and aesthetic clarity.
          </p>
          <p>
            I shape stillness, design immersive spaces, and edit stories that breathe — blending visuals with myth and emotion.
          </p>
          <p>
            Whether you’re here for art, inspiration, or collaboration — welcome to the hush between frames.
          </p>
        </div>

        <p className="italic text-sm text-neutral-500 mt-8">“The silence between frames holds more than sound.”</p>
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-purple-500/40 transition-all">
          <div className="text-3xl mb-2">✏️</div>
          <h3 className="text-lg font-semibold text-white">Visual Artistry</h3>
          <p className="text-sm text-neutral-300 mt-2">Whispered emotions in color and light.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-purple-500/40 transition-all">
          <div className="text-3xl mb-2">🌐</div>
          <h3 className="text-lg font-semibold text-white">Digital Alchemy</h3>
          <p className="text-sm text-neutral-300 mt-2">Web design that opens portals.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-lg hover:ring-1 hover:ring-purple-500/40 transition-all">
          <div className="text-3xl mb-2">🎬</div>
          <h3 className="text-lg font-semibold text-white">Memory in Motion</h3>
          <p className="text-sm text-neutral-300 mt-2">Editing stories like lucid dreams.</p>
        </div>
      </section>

      <section className="text-center mt-20 relative z-10">
        <a href="/contact" className="inline-block px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-full text-white text-md transition shadow-md hover:shadow-lg">
          📬 Contact Me
        </a>
        <p className="text-sm text-neutral-400 mt-2 italic">Let’s Talk</p>
      </section>
    </main>
  )
}