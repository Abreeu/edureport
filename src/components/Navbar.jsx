import { NavLink } from "react-router-dom"
// Importa NavLink do react-router-dom para navegação entre páginas sem recarregar a página

const Navbar = () => {
  // Define um componente funcional chamado Navbar

  return (
    <nav className="bg-white  p-4 flex justify-between items-center fixed w-full top-0 z-50 ">
      {/*
        <nav> → elemento semântico de navegação
        Classes Tailwind:
        - bg-white: fundo branco
        - shadow-md: sombra média
        - p-4: padding de 16px
        - flex justify-between items-center: layout flex, espaça conteúdo entre as extremidades e centraliza verticalmente
        - fixed w-full top-0: fixa no topo da tela, largura total
        - z-50: mantém a navbar acima de outros elementos
      */}

      <div className="flex items-center space-x-2 cursor-pointer">
        {/*
          Container do logo
          - flex items-center: organiza ícone + título em linha e centraliza verticalmente
          - space-x-2: espaço de 8px entre os elementos
          - cursor-pointer: muda o cursor ao passar por cima
        */}

        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        {/*
          Ícone do logo
          - h-8 w-8: altura e largura de 32px
          - text-blue-600: cor azul
        */}

        <NavLink to="/">
          <h1 className="text-xl font-bold text-blue-600">Sua Voz na Escola</h1>
        </NavLink>
        {/*
          Título da navbar que funciona como link para a página inicial
          - text-xl: tamanho da fonte 20px
          - font-bold: negrito
          - text-blue-600: cor azul
        */}
      </div>

      <div className="space-x-4">
        {/*
          Container dos botões de navegação
          - space-x-4: espaço de 16px entre os botões
        */}

        <NavLink to="/howitworks">
          <button className="text-blue-600 font-semibold py-2 px-4 rounded-full border-2 border-blue-600 hover:bg-purple-50 transition duration-300 cursor-pointer">
            Como Funciona
          </button>
        </NavLink>
        {/*
          Botão "Como Funciona"
          - text-purple-600: texto roxo
          - font-semibold: semi-negrito
          - py-2 px-4: padding vertical 8px, horizontal 16px
          - rounded-full: bordas arredondadas
          - border-2 border-purple-600: borda roxa de 2px
          - hover:bg-purple-50: fundo lilás ao passar o mouse
          - transition duration-300: animação suave de 0.3s
        */}

        <NavLink to="/seepubliccomplaints">
          <button className="text-blue-600 font-semibold py-2 px-4 rounded-full border-2 border-blue-600 hover:bg-purple-50 transition duration-300 cursor-pointer">
            Ver Denúncias Públicas
          </button>
        </NavLink>
        {/*
          Botão "Ver Denúncias Públicas" com o mesmo estilo do anterior
        */}

        <NavLink to="/login">
          <button className="text-blue-600 font-semibold py-2 px-4 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition duration-300 cursor-pointer">
            Entrar
          </button>
        </NavLink>
        {/*
          Botão "Entrar"
          - text-blue-600: azul
          - border-blue-600: borda azul
          - hover:bg-blue-50: fundo azul claro ao passar o mouse
        */}

        <NavLink to="signup">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-700 transition duration-300 cursor-pointer">
            Criar Conta
          </button>
        </NavLink>
        {/*
          Botão "Criar Conta" principal (CTA)
          - bg-blue-600: fundo azul
          - text-white: texto branco
          - shadow: sombra
          - hover:bg-blue-700: muda para azul mais escuro no hover
          - transition duration-300: animação suave
        */}
      </div>
    </nav>
  );
};

export default Navbar;
// Exporta o componente Navbar para uso em outras partes da aplicação