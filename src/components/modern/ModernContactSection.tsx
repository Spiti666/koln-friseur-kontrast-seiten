
import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export const ModernContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Severinstraße 123, 50678 Köln'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '0221 / 123-4567'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'info@hairstudio-koeln.de'
    },
    {
      icon: Navigation,
      title: 'Anfahrt',
      content: 'U-Bahn Severinstraße (Linie 16/18)'
    }
  ];

  const openingHours = [
    { day: 'Montag', hours: 'Geschlossen' },
    { day: 'Dienstag', hours: '9:00 - 18:00' },
    { day: 'Mittwoch', hours: '9:00 - 18:00' },
    { day: 'Donnerstag', hours: '9:00 - 20:00' },
    { day: 'Freitag', hours: '9:00 - 18:00' },
    { day: 'Samstag', hours: '8:00 - 16:00' },
    { day: 'Sonntag', hours: 'Geschlossen' }
  ];

  return (
    <section id="kontakt" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          Kontakt & Öffnungszeiten
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Besuchen Sie uns in der Kölner Südstadt oder vereinbaren Sie einen Termin
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-amber-500 mr-3" />
              Öffnungszeiten
            </h3>
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">{schedule.day}</span>
                  <span className={`font-medium ${schedule.hours === 'Geschlossen' ? 'text-gray-400' : 'text-gray-900'}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-medium mb-4">Termine nur nach Vereinbarung</h3>
            <button className="bg-white text-amber-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-shadow duration-300">
              Jetzt Termin buchen
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
