import Link from 'next/link';

export default function HealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white dark:bg-[#1f2937] text-[#1f2937] dark:text-[#e5e7eb] p-4 shadow-md">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <Link href="/example-work/health" className="text-xl font-serif font-bold">Health & Wellness</Link>
          <div className="flex space-x-4">
            <Link href="#courses" className="hover:text-[#f97316] transition-colors">Courses</Link>
            <Link href="#blog" className="hover:text-[#f97316] transition-colors">Blog</Link>
            <Link href="#products" className="hover:text-[#f97316] transition-colors">Products</Link>
            <Link href="#contact" className="hover:text-[#f97316] transition-colors">Contact</Link>
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