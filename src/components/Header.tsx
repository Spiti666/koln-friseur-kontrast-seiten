
import React from 'react';

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-6 text-center border-4 border-cyan-400">
      <div className="animate-pulse">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg transform -rotate-2">
          ✨ HAIR-STUDIO KÖLN ✨
        </h1>
        <div className="text-2xl text-yellow-300 font-bold mt-2 animate-bounce">
          ★ Ihr Friseur seit 1998! ★
        </div>
      </div>
      <div className="mt-4 text-lg text-white font-bold bg-red-600 inline-block px-4 py-2 border-2 border-white transform rotate-1">
        🔥 NEU: Highlights ab 29,99€! 🔥
      </div>
    </div>
  );
};
