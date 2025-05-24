import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section id="promo" role="region" aria-labelledby="promo-heading" className="section">
      <div className="container">
        <div className="bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-shoptrend-brown">
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/promo.jpg"
              alt="Specjalna oferta: 20% zniżki na pierwsze zakupy w ShopTrend"
              fill
              className="object-cover rounded-l-lg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 text-shoptrend-bg flex flex-col justify-center">
            <h2
              id="promo-heading"
              className="text-3xl xs:text-4xl font-playfair font-bold mb-4 animate-fade-in"
            >
              Special Offer!
            </h2>
            <p
              className="text-shoptrend-bg mb-4 font-lora leading-relaxed text-lg animate-slide-up"
            >
              Get 20% off your first purchase with code <span className="font-bold text-shoptrend-gold">TREND20</span>. Shop now and elevate your style!
            </p>
            <Link
              href="#products"
              className="bg-shoptrend-bg text-shoptrend-text px-8 py-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-shoptrend-gold font-lora shadow-md text-lg border border-shoptrend-gold animate-pulse"
              aria-label="Claim discount"
            >
              Claim Discount
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}