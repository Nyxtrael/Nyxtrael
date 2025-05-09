'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function WebDesignPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] text-white overflow-hidden">
      <Head>
        <title>Web Design – Responsive & SEO-Optimized Websites – Nyxtrael</title>
        <meta
          name="description"
          content="Get responsive, SEO-optimized websites by Nyxtrael. From single-page sites to custom portfolios, starting at €90."
        />
      </Head>

      <a href="#web-design-section" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">
        Skip to content
      </a>

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 z-0" poster="/images/stars-fallback.jpg" aria-hidden="true">
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      <section id="web-design-section" className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-8">🌐 Web Design</h1>
        <p className="text-neutral-400 text-lg mb-24">Crafting elegance and usability — websites that truly perform.</p>

        
		<section className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 fade-in">
  {[
    {
      title: '🖥️ Landing Spark',
      features: ['🌐 1-page website', '📱 Responsive design', '🎨 Custom colors & fonts', '🛠️ 1 Revision'],
      price: '90€',
      link: '/order?type=web&package=landing',
    },
    {
      title: '📖 Storytelling Site',
      features: ['🖼️ 3-5 pages', '⚡ Animations included', '✍️ Copy support', '🔁 2 Revisions'],
      price: '180€',
      link: '/order?type=web&package=storytelling',
      badge: '⭐ Popular',
    },
    {
      title: '🏛️ Full Custom Website',
      features: ['🖥️ 5+ pages', '🎨 Custom UI/UX design', '🚀 SEO optimization', '🛠️ 3 Revisions + support'],
      price: '250–350€',
      link: '/order?type=web&package=fullcustom',
    },
  ].map((pkg, idx) => (
    <div key={idx} className="relative bg-[#2A2A3E]/50 p-8 rounded-xl shadow-md hover:shadow-pink-500/30 transition flex flex-col border border-[#3A3A4E]">
  {/* Wewnątrz diva robisz badge */}
  {pkg.badge && (
    <div className="absolute top-2 right-2 text-xs bg-purple-700 px-2 py-1 rounded-full">
      {pkg.badge}
    </div>
  )}
  <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>
  <ul className="text-sm text-neutral-400 space-y-2 mb-6">
    {pkg.features.map((feature, idx2) => (
      <li key={idx2}>{feature}</li>
    ))}
  </ul>
  <p className="text-fuchsia-400 font-bold mb-4">{pkg.price}</p>
  <Link href={pkg.link} className="w-full">
    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-full hover:from-purple-500 hover:to-pink-400 transition font-semibold">
      Start with this package
    </button>
  </Link>
</div>
  ))}
</section>

      </section>

<div className="my-32 border-t border-white/10"></div>

<section className="relative z-10 max-w-6xl mx-auto fade-in">
  <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
    🛠️ Optional Add-ons
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    { name: 'Extra page design', price: '+50€' },
    { name: 'Blog CMS integration', price: '+80€' },
    { name: 'Priority 5-day delivery', price: '+100€' },
    { name: 'Basic SEO setup', price: '+40€' },
    { name: 'Advanced animations', price: '+60€' },
  ].map(({ name, price }, idx) => (
    <div key={idx} className="flex items-center justify-between bg-[#2A2A3E]/50 p-4 rounded-lg border border-[#3A3A4E] hover:shadow-pink-500/20 transition">
      <label className="flex items-center gap-3 text-neutral-300">
        <input type="checkbox" className="accent-pink-500" />
        {name}
      </label>
      <span className="text-green-400 font-semibold">{price}</span>
    </div>
  ))}
</div>
  <p className="text-neutral-400 text-xs mt-6 text-center">
    Learn more about optional features in our{' '}
    <Link href="/terms#addons" className="text-pink-400 hover:text-pink-300 underline">
      Terms of Service
    </Link>.
  </p>
</section>




      <section className="relative z-10 max-w-6xl mx-auto fade-in">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">🖼️ Portfolio Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { img: 'artist-x.webp', name: 'Mystic Studio Website' },
            { img: 'ecommerce.webp', name: 'Celestial E-Commerce' },
            { img: 'personal-site.webp', name: 'Dark Academia Portfolio' },
          ].map(({ img, name }, idx) => (
            <div key={idx} className="relative bg-[#2A2A3E]/50 p-4 rounded-xl hover:shadow-pink-500/30 transition shadow-md overflow-hidden border border-[#3A3A4E]">

              <Image src={`/images/web/${img}`} alt={name} fill loading="lazy" className="object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">{name}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-32 border-t border-white/10"></div>

      <section className="relative z-10 max-w-6xl mx-auto fade-in">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">🧰 What You Get</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm text-neutral-300 text-center">
          {[
            { icon: '🔒', label: 'Custom domain setup' },
            { icon: '🎨', label: 'Typography & colors' },
            { icon: '📱', label: 'Responsive layout' },
            { icon: '✨', label: 'Tailored animations' },
            { icon: '🧪', label: 'No-code or custom code' },
            { icon: '🚀', label: 'Hosting assistance' },
          ].map(({ icon, label }, idx) => (
            <div key={idx} className="flex items-center justify-between bg-[#2A2A3E]/50 p-4 rounded-lg border border-[#3A3A4E] hover:shadow-pink-500/20 transition">
              <div className="text-2xl">{icon}</div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-32 border-t border-white/10"></div>

      <section className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 fade-in">
        <div>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">🛠️ How It Works</h2>
          <ul className="space-y-8">
            {['Choose your web package', 'Share your project goals', 'Receive initial concept & layout', 'Revisions & polish', 'Launch & delivery'].map((step, idx) => (
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
            {[
              { q: 'Can I update text/images myself after delivery?', a: 'Yes, I can set up an easy editor for you.' },
              { q: 'Is domain registration included?', a: 'Domain purchase guidance is included, domain cost is separate.' },
              { q: 'What platform do you build sites on?', a: 'Usually Next.js or Webflow, based on project needs.' },
              { q: 'Can I upgrade the site later?', a: 'Absolutely, scalability is considered from the start.' },
            ].map(({ q, a }, idx) => (
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
        {[
          { text: 'The website design was exactly what I needed!', client: '– Alex K., USA' },
          { text: 'Nyxtrael delivered a stunning portfolio site on time!', client: '– Marina L., UK' },
          { text: 'The animations made my site stand out!', client: '– Daniel R., Germany' },
        ].map(({ text, client }, idx) => (
          <blockquote key={idx} className="italic text-neutral-300 leading-relaxed border-t border-white/10 pt-6">
            “{text}” <br /><span className="text-pink-400 text-sm">{client}</span>
          </blockquote>
        ))}
      </section>

      <div className="text-center mt-32">
        <Link href="https://nyxtrael.com/start-a-project">
          <span className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-base font-semibold shadow-md hover:shadow-pink-500/30 transition">
            🚀 Start Your Dream Site
          </span>
        </Link>
      </div>
    </main>
  );
}
