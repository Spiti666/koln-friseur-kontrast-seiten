
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ModernNavigation = () => {
  const [activeItem, setActiveItem] = useState('Home');
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Preise', href: '#preise' },
    { name: 'Team', href: '#team' },
    { name: 'Kontakt', href: '#kontakt' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeItem === item.name
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
          
          <Link 
            to="/"
            className="relative group px-6 py-3 text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-amber-400"
          >
            <div className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 group-hover:animate-pulse" />
              <span>Retro Version</span>
            </div>
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
