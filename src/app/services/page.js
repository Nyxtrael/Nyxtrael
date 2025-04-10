'use client'

import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-4 py-24 md:px-12 lg:px-32 text-white relative overflow-hidden scroll-smooth">
      <style jsx>{`
        main {
          background: radial-gradient(ellipse at center, #1a0e2a 0%, #0c0f1e 100%);
          background-blend-mode: screen;
          background-size: 400% 400%;
          animation: slowGlow 60s ease infinite;
        }
        @keyframes slowGlow {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
      `}</style>

      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">🛠 Services</h1>
        <p className="text-lg text-neutral-300">Gothic elegance meets functional design. Here’s what I can conjure for you.</p>
        <div className="grid gap-8 md:grid-cols-3 mt-16">
          <div className="bg-[#1a0e2a] p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🎨 Illustrations</h2>
            <p className="text-sm text-neutral-300 mb-4">From cozy slices of life to divine goddess visions.</p>
            <Link href="/services/illustrations" className="text-fuchsia-400 hover:underline">View Details →</Link>
          </div>

          <div className="bg-[#100717] p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🌐 Web Design</h2>
            <p className="text-sm text-neutral-300 mb-4">Functional beauty. Aesthetic-first portfolio sites.</p>
            <Link href="/services/web-design" className="text-fuchsia-400 hover:underline">View Details →</Link>
          </div>

          <div className="bg-[#0d0d0d] p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🎞️ Video Editing</h2>
            <p className="text-sm text-neutral-300 mb-4">Rhythmic, moody, cinematic cuts that breathe.</p>
            <Link href="/services/video-editing" className="text-fuchsia-400 hover:underline">View Details →</Link>
          </div>
        </div>
      </section>
    </main>
  )
} 
