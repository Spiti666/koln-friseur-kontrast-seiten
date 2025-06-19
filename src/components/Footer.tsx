
import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-black text-white p-6 border-t-4 border-cyan-400 mt-8">
      <div className="text-center space-y-4">
        <div className="text-2xl font-bold text-yellow-400 animate-pulse">
          ✨ HAIR-STUDIO KÖLN - Ihr Friseur des Vertrauens! ✨
        </div>
        
        <div className="flex justify-center space-x-8 text-sm font-bold">
          <span className="text-pink-400">© 1998-2024</span>
          <span className="text-cyan-400">|</span>
          <span className="text-green-400">Impressum</span>
          <span className="text-cyan-400">|</span>
          <span className="text-purple-400">Datenschutz</span>
          <span className="text-cyan-400">|</span>
          <span className="text-orange-400">AGBs</span>
        </div>
        
        <div className="text-xs text-gray-400">
          Webseite erstellt mit ❤️ in Köln
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 border-2 border-cyan-400 animate-pulse">
            <span className="font-bold">🌟 Besuchen Sie uns! 🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
};
