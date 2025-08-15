export default function CancelPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold text-text-base">Checkout canceled</h1>
      <p className="mt-3 text-text-muted">No charges were made. You can resume anytime.</p>
      <a href="/example-work/payments#plans" className="inline-block mt-6 px-6 py-3 ring-1 ring-white/10 rounded-md">Back to plans</a>
    </div>
  );
}
