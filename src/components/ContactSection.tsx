
const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Ubicación",
      info: "Cra. 43A #7-50",
      detail: "Medellín, Antioquia"
    },
    {
      icon: "📞",
      title: "Teléfono",
      info: "+57 312 264 4682",
      detail: "Lun - Dom: 10:00 AM - 10:00 PM"
    },
    {
      icon: "✉️",
      title: "Email",
      info: "hola@nevadahelados.com",
      detail: "Te respondemos en 24h"
    }
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría conocer más sobre los helados NEVADA 🍦");
    window.open(`https://wa.me/573122644682?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient-rainbow mb-4 animate-gradient-text">
              Contáctanos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-nevada-coral to-nevada-blue-pastel mx-auto mb-6 animate-pulse"></div>
            <p className="text-xl text-nevada-blue-dark/70 max-w-2xl mx-auto">
              ¿Listo para vivir la experiencia NEVADA? Te esperamos en nuestro punto de venta
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="slide-left">
              <h3 className="text-2xl font-bold font-poppins text-gradient-rainbow mb-8 animate-gradient-text">
                Información de Contacto
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral flex items-center justify-center text-2xl shadow-lg animate-pulse">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-nevada-blue-dark text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-nevada-blue-dark font-medium">
                        {item.info}
                      </p>
                      <p className="text-nevada-blue-dark/60 text-sm">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-12">
                <button
                  onClick={openWhatsApp}
                  className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 btn-shimmer animate-bounce"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.69"/>
                  </svg>
                  <span>Chatea con nosotros</span>
                </button>
              </div>
            </div>

            {/* Map/Visual */}
            <div className="slide-right">
              <div className="relative">
                {/* Placeholder for map */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-nevada-blue-pastel/20 to-nevada-coral/20 hover:shadow-3xl transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center animate-float">
                      <div className="text-6xl mb-4 animate-bounce">🗺️</div>
                      <h4 className="text-xl font-bold text-nevada-blue-dark mb-2 text-gradient-rainbow">
                        Te Esperamos en Medellín
                      </h4>
                      <p className="text-nevada-blue-dark/70">
                        Cra. 43A #7-50, Medellín, Antioquia
                      </p>
                      <button className="mt-4 px-4 py-2 border-2 border-nevada-coral text-nevada-coral hover:bg-nevada-coral hover:text-white rounded-full transition-all duration-300 animate-pulse">
                        Ver en Maps
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral flex items-center justify-center animate-spin-slow">
                      🏪
                    </div>
                    <div>
                      <h5 className="font-bold text-nevada-blue-dark">¡Ven a visitarnos!</h5>
                      <p className="text-sm text-nevada-blue-dark/70">Abierto todos los días</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
