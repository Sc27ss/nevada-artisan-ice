
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="slide-left">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient-rainbow-slow mb-6">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-nevada-coral to-nevada-blue-pastel mb-8 animate-pulse"></div>
            
            <div className="prose prose-lg">
              <p className="text-xl text-nevada-blue-dark/80 mb-6 leading-relaxed">
                NEVADA nació hace más de una década como un sueño de crear los helados más auténticos y deliciosos de Medellín. Utilizamos únicamente ingredientes naturales de la más alta calidad.
              </p>
              
              <p className="text-lg text-nevada-blue-dark/70 mb-6 leading-relaxed">
                Cada helado es elaborado artesanalmente con técnicas tradicionales perfeccionadas a lo largo de los años.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 animate-fade-in-up">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-nevada-coral to-nevada-blue-pastel animate-pulse"></div>
                <span className="text-nevada-blue-dark font-medium">Ingredientes 100% naturales</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-nevada-coral to-nevada-blue-pastel animate-pulse"></div>
                <span className="text-nevada-blue-dark font-medium">Proceso artesanal</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-nevada-coral to-nevada-blue-pastel animate-pulse"></div>
                <span className="text-nevada-blue-dark font-medium">Tradición e innovación</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="slide-right">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Maestro heladero NEVADA preparando helados artesanales"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral flex items-center justify-center text-2xl">
                    👨‍🍳
                  </div>
                  <div>
                    <h4 className="font-bold text-nevada-blue-dark">Maestros Heladeros</h4>
                    <p className="text-sm text-nevada-blue-dark/70">10+ años de experiencia</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-nevada-coral/20 to-nevada-blue-pastel/20 animate-ping"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-gradient-to-l from-nevada-blue-pastel/30 to-nevada-coral/30 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
