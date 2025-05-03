// /src/app/Portfolio/[slug]/metadata.js
import galleryData from '../../../../data/gallery.json';

export function generateMetadata({ params }) {
  const series = galleryData.find((s) => s.slug === params.slug);
  if (!series) return {};
  return {
    title: `${series.title} – Illustration Series by Nyxtrael`,
    description:
      "Explore Nyxtrael’s portfolio of illustration series—anime, gothic & celestial styles for personal & commercial use.",
    alternates: { canonical: `https://nyxtrael.com/portfolio/${series.slug}` },
  };
}
