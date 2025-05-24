import Image from "next/image";
import Link from "next/link";

interface Product {
  image: string;
  name: string;
  price: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="products" role="region" aria-labelledby="products-heading" className="section bg-shoptrend-bg">
      <div className="container">
        <h2
          id="products-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline animate-fade-in"
        >
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              aria-label={`View ${product.name}`}
            >
              <div
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown hover:-translate-y-[10px] hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-transform transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Image
                  src={product.image}
                  alt={`Produkt ${product.name} w cenie ${product.price}`}
                  fill
                  className="object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-shoptrend-brown/30 flex items-end p-4">
                  <div className="text-shoptrend-text">
                    <h3 className="text-xl xs:text-2xl font-semibold font-playfair">{product.name}</h3>
                    <p className="text-base xs:text-lg font-lora">{product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}