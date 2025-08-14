import ContactSection from '../componentsartitst/ContactSection';

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-base">Contact</h1>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">Prefer writing? Send a message — I reply within 24 hours with next steps and pricing.</p>
      </div>
      <ContactSection />
    </div>
  );
}