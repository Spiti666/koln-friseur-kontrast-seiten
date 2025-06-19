
import React from 'react';

export const WelcomeSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 border-4 border-yellow-400 transform -rotate-1">
      <div className="bg-white p-6 border-2 border-pink-500 transform rotate-1">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-4">
          🌟 WILLKOMMEN IN KÖLN'S BESTEM FRISEURSALON! 🌟
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-3 animate-pulse">
              ✂️ Seit über 25 Jahren für Sie da! ✂️
            </h3>
            <p className="text-lg text-black font-bold leading-relaxed">
              Herzlich Willkommen im Hair-Studio Köln! Unser erfahrenes Team verwöhnt Sie 
              mit den neuesten Trends und klassischen Schnitten. Von der Südstadt bis 
              Ehrenfeld - wir sind Kölns erste Adresse für perfekte Frisuren!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-4 border-2 border-red-500">
            <h3 className="text-xl font-bold text-red-700 mb-2">
              🎉 AKTUELLE ANGEBOTE! 🎉
            </h3>
            <ul className="text-black font-bold space-y-1">
              <li className="animate-bounce">• Waschen + Schneiden + Föhnen: 35€</li>
              <li className="animate-bounce" style={{animationDelay: '0.1s'}}>• Neukunden-Rabatt: 20%</li>
              <li className="animate-bounce" style={{animationDelay: '0.2s'}}>• Strähnchen-Special: ab 29,99€</li>
              <li className="animate-bounce" style={{animationDelay: '0.3s'}}>• Hochzeitsfrisuren: Beratung gratis!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
