
import React from 'react';

export const ServicesSection = () => {
  const services = [
    { icon: '✂️', name: 'DAMENSCHNITT', desc: 'Moderne & klassische Schnitte' },
    { icon: '💇‍♂️', name: 'HERRENSCHNITT', desc: 'Von Business bis Trendy' },
    { icon: '🎨', name: 'COLORATION', desc: 'Strähnchen, Tönung, Blondierung' },
    { icon: '💅', name: 'STYLING', desc: 'Hochsteckfrisuren & Event-Styling' },
    { icon: '🧴', name: 'BEHANDLUNG', desc: 'Haarkuren & Kopfhautpflege' },
    { icon: '👰', name: 'HOCHZEIT', desc: 'Brautfrisuren & Make-up' }
  ];

  return (
    <div className="bg-black p-6 border-4 border-pink-500">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6 animate-pulse">
        🌈 UNSERE SERVICES 🌈
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 border-2 border-cyan-400 transform hover:scale-105 transition-all hover:rotate-2"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-yellow-300 font-bold">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
