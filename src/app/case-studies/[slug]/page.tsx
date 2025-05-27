import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { caseStudies } from '../data';

interface CaseStudyDetailProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyDetailProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) {
    return {
      title: 'Case Study Not Found – Nyxtrael',
      description: 'The case study you are looking for does not exist.',
    };
  }

  return {
    title: `${study.title} – Nyxtrael`,
    description: study.description,
    metadataBase: new URL('https://nyxtrael.com'),
    openGraph: {
      title: `${study.title} – Nyxtrael`,
      description: study.description,
      url: `https://nyxtrael.com/case-studies/${study.slug}`,
      siteName: 'Nyxtrael',
      images: [
        {
          url: study.thumbnail,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} – Nyxtrael`,
      description: study.description,
      images: [study.thumbnail],
    },
  };
}

export default function CaseStudyDetail({ params }: CaseStudyDetailProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main role="main" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow-delayed"></div>
      </div>

      {/* Hero Section */}
      <section className="section-spacing container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 heading-underline bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          {study.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter leading-relaxed">
          {study.description}
        </p>
      </section>

      {/* Project Overview */}
      <section className="section-spacing container mx-auto">
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">Context</h2>
              <p className="text-gray-400 font-inter">{study.context}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">Goal</h2>
              <p className="text-gray-400 font-inter">{study.goal}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">Challenges</h2>
              <p className="text-gray-400 font-inter">{study.challenges}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">Solutions</h2>
              <p className="text-gray-400 font-inter">{study.solutions}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">My Role</h2>
              <p className="text-gray-400 font-inter">{study.role}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">Technologies</h2>
              <p className="text-gray-400 font-inter">{study.technologies.join(', ')}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 font-montserrat">Result</h2>
              <p className="text-gray-400 font-inter">{study.result}</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-montserrat">
              {study.category}
            </span>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="section-spacing container mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center font-montserrat">
          Project Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {study.screenshots.map((screenshot, index) => (
            <div key={index} className="relative h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Feedback */}
      {study.feedback && study.feedback.length > 0 && (
        <section className="section-spacing container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center font-montserrat">
            Client Feedback
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {study.feedback.map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20">
                <p className="text-gray-400 font-inter italic">"{item.quote}"</p>
                <p className="text-gray-300 text-sm font-montserrat mt-2">{item.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Metrics */}
      {study.metrics && Object.keys(study.metrics).length > 0 && (
        <section className="section-spacing container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center font-montserrat">
            Project Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {Object.entries(study.metrics).map(([key, value]) => (
              <div key={key} className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 text-center">
                <p className="text-lg font-semibold text-white font-montserrat capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-2xl font-bold text-purple-400 font-montserrat mt-2">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Back to Case Studies */}
      <section className="section-spacing container mx-auto text-center">
        <Link
          href="/case-studies"
          className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
        >
          Back to Case Studies
        </Link>
      </section>

      {/* Footer CTA */}
      <footer className="py-10 bg-gray-800/50 text-gray-400 text-center border-t border-purple-500/20">
        <div className="container mx-auto space-y-4">
          <h3 className="text-lg font-semibold text-white font-montserrat">Want Something Like This?</h3>
          <p className="text-sm font-inter">Let’s collaborate to bring your vision to life.</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </footer>
    </main>
  );
}