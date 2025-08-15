import Link from 'next/link';

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Stylowanie globalne dla offsetów i wysokości */}
      <style>{`
        :root{ --site-nav-h: 64px; }             /* jeżeli Twój główny navbar ma inną wysokość, zmień tu */
        .cms-subnav{ --subnav-h: 56px; }
        /* offset dla #overview, #content itd. */
        .cms-root [id]{ scroll-margin-top: calc(var(--site-nav-h,64px) + var(--subnav-h,56px) + 16px); }
      `}</style>

      {/* Lokalny subnav CMS — siedzi POD globalnym */}
      <header className="cms-subnav sticky top-[var(--site-nav-h,64px)] z-30 bg-neutral-bg/90 backdrop-blur border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm underline text-text-muted hover:text-accent">
              ← Back to Portfolio
            </Link>
            <Link href="/example-work/cms" className="text-lg font-serif font-bold text-text-base hover:text-accent">
              CMS Demo
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4 text-text-muted">
            <a href="#overview" className="hover:text-accent">Overview</a>
            <a href="#content"  className="hover:text-accent">Content</a>
            <a href="#editor"   className="hover:text-accent">Editor</a>
            <a href="#workflow" className="hover:text-accent">Workflow</a>
            <a href="#media"    className="hover:text-accent">Media</a>
            <a href="#users"    className="hover:text-accent">Users</a>
            <a href="#settings" className="hover:text-accent">Settings</a>
            <a href="#roles"    className="hover:text-accent">Roles</a>
            <a href="#data"     className="hover:text-accent">Data</a>
            <a href="#audit"    className="hover:text-accent">Audit</a>
          </div>
        </nav>
      </header>

      {/* padding-top = wysokość subnava, więc nic na siebie nie nachodzi */}
      <main className="cms-root pt-[calc(var(--subnav-h,56px)+12px)]">
        {children}
      </main>
    </>
  );
}
