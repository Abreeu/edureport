
const HowItWorksPage = () => {
  // Componente funcional que exibe a página "Como Funciona"
  return (
    <>
      {/* Fragmento React usado para agrupar elementos sem criar nó extra no DOM */}

      <section className="pt-28 w-full mx-auto">
        {/*
          Seção principal da página
          - pt-28: padding-top 112px para compensar a navbar fixa
          - w-full: largura total
          - mx-auto: centraliza horizontalmente
        */}

        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Como Funciona
        </h1>
        {/*
          Título principal da página
          - flex justify-center: centraliza o texto horizontalmente
          - mb-6: margin-bottom
          - text-blue-600: cor do texto
          - text-3xl: tamanho da fonte
          - font-bold: negrito
        */}

        <p className="text-center font-semibold text-gray-700 text-lg mb-16 max-w-3xl mx-auto">
          Nossa plataforma foi criada para facilitar a denúncia de problemas escolares, 
          garantir transparência no acompanhamento e promover melhorias reais na comunidade educacional. 
          Veja como você pode participar dessa transformação em três passos simples:
        </p>
        {/*
          Parágrafo de introdução
          - text-center: centraliza o texto
          - font-semibold: seminegrito
          - text-gray-700: cor cinza
          - text-lg: tamanho da fonte
          - mb-16: margin-bottom
          - max-w-3xl mx-auto: limita a largura e centraliza horizontalmente
        */}

        <div className="container mx-auto px-4 text-center">
          {/*
            Container para os passos
            - mx-auto: centraliza horizontalmente
            - px-4: padding horizontal
            - text-center: centraliza o texto
          */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*
              Grid responsivo:
              - 1 coluna em telas pequenas
              - 3 colunas em telas médias ou maiores (md)
              - gap-8: espaçamento entre os cards
            */}

            {/* Passo 1 */}
            <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              {/*
                Card individual
                - p-6: padding
                - bg-white: fundo branco
                - rounded-xl: bordas arredondadas
                - shadow-lg: sombra
                - transform hover:scale-105: aumenta tamanho ao passar mouse
                - transition duration-300: animação suave de 300ms
              */}

              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto mb-4" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              {/*
                Ícone do passo 1
                - h-16 w-16: tamanho
                - text-blue-500: cor azul
                - mx-auto: centralizado
                - mb-4: margin-bottom
              */}

              <h4 className="text-xl font-semibold text-gray-700 mb-2">1. Registre a Denúncia</h4>
              {/*
                Título do passo 1
                - text-xl: tamanho da fonte
                - font-semibold: semi-negrito
                - text-gray-700: cor cinza
                - mb-2: margin-bottom
              */}

              <p className="text-gray-600">
                Descreva o problema com clareza, incluindo o que aconteceu, onde e quando. 
                Você pode anexar fotos, vídeos ou documentos que ajudem a comprovar a situação. 
                Se preferir, pode fazer isso de forma anônima.
              </p>
              {/*
                Descrição do passo 1
                - text-gray-600: cor cinza
              */}
            </div>

            {/* Passo 2 */}
            <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                <polyline points="17 2 12 7 7 2" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">2. Acompanhe o Status</h4>
              <p className="text-gray-600">
                Após o envio, você receberá um código para acompanhar o andamento da denúncia. 
                Todas as etapas — desde o recebimento até a resolução — são atualizadas em tempo real, garantindo total transparência.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500 mx-auto mb-4" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M10 15h4M10 19h4" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">3. Mude a sua Escola</h4>
              <p className="text-gray-600">
                Cada denúncia contribui para melhorias reais. 
                Os dados ajudam gestores a tomar decisões mais eficazes, promovendo um ambiente escolar mais seguro, justo e acolhedor para todos.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
// Exporta o componente para uso em rotas ou outros componentes