import Link from "next/link";
import { caseStudies } from "./data";

export default async function CaseStudiesPage() {
  console.log("Rendering Case Studies page with slugs:", caseStudies.map((cs) => cs.slug)); // Debug log

  return (
    <div className="min-h-screen bg-background py-24">
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary mb-12 text-center heading-underline">
          Our Case Studies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={caseStudy.slug}
              href={`/case-studies/${caseStudy.slug}`}
              className="card bg-surface rounded-lg p-6 opacity-0 animate-[fadeInUp_0.6s_ease-in-out_forwards] [animation-delay:calc(var(--index)*0.2s)]"
              style={{ "--index": index } as React.CSSProperties}
            >
              <h2 className="text-2xl font-semibold text-text-primary mb-4">{caseStudy.title}</h2>
              <p className="text-text-secondary mb-4">{caseStudy.description}</p>
              <span className="text-accent text-sm font-semibold">Read More →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}