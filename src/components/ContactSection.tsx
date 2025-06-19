
import React from 'react';

export const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 border-4 border-yellow-400">
      <h2 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
        📞 KONTAKT & ÖFFNUNGSZEITEN 📞
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border-4 border-pink-500 transform -rotate-1">
          <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center">
            📍 HAIR-STUDIO KÖLN
          </h3>
          
          <div className="space-y-3 text-black font-bold">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🏠</span>
              <span>Severinstraße 123, 50678 Köln</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">☎️</span>
              <span>0221 / 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">📧</span>
              <span>info@hairstudio-koeln.de</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">🚇</span>
              <span>U-Bahn: Severinstraße (Linie 16/18)</span>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-300 p-6 border-4 border-red-500 transform rotate-1">
          <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">
            🕐 ÖFFNUNGSZEITEN
          </h3>
          
          <div className="space-y-2 text-black font-bold">
            <div className="flex justify-between border-b-2 border-red-400 pb-1">
              <span>Montag:</span>
              <span>GESCHLOSSEN</span>
            </div>
            <div className="flex justify-between border-b-2 border-red-400 pb-1">
              <span>Dienstag:</span>
              <span>9:00 - 18:00</span>
            </div>
            <div className="flex justify-between border-b-2 border-red-400 pb-1">
              <span>Mittwoch:</span>
              <span>9:00 - 18:00</span>
            </div>
            <div className="flex justify-between border-b-2 border-red-400 pb-1">
              <span>Donnerstag:</span>
              <span>9:00 - 20:00</span>
            </div>
            <div className="flex justify-between border-b-2 border-red-400 pb-1">
              <span>Freitag:</span>
              <span>9:00 - 18:00</span>
            </div>
            <div className="flex justify-between border-b-2 border-red-400 pb-1">
              <span>Samstag:</span>
              <span>8:00 - 16:00</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="bg-green-500 text-white p-4 border-4 border-white font-bold text-xl animate-bounce">
          🎪 TERMINE NUR NACH VEREINBARUNG! 🎪
        </div>
      </div>
    </div>
  );
};
