'use client';

import Hero from './componentsforms/HeroForms';
import Features from './componentsforms/FeaturesList';
import MultiForm from './componentsforms/MultiForm';
import FAQForms from './componentsforms/FAQForms';

export default function AdvancedFormsPage() {
  return (
    <>
      <Hero />

      <section id="overview" className="max-w-7xl mx-auto px-4 py-10">
        <Features />
      </section>

      <section id="demo" className="max-w-4xl mx-auto px-4 py-8">
        <MultiForm />
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-4 py-12">
        <FAQForms />
      </section>
    </>
  );
}
