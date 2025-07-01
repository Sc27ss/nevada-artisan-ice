
const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Helados Artesanales Premium",
      description: "Creaciones únicas con ingredientes selectos"
    },
    {
      url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Proceso Artesanal",
      description: "Cada helado es preparado con amor y dedicación"
    },
    {
      url: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Sabores Únicos",
      description: "Desde clásicos hasta creaciones innovadoras"
    },
    {
      url: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Ingredientes Naturales",
      description: "Solo lo mejor para nuestros helados"
    },
    {
      url: "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Experiencia Completa",
      description: "Momentos especiales en cada visita"
    },
    {
      url: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Ambiente Acogedor",
      description: "El lugar perfecto para disfrutar"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-nevada-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-nevada-blue-dark mb-4">
            Galería
          </h2>
          <div className="w-24 h-1 bg-nevada-coral mx-auto mb-6"></div>
          <p className="text-xl text-nevada-blue-dark/70 max-w-2xl mx-auto">
            Descubre la magia detrás de cada helado y vive la experiencia NEVADA
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold font-poppins mb-2">
                    {image.title}
                  </h3>
                  <p className="text-white/90">
                    {image.description}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-nevada-coral/60 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
