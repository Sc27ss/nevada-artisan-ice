
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      location: "El Poblado",
      text: "Los helados de NEVADA son simplemente espectaculares. Cada sabor es una explosión de calidad y frescura. Mi favorito es el de frutos rojos, ¡es como el paraíso en una cucharada!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Restrepo", 
      location: "Laureles",
      text: "Llevo años siendo cliente de NEVADA y nunca me canso de probar sus creaciones. La atención es excepcional y la calidad incomparable. ¡Altamente recomendado!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Ana Sofía Morales",
      location: "Envigado", 
      text: "Como madre de familia, busco lo mejor para mis hijos. En NEVADA encontré helados verdaderamente naturales y deliciosos. Los niños están felices y yo tranquila.",
      rating: 5,
      avatar: "👩‍🏫"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-nevada-cream to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-nevada-blue-dark mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-nevada-coral mx-auto mb-6"></div>
          <p className="text-xl text-nevada-blue-dark/70 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor orgullo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${
                index % 2 === 0 ? 'slide-left' : 'slide-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-nevada-blue-dark/80 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-nevada-blue-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-nevada-blue-dark/60 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-nevada-blue-dark/70 mb-6">
            ¿Quieres ser parte de nuestra familia de clientes satisfechos?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-nevada-blue-pastel to-nevada-coral text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 btn-shimmer">
            Visítanos Hoy
            <span className="ml-2">💙</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
