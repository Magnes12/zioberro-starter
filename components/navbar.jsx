"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Strona główna", href: "/" },
    { name: "O mnie", href: "/about" },
    { name: "Obozy", href: "/camps" },
    { name: "Galeria", href: "/gallery" },
    { name: "Kontakt", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#00ff00]/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold glow-text">
            Z1OBERRO
          </Link>

          {/* Menu Desktopowe */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-widest hover:text-[#00ff00] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Przycisk Menu Mobilnego */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobilne */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-sm uppercase tracking-widest hover:text-[#00ff00] hover:bg-[#00ff00]/10 transition-all rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}