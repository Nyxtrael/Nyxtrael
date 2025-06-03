import Link from 'next/link';

export default function ArtistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white dark:bg-[#1f2937] text-[#1f2937] dark:text-[#e5e7eb] p-4 shadow-md">
        <nav className="flex justify-between items-center max-w-5xl mx-auto">
          <Link href="/example-work/artist" className="text-xl font-serif font-bold">Artist Portfolio</Link>
          <div className="flex space-x-4">
            <Link href="#work" className="hover:text-[#f3e8ff] transition-colors">Work</Link>
            <Link href="#about" className="hover:text-[#f3e8ff] transition-colors">About</Link>
            <Link href="#services" className="hover:text-[#f3e8ff] transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-[#f3e8ff] transition-colors">Contact</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-white dark:bg-[#1f2937] text-[#1f2937] dark:text-[#e5e7eb] p-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Artist Portfolio</p>
      </footer>
    </>
  );
}