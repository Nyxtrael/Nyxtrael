// /src/app/portfolio/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import galleryData from '../../../data/gallery.json';

export default function SeriesDetailPage({ params }) {
  const series = galleryData.find((s) => s.slug === params.slug);
  if (!series) notFound();

  return (
    <>
      <Link
        href="#main"
        className="sr-only focus:not-sr-only absolute top-4 left-4 bg-black text-white px-3 py-2 rounded"
      >
        Skip to content
      </Link>

      <main
        id="main"
        className="min-h-screen bg-black text-white px-6 py-12 md:px-16"
      >
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {series.title}
            </h1>
            {series.quote && (
              <p className="italic text-neutral-400">“{series.quote}”</p>
            )}
            <p className="leading-relaxed">{series.description}</p>
          </header>

          {/* Cover image */}
          <figure className="overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={series.cover}
              alt={`Cover of ${series.title}`}
              width={1200}
              height={600}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </figure>

          {/* Gallery thumbnails */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {series.thumbnails.map((thumb, idx) => (
                <figure
                  key={idx}
                  className="overflow-hidden rounded-lg shadow group"
                >
                  <Image
                    src={thumb}
                    alt={`${series.title} illustration ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </section>

          {/* Technical info */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Technical Info</h2>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li><strong>Model:</strong> {series.model}</li>
              <li><strong>Engine:</strong> {series.engine}</li>
              <li><strong>Prompts used:</strong> {series.prompts}</li>
              <li>
                <strong>Sample prompt:</strong>{' '}
                <span className="italic text-white">{series.promptText}</span>
              </li>
            </ul>
          </section>

          {/* Devlog */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Development Log</h2>
            <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
              {series.devlog.map((entry, i) => (
                <li key={i}>{entry}</li>
              ))}
            </ul>
          </section>

          {/* Tags */}
          <footer>
            <h3 className="text-sm font-semibold uppercase text-neutral-500 mb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {series.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#1A1A2E] px-2 py-1 rounded-full text-xs text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
