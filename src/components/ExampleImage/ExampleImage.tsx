'use client';

import Image from 'next/image';
import clsx from 'clsx';

interface ExampleImageProps {
  src: string;
  alt: string;
  delay?: number;
}

export default function ExampleImage({ src, alt, delay = 0 }: ExampleImageProps) {
  return (
    <div
      className={clsx(
        'aspect-[4/3] relative w-full rounded-lg border border-[#3A3A4E] shadow-md hover:scale-105 transition-transform object-cover fade-in',
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="rounded-lg object-cover"
      />
    </div>
  );
}
