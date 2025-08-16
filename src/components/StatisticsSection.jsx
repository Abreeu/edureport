import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-12">Nossas Estatísticas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <p className="text-6xl font-bold text-blue-600">2.541</p>
            <p className="text-gray-600 text-lg">Denúncias Registradas</p>
          </div>
          <div className="p-6">
            <p className="text-6xl font-bold text-green-600">85%</p>
            <p className="text-gray-600 text-lg">Taxa de Resolução</p>
          </div>
          <div className="p-6">
            <p className="text-6xl font-bold text-yellow-500">324</p>
            <p className="text-gray-600 text-lg">Problemas em Análise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

