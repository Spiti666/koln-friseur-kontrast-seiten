
import React from 'react';
import { Award, Users, Clock } from 'lucide-react';

export const ModernWelcomeSection = () => {
  const stats = [
    { icon: Award, number: '25+', label: 'Jahre Erfahrung' },
    { icon: Users, number: '5000+', label: 'Zufriedene Kunden' },
    { icon: Clock, number: '24/7', label: 'Online Buchung' }
  ];

  return (
    <section id="home" className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
          Willkommen in Kölns
          <span className="block text-amber-500">modernstem Friseursalon</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Entdecken Sie zeitlose Eleganz und moderne Trends in unserem Premium Salon. 
          Unser erfahrenes Team verwöhnt Sie mit individuellen Schnitten und exklusiven Behandlungen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-light text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-stone-50 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Aktuelle Angebote
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                Neukunden erhalten 20% Rabatt
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                Komplett-Service ab €35
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                Premium Strähnchen ab €45
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-medium text-gray-900 mb-4">Termin vereinbaren</h4>
            <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-shadow duration-300">
              Jetzt buchen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
