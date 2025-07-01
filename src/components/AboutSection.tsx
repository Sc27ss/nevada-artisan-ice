
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="slide-left">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-nevada-blue-dark mb-6">
              Nuestra Historia
            </h2>
            <div className="w-24 h-1 bg-nevada-coral mb-8"></div>
            
            <div className="prose prose-lg">
              <p className="text-xl text-nevada-blue-dark/80 mb-6 leading-relaxed">
                NEVADA nació hace más de una década como un sueño de crear los helados más auténticos y deliciosos de Medellín. Nuestra pasión por la excelencia nos ha llevado a perfeccionar cada receta, utilizando únicamente ingredientes naturales de la más alta calidad.
              </p>
              
              <p className="text-lg text-nevada-blue-dark/70 mb-6 leading-relaxed">
                Cada helado es una obra de arte culinaria, elaborada artesanalmente con técnicas tradicionales que hemos perfeccionado a lo largo de los años. Nuestro compromiso con la calidad y la innovación nos ha convertido en la heladería de referencia para quienes buscan una experiencia única.
              </p>
              
              <p className="text-lg text-nevada-blue-dark/70 leading-relaxed">
                En NEVADA, no solo creamos helados; creamos momentos especiales que perduran en la memoria. Cada sabor cuenta una historia, cada textura despierta emociones, y cada visita se convierte en una experiencia inolvidable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-nevada-coral"></div>
                <span className="text-nevada-blue-dark font-medium">Ingredientes 100% naturales</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-nevada-coral"></div>
                <span className="text-nevada-blue-dark font-medium">Proceso artesanal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-nevada-coral"></div>
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
                  src="https://images.unsplash.com/photo-1580013759032-c96505d22d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Proceso artesanal NEVADA"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
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
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-nevada-coral/20 animate-float"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-nevada-blue-pastel/30 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
