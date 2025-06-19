
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
        
        <Link 
          to="/modern"
          className="relative px-8 py-4 font-black text-xl border-4 bg-gradient-to-r from-green-500 to-blue-500 text-white border-yellow-400 hover:from-blue-500 hover:to-green-500 transform hover:scale-110 transition-all animate-bounce shadow-lg shadow-yellow-400/50"
        >
          <div className="flex items-center space-x-2">
            <span>🚀 MODERNE VERSION</span>
            <ArrowRight className="w-6 h-6 animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-ping">
            NEU!
          </div>
        </Link>
      </div>
    </div>
  );
};
