import type { Metadata } from 'next';
import LanguageSwitcher from '../componentsseo/LanguageSwitcher';

const content = {
  en: {
    title: 'SEO & i18n Demo — Clean metadata, alternates, JSON-LD',
    desc: 'Showcase of localized routes, structured data and Open Graph tags.',
    h1: 'Be Seen. Globally.',
    p1: 'This page demonstrates per-locale metadata, hreflang alternates and JSON-LD.',
    faq: [
      ['Do you support canonical and alternates?', 'Yes. We include language alternates and can add canonical easily.'],
      ['What about OG/Twitter cards?', 'We set titles/descriptions and can add dynamic images.'],
    ],
  },
  pl: {
    title: 'SEO i i18n — Czyste metadane, alternates, JSON-LD',
    desc: 'Prezentacja zlokalizowanych tras, danych strukturalnych i tagów Open Graph.',
    h1: 'Bądź widoczny. Globalnie.',
    p1: 'Ta strona prezentuje metadane per język, hreflang alternates oraz JSON-LD.',
    faq: [
      ['Czy wspierasz canonical i alternates?', 'Tak. Dodajemy alternatywy językowe i łatwo dokładamy canonical.'],
      ['A co z OG/Twitter?', 'Ustawiamy title/description i możemy dodać dynamiczne obrazy.'],
    ],
  },
} as const;

// Luźniejsze typy propsów, żeby pasowało do sprawdzania PageProps w Next 15
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const l = (params?.lang === 'pl' ? 'pl' : 'en') as 'en' | 'pl';
  const c = content[l];
  return {
    title: c.title,
    description: c.desc,
    alternates: {
      languages: {
        en: '/example-work/seo-i18n/en',
        pl: '/example-work/seo-i18n/pl',
      },
    },
    openGraph: {
      title: c.title,
      description: c.desc,
      url: `/example-work/seo-i18n/${l}`,
      siteName: 'Nyxtrael Portfolio',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: c.title, description: c.desc },
  };
}

export default function Page({ params }: any) {
  const l: 'en' | 'pl' = (params?.lang === 'pl' ? 'pl' : 'en');
  const c = content[l];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: c.title,
    description: c.desc,
    inLanguage: l,
    url: `/example-work/seo-i18n/${l}`,
  };

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] grid place-items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="relative z-10 space-y-3 px-6">
          <p className="uppercase tracking-widest text-accent/90 text-xs">Demo • SEO & i18n</p>
          <h1 className="text-5xl font-serif font-bold text-text-base">{c.h1}</h1>
          <p className="text-text-muted">{c.p1}</p>
          <div className="mt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </section>

      <section id="overview" className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ['Localized routes', 'Each language has its own URL'],
            ['Metadata per locale', 'Title/description and OG updated per language'],
            ['hreflang alternates', 'Signals for search engines'],
            ['JSON-LD', 'Structured data for rich results'],
          ].map(([t, d]) => (
            <div key={t} className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
              <div className="text-lg font-semibold text-text-base">{t}</div>
              <p className="text-sm text-text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="content" className="max-w-5xl mx-auto px-4 py-8">
        <article className="prose prose-invert max-w-none">
          <h2>{l === 'en' ? 'Sample content' : 'Przykładowa treść'}</h2>
          <p>
            {l === 'en'
              ? 'We can render content based on the locale param and switch seamlessly.'
              : 'Możemy renderować treści w oparciu o parametr języka i przełączać się płynnie.'}
          </p>
        </article>
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-text-base mb-3">{l === 'en' ? 'FAQ' : 'Najczęstsze pytania'}</h3>
        <ul className="space-y-3">
          {c.faq.map(([q, a]) => (
            <li key={q} className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
              <p className="font-semibold text-text-base">{q}</p>
              <p className="text-sm text-text-muted">{a}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
