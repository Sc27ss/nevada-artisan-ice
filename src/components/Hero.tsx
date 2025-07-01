
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/20 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-nevada-coral/30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-nevada-blue-pastel/40 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral animate-float shadow-2xl"></div>
              <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-white"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-4 text-gradient">
            NEVADA
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium font-poppins text-nevada-blue-dark mb-6">
            Helados Artesanales
          </h2>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-nevada-blue-dark/80 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            "Donde cada helado es una experiencia única, llena de frescura y sabor"
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('sabores')}
            className="inline-flex items-center px-8 py-4 bg-nevada-coral text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 btn-shimmer"
          >
            <span className="mr-2">🍦</span>
            Ver Sabores
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
