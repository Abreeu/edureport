import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center space-x-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <h1 className="text-xl font-bold text-blue-600">Sua Voz na Escola</h1>
      </div>
      <div className="space-x-4">
        <button className="text-purple-600 font-semibold py-2 px-4 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition duration-300">
          Ver Denúncias Públicas
        </button>
        <button className="text-blue-600 font-semibold py-2 px-4 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition duration-300">
          Entrar
        </button>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-blue-700 transition duration-300">
          Criar Conta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;