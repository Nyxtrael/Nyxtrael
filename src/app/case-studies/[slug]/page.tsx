"use client";

import { caseStudies } from "../data";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    return <div className="text-center text-text-primary py-24">Case study not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | NyxCorp Case Studies</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.description} />
        <meta property="og:image" content={caseStudy.image} />
      </Head>
      <div className="min-h-screen bg-background">
        <HeroSection caseStudy={caseStudy} />
        {/* Overview Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4">
            <div className="opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]">
              <h2 className="text-4xl font-bold text-text-primary mb-6">Project Overview</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {caseStudy.context} Our goal was to create a seamless shopping experience that
                not only attracted new customers but also retained existing ones through improved
                performance and design.
              </p>
            </div>
          </div>
        </section>

        {/* Mockup Gallery */}
        <section className="py-24 bg-background pattern-grid">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-text-primary mb-12 text-center opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]">
              Design Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg opacity-0 animate-[fadeInUp_0.6s_ease-in-out_forwards] [animation-delay:calc(var(--index)*0.2s)]"
                  style={{ "--index": i } as React.CSSProperties}
                >
                  <Image
                    src={`/images/ecommerce-revamp-mockup-${i}.jpg`}
                    alt={`Ecommerce Revamp Mockup ${i}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach and Tools */}
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Approach */}
              <div className="opacity-0 animate-[fadeInLeft_0.6s_ease-in-out_forwards]">
                <h2 className="text-3xl font-semibold text-accent mb-4">Our Approach</h2>
                <p className="text-text-secondary text-lg">{caseStudy.approach}</p>
              </div>

              {/* Tools */}
              <div className="opacity-0 animate-[fadeInRight_0.6s_ease-in-out_forwards]">
                <h2 className="text-3xl font-semibold text-accent mb-6">Tools Used</h2>
                <div className="flex flex-wrap gap-4">
                  {caseStudy.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-background to-accent text-text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-md cursor-pointer opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards] [animation-delay:calc(var(--index)*0.1s)]"
                      style={{ "--index": index } as React.CSSProperties}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div className="opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]">
              <h2 className="text-3xl font-semibold text-accent mb-4">Results Achieved</h2>
              <p className="text-text-secondary text-lg">{caseStudy.outcome}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background text-center opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
              Ready to Transform Your Business?
            </h2>
            <a
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
}