
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' }
  ];

  return (
    <footer className="bg-nevada-blue-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral"></div>
                <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white/50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins">NEVADA</h3>
                <p className="text-sm text-white/70">Helados Artesanales</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              "Donde cada helado es una experiencia única, llena de frescura y sabor"
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-xl font-bold font-poppins mb-6">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <p>📍 Cra. 43A #7-50, Medellín</p>
              <p>📞 +57 312 345 6789</p>
              <p>✉️ hola@nevadahelados.com</p>
              <p className="text-sm">Lun - Dom: 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold font-poppins mb-6">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              ¡Comparte tus momentos NEVADA!
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>© {currentYear} NEVADA Helados Artesanales. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              Diseñado con ❤️ por{' '}
              <span className="text-nevada-coral font-semibold">Clicka Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
