"use client"

import Link from "next/link"
import { Youtube, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#00ff00]/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold glow-text mb-4">ZIOBERRO</h3>
            <p className="text-gray-400 text-sm">Bramkarz. Twórca. Mentor.</p> 
          </div>
          <div>
            <h4 className="font-bold text-[#00ff00] mb-4">Nawigacja</h4> 
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#00ff00] transition-colors">
                  Strona główna 
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00ff00] transition-colors">
                  O mnie 
                </Link>
              </li>
              <li>
                <Link href="/camps" className="hover:text-[#00ff00] transition-colors">
                  Obozy 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#00ff00] mb-4">Strony</h4> 
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/gallery" className="hover:text-[#00ff00] transition-colors">
                  Galeria 
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00ff00] transition-colors">
                  Kontakt 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#00ff00] mb-4">Obserwuj</h4> 
            <div className="flex gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00ff00] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#00ff00]/20 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Zioberro. Wszelkie prawa zastrzeżone. Trenuj. Broń. Inspiruj.</p> 
        </div>
      </div>
    </footer>
  )
}