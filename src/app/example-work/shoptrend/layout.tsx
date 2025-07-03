import Link from 'next/link';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-[#1f2937] p-4 shadow-md">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <Link href="/" className="text-xl font-bold">Portfolio</Link>
          <Link href="/example-work/shop" className="text-lg font-semibold scroll-smooth">ShopTrend</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-[#1f2937] p-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} ShopTrend Demo</p>
      </footer>
    </>
  );
}