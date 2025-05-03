'use client';

import GalleryCard from './GalleryCard';

export default function GalleryGrid({ data }) {
  return (
    <section aria-labelledby="gallery-heading">
      {/* Hidden heading for screen-readers */}
      <h2 id="gallery-heading" className="sr-only">
        Illustration Series Gallery
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <GalleryCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
);
}
