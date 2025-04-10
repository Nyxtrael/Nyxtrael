import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Nyxtrael',
  description: 'AI art portfolio of myth and silence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <footer className="pt-10 pb-6 border-t border-purple-900 text-sm text-neutral-500 text-center">
          © 2025 Nyxtrael |{' '}
          <Link href="/faq" className="hover:text-white underline">FAQ</Link>{' '}
          |{' '}
          <Link href="/terms" className="hover:text-white underline">Terms of Service</Link>{' '}
          |{' '}
          <Link href="/terms" className="hover:text-white underline">Refund Policy</Link>{' '}
          |{' '}
          <Link href="/contact" className="hover:text-white underline">Contact</Link>
        </footer>
      </body>
    </html>
  );
}