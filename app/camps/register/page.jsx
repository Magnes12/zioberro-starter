"use client"

import { useState } from "react"
import Link from "next/link"

export default function CampRegisterPage() {
  const [formData, setFormData] = useState({
    participantName: "",
    dateOfBirth: "",
    pesel: "",
    participantPhone: "",
    clubName: "",
    trainingLevel: "1",
    height: "",
    allergies: "",
    parentEmail: "",
    parentPhone: "",
    invoiceRequest: false,
    invoiceDetails: "",
    consentRODO: false,
    consentPhoto: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log("Dane do wysłania:", formData)

      const response = await fetch("/api/sendForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert("Błąd podczas wysyłania formularza.")
      }
    } catch (err) {
      console.error(err)
      alert("Nie udało się wysłać formularza. Spróbuj ponownie.")
    }
  }

  const commonInput = "w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
  const label = "block text-sm font-bold text-[#00ff00] mb-2"

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#00ff00]">Formularz Rejestracyjny – Ziobi Camp</h1>
          <p className="text-gray-400 mb-10">
            Prosimy o wypełnienie wszystkich wymaganych pól. Po przesłaniu formularza otrzymają Państwo wiadomość potwierdzającą.
          </p>

          {submitted && (
            <div className="mb-8 p-4 rounded-lg bg-[#00ff00]/20 border border-[#00ff00]/50 text-[#00ff00] text-center font-semibold animate-pulse">
              ✓ Rejestracja wysłana! Skontaktujemy się z Państwem wkrótce.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 bg-[#00ff00]/5 p-8 rounded-lg border border-[#00ff00]/30">
            
            {/* --- Dane uczestnika --- */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Dane Uczestnika</h3>
              
              <div>
                <label htmlFor="participantName" className={label}>Nazwisko i Imię</label>
                <input id="participantName" name="participantName" required value={formData.participantName} onChange={handleChange} className={commonInput} />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className={label}>Data Urodzenia</label>
                <input id="dateOfBirth" name="dateOfBirth" type="date" required value={formData.dateOfBirth} onChange={handleChange} className={commonInput} />
              </div>

              <div>
                <label htmlFor="pesel" className={label}>PESEL</label>
                <input id="pesel" name="pesel" type="text" pattern="\d{11}" required value={formData.pesel} onChange={handleChange} className={commonInput} />
              </div>

              <div>
                <label htmlFor="clubName" className={label}>Nazwa Klubu</label>
                <input id="clubName" name="clubName" value={formData.clubName} onChange={handleChange} className={commonInput} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="participantPhone" className={label}>Numer Telefonu</label>
                  <input id="participantPhone" name="participantPhone" value={formData.participantPhone} onChange={handleChange} className={commonInput} />
                </div>

                <div>
                  <label htmlFor="height" className={label}>Wzrost (cm)</label>
                  <input id="height" name="height" type="number" required min="50" max="250" value={formData.height} onChange={handleChange} className={commonInput} />
                </div>
              </div>

              <div>
                <label htmlFor="trainingLevel" className={label}>Ilość Treningów Bramkarskich</label>
                <select id="trainingLevel" name="trainingLevel" value={formData.trainingLevel} onChange={handleChange} className={commonInput}>
                  {[1, 2, 3, 4, 5].map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="allergies" className={label}>Alergie / Diety</label>
                <textarea id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} rows="2" placeholder="Nie dotyczy lub wpisz szczegóły" className={commonInput} />
              </div>
            </div>

            {/* --- Dane rodzica --- */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Dane Rodzica/Opiekuna</h3>

              <div>
                <label htmlFor="parentEmail" className={label}>Adres E-mail</label>
                <input id="parentEmail" name="parentEmail" type="email" required value={formData.parentEmail} onChange={handleChange} className={commonInput} />
              </div>

              <div>
                <label htmlFor="parentPhone" className={label}>Numer Telefonu</label>
                <input id="parentPhone" name="parentPhone" type="tel" required value={formData.parentPhone} onChange={handleChange} className={commonInput} />
              </div>
            </div>

            {/* --- Faktura --- */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Faktura</h3>

              <div className="flex items-center space-x-3">
                <input id="invoiceRequest" name="invoiceRequest" type="checkbox" checked={formData.invoiceRequest} onChange={handleChange} className="h-5 w-5 text-[#00ff00] border-[#00ff00] rounded cursor-pointer" />
                <label htmlFor="invoiceRequest" className="text-white">Czy chcą Państwo Fakturę VAT?</label>
              </div>

              {formData.invoiceRequest && (
                <div>
                  <label htmlFor="invoiceDetails" className={label}>Dane do Faktury</label>
                  <textarea id="invoiceDetails" name="invoiceDetails" required value={formData.invoiceDetails} onChange={handleChange} rows="3" placeholder="Nazwa firmy, NIP, adres..." className={commonInput} />
                </div>
              )}
            </div>

            {/* --- Zgody --- */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Zgody</h3>

              <label className="flex items-start space-x-3 text-gray-300">
                <input type="checkbox" name="consentRODO" required checked={formData.consentRODO} onChange={handleChange} className="mt-1 h-5 w-5 text-[#00ff00]" />
                <span>
                  Wyrażam zgodę na przetwarzanie danych osobowych w celu rejestracji uczestnika obozu, zgodnie z RODO.
                </span>
              </label>

              <label className="flex items-start space-x-3 text-gray-300">
                <input type="checkbox" name="consentPhoto" checked={formData.consentPhoto} onChange={handleChange} className="mt-1 h-5 w-5 text-[#00ff00]" />
                <span>
                  Wyrażam zgodę na wykorzystanie zdjęć i materiałów filmowych zawierających wizerunek mojego dziecka podczas trwania obozu.
                </span>
              </label>
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-[#00ff00] text-black font-bold rounded-lg hover:scale-105 transition-transform">
              Wyślij Rejestrację
            </button>

            <div className="text-center pt-6">
              <Link href="/camps" className="text-[#00ff00]/80 hover:text-[#00ff00] underline">← Wróć do oferty</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
