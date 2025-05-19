import { FaEnvelope, FaUser } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <div className="bg-surface p-6 rounded-lg card">
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">Send Us a Message</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-text-secondary mb-2">
            Name
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent">
              <FaUser />
            </span>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-2 bg-background text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-text-secondary mb-2">
            Email
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent">
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-2 bg-background text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-text-secondary mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={4}
            className="w-full pl-4 pr-4 py-2 bg-background text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold glow-hover transition-colors duration-300 shadow-lg"
          disabled
        >
          Send Message
        </button>
      </form>
    </div>
  );
}