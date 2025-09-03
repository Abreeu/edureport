import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-600 text-white flex flex-col justify-center items-center p-10 text-center">
        <div className="relative bg-white/10 p-5 rounded-xl mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Sua Voz na Escola</h1>
        <p className="mt-2 mb-5">Plataforma segura para denúncias escolares</p>
        <ul className="text-left mt-2 space-y-2 text-sm">
          <li>• Denúncias anônimas e seguras</li>
          <li>• Ambiente escolar mais seguro</li>
        </ul>
      </div>

      <div className="flex-1 flex justify-center items-center p-10">
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-bold">Bem-vindo de volta</h2>
          <p className="text-gray-500 text-sm mb-5">
            Faça login para acessar sua conta
          </p>

          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <label className="block text-sm mt-3 mb-1">Senha</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span className="absolute right-3 top-2 text-gray-500 cursor-pointer text-sm">
              👁
            </span>
          </div>

          <div className="flex justify-between items-center text-xs my-4">
            <label className="flex items-center space-x-1">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Esqueci minha senha
            </a>
          </div>

          <button className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
            Entrar
          </button>

          <p className="text-xs text-center mt-5">
            Não tem uma conta?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Cadastre-se aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
