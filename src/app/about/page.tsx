export default function About() {
  return (
    <main>
      {/* About Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-background pattern-grid">
        <div className="max-w-5xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 heading-underline">
            About NyxCorp
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed">
            Discover the expertise, passion, and innovation driving our world-class web solutions.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30" />
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            NyxCorp was founded in 2020 with a vision to redefine web development through
            innovation and excellence. Starting as a small team of passionate developers, we’ve
            grown into a respected name in the industry, serving over 50 clients across diverse
            sectors. Our journey is marked by a relentless pursuit of quality, from crafting our
            first high-performance website to delivering complex enterprise solutions.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12">
            Based in a dynamic hub of technology, we draw inspiration from the modern office
            environment—clean lines, collaborative spaces, and cutting-edge tools. This ethos
            shapes our work, ensuring every project reflects precision and creativity.
          </p>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-background pattern-grid">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-surface p-6 rounded-lg card">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                Web Development
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Leveraging Next.js, React, and TypeScript, we build scalable websites with load
                times under 2 seconds, optimized for SEO and user experience.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg card">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                UI/UX Design
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Our designs boost user engagement by 30% on average, crafted with Figma and
                validated through user testing for intuitive navigation.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg card">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
                Consulting
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We provide strategic insights, helping clients increase digital ROI by up to 40%
                through tailored technology roadmaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-background p-6 rounded-lg text-center card">
              <div className="h-32 bg-accent rounded-full mb-4 mx-auto"></div> {/* Placeholder for image */}
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary">Alex Carter</h3>
              <p className="text-text-secondary">Lead Developer</p>
              <p className="text-sm text-text-secondary mt-2">
                8+ years in front-end development, specializing in React ecosystems.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg text-center card">
              <div className="h-32 bg-accent rounded-full mb-4 mx-auto"></div> {/* Placeholder for image */}
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary">Sara Mendes</h3>
              <p className="text-text-secondary">UI/UX Designer</p>
              <p className="text-sm text-text-secondary mt-2">
                Expert in user-centered design with 5+ years of experience.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg text-center card">
              <div className="h-32 bg-accent rounded-full mb-4 mx-auto"></div> {/* Placeholder for image */}
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary">Mark Ellis</h3>
              <p className="text-text-secondary">Strategy Consultant</p>
              <p className="text-sm text-text-secondary mt-2">
                10+ years advising tech firms on digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 bg-background pattern-grid">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-surface p-6 rounded-lg">
              <p className="text-lg text-text-secondary italic mb-4">
                “NyxCorp transformed our e-commerce platform, boosting sales by 35%. Their
                attention to detail is unmatched!”
              </p>
              <p className="text-text-primary font-semibold">- Jane Doe, CEO, ShopTrend</p>
            </div>
            <div className="bg-surface p-6 rounded-lg">
              <p className="text-lg text-text-secondary italic mb-4">
                “The dashboard they built gave us real-time insights, saving us hours weekly.
                Highly recommend their expertise!”
              </p>
              <p className="text-text-primary font-semibold">- John Smith, CTO, DataSync</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            Our Achievements
          </h2>
          <ul className="text-lg md:text-xl text-text-secondary space-y-6">
            <li>Completed 75+ projects with a 98% client satisfaction rate.</li>
            <li>Awarded “Best Web Development Firm” by Tech Innovate Awards 2023.</li>
            <li>Grown our client base by 150% since our inception in 2020.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-background pattern-grid text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 heading-underline">
            Ready to Collaborate?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
            Let’s build something extraordinary together. Get in touch to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}