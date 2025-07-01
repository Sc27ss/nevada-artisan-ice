
import { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [counters, setCounters] = useState({ familias: 0, sabores: 0, sonrisas: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'familias', value: 5000, suffix: '+', label: 'Familias satisfechas', icon: '👨‍👩‍👧‍👦' },
    { key: 'sabores', value: 50, suffix: '+', label: 'Sabores', icon: '🍦' },
    { key: 'sonrisas', value: 100, suffix: '%', label: 'Sonrisas garantizadas', icon: '😊' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / 100; // 100 frames for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 20);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-nevada-blue-pastel/20 to-nevada-coral/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient-rainbow mb-4 animate-gradient-text">
            Nuestra Tradición en Números
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-nevada-coral to-nevada-blue-pastel mx-auto animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 fade-in hover:rotate-1`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.5}s` }}>
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-bold font-poppins text-gradient-rainbow mb-2 animate-pulse">
                {counters[stat.key as keyof typeof counters]}{stat.suffix}
              </div>
              <p className="text-xl text-nevada-blue-dark font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
