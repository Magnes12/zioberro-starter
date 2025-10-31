"use client"

import { useState } from "react"
import { Mail, Smartphone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="min-h-screen bg-black">

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Skontaktuj się</h1>
          <p className="text-gray-400 text-lg mb-16">Masz pytania? Chętnie z Tobą porozmawiamy. Wyślij nam wiadomość.</p>
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h2 className="text-2xl font-bold text-[#00ff00] mb-8">Informacje kontaktowe</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <Mail size={24} className="text-[#00ff00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">E-mail</h3>
                    <p className="text-gray-400">contact@zioberro.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Smartphone size={24} className="text-[#00ff00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin size={24} className="text-[#00ff00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Lokalizacja</h3>
                    <p className="text-gray-400">Warsaw, Poland</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#00ff00]/30 pt-8">
                <h3 className="font-bold text-[#00ff00] mb-4">Obserwuj mnie</h3>
                <div className="flex gap-4">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-lg hover:bg-[#00ff00]/20 transition-colors"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-lg hover:bg-[#00ff00]/20 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#00ff00]/10 border border-[#00ff00]/30 rounded-lg hover:bg-[#00ff00]/20 transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#00ff00] mb-8">Wyślij wiadomość</h2>

              {submitted && (
                <div className="mb-8 p-4 rounded-lg bg-[#00ff00]/20 border border-[#00ff00]/50 text-[#00ff00] text-center font-semibold animate-pulse">
                  ✓ Wiadomość wysłana! Wkrótce się z Tobą skontaktujemy.
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
                  <label className="block text-sm font-bold text-[#00ff00] mb-2">Temat</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#00ff00] mb-2">Wiadomość</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#00ff00] text-black font-bold rounded-lg glow-hover transition-all duration-300 hover:scale-105"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}