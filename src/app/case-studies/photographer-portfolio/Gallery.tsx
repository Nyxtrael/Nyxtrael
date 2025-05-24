import Image from 'next/image';
import { Photo } from '@/types';

interface GalleryProps {
  photos: Photo[];
}

export default function Gallery({ photos }: GalleryProps) {
  return (
    <>
      {/* First Row: First 3 Photos (400x600) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {photos.slice(0, 3).map((photo, index) => (
          <div
            key={photo.src}
            className="relative animate-slide-up hover:scale-[1.03] hover:shadow-gold/50 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      {/* Second Row: Next 3 Photos (600x400) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.slice(3, 6).map((photo, index) => (
          <div
            key={photo.src}
            className="relative animate-slide-up hover:scale-[1.03] hover:shadow-gold/50 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading={index + 3 < 3 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </>
  );
}