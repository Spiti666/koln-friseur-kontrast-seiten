
import React from 'react';

export const Navigation = () => {
  const navItems = [
    { name: 'HOME', active: true },
    { name: 'ÜBER UNS', active: false },
    { name: 'PREISE', active: false },
    { name: 'GALERIE', active: false },
    { name: 'KONTAKT', active: false }
  ];

  return (
    <div className="bg-black border-4 border-cyan-400">
      <div className="flex justify-center space-x-2 p-4">
        {navItems.map((item, index) => (
          <button 
            key={index}
            className={`px-6 py-3 font-bold text-lg border-2 transform hover:scale-110 transition-all ${
              item.active 
                ? 'bg-yellow-400 text-black border-pink-500 animate-pulse' 
                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-cyan-400 hover:from-purple-600 hover:to-pink-500'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};
