"use client"

import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-black">

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 glow-text">O Zioberro</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src="/fot-getty.jpg" alt="Dawid Zioberro" className="rounded-lg border-glow w-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#00ff00] mb-6">Dawid "Zioberro" Kowalski</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Profesjonalny bramkarz z ponad 15-letnim doświadczeniem na najwyższych poziomach piłki nożnej. Dawid
                grał w czołowych ligach europejskich i reprezentował swoją drużynę narodową.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Poza boiskiem, Zioberro jest twórcą treści z rosnącym kanałem na YouTube, gdzie dzieli się
                wskazówkami treningowymi, analizą meczów i wglądem w mentalność bramkarza.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Jego misja jest prosta: trenować, bronić i inspirować następne pokolenie elitarnych bramkarzy na całym świecie.
              </p>
              <Link
                href="/camps"
                className="inline-block px-6 py-3 bg-[#00ff00] text-black font-bold rounded-lg glow-hover transition-all duration-300 hover:scale-105"
              >
                Poznaj Obozy Treningowe
              </Link>
            </div>
          </div>

          {/* Statystyki */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Lat w Sporcie", value: "15+" }, 
              { label: "Subskrybentów YouTube", value: "120K+" },
              { label: "Sesji Treningowych", value: "1000+" },
              { label: "Zorganizowanych Obozów", value: "50+" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-lg bg-[#00ff00]/5 border border-[#00ff00]/30 text-center">
                <div className="text-3xl font-bold text-[#00ff00] mb-2">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}