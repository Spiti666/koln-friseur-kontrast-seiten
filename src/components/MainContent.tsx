
import React from 'react';
import { WelcomeSection } from './WelcomeSection';
import { ServicesSection } from './ServicesSection';
import { PriceTable } from './PriceTable';
import { ContactSection } from './ContactSection';

export const MainContent = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <WelcomeSection />
      <ServicesSection />
      <PriceTable />
      <ContactSection />
    </div>
  );
};
