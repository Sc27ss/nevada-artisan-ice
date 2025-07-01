
const FlavorsSection = () => {
  const flavors = [
    {
      name: "Chocolate Oscuro",
      description: "Intenso chocolate belga con cacao de origen",
      color: "from-amber-900 to-yellow-800",
      icon: "🍫"
    },
    {
      name: "Frutos Rojos Silvestres",
      description: "Frambuesas, moras y arándanos frescos",
      color: "from-red-500 to-pink-500",
      icon: "🍓"
    },
    {
      name: "Vainilla de Madagascar",
      description: "Auténtica vainilla con notas florales",
      color: "from-yellow-300 to-amber-300",
      icon: "🌟"
    }
  ];

  return (
    <section id="sabores" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-nevada-blue-dark mb-4">
            Nuestros Sabores
          </h2>
          <div className="w-24 h-1 bg-nevada-coral mx-auto mb-6"></div>
          <p className="text-xl text-nevada-blue-dark/70 max-w-2xl mx-auto">
            Cada sabor es una obra maestra artesanal, creada con ingredientes premium y técnicas tradicionales
          </p>
        </div>

        {/* Flavors Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-90`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-white">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {flavor.icon}
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-3">
                  {flavor.name}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {flavor.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-nevada-blue-dark/70 mb-6">
            ¿Quieres conocer todos nuestros sabores disponibles?
          </p>
          <button className="inline-flex items-center px-6 py-3 border-2 border-nevada-coral text-nevada-coral hover:bg-nevada-coral hover:text-white font-semibold rounded-full transition-all duration-300 btn-shimmer">
            Ver Carta Completa
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
