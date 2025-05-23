"use client";

import { useState, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

interface ParticlesProps {
  count?: number;
  bgColor?: string;
}

export default function Particles({ count = 30, bgColor = "particleGradient" }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  // Initialize particles
  useEffect(() => {
    const newParticles = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));
    setParticles(newParticles);

    // Animate particles using requestAnimationFrame
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let x = p.x + p.speedX;
          let y = p.y + p.speedY;
          if (x > 100) x = 0;
          if (x < 0) x = 100;
          if (y > 100) y = 0;
          if (y < 0) y = 100;
          return { ...p, x, y };
        })
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [count]);

  return (
    <svg className="absolute w-full h-full opacity-30" aria-hidden="true">
      <defs>
        <radialGradient id={bgColor} cx="50%" cy="50%" r="50%">
          <stop offset="0%" className="fill-neon-pink" />
          <stop offset="100%" className="fill-transparent" />
        </radialGradient>
      </defs>
      {particles.map((particle, i) => (
        <circle
          key={i}
          cx={`${particle.x}%`}
          cy={`${particle.y}%`}
          r={particle.size}
          fill={`url(#${bgColor})`}
          opacity="0.6"
        />
      ))}
    </svg>
  );
}