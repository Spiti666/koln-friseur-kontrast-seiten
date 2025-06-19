
import React from 'react';
import { Scissors, Palette, Sparkles, Crown, Zap, Heart } from 'lucide-react';

export const ModernServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Precision Cuts',
      description: 'Moderne und klassische Schnitte für Damen und Herren',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Color Design',
      description: 'Professionelle Colorationen und Strähnchen-Techniken',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Hair Treatments',
      description: 'Intensive Haarkuren und Kopfhautbehandlungen',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Crown,
      title: 'Premium Styling',
      description: 'Hochsteckfrisuren und Event-Styling',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: Zap,
      title: 'Express Service',
      description: 'Schnelle Lösungen für den perfekten Look',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Heart,
      title: 'Bridal Package',
      description: 'Komplette Brautstyling-Pakete',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="services" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Unsere Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Entdecken Sie unser umfassendes Angebot an professionellen Friseurdienstleistungen
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
