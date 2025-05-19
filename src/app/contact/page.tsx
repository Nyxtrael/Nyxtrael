import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main>
      {/* Contact Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-background pattern-grid">
        <div className="max-w-5xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 heading-underline">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed">
            We’d love to hear from you. Let’s discuss your next project or collaboration.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-30" />
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-12 heading-underline">
            Contact Details
          </h2>
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Email Section */}
            <div className="w-full flex items-center justify-center gap-4">
              <FaEnvelope className="text-accent text-xl" />
              <a
                href="mailto:hello@nyxcorp.com"
                className="text-text-secondary hover:text-accent transition-colors text-lg"
              >
                hello@nyxcorp.com
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="w-full flex items-center justify-center gap-10">
              <a
                href="https://twitter.com/nyxcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com/nyxcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com/in/nyxcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://fiverr.com/nyxcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Fiverr Profile"
              >
                <SiFiverr size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background pattern-grid">
        <div className="max-w-5xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 heading-underline">
            Ready to Start?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
            Reach out today to begin your project with our expert team.
          </p>
          <a
            href="#"
            className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-lg"
          >
            Let’s Collaborate
          </a>
        </div>
      </section>
    </main>
  );
}