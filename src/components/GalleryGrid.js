'use client';

import { useState } from 'react';
import GalleryCard from './GalleryCard';

export default function GalleryGrid({ data }) {
  const [activeTag, setActiveTag] = useState("All");

  // Zbiera unikalne tagi z danych
  const tags = Array.from(new Set(data.flatMap(project => project.tags)));

  // Filtrowanie projektów po tagu
  const filtered = activeTag === "All"
    ? data
    : data.filter(project => project.tags.includes(activeTag));

  return (
    <section aria-labelledby="gallery-heading">
      {/* FILTRY */}
      <div
        className="flex flex-wrap gap-2 mb-6 justify-center"
        role="toolbar"
        aria-label="Filter illustration categories"
      >
        {["All", ...tags].map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 ring-pink-500 ${
  isActive
    ? "bg-pink-600 text-white"
    : "bg-neutral-800 text-[#B0B0D0] hover:bg-neutral-700 hover:ring-2 hover:ring-pink-400 border border-neutral-700"
}`}

              aria-pressed={isActive}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Tytuł ukryty dla screen readerów */}
      <h2 id="gallery-heading" className="sr-only">
        Illustration Series Gallery
      </h2>

      {/* GRYDZIK */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <GalleryCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
