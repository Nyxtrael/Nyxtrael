'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: '🏠 Home', path: '/' },
    { label: '✨ Series', path: '/series' },
    { label: '📜 About', path: '/about' },
    { label: '🛠 Services', path: '/services' },
    { label: '🛒 Order', path: '/order' },
    { label: '📩 Contact', path: '/contact' },
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black bg-opacity-60 backdrop-blur-md text-sm text-white sticky top-0 z-50">
      <Link href="/" className="font-bold text-lg hover:text-white transition">
        Nyxtrael
      </Link>
      <div className="flex gap-4 items-center overflow-x-auto">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            href={path}
            className={`nav-link ${pathname === path ? 'text-white after:w-full' : 'text-neutral-400'}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
