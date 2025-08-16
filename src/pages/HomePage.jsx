import React from 'react';
// Caminhos de importacao corrigidos para a estrutura de pastas.
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import HowItWorksSection from '../components/HowItWorks.jsx';
import StatisticsSection from '../components/StatisticsSection.jsx';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <HowItWorksSection />
        <StatisticsSection />
      </div>
    </>
  );
};

export default HomePage;
