import Link from 'next/link';

export default function HealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Local subheader sits below global navbar */}
      <header className="sticky top-16 z-20 bg-white dark:bg-[#1f2937] text-[#1f2937] dark:text-[#e5e7eb] shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto h-14 px-4">
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm underline hover:text-[#f97316] transition-colors">← Back to Portfolio</Link>
            <Link href="/example-work/health" className="text-xl font-serif font-bold hover:text-[#f97316] transition-colors">Health & Wellness</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#courses" className="hover:text-[#f97316] transition-colors">Courses</a>
            <a href="#services" className="hover:text-[#f97316] transition-colors">Services</a>
            <a href="#trust" className="hover:text-[#f97316] transition-colors">Why Us</a>
            <a href="#blog" className="hover:text-[#f97316] transition-colors">Blog</a>
            <a href="#products" className="hover:text-[#f97316] transition-colors">Products</a>
            <a href="#contact" className="hover:text-[#f97316] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-white dark:bg-[#1f2937] text-[#1f2937] dark:text-[#e5e7eb] p-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Health & Wellness</p>
      </footer>
    </>
  );
}
