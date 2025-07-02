'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    excerpt: 'A modern e-commerce store redesign to boost conversions.',
    metric: '+25% conversion increase',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    excerpt: 'An intuitive dashboard for real-time analytics.',
    metric: '40% faster load time',
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    excerpt: 'A vibrant one-pager for health courses.',
    metric: '90+ PageSpeed score',
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    excerpt: 'An elegant portfolio for a visual artist.',
    metric: '50% more engagement',
  },
];

const categories = ['All', 'SaaS & E-Commerce', 'Creative & Lifestyle'];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--neutral-bg) 0%, var(--neutral-mid) 50%, var(--neutral-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(var(--accent-rgb), 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(var(--accent-rgb), 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Portfolio Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 bg-neutral-bg">
        <div className="absolute inset-0წ

System: The build error in `src/app/portfolio/page.tsx` points to an issue with the `<main>` tag at line 110, with the message:

```
Error: Unexpected token `main`. Expected jsx identifier
```

This suggests that the JSX parser is encountering an issue with the `<main>` tag, which is likely due to a stale build cache, a file encoding issue, or a dependency-related problem causing the parser to misinterpret valid JSX. The provided `app/portfolio/page.tsx` code appears syntactically correct, so the issue may stem from external factors like the build environment or dependencies.

Below, I’ll provide the updated `app/portfolio/page.tsx` file, which is identical to the provided version, to ensure no syntax errors. I’ll also recommend steps to resolve the build error, focusing on clearing the cache, verifying dependencies, and checking file encoding. Since you requested to fix only `app/portfolio/page.tsx`, I’ll limit changes to this file and avoid modifying `app/portfolio/[slug]/page.tsx` or other files unless necessary.

---

### Fixing the Build Error

**Possible Causes**:
1. **Stale Build Cache**: The `.next` folder may contain outdated artifacts, causing the JSX parser to fail.
2. **File Encoding or Invisible Characters**: The file might contain invisible Unicode characters or incorrect encoding (e.g., UTF-8 with BOM), confusing the parser.
3. **Dependency Issues**: Incompatible versions of `react`, `react-dom`, `next`, or `framer-motion` could cause JSX parsing errors.
4. **Webpack Misconfiguration**: Custom Webpack settings in `next.config.js` might interfere with JSX parsing.
5. **Module Resolution**: Issues with `framer-motion` or `lucide-react` imports could indirectly affect the build.

**Solution**:
1. **Clear Build Cache**:
   - Delete the `.next` folder to remove stale build artifacts:

     ```bash
     rm -rf .next
     npm run build
     ```

2. **Verify File Encoding**:
   - Open `src/app/portfolio/page.tsx` in an editor (e.g., VS Code) and ensure it’s saved with UTF-8 encoding without BOM (Byte Order Mark).
   - To eliminate invisible characters, copy the code below into a new file and save it as `page.tsx`.

3. **Update Dependencies**:
   - Ensure compatible versions of dependencies in `package.json`:

     ```json
     {
       "dependencies": {
         "next": "14.2.15",
         "react": "^18.2.0",
         "react-dom": "^18.2.0",
         "framer-motion": "^11.2.0",
         "lucide-react": "^0.441.0",
         "swiper": "^11.1.0"
       }
     }
     ```

   - Run:

     ```bash
     npm install
     ```

4. **Check `next.config.js`**:
   - Verify that `next.config.js` does not override Webpack settings that could break JSX parsing. A minimal configuration is recommended:

     ```js
     /** @type {import('next').NextConfig} */
     const nextConfig = {
       reactStrictMode: true,
     };

     module.exports = nextConfig;
     ```

5. **Test Locally**:
   - Run the development server to check for errors:

     ```bash
     npm run dev
     ```

   - Navigate to `http://localhost:3000/portfolio` and inspect the terminal and browser console for additional clues.

6. **Check for Syntax Errors**:
   - Run a linter (if configured, e.g., ESLint) to catch potential issues:

     ```bash
     npm run lint
     ```

7. **Update Next.js** (Optional):
   - The error log notes that Next.js 14.2.15 is outdated. If compatible with your dependencies, consider upgrading to the latest version (e.g., 15.x):

     ```bash
     npm install next@latest
     ```

   - Review the Next.js changelog for breaking changes before upgrading.

---

### Updated Portfolio Page (`app/portfolio/page.tsx`)

The provided `app/portfolio/page.tsx` is syntactically correct, uses Tailwind config colors (`var(--neutral-bg)`, `var(--neutral-mid)`, `var(--accent-rgb)`), `font-inter`, and `lucide-react` for `ArrowRight`. I’m including it below to ensure no invisible characters or encoding issues. Copy this code into `src/app/portfolio/page.tsx` to rule out file corruption.

<xaiArtifact artifact_id="9d7028c5-2cc2-43b5-9f70-09e3a0b76a82" artifact_version_id="788ceac5-d72d-4663-ad43-dffef2f590d0" title="page.tsx" contentType="text/typescript">
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    slug: 'shoptrend',
    title: 'ShopTrend – E-commerce Redesign',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/shoptrend-cover.jpg',
    excerpt: 'A modern e-commerce store redesign to boost conversions.',
    metric: '+25% conversion increase',
  },
  {
    slug: 'datasync',
    title: 'DataSync – SaaS Analytics Dashboard',
    category: 'SaaS & E-Commerce',
    coverImage: '/images/portfolio/datasync-cover.jpg',
    excerpt: 'An intuitive dashboard for real-time analytics.',
    metric: '40% faster load time',
  },
  {
    slug: 'health-wellness',
    title: 'Health & Wellness – Diet Plans',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/health-wellness-cover.jpg',
    excerpt: 'A vibrant one-pager for health courses.',
    metric: '90+ PageSpeed score',
  },
  {
    slug: 'artist-portfolio',
    title: 'Artist Portfolio – Creative Showcase',
    category: 'Creative & Lifestyle',
    coverImage: '/images/portfolio/artist-portfolio-cover.jpg',
    excerpt: 'An elegant portfolio for a visual artist.',
    metric: '50% more engagement',
  },
];

const categories = ['All', 'SaaS & E-Commerce', 'Creative & Lifestyle'];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--neutral-bg) 0%, var(--neutral-mid) 50%, var(--neutral-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(var(--accent-rgb), 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(var(--accent-rgb), 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Portfolio Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 bg-neutral-bg">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            Portfolio
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-inter leading-relaxed">
            Explore my projects, from e-commerce redesigns to SaaS dashboards, each crafted to deliver impactful results.
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Category Filters */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-inter font-semibold ${
                  selectedCategory === category
                    ? 'bg-accent text-neutral-dark'
                    : 'bg-neutral-mid text-text-base hover:bg-accent hover:text-neutral-dark'
                } transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="bg-neutral-mid rounded-lg overflow-hidden border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={project.coverImage}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-base mb-2">{project.title}</h3>
                  <p className="text-text-muted mb-2">{project.excerpt}</p>
                  <p className="text-accent text-sm mb-4">{project.metric}</p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-dark px-4 py-2 rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`View ${project.title} case study`}
                  >
                    View Case Study
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 bg-neutral-bg text-center">
        <motion.h2
          className="text-5xl font-bold text-text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Achieve Similar Results?
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </motion.h2>
        <motion.p
          className="text-xl text-text-muted mb-10 max-w-3xl mx-auto font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s collaborate to create a high-performance web solution. I’ll respond within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold bg-gradient-cta text-neutral-dark hover:shadow-accent/50 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Get in touch with Nyxtrael"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}