
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nevada-blue-pastel to-nevada-coral animate-float"></div>
              <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-white shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-poppins text-nevada-blue-dark">
                NEVADA
              </h1>
              <p className="text-xs text-nevada-blue-dark/70 font-inter">
                Helados Artesanales
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Inicio', id: 'hero' },
              { name: 'Sabores', id: 'sabores' },
              { name: 'Galería', id: 'galeria' },
              { name: 'Nosotros', id: 'nosotros' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-nevada-blue-dark hover:text-nevada-coral transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nevada-coral transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-nevada-blue-dark"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="pt-4 pb-2 space-y-2">
            {[
              { name: 'Inicio', id: 'hero' },
              { name: 'Sabores', id: 'sabores' },
              { name: 'Galería', id: 'galeria' },
              { name: 'Nosotros', id: 'nosotros' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 text-nevada-blue-dark hover:text-nevada-coral hover:bg-nevada-blue-pastel/10 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
