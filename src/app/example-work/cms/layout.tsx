import Link from 'next/link';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Local subheader sits below global navbar */}
      <header className="sticky top-[var(--site-nav-h)] z-20 bg-neutral-bg/90 backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm underline text-text-muted hover:text-accent">← Back to Portfolio</Link>
            <Link href="/example-work/cms" className="text-lg font-serif font-bold text-text-base hover:text-accent transition-colors">
              CMS Demo
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-text-muted">
            <a href="#overview" className="hover:text-accent">Overview</a>
            <a href="#content" className="hover:text-accent">Content</a>
            <a href="#media" className="hover:text-accent">Media</a>
            <a href="#users" className="hover:text-accent">Users</a>
            <a href="#settings" className="hover:text-accent">Settings</a>
            <a href="#audit" className="hover:text-accent">Audit Log</a>
          </div>
        </nav>
      </header>

      {/* mały bufor pod subheaderem, żeby nic nie wyglądało na ściśnięte */}
      <main className="pt-3 min-h-[60vh]">{children}</main>

      <footer className="border-t border-white/10 py-8 text-center text-text-muted">
        © {new Date().getFullYear()} CMS Demo — mock UI
      </footer>
    </>
  );
}
