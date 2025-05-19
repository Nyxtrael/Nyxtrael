import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { caseStudies } from "./data";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <div className="text-center text-text-primary py-24">Case study not found.</div>;
  }

  // Parallax effect for Hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

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
        {/* Hero Section with Parallax Image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[90vh] flex items-center bg-background pattern-grid overflow-hidden"
        >
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.title} project image`}
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          </motion.div>
          <div className="relative max-w-6xl mx-auto px-4 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent mb-6 leading-tight"
            >
              {caseStudy.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-text-secondary mb-8 max-w-2xl"
            >
              {caseStudy.description}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-text-secondary text-lg"
            >
              {caseStudy.date}
            </motion.p>
          </div>
        </motion.section>

        {/* Overview Section */}
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-text-primary mb-6">Project Overview</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {caseStudy.context} Our goal was to create a seamless shopping experience that
                not only attracted new customers but also retained existing ones through improved
                performance and design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mockup Gallery */}
        <section className="py-24 bg-background pattern-grid">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-text-primary mb-12 text-center"
            >
              Design Showcase
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/images/ecommerce-revamp-mockup-${i}.jpg`}
                    alt={`Ecommerce Revamp Mockup ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach and Tools */}
        <section className="py-24 bg-surface">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Context */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold text-accent mb-4">Our Approach</h2>
                <p className="text-text-secondary text-lg">{caseStudy.approach}</p>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold text-accent mb-6">Tools Used</h2>
                <div className="flex flex-wrap gap-4">
                  {caseStudy.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      className="bg-gradient-to-r from-background to-accent text-text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-md cursor-pointer"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-accent mb-4">Results Achieved</h2>
              <p className="text-text-secondary text-lg">{caseStudy.outcome}</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 bg-background text-center"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
              Ready to Transform Your Business?
            </h2>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = caseStudies.map((cs) => ({
    params: { slug: cs.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: {} };
};