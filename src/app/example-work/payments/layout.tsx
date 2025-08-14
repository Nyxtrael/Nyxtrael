import Link from 'next/link';

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* local subnav sits below global */}
      <header className="sticky top-[var(--site-nav-h,64px)] z-20 bg-neutral-bg/90 backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm underline text-text-muted hover:text-accent">← Back to Portfolio</Link>
            <Link href="/example-work/payments" className="text-lg font-serif font-bold text-text-base hover:text-accent">Subscriptions & Payments</Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-text-muted">
            <a href="#overview" className="hover:text-accent">Overview</a>
            <a href="#plans" className="hover:text-accent">Plans</a>
            <a href="#checkout" className="hover:text-accent">Checkout</a>
            <a href="#webhooks" className="hover:text-accent">Webhooks</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
          </div>
        </nav>
      </header>
      <main className="pt-3 min-h-[60vh]">{children}</main>
      <footer className="border-t border-white/10 py-8 text-center text-text-muted">
        © {new Date().getFullYear()} Payments Demo — mock UI
      </footer>
    </>
  );
}
