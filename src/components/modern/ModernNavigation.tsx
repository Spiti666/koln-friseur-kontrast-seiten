
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-amber-600 border border-gray-200 rounded-lg hover:border-amber-400 transition-all duration-300"
          >
            ← Retro Version
          </Link>
        </div>
      </div>
    </nav>
  );
};
