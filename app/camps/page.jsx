"use client"

import { useState } from "react"

export default function Camps() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    message: "",
    camp: "summer",
  })
  const [submitted, setSubmitted] = useState(false)

  const camps = [
    {
      id: "summer",
      name: "Letni Obóz Elitarny",
      date: "Lipiec - Sierpień",
      price: "PLN 499",
      description: "Intensywny 2-tygodniowy program treningowy dla zaawansowanych bramkarzy",
      spots: "15 dostępnych miejsc",
    },
    {
      id: "winter",
      name: "Zimowy Obóz Pro",
      date: "Grudzień - Styczeń",
      price: "PLN 599",
      description: "Zaawansowany trening techniki i przygotowania mentalnego",
      spots: "10 dostępnych miejsc",
    },
    {
      id: "online",
      name: "Trening Online",
      date: "Cały rok",
      price: "PLN 29/miesiąc",
      description: "Cotygodniowe sesje coachingowe i analiza wideo",
      spots: "Nieograniczone",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", age: "", message: "", camp: "summer" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error) 
    }
  }

  return (
    <div className="min-h-screen bg-black">

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Obozy Treningowe</h1> 
          <p className="text-gray-400 text-lg mb-16">
            Wybierz swoją drogę do doskonałości. Dołącz do jednego z naszych specjalistycznych programów szkoleniowych dla bramkarzy.
          </p>

          {/* Karty Obozów */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {camps.map((camp) => (
              <div
                key={camp.id}
                className="p-8 rounded-lg border border-[#00ff00]/30 bg-[#00ff00]/5 glow-hover transition-all duration-300 hover:bg-[#00ff00]/10 hover:border-[#00ff00]/60"
              >
                <h3 className="text-2xl font-bold text-[#00ff00] mb-2">{camp.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{camp.date}</p>
                <p className="text-white text-3xl font-bold mb-4">{camp.price}</p>
                <p className="text-gray-300 mb-4">{camp.description}</p>
                <p className="text-[#00ff00] text-sm font-semibold">{camp.spots}</p>
              </div>
            ))}
          </div>

          {/* Formularz Rejestracyjny */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center glow-text">Zarejestruj się na Obóz</h2>

            {submitted && (
              <div className="mb-8 p-4 rounded-lg bg-[#00ff00]/20 border border-[#00ff00]/50 text-[#00ff00] text-center font-semibold animate-pulse">
                ✓ Rejestracja wysłana! Skontaktujemy się z Tobą wkrótce.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#00ff00]/5 p-8 rounded-lg border border-[#00ff00]/30"
            >
              <div>
                <label className="block text-sm font-bold text-[#00ff00] mb-2">Imię i nazwisko</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#00ff00] mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#00ff00] mb-2">Wiek</label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#00ff00] mb-2">Wybierz Obóz</label>
                <select
                  value={formData.camp}
                  onChange={(e) => setFormData({ ...formData, camp: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                >
                  {camps.map((camp) => (
                    <option key={camp.id} value={camp.id}>
                      {camp.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#00ff00] mb-2">Wiadomość</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#00ff00] text-black font-bold rounded-lg glow-hover transition-all duration-300 hover:scale-105"
              >
                Wyślij Rejestrację
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}