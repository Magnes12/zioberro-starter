"use client"

import Link from "next/link"

export default function CampInfoPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-16 px-4 border-b border-[#00ff00]/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#00ff00] mb-4">ZI0BI CAMP – ZIMOWA EDYCJA 2025</h1>

          <p className="text-lg text-gray-300">
            <strong>Data:</strong> 19–23 grudnia 2025<br />
            <strong>Godziny:</strong> 8:00–17:00<br />
            <strong>Miejsce:</strong> Klub Sportowy Błękit Żołynia, ul. Białobrzeska 158A, 37-110 Żołynia
          </p>

          <div>
            <h2 className="text-3xl font-semibold text-[#00ff00] mb-4">OFERTA</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>2 treningi dziennie (dopasowane do poziomu grup)</li>
              <li>Wykłady teoretyczne – analiza gry bramkarza</li>
              <li>Warsztaty z dietetykiem</li>
              <li>Q&A z Zioberro</li>
              <li>Obiad + stół potreningowy (owoce, batony)</li>
              <li>Goście ze świata sportu</li>
              <li>Pakiet obozowy: 2x koszulki, ortalion, bidon</li>
              <li>Loteria Bramkarska</li>
              <li>Bitwa Bramkarska</li>
            </ul>
          </div>

          <p className="italic text-gray-400">
            *Rezerwacji dokonujemy poprzez wypełnienie formularza zgłoszeniowego na stronie. Szczegółowe informacje dotyczące rezerwacji oraz płatności znajdą Państwo poniżej.*
          </p>
        </div>
      </section>

      <section className="py-16 px-4 border-b border-[#00ff00]/30">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#00ff00] mb-4">KOSZTA</h2>

          <div className="bg-[#00ff00]/5 border border-[#00ff00]/30 rounded-lg p-6 space-y-3">
            <p><strong className="text-[#00ff00]">1300 zł</strong> – zawodnicy CRB / Szkółki Bramkarskiej Jakub Lichoń / Błękit Żołynia</p>
            <p><strong className="text-[#00ff00]">1650 zł</strong> – zaliczka do 15.11.2025</p>
            <p><strong className="text-[#00ff00]">1750 zł</strong> – zaliczka do 30.11.2025</p>
            <p><strong className="text-[#00ff00]">1800 zł</strong> – do rozpoczęcia</p>
            <p className="text-sm text-gray-400 mt-4">*Zaliczka 500 zł płatna do 3 dni od dokonania zgłoszenia.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-b border-[#00ff00]/30">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#00ff00] mb-4">ZAPISY I PŁATNOŚCI</h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Zapoznanie się z ofertą, płatnościami oraz zasadami rezygnacji.</li>
            <li>Wypełnienie formularza zgłoszeniowego.</li>
            <li>Potwierdzenie mailowe udziału (otrzymasz w ciągu 72h).</li>
            <li>Wpłata zaliczki do 3 dni od zgłoszenia (brak wpłaty = anulacja rezerwacji).</li>
            <li>Wpłata pełnej kwoty do 14 dni przed rozpoczęciem – <strong>do 5.12.2025</strong>.</li>
            <li>Wpłaty należy dokonywać na dane organizatora (uzupełnić dane firmy, konto, NIP itp.).</li>
          </ol>

          <p className="text-gray-400 text-sm italic">
            W tytule przelewu prosimy wpisać: <br />
            <strong>Nazwisko i imię uczestnika – Ziobi Camp</strong>
          </p>

          <div className="pt-6">
            <Link
              href="/camps/register"
              className="inline-block bg-[#00ff00] text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Przejdź do formularza rejestracyjnego →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#00ff00] mb-4">Rezygnacja i Zwroty</h2>
          <p className="text-gray-300">
            W przypadku rezygnacji prosimy o kontakt mailowy (adres do uzupełnienia).
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Rezygnacja powyżej 21 dni przed rozpoczęciem – pełen zwrot.</li>
            <li>Rezygnacja do 21 dni przed rozpoczęciem – potrącenie zaliczki 500 zł.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
