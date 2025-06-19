
import React from 'react';
import { ModernWelcomeSection } from './ModernWelcomeSection';
import { ModernServicesSection } from './ModernServicesSection';
import { ModernPriceSection } from './ModernPriceSection';
import { ModernContactSection } from './ModernContactSection';

export const ModernMainContent = () => {
  return (
    <main className="space-y-24 py-16">
      <ModernWelcomeSection />
      <ModernServicesSection />
      <ModernPriceSection />
      <ModernContactSection />
    </main>
  );
};
