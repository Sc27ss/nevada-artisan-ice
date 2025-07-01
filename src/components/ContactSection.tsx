
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
      info: "+57 312 345 6789",
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
    window.open(`https://wa.me/573123456789?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-nevada-blue-dark mb-4">
              Contáctanos
            </h2>
            <div className="w-24 h-1 bg-nevada-coral mx-auto mb-6"></div>
            <p className="text-xl text-nevada-blue-dark/70 max-w-2xl mx-auto">
              ¿Listo para vivir la experiencia NEVADA? Te esperamos en nuestro punto de venta
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="slide-left">
              <h3 className="text-2xl font-bold font-poppins text-nevada-blue-dark mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral flex items-center justify-center text-2xl shadow-lg">
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
                  className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 btn-shimmer"
                >
                  <span className="text-2xl">💬</span>
                  <span>Chatea con nosotros</span>
                </button>
              </div>
            </div>

            {/* Map/Visual */}
            <div className="slide-right">
              <div className="relative">
                {/* Placeholder for map */}
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-nevada-blue-pastel/20 to-nevada-coral/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🗺️</div>
                      <h4 className="text-xl font-bold text-nevada-blue-dark mb-2">
                        Te Esperamos en Medellín
                      </h4>
                      <p className="text-nevada-blue-dark/70">
                        Cra. 43A #7-50, Medellín, Antioquia
                      </p>
                      <button className="mt-4 px-4 py-2 border-2 border-nevada-coral text-nevada-coral hover:bg-nevada-coral hover:text-white rounded-full transition-all duration-300">
                        Ver en Maps
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Info Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral flex items-center justify-center">
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
