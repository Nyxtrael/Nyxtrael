import Image from "next/image";

export default function CustomerStories({ customerStories }: { customerStories: Array<{ image: string; caption: string; customerName: string; initials: string }> }) {
  return (
    <section id="stories" role="region" aria-labelledby="stories-heading" className="section bg-shoptrend-bg">
      <div className="container">
        <h2
          id="stories-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline animate-fade-in"
        >
          Customer Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerStories.map((story, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown hover:scale-[1.03] hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-transform transition-shadow duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={story.image}
                alt={`Story from ${story.customerName} - ${story.caption}`}
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                loading="lazy"
              />
              <div className="absolute inset-0 bg-shoptrend-brown/20 flex items-end p-4">
                <div className="text-shoptrend-text">
                  <p className="font-lora text-base leading-relaxed">{story.caption}</p>
                  <p className="text-sm font-playfair mt-2 text-shoptrend-gold">— {story.customerName} ({story.initials})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}