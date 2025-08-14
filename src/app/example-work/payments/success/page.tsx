export default function SuccessPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-text-base">Payment successful 🎉</h1>
      <p className="text-text-muted mt-2">Your subscription is now active.</p>
      <a href="/example-work/payments#billing" className="inline-block mt-6 px-5 py-3 bg-gradient-cta text-neutral-900 rounded-md">Open billing portal</a>
    </div>
  );
}
