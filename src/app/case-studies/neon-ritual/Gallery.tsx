import Image from 'next/image';

interface Illustration {
  id: number;
  path: string;
  alt: string;
  description: string;
}

interface GalleryProps {
  illustrations: Illustration[];
}

export default function Gallery({ illustrations }: GalleryProps) {
  return (
    <section
      id="explore"
      role="region"
      aria-labelledby="gallery-heading"
      className="section-spacing bg-gradient-to-br from-neon-dark to-gray-900"
    >
      <div className="container mx-auto text-center">
        <h2
          id="gallery-heading"
          className="text-4xl md:text-5xl font-bebas font-bold text-neon-pink heading-underline mb-12 animate-fade-in"
        >
          The NeonRitual Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {illustrations.map((ill, i) => (
            <div
              key={ill.id}
              className="card hover:shadow-neon-blue/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <Image
                src={ill.path}
                alt={ill.alt}
                width={400}
                height={300}
                className="object-contain mb-4"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMxQjFCMUIiLz48cGF0aCBkPSJNNTAsMjMwIFEwLDE1MCAxNTAsMjMwIiBzdHJva2U9InVybCgjbmVvbkdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSJub25lIi8+PC9zdmc+"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-neon-blue mb-2 text-center font-montserrat">{ill.alt}</h3>
              <p className="text-gray-400 text-center font-montserrat">{ill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}