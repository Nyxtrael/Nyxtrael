import Image from "next/image";
import Link from "next/link";
import { Shirt, Watch, Gift } from "lucide-react";

interface Category {
  name: string;
  image: string;
  icon: "Shirt" | "Watch" | "Gift";
}

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  const iconMap = {
    Shirt: Shirt,
    Watch: Watch,
    Gift: Gift,
  };

  return (
    <section id="categories" role="region" aria-labelledby="categories-heading" className="section bg-shoptrend-bg">
      <div className="container">
        <h2
          id="categories-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline animate-fade-in"
        >
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <Link
                href={`/categories/${category.name.toLowerCase()}`}
                key={index}
                aria-label={`View ${category.name} category`}
              >
                <div
                  className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown hover:-translate-y-[10px] hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-transform transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Image
                    src={category.image}
                    alt={`Kategoria ${category.name}`}
                    fill
                    className="object-cover rounded-lg"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-shoptrend-brown/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <IconComponent className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl xs:text-2xl font-semibold font-playfair">{category.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}