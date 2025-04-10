export default function ThanksPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">🎉 Thank You!</h1>
        <p className="text-lg text-neutral-300 mb-4">
          Your order has been received and is currently being conjured into existence.
        </p>
        <p className="text-neutral-500 mb-8">
          I’ll reach out within 24h to confirm the details. If you paid via PayPal, your receipt is on its way.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold"
        >
          ⬅ Back to Home
        </a>
      </section>
    </main>
  );
}
