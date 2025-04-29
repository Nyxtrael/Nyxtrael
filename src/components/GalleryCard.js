'use client'; // ← TO MUSI BYĆ NA SAMEJ GÓRZE, pierwsza linijka bez żadnego odstępu

import Link from 'next/link';
import Image from 'next/image';

export default function GalleryCard({ project }) {
  return (
    <Link
      href={`/Portfolio/${project.slug}`}
      aria-label={`View series: ${project.title}`}
      className="block rounded-xl p-4 transition duration-300 hover:scale-[1.01] focus:ring-2 focus:ring-pink-500 outline-none border border-[#3A3A4E] shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
    >
      <div className="overflow-hidden rounded-md mb-3">
        <Image
          src={project.cover}
          alt={`Illustration from ${project.title} series`}
          width={800}
          height={450}
          className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
          priority={false} // ← Opcjonalnie. Jeśli chcesz szybciej ładować obrazek na stronie głównej, daj priority={true}
        />
      </div>

      <h3 className="text-lg font-bold text-white">{project.title}</h3>

      <p className="text-sm text-white leading-[1.6] mt-1">
        {project.description}
      </p>

      {project.quote && ( // ← Ważne zabezpieczenie! Żeby się nie wysypało jak nie ma quote
        <p className="italic text-xs mt-2 text-[#CCCCCC]">
          “{project.quote}”
        </p>
      )}

      <div className="mt-3 text-xs text-[#B0B0D0]">
        {project.tags.map((tag) => (
          <span key={tag} className="mr-2">#{tag}</span>
        ))}
      </div>
    </Link>
  );
}
