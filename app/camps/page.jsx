"use client"

import { useState } from "react"

export default function Camps() {
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

      const response = { ok: true } 
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({
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
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error) 
    }
  }

  const commonInputClasses = "w-full px-4 py-2 rounded-lg bg-black border border-[#00ff00]/30 text-white focus:outline-none focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50"
  const labelClasses = "block text-sm font-bold text-[#00ff00] mb-2"

  return (
    <div className="min-h-screen bg-black">

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Obozy Treningowe</h1> 
          <p className="text-gray-400 text-lg mb-16">
            Wybierz swoją drogę do doskonałości. Dołącz do jednego z naszych specjalistycznych programów szkoleniowych dla bramkarzy.
          </p>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center glow-text">Zarejestruj Uczestnika na Obóz</h2>

            {submitted && (
              <div className="mb-8 p-4 rounded-lg bg-[#00ff00]/20 border border-[#00ff00]/50 text-[#00ff00] text-center font-semibold animate-pulse">
                ✓ Rejestracja wysłana! Skontaktujemy się z Państwem wkrótce.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-[#00ff00]/5 p-8 rounded-lg border border-[#00ff00]/30"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Dane Uczestnika</h3>
                
                <div>
                  <label htmlFor="participantName" className={labelClasses}>Nazwisko i Imię - Uczestnik</label>
                  <input
                    id="participantName"
                    type="text"
                    name="participantName"
                    required
                    value={formData.participantName}
                    onChange={handleChange}
                    className={commonInputClasses}
                  />
                </div>
                
                <div>
                  <label htmlFor="dateOfBirth" className={labelClasses}>Data Urodzenia - Uczestnik</label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={commonInputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="pesel" className={labelClasses}>Numer PESEL - Zawodnik (Wymagany do ubezpieczenia)</label>
                  <input
                    id="pesel"
                    type="text"
                    name="pesel"
                    maxLength="11"
                    pattern="\d{11}"
                    title="PESEL musi składać się z 11 cyfr."
                    required
                    value={formData.pesel}
                    onChange={handleChange}
                    className={commonInputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="clubName" className={labelClasses}>Nazwa Klubu - Uczestnik (aktualny lub ostatni)</label>
                  <input
                    id="clubName"
                    type="text"
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                    className={commonInputClasses}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="participantPhone" className={labelClasses}>Numer Telefonu - Uczestnik</label>
                      <input
                        id="participantPhone"
                        type="tel"
                        name="participantPhone"
                        value={formData.participantPhone}
                        onChange={handleChange}
                        className={commonInputClasses}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="height" className={labelClasses}>Wzrost (cm) - Uczestnik</label>
                      <input
                        id="height"
                        type="number"
                        name="height"
                        required
                        min="50"
                        max="250"
                        value={formData.height}
                        onChange={handleChange}
                        className={commonInputClasses}
                      />
                    </div>
                </div>

                <div>
                  <label htmlFor="trainingLevel" className={labelClasses}>Ilość Treningów Bramkarskich (na tydzień, 1-5)</label>
                  <select
                    id="trainingLevel"
                    name="trainingLevel"
                    value={formData.trainingLevel}
                    onChange={handleChange}
                    className={commonInputClasses}
                  >
                    {[1, 2, 3, 4, 5].map(level => (
                        <option key={level} value={String(level)}>
                            {level}
                        </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="allergies" className={labelClasses}>Czy Uczestnik ma uczulenia/diety? (produkty/składniki pokarmowe)</label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Wpisz 'Nie dotyczy' lub szczegóły uczuleń/wymagań dietetycznych"
                    className={commonInputClasses}
                  />
                </div>

              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Dane Rodzica/Opiekuna</h3>

                <div>
                  <label htmlFor="parentEmail" className={labelClasses}>Adres E-mail - Rodzic</label>
                  <input
                    id="parentEmail"
                    type="email"
                    name="parentEmail"
                    required
                    value={formData.parentEmail}
                    onChange={handleChange}
                    className={commonInputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="parentPhone" className={labelClasses}>Numer Telefonu - Rodzic</label>
                  <input
                    id="parentPhone"
                    type="tel"
                    name="parentPhone"
                    required
                    value={formData.parentPhone}
                    onChange={handleChange}
                    className={commonInputClasses}
                  />
                </div>
              </div>


              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#00ff00] border-b border-[#00ff00]/30 pb-2">Wybór Obozu i Faktura</h3>

                <div className="flex items-center space-x-3">
                    <input
                        id="invoiceRequest"
                        type="checkbox"
                        name="invoiceRequest"
                        checked={formData.invoiceRequest}
                        onChange={handleChange}
                        className="h-5 w-5 text-[#00ff00] bg-black border-[#00ff00] rounded focus:ring-[#00ff00] cursor-pointer"
                    />
                    <label htmlFor="invoiceRequest" className="text-white font-medium cursor-pointer">
                        Czy chcą Państwo Fakturę VAT?
                    </label>
                </div>

                {formData.invoiceRequest && (
                    <div>
                        <label htmlFor="invoiceDetails" className={labelClasses}>Dane do Faktury (Nazwa firmy, NIP, Adres)</label>
                        <textarea
                            id="invoiceDetails"
                            name="invoiceDetails"
                            required
                            value={formData.invoiceDetails}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Proszę podać pełne dane do faktury: Nazwa firmy, NIP, Adres"
                            className={commonInputClasses}
                        />
                    </div>
                )}
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
