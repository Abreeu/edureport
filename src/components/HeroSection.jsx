import { NavLink } from "react-router-dom";
const HeroSection = () => {
  // Define um componente funcional chamado HeroSection.

  return (
    <header
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 
                 text-stone py-24 md:py-32 text-center overflow-hidden">
      {/* 
        <header> → semântica HTML, usado como topo/destaque da página.
        Classes Tailwind:
        - relative: posicionamento relativo (permite usar elementos posicionados absolutos dentro).
        - bg-gradient-to-r: cria um gradiente da esquerda → direita.
        - from-blue-600 to-blue-800: cores do gradiente (azul médio até azul escuro).
        - text-stone: cor de texto em tom "stone" (neutro).
        - py-24 md:py-32: padding vertical de 96px, e 128px em telas médias.
        - text-center: centraliza o texto.
        - overflow-hidden: corta qualquer conteúdo que ultrapasse o container.
      */}

      <div className="container mx-auto px-4 relative z-10">
        {/* 
          Div que centraliza e limita a largura do conteúdo.
          - container: largura máxima automática e centralizada.
          - mx-auto: margem horizontal automática (centra no meio da tela).
          - px-4: padding horizontal (16px).
          - relative: cria novo contexto de posicionamento.
          - z-10: garante que fique acima de outros elementos que possam existir no <header>.
        */}

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white">
          Sua voz muda a escola
        </h2>
        {/* 
          Título principal do Hero.
          - text-4xl md:text-6xl: fonte grande (36px) e maior ainda em telas médias (60px).
          - font-extrabold: peso de fonte bem grosso.
          - leading-tight: espaçamento entre linhas mais fechado.
          - tracking-tight: reduz o espaçamento entre letras.
          - mb-4: margem inferior (16px).
          - text-white: cor branca no texto.
        */}

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">
          Relate problemas, denuncie e acompanhe as respostas das autoridades de
          forma anônima e segura.
        </p>
        {/* 
          Parágrafo de apoio (subtítulo).
          - text-lg md:text-xl: fonte de 18px e 20px em telas médias.
          - max-w-2xl: largura máxima de ~672px, para evitar linhas muito grandes.
          - mx-auto: centraliza horizontalmente.
          - mb-8: margem inferior (32px).
          - text-white: cor branca no texto.
        */}
        <NavLink to="/complaintregister">
          <button
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full 
                     text-lg shadow-xl hover:bg-green-600 transform hover:scale-105 
                     transition duration-300 ease-in-out cursor-pointer">
            Denunciar um Problema
          </button>
        </NavLink>
        {/* 
          Botão de ação principal (CTA).
          - bg-green-500: fundo verde.
          - text-white: texto branco.
          - font-bold: fonte em negrito.
          - py-3 px-8: padding vertical (12px) e horizontal (32px).
          - rounded-full: bordas totalmente arredondadas (botão "pill").
          - text-lg: fonte 18px.
          - shadow-xl: sombra destacada.
          - hover:bg-green-600: muda o fundo para verde mais escuro no hover.
          - transform hover:scale-105: aumenta levemente o tamanho no hover.
          - transition duration-300 ease-in-out: suaviza a transição da animação em 0.3s.
        */}
      </div>
    </header>
  );
};

export default HeroSection;
// Exporta o componente para ser usado em outras partes da aplicação.
