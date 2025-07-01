
const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría conocer más sobre los helados NEVADA 🍦");
    window.open(`https://wa.me/573123456789?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-float"
      title="Chatea con nosotros"
    >
      <span className="text-3xl">💬</span>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Chatea con nosotros!
        <div className="absolute top-1/2 left-full w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent transform -translate-y-1/2"></div>
      </div>
    </button>
  );
};

export default WhatsAppButton;
