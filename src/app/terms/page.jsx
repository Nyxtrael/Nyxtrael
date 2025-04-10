export default function TermsPage() {
  return (
    <main className="min-h-screen text-white px-6 py-24 md:px-16 bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold mb-6">📜 Terms & Refund Policy</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">⏳ 1. Completion & Contact</h2>
          <p className="text-neutral-300">
            All orders are typically completed within <strong>1–3 business days</strong> unless otherwise stated.
            You will receive confirmation and updates via email or the contact method you provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🎨 2. License & Usage</h2>
          <p className="text-neutral-300">
            Unless explicitly agreed otherwise, all commissioned artworks are <strong>for personal use only</strong>.
            Commercial use, resale, or redistribution is <strong>prohibited</strong> without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🌀 3. Liability & Magic Disclaimer</h2>
          <p className="text-neutral-300">
            Nyxtrael is not responsible for delays caused by incorrect contact information, unclear project
            descriptions, or external factors beyond control (e.g. internet outage, planetary alignment, etc.).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔁 4. Policy Updates</h2>
          <p className="text-neutral-300">
            We reserve the right to update these policies at any time. Updates will be reflected on this page and apply to all future orders.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📬 5. Contact & Issue Resolution</h2>
          <p className="text-neutral-300">
            If you experience any issues with your order, please contact us via <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nyxtrael@gmail.com&su=Regarding%20my%20order&body=Hi%20Nyxtrael," 
              target="_blank" rel="noopener noreferrer" 
              className="underline text-purple-400">
              nyxtrael@gmail.com
            </a> within <strong>7 days of delivery</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">💸 6. Refund & Cancellation Policy</h2>
          <p className="text-neutral-300">
            Refunds are not issued once work has started, unless due to major technical failure on our side.
            You may cancel your order before receiving a confirmation, and receive a full refund.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🧾 7. Payment Processing</h2>
          <p className="text-neutral-300">
            All payments are securely handled by Stripe. We do not store or process any payment data directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🔐 8. Privacy Note</h2>
          <p className="text-neutral-300">
            Contact details are only used to complete your order and are not shared with third parties.
          </p>
        </section>
      </div>
    </main>
  );
}