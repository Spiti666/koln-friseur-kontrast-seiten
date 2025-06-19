
import React from 'react';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { MainContent } from '../components/MainContent';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-purple-500 to-blue-600">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Index;
