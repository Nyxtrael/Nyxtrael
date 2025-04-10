'use client'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e] text-white px-6 py-24 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('/textures/stardust.png')] opacity-10 animate-pulse" />

      <section className="max-w-4xl mx-auto text-center relative z-10 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">📩 Contact</h1>
        <p className="text-lg italic text-purple-300 mb-2">Interested in a collaboration or commission? Let's connect.</p>
        <p className="text-sm text-neutral-400 mb-12">Use the form below. I’ll respond within 24 hours.</p>
        <div className="w-12 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-pink-500 mx-auto rounded-full mb-8" />
      </section>

      <section className="max-w-2xl mx-auto bg-[#1f132d] p-8 rounded-xl shadow-lg relative z-10">
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-white mb-1">Name</label>
            <input type="text" placeholder="Enter your name or studio name" className="w-full p-3 rounded-md bg-[#2a1b3d] text-white focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input type="email" placeholder="Your contact email address" className="w-full p-3 rounded-md bg-[#2a1b3d] text-white focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Service</label>
            <select className="w-full p-3 rounded-md bg-[#2a1b3d] text-white focus:ring-2 focus:ring-purple-500 focus:outline-none">
              <option value="">Select a service</option>
              <option value="illustration">Illustration</option>
              <option value="web">Web Design</option>
              <option value="video">Video Editing</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Message</label>
            <textarea rows="5" placeholder="Describe what you need. The more detail, the better." className="w-full p-3 rounded-md bg-[#2a1b3d] text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>
          </div>
          <button type="submit" className="sparkle-button w-full px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-sm font-semibold shadow-md hover:shadow-pink-500/30 transition relative overflow-hidden">
            📨 Send Message
          </button>
        </form>
        <p className="text-center text-sm text-neutral-400 mt-6 italic">Thank you for your message. You will hear from me soon.</p>
      </section>

      <style jsx>{`
        .fade-in {
          animation: fadeInUp 1.2s ease forwards;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sparkle-button::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: skewX(-30deg);
          animation: sparkleTrail 2s infinite;
        }

        @keyframes sparkleTrail {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </main>
  )
}