
import React from 'react';

export const PriceTable = () => {
  const prices = [
    { category: 'DAMENSCHNITTE', items: [
      { service: 'Waschen + Schneiden + Föhnen', price: '35,00€' },
      { service: 'Langhaarschnitt', price: '45,00€' },
      { service: 'Kurzhaarschnitt', price: '30,00€' },
      { service: 'Pony schneiden', price: '15,00€' }
    ]},
    { category: 'HERRENSCHNITTE', items: [
      { service: 'Klassischer Herrenschnitt', price: '25,00€' },
      { service: 'Trendy Cut', price: '30,00€' },
      { service: 'Bart trimmen', price: '12,00€' },
      { service: 'Komplett-Paket', price: '40,00€' }
    ]},
    { category: 'COLORATION', items: [
      { service: 'Strähnchen (Foliensträhnen)', price: '45,00€' },
      { service: 'Ganzkopf-Coloration', price: '55,00€' },
      { service: 'Blondierung', price: '65,00€' },
      { service: 'Tönung', price: '25,00€' }
    ]}
  ];

  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 border-4 border-purple-600">
      <h2 className="text-4xl font-bold text-center text-white mb-6 drop-shadow-lg">
        💰 PREISLISTE 💰
      </h2>
      
      <div className="space-y-6">
        {prices.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white border-4 border-black p-4">
            <h3 className="text-2xl font-bold text-purple-600 mb-4 text-center border-b-2 border-pink-500 pb-2">
              {category.category}
            </h3>
            
            <div className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className={`flex justify-between items-center p-3 border-2 ${
                    itemIndex % 2 === 0 
                      ? 'bg-gradient-to-r from-pink-200 to-purple-200 border-pink-400' 
                      : 'bg-gradient-to-r from-yellow-200 to-orange-200 border-orange-400'
                  }`}
                >
                  <span className="font-bold text-black">{item.service}</span>
                  <span className="font-bold text-red-600 text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <div className="bg-black text-yellow-400 p-4 border-2 border-cyan-400 font-bold text-lg animate-pulse">
          🎁 Alle Preise inkl. Beratung und Getränk! 🎁
        </div>
      </div>
    </div>
  );
};
