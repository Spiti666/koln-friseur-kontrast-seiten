
import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export const ModernFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const footerLinks = [
    { name: 'Impressum', href: '#' },
    { name: 'Datenschutz', href: '#' },
    { name: 'AGB', href: '#' },
    { name: 'Karriere', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Scissors className="w-8 h-8 text-amber-400 mr-3" />
              <span className="text-2xl font-light">Hair Studio Köln</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Ihr Premium Friseursalon in Köln. Seit 1998 stehen wir für Qualität, 
              Innovation und erstklassigen Service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Schnellzugriff</h3>
            <div className="space-y-3">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Bleiben Sie informiert über neue Trends und exklusive Angebote.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ihre E-Mail"
                className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-r-lg font-medium transition-colors duration-300">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hair Studio Köln. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
