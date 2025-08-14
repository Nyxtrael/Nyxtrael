'use client';
import { useState } from 'react';
import Testimonials from '../componentsartitst/Testimonials';

const testimonials = [
  { quote: "Working with Ethan was an incredible experience – he captured our emotions perfectly and made the shoot feel effortless.", author: "Anna K., Client", avatar: "/images/avatar-anna.jpg" },
  { quote: "Ethan’s talent for capturing the essence of my story through his lens was remarkable. I’m thrilled with the results!", author: "James L., Client", avatar: "/images/avatar-james.jpg" },
];

export default function TestimonialsPage() {
  const [idx, setIdx] = useState(0);
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-base">Testimonials</h1>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
      </div>
      <Testimonials testimonials={testimonials} currentIndex={idx} onNext={() => setIdx((i)=> (i+1)%testimonials.length)} onPrev={() => setIdx((i)=> (i-1+testimonials.length)%testimonials.length)} />
    </div>
  );
}