import Link from 'next/link';
import Image from 'next/image';

const AboutSnippet: React.FC = () => {
  const techStack = ['React', 'Next.js', 'Tailwind', 'TypeScript'];
  const stats = [
    { label: 'Completed Projects', value: '12+' },
    { label: 'Years Experience', value: '3' },
    { label: 'On-Time Delivery', value: '100%' },
  ];

  return (
    <section className="section-spacing bg-neutral-mid">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 heading-underline animate-fade-in font-montserrat">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Personal Photo */}
          <div className="flex justify-center">
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael - Front-end Developer"
              width={300}
              height={300}
              className="rounded-full border-4 border-accent shadow-card hover:shadow-card-hover transition-shadow max-w-full h-auto"
              priority
            />
          </div>
          {/* Text Content */}
          <div className="text-center md:text-left space-y-4">
            <p className="text-lg text-[#F5F5F5] leading-relaxed animate-fade-in font-inter">
              Hi, I’m Nyxtrael—a front-end freelancer specializing in React and Next.js, with a strong portfolio of modern, responsive web applications and clean, maintainable code. I blend creative design with performance-first development to deliver fast, intuitive user experiences.
            </p>
            <p className="text-lg text-[#F5F5F5] leading-relaxed animate-fade-in font-inter">
              I prioritize transparent communication and meticulous attention to detail at every stage of a project. From sleek landing pages and interactive prototypes to full-featured SaaS dashboards, I collaborate closely with clients to understand their goals and consistently deliver on time. Let’s partner to turn your ideas into engaging, user-friendly realities.
            </p>
            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="text-3xl font-bold text-accent font-montserrat">{stat.value}</p>
                  <p className="text-sm text-[#F5F5F5] font-inter">{stat.label}</p>
                </div>
              ))}
            </div>
            {/* Tech Stack */}
            <ul className="flex justify-center md:justify-start gap-3 mb-6 flex-wrap">
              {techStack.map((tech, index) => (
                <li
                  key={tech}
                  className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="btn-primary inline-block font-medium text-white hover:scale-105 hover:shadow-teal-500/50 transition-all duration-300"
              aria-label="View Nyxtrael's full journey"
            >
              View Full Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;