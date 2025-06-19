
import React from 'react';
import { Scissors } from 'lucide-react';

export const ModernHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900 to-black"></div>
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="flex items-center justify-center mb-6">
          <Scissors className="w-8 h-8 text-amber-400 mr-3" />
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide">
            Hair Studio
          </h1>
        </div>
        <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
          Premium Hairstyling in Köln seit 1998
        </p>
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          <span className="text-amber-400 font-medium">Jetzt Termin buchen</span>
        </div>
      </div>
    </header>
  );
};
