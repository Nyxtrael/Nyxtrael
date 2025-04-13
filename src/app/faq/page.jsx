export default function FAQPage() {
  const faqs = [
    {
      question: "How long does it take to receive my order?",
      answer:
        "Most orders are delivered within 1–3 business days, depending on the project size and package selected. We’ll confirm the timeline with you after the order is submitted.",
    },
    {
      question: "Can I choose the style of my artwork?",
      answer:
        "Yes. You can choose from a set of predefined visual styles or share references and moodboards in the order form. We’ll do our best to match your vision.",
    },
    {
      question: "Do you allow NSFW content?",
      answer:
        "We accept artistic nudity and mature themes (e.g. romantic, sensual) as long as they remain respectful and in line with platform policy. We do not accept content involving violence, gore, hate speech, or exploitative material. If you're unsure whether your request qualifies, feel free to describe it — we’ll let you know.",
    },
    {
      question: "Can I use the artwork commercially?",
      answer:
        "By default, orders are for personal use only. Commercial licenses are available upon request and must be agreed to before delivery. Please specify your needs clearly during the ordering process.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "Payments are handled via Stripe, which supports credit/debit cards, Apple Pay, Google Pay, and bank transfers. No account is required.",
    },
    {
      question: "Will I receive a receipt or invoice?",
      answer:
        "Yes. A confirmation is sent to your email immediately after payment. If you need an invoice for business or accounting purposes, please contact us at nyxtrael@gmail.com.",
    },
    {
      question: "What if I need changes to the final artwork?",
      answer:
        "Most packages include 1–2 rounds of revisions. The revision count depends on the chosen option and must be requested within 7 days of delivery.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, if your order hasn't entered the production phase. Once work begins, cancellations are no longer accepted unless there’s a technical or delivery issue on our side.",
    },
    {
      question: "Something went wrong — what should I do?",
      answer:
        "Contact us at nyxtrael@gmail.com with your order ID and a description of the issue. We'll respond within 24 hours and work with you to resolve it quickly and professionally.",
    },
  ];

  return (
    <main className="min-h-screen text-white px-6 py-24 md:px-16 bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">📌 Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-[#1f152a] p-4 rounded-xl border border-purple-900 cursor-pointer"
            >
              <summary className="font-semibold text-lg text-purple-300">
                {faq.question}
              </summary>
              <p className="mt-2 text-neutral-300 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}