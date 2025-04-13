'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import seriesData from '@/data/galleryData';
import Image from 'next/image';

export default function SeriesSlugPage({ params }) {
  const { slug } = params;
  const series = seriesData.find((s) => s.slug === slug);

  if (!series) {
    notFound();
  }

  return (
    <div className={`min-h-screen ${series.backgroundColor} px-4 py-10 space-y-10`}>
      {/* Title & Quote */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">{series.title}</h1>
        <p className="text-lg italic text-neutral-500">{series.quote}</p>
        <p className="text-sm text-neutral-500">{series.description}</p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {series.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-neutral-200 text-xs px-3 py-1 rounded-full text-purple-700 hover:scale-105 transition"
            >
              #{tag.label || tag}
            </span>
          ))}
        </div>
      </section>

      {/* Cover */}
      {series.cover && (
        <section className="w-full">
          <Image
            src={series.cover}
            alt={series.title}
            width={1200}
            height={700}
            unoptimized
            className="rounded-xl w-full object-cover max-h-[500px] mx-auto shadow-lg hover:scale-105 transition duration-300"
          />
        </section>
      )}

      {/* Gallery */}
      {series.thumbnails?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {series.thumbnails.map((img, index) => (
              img && (
                <Image
                  key={index}
                  src={img}
                  alt={`Artwork ${index + 1}`}
                  width={600}
                  height={400}
                  unoptimized
                  className="rounded-lg object-cover w-full h-60 hover:scale-105 transition"
                />
              )
            ))}
          </div>
        </section>
      )}

      {/* Prompt reveal */}
      {series.promptText && (
        <details className="mt-6">
          <summary className="cursor-pointer text-sm text-purple-500 underline">
            ▸ Reveal prompt
          </summary>
          <pre className="bg-black text-green-400 p-4 mt-2 rounded whitespace-pre-wrap">
            {series.promptText}
          </pre>
        </details>
      )}

      {/* Technical Info */}
      <section className="text-sm text-neutral-600 space-y-1">
        <p>
          🧠 Engine: <strong>{series.engine}</strong>
        </p>
        <p>
          🧬 Model: <strong>{series.model}</strong>
        </p>
        <p>
          🖼️ Works: <strong>{series.prompts}</strong>
        </p>
      </section>

      {/* Devlog */}
      {series.devlog && (
        <section className="mt-10 space-y-3">
          <h3 className="text-lg font-semibold">📓 Devlog</h3>
          <ul className="list-disc list-inside text-neutral-700 text-sm space-y-1">
            {series.devlog.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA */}
      <section className="pt-4 text-center">
        <Link
          href="/order#ai-art"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white px-6 py-2 rounded-xl shadow transition"
        >
          ✨ Order similar series
        </Link>
      </section>
    </div>
  );
}
