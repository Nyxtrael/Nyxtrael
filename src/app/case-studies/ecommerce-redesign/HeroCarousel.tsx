import Image from "next/image";
import Link from "next/link";

interface Product {
  image: string;
  name: string;
  price: string;
}

interface CaseStudy {
  slug: string;
}

interface HeroCarouselProps {
  caseStudy: CaseStudy;
  products: Product[];
}

export default function HeroCarousel({ caseStudy, products }: HeroCarouselProps) {
  const currentSlide = 0; // Statyczny slajd, pokazujemy pierwszy produkt

  return (
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-heading"
      className="section flex items-center justify-center relative z-10 pt-16 min-h-screen"
    >
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-shoptrend-bg/70 z-0" />
      <div className="container text-center relative z-10">
        <div className="text-center animate-fade-in">
          <h1
            id="hero-heading"
            className="text-5xl xs:text-6xl md:text-7xl font-playfair font-bold text-shoptrend-text mb-4 heading-underline"
          >
            ShopTrend
          </h1>
          <p className="text-xl xs:text-2xl text-shoptrend-text max-w-2xl mx-auto mb-8 font-lora leading-relaxed">
            Luxury Fashion, Timeless Elegance – Shop Now
          </p>
          <Link
            href="#products"
            className="bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown text-shoptrend-text px-8 py-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-shoptrend-gold font-lora shadow-md text-lg animate-pulse"
            aria-label="Shop now"
          >
            Shop Now
          </Link>
        </div>
        <div className="relative mt-12">
          <div
            className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown animate-slide-up"
            role="region"
            aria-label={`Featured product: ${products[currentSlide].name}`}
          >
            <Image
              src={products[currentSlide].image}
              alt={`Zdjęcie produktu ${products[currentSlide].name} w cenie ${products[currentSlide].price}`}
              fill
              className="object-cover rounded-lg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              priority
            />
            <div className="absolute inset-0 bg-shoptrend-brown/30" />
            <div className="absolute bottom-6 left-6 text-shoptrend-text">
              <h3 className="text-xl xs:text-2xl font-semibold font-playfair">{products[currentSlide].name}</h3>
              <p className="text-base xs:text-lg font-lora">{products[currentSlide].price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}