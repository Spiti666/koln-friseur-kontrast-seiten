
import React from 'react';
import { Check } from 'lucide-react';

export const ModernPriceSection = () => {
  const priceCategories = [
    {
      title: 'Damenschnitte',
      services: [
        { name: 'Waschen + Schneiden + Styling', price: '35€' },
        { name: 'Langhaarschnitt Premium', price: '45€' },
        { name: 'Kurzhaarschnitt Modern', price: '30€' },
        { name: 'Pony-Korrektur', price: '15€' }
      ]
    },
    {
      title: 'Herrenschnitte',
      services: [
        { name: 'Business Cut', price: '25€' },
        { name: 'Trend Styling', price: '30€' },
        { name: 'Bart Design', price: '12€' },
        { name: 'Komplett-Paket', price: '40€' }
      ]
    },
    {
      title: 'Color Services',
      services: [
        { name: 'Strähnchen Technik', price: '45€' },
        { name: 'Vollcoloration', price: '55€' },
        { name: 'Balayage Premium', price: '85€' },
        { name: 'Tönung Refresh', price: '25€' }
      ]
    }
  ];

  return (
    <section id="preise" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Transparente Preise
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Faire Preise für erstklassige Leistungen - inklusive Beratung und Premium-Service
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {priceCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
              {category.title}
            </h3>
            
            <div className="space-y-4">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service.name}</span>
                  </div>
                  <span className="text-xl font-semibold text-gray-900">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl px-8 py-4">
          <span className="text-amber-800 font-medium">
            Alle Preise inklusive Beratung, Getränk und Nachbehandlung
          </span>
        </div>
      </div>
    </section>
  );
};
