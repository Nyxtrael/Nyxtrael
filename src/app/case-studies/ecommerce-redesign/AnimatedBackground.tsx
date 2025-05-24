export default function AnimatedBackground() {
  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-shoptrend-bg via-white/10 to-shoptrend-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-50" />
    </div>
  );
}