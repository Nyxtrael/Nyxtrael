"use client";

export default function BackgroundGrid() {
  return (
    <svg className="absolute w-full h-full opacity-20 pointer-events-none" aria-hidden="true">
      <defs>
        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="fill-accent-green" />
          <stop offset="100%" className="fill-accent-purple" />
        </linearGradient>
      </defs>
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#gridGradient)" strokeWidth="1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}