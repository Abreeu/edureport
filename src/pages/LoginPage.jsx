import { NavLink } from "react-router-dom";

// Componente funcional da página de login
const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/*
        Container principal da página
        - flex: layout flexbox horizontal
        - h-screen: altura da tela inteira
      */}

      {/* Lado esquerdo da página */}
      <div className="flex-1 bg-blue-600 text-white flex flex-col justify-center items-center p-10 text-center">
        {/*
          Lado visual (informações sobre a plataforma)
          - flex-1: ocupa metade do espaço horizontal
          - bg-blue-600: fundo azul
          - text-white: texto branco
          - flex flex-col justify-center items-center: centraliza vertical e horizontalmente
          - p-10: padding
          - text-center: centraliza o texto
        */}

        {/* Ícone com aviso */}
        <div className="relative bg-white/10 p-5 rounded-xl mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white p-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.25 10-8 12-4.75-2-8-6.75-8-12V7l8-4z"/>
          </svg>
          <div className="absolute bottom-1 right-1 text-yellow-300 text-lg"></div>
          {/*
            Pequeno aviso (emoji ⚠) posicionado no canto inferior direito
          */}
        </div>

        <h1 className="text-2xl font-bold">Sua voz na Escola</h1>
        {/*
          Título do lado esquerdo
          - text-2xl: tamanho da fonte
          - font-bold: negrito
        */}

        <p className="mt-2 mb-5">Plataforma segura para denúncias escolares</p>
        {/*
          Subtítulo explicativo
          - mt-2: margin-top
          - mb-5: margin-bottom
        */}

        <ul className="text-left mt-2 space-y-2 text-sm">
          {/*
            Lista de benefícios
            - text-left: alinhamento à esquerda
            - mt-2: margin-top
            - space-y-2: espaço vertical entre itens
            - text-sm: tamanho de fonte pequeno
          */}
          <li>• Denúncias anônimas e seguras</li>
          <li>• Ambiente escolar mais seguro</li>
        </ul>
      </div>

      {/* Lado direito da página */}
      <div className="flex-1 flex justify-center items-center p-10">
        {/*
          Área do formulário de login
          - flex-1: ocupa metade do espaço horizontal
          - flex justify-center items-center: centraliza o formulário
          - p-10: padding
        */}

        <div className="w-full max-w-sm">
          {/*
            Container do formulário
            - w-full: ocupa toda a largura disponível
            - max-w-sm: limita largura máxima
          */}

          <h2 className="text-xl font-bold">Bem-vindo de volta</h2>
          <p className="text-gray-500 text-sm mb-5">Faça login para acessar sua conta</p>

          {/* Campo de email */}
          <label className="block text-sm mb-1">Email</label>
          <input 
            type="email" 
            placeholder="seu@email.com"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Campo de senha */}
          <label className="block text-sm mt-3 mb-1">Senha</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Digite sua senha"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span className="absolute right-3 top-2 text-gray-500 cursor-pointer text-sm">👁</span>
            {/*
              Ícone para mostrar/ocultar senha
              - absolute: posicionamento absoluto dentro do input
              - right-3 top-2: posição no canto superior direito
            */}
          </div>

          {/* Lembrar de mim e esqueci a senha */}
          <div className="flex justify-between items-center text-xs my-4">
            <label className="flex items-center space-x-1">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Esqueci minha senha</a>
          </div>

          {/* Botão de login */}
          <button className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
            Entrar
          </button>

          {/* Link para cadastro */}
          <p className="text-sm text-center mt-5">
            Não tem uma conta? <NavLink to="/signup"><a href="#" className="text-blue-600 hover:underline">Cadastre-se aqui</a></NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;