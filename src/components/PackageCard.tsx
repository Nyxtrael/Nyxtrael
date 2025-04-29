'use client';

import Link from 'next/link';

export type PackageCardProps = {
  title: string;
  icon: string;
  iconAlt: string;
  desc: string;
  price: string;
  href: string;
  label: string;
  recommended?: boolean;
};

export default function PackageCard({
  title,
  icon,
  iconAlt,
  desc,
  price,
  href,
  label,
  recommended = false,
}: PackageCardProps) {
  return (
    <div
      className={`bg-[#2A2A3E] p-6 rounded-xl border border-[#3A3A4E] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transform transition-all duration-300 hover:scale-105 hover:brightness-110 fade-in relative`}
    >
      {recommended && (
        <div className="absolute top-2 right-2 bg-fuchsia-700 text-xs text-white px-2 py-1 rounded-full">
          ⭐ Recommended
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-white">
        <span role="img" aria-label={iconAlt}>{icon}</span> {title}
      </h3>
      <p className="text-sm text-neutral-300 leading-relaxed">{desc}</p>
      <p className="mt-4 text-fuchsia-400 font-semibold">{price}</p>
      <Link href={href}>
        <span className="inline-block mt-4 px-4 py-2 text-sm rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 transition shadow-md min-w-[48px] min-h-[48px] text-center box-shadow-[0_0_10px_#FF69B4]">
          {label}
        </span>
      </Link>
    </div>
  );
}
