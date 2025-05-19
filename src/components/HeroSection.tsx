import HeroSection from "./HeroSection";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);
  if (!caseStudy) {
    return <div className="text-center text-text-primary py-24">Case study not found.</div>;
  }
  return (
    <>
      <Head>...</Head>
      <div className="min-h-screen bg-background">
        <HeroSection caseStudy={caseStudy} />
        {/* Reszta kodu */}
      </div>
    </>
  );
}