"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black">

      <section className="relative w-full overflow-hidden pt-16">

        <div
          className="fixed w-96 h-96 bg-[#00ff00]/20 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.1s ease-out",
            zIndex: 1,
          }}
        />

        <div className="relative z-10 h-screen md:h-[700px] flex items-center">

          <div className="absolute left-0 top-0 h-full w-32 md:w-48 flex z-5">
            <div className="w-1/3 bg-[#00ff00]" />
            <div className="w-1/3 bg-white/40" />
            <div className="w-1/3 bg-black" />
          </div>

          <div className="absolute inset-0 z-0">
            <img src="/goalkeeper-action-dynamic-neon-green-cinematic.jpg" alt="Bramkarz Zioberro w akcji" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_center,rgba(0,255,0,0.1)_0%,rgba(0,0,0,0.8)_80%)]" />
          </div>

          <div className="relative z-10 w-full px-4 md:px-12 lg:px-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              <div className="md:pl-32">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 glow-text tracking-tighter leading-none">
                  ZIOBERRO
                </h1>

                <div className="flex gap-6 mb-8">
                  <a
                    href="#"
                    className="text-[#00ff00] hover:scale-110 transition-transform duration-300"
                    title="TikTok"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.498 3.094c-.604-.582-1.282-.953-2.127-.953h-5.44c-1.922 0-3.502 1.581-3.502 3.503v5.441c0 .844.371 1.523.953 2.127.604.604 1.282.954 2.127.954h5.441c1.922 0 3.502-1.581 3.502-3.502v-5.44c0-.845-.371-1.524-.954-2.128z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#00ff00] hover:scale-110 transition-transform duration-300"
                    title="Instagram"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17" cy="7" r="1" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#00ff00] hover:scale-110 transition-transform duration-300"
                    title="Facebook"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a6 6 0 00-6 6v3H2v4h7v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                    </svg>
                  </a>
                </div>

                <p className="text-2xl md:text-3xl text-[#00ff00] font-bold tracking-widest mb-6 animate-pulse">
                  TRENUJ. BROŃ. INSPIRUJ.
                </p>

                <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                  Dołącz do Dawida "Zioberro" i opanuj sztukę bramkarstwa. Od elitarnych obozów treningowych po ekskluzywne 
                  treści – podnieś swój poziom gry.
                </p>

                <Link
                  href="/camps"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#00ff00] text-black font-bold text-lg rounded-lg glow-hover transition-all duration-300 hover:scale-105"
                >
                  Dołącz do Obozu <ArrowRight size={24} />
                </Link>
              </div>

              <div className="hidden md:block relative h-[350px]">
                <img
                  src="/goalkeeper-player-action-pose.jpg"
                  alt="Prezentacja zawodnika"
                  className="w-full h-full object-cover rounded-lg border-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black relative z-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">Co Oferujemy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elitarny Trening",
                description: "Coaching na poziomie mistrzowskim od profesjonalnego bramkarza",
                icon: "⚽",
              },
              {
                title: "Treści na Żywo",
                description: "Ekskluzywne materiały zza kulis i samouczki",
                icon: "🎥",
              },
              {
                title: "Społeczność",
                description: "Łącz się z bramkarzami z całego świata i wspólnie rozwijajcie swoje umiejętności",
                icon: "👥",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-lg bg-[#00ff00]/5 border border-[#00ff00]/30 glow-hover transition-all duration-300 hover:bg-[#00ff00]/10"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff00] mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}