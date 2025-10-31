import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Zioberro - Bramkarz i Twórca Treści",
  description: "Trenuj. Broń. Inspiruj. Dołącz do obozów piłkarskich i społeczności Zioberro.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
        <body className={`${_geist.className} antialiased bg-black text-white`}>
        <Navbar /> 

        <main>
            {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
