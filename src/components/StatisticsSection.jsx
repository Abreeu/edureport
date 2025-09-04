import React from 'react';
// Importa o React para criar componentes funcionais

const StatisticsSection = () => {
  // Define um componente funcional chamado StatisticsSection

  return (
    <section className="bg-white py-16">
      {/*
        <section> → elemento semântico HTML
        Classes Tailwind:
        - bg-white: fundo branco
        - py-16: padding vertical de 64px
      */}

      <div className="container mx-auto px-4 text-center">
        {/*
          Container centralizado e limitado
          - container: largura máxima e centralização horizontal
          - mx-auto: centraliza horizontalmente
          - px-4: padding horizontal 16px
          - text-center: centraliza o texto dentro da div
        */}

        <h3 className="text-3xl font-bold text-gray-800 mb-12">Nossas Estatísticas</h3>
        {/*
          Título da seção
          - text-3xl: tamanho da fonte ~30px
          - font-bold: negrito
          - text-gray-800: cinza escuro
          - mb-12: margem inferior 48px
        */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*
            Grid para organizar os cards de estatísticas
            - grid-cols-1: 1 coluna em telas pequenas
            - md:grid-cols-3: 3 colunas em telas médias e maiores
            - gap-8: espaço entre os elementos (32px)
          */}

          {/* Estatística 1 */}
          <div className="p-6">
            {/*
              Card individual
              - p-6: padding 24px
            */}
            <p className="text-6xl font-bold text-blue-600">2.541</p>
            {/*
              Número destacado
              - text-6xl: fonte muito grande (~60px)
              - font-bold: negrito
              - text-blue-600: cor azul
            */}
            <p className="text-gray-600 text-lg">Denúncias Registradas</p>
            {/*
              Descrição do número
              - text-gray-600: cinza médio
              - text-lg: tamanho da fonte 18px
            */}
          </div>

          {/* Estatística 2 */}
          <div className="p-6">
            <p className="text-6xl font-bold text-green-600">85%</p>
            <p className="text-gray-600 text-lg">Taxa de Resolução</p>
            {/*
              Número e descrição da segunda estatística
              - Número em verde
            */}
          </div>

          {/* Estatística 3 */}
          <div className="p-6">
            <p className="text-6xl font-bold text-yellow-500">324</p>
            <p className="text-gray-600 text-lg">Problemas em Análise</p>
            {/*
              Número e descrição da terceira estatística
              - Número em amarelo
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
// Exporta o componente StatisticsSection para uso em outras partes da aplicação
