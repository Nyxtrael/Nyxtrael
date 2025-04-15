'use client';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-6 text-purple-300">💸 Refund Policy</h1>

        <div className="bg-[#1a1525] p-6 rounded-xl space-y-6 text-neutral-200 text-sm md:text-base">
          <p><strong>Last updated:</strong> April 2025</p>

          <p>
            At <strong>Nyxtrael Studio</strong>, we’re dedicated to delivering high-quality creative services. While we pour our cosmic essence into every pixel, edit, and design, we understand things don't always go according to plan.
          </p>

          <h2 className="text-lg font-semibold text-purple-200 mt-4">🔄 Eligibility for Refund</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Refunds are available only within <strong>7 days</strong> of purchase for digital services that have <strong>not yet been started</strong>.</li>
            <li>For services already in progress or delivered, partial refunds may be granted at our discretion based on the scope of work completed.</li>
            <li>Once a final delivery (image, video, or site) has been sent, it is considered non-refundable unless otherwise stated in your contract or package terms.</li>
          </ul>

          <h2 className="text-lg font-semibold text-purple-200 mt-4">🧾 How to Request a Refund</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Send an email to <a href="mailto:nyxtrael.reply@gmail.com" className="text-purple-400">nyxtrael.reply@gmail.com</a> with your order number and reason for the refund.</li>
            <li>Include any relevant attachments or screenshots if applicable.</li>
            <li>You’ll receive a response within <strong>48 hours</strong> with next steps.</li>
          </ol>

          <h2 className="text-lg font-semibold text-purple-200 mt-4">❗ Non-Refundable Situations</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Change of mind after project completion.</li>
            <li>Delay in client response or failure to provide necessary materials.</li>
            <li>Requests made outside the 7-day eligibility window.</li>
          </ul>

          <h2 className="text-lg font-semibold text-purple-200 mt-4">🔐 Digital Products</h2>
          <p>
            Due to the nature of digital content, once a file is sent or downloaded, it is deemed consumed. Refunds are not provided for digital downloads unless the file is defective.
          </p>

          <h2 className="text-lg font-semibold text-purple-200 mt-4">👥 Dispute Resolution</h2>
          <p>
            If you’re unhappy, we’d rather talk it out than stare into the void. Contact us first — we'll try to make it right before summoning the legal wizards.
          </p>

          <p className="italic text-neutral-400">Questions? Reach out anytime at <a href="mailto:nyxtrael.reply@gmail.com" className="text-purple-400">nyxtrael.reply@gmail.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
