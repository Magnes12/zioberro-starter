"use client"


export default function Gallery() {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    type: i % 3 === 0 ? "video" : "image",
  }))

  return (
    <div className="min-h-screen bg-black">

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">Galeria</h1>
          <p className="text-gray-400 text-lg mb-16">Momenty z treningów, najważniejsze fragmenty meczów i materiały z boiska.</p>

          {/* Galeria Siatka */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 rounded-lg overflow-hidden border border-[#00ff00]/30 glow-hover transition-all duration-300 hover:border-[#00ff00]/60"
              >
                <img
                  src={`/goalkeeper-training-moment-.jpg?height=300&width=400&query=goalkeeper training moment ${item.id}`}
                  alt={`Element galerii ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  {item.type === "video" && <div className="text-4xl">▶</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}