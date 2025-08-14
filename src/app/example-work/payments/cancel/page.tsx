export default function CancelPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-text-base">Checkout canceled</h1>
      <p className="text-text-muted mt-2">No charge was made. You can choose a plan and try again.</p>
      <a href="/example-work/payments#plans" className="inline-block mt-6 px-5 py-3 ring-1 ring-white/10 rounded-md text-text-base">Back to plans</a>
    </div>
  );
}
