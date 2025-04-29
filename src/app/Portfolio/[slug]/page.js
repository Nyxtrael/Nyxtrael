import { notFound } from 'next/navigation';
import Image from 'next/image';
import galleryData from '@/data/gallery.json';

// === IMPORTANT ===
// This file should NOT be marked with 'use client'
// because it includes a server function: generateMetadata

export function generateMetadata({ params }) {
  const series = galleryData.find((s) => s.slug === params.slug);
  if (!series) return {};

  return {
    title: `${series.title} – Illustration Series by Nyxtrael`,
    description:
      "Explore Nyxtrael's portfolio of illustration series, featuring anime, gothic, and celestial styles for personal and commercial use.",
  };
}

export default function SeriesDetailPage({ params }) {
  const series = galleryData.find((s) => s.slug === params.slug);

  if (!series) notFound();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-black text-white p-2 z-50"
      >
        Skip to content
      </a>

      <main
        id="main"
        className={`min-h-screen ${series.backgroundColor || 'bg-black'} ${series.textColor || 'text-white'} px-6 py-12`}
      >
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <header>
            <h1 className="text-4xl font-bold mb-2">{series.title}</h1>
            <p className="italic text-[#CCCCCC] mb-4">“{series.quote}”</p>
            <p className="text-white leading-[1.6]">{series.description}</p>
          </header>

          {/* Cover Image */}
          <div className="group overflow-hidden rounded-lg">
            <Image
              src={series.cover}
              alt={`Cover illustration from ${series.title} series`}
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full max-h-[500px] transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Thumbnails */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {series.thumbnails.map((thumb, i) => (
                <figure key={i} className="overflow-hidden group rounded-lg">
                  <Image
                    src={thumb}
                    alt={`Illustration ${i + 1} from ${series.title} series`}
                    width={600}
                    height={400}
                    className="rounded object-cover w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </section>

          {/* Technical Info */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Technical Info</h2>
            <ul className="text-sm text-[#BBBBBB] space-y-1">
              <li><strong>Model:</strong> {series.model}</li>
              <li><strong>Engine:</strong> {series.engine}</li>
              <li><strong>Prompts used:</strong> {series.prompts}</li>
              <li><strong>Prompt sample:</strong> <span className="italic text-white">{series.promptText}</span></li>
            </ul>
          </section>

          {/* Devlog */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Development Log</h2>
            <ul className="list-disc list-inside text-sm text-[#CCCCCC]">
              {series.devlog.map((entry, i) => (
                <li key={i}>{entry}</li>
              ))}
            </ul>
          </section>

          {/* Tags */}
          <footer>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase text-[#AAAAAA] mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2 text-xs text-[#B0B0D0]">
                {series.tags.map((tag) => (
                  <span key={tag} className="bg-[#1F1F2A] px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
