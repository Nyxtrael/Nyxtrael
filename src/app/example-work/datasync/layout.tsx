import Link from 'next/link';

export default function DataLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Local subheader sits below global navbar */}
      <header className="sticky top-16 z-20 bg-neutral-bg/90 backdrop-blur border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm underline text-text-muted hover:text-accent">← Back to Portfolio</Link>
            <Link href="/example-work/data" className="text-lg font-serif font-bold text-text-base hover:text-accent transition-colors">
              DataSync
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-text-muted">
            <a href="#features" className="hover:text-accent">Features</a>
            <a href="#dashboard" className="hover:text-accent">Dashboard</a>
            <a href="#integrations" className="hover:text-accent">Integrations</a>
            <a href="#security" className="hover:text-accent">Security</a>
            <a href="#pricing" className="hover:text-accent">Pricing</a>
          </div>
        </nav>
      </header>

      <main className="min-h-[60vh]">{children}</main>

      <footer className="border-t border-white/10 py-8 text-center text-text-muted">
        © {new Date().getFullYear()} DataSync Demo
      </footer>
    </>
  );
}
