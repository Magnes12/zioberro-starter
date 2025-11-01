"use client"
import { galleryImages } from "@/app/data/galleryData"

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Galeria</h1>
          <p className="text-gray-400 text-lg mb-16">
            Momenty z treningów, najważniejsze fragmenty meczów i materiały z boiska.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-lg overflow-hidden border border-[#00ff00]/30 glow-hover transition-all duration-300 hover:border-[#00ff00]/60"
              >
                <img
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
