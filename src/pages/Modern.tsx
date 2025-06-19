
import React from 'react';
import { ModernHeader } from '../components/modern/ModernHeader';
import { ModernNavigation } from '../components/modern/ModernNavigation';
import { ModernMainContent } from '../components/modern/ModernMainContent';
import { ModernFooter } from '../components/modern/ModernFooter';

const Modern = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50">
      <ModernHeader />
      <ModernNavigation />
      <ModernMainContent />
      <ModernFooter />
    </div>
  );
};

export default Modern;
