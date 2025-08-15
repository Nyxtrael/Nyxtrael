export default function SuccessPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold text-text-base">Payment successful 🎉</h1>
      <p className="mt-3 text-text-muted">Your subscription is active. A receipt has been emailed (demo).</p>
      <a href="/example-work/payments#billing" className="inline-block mt-6 px-6 py-3 bg-gradient-cta text-neutral-900 rounded-md font-semibold">Go to Billing</a>
    </div>
  );
}
