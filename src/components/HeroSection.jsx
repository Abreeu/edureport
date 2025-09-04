import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <header
      className="relative bg-gradient-to-r from-blue-600 to-blue-800 
text-stone py-24 md:py-32 text-center overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white">
          Sua voz muda a escola
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white">
          Relate problemas, denuncie e acompanhe as respostas das autoridades de
          forma anônima e segura.
        </p>
        <NavLink to="/complaintregister">
          <button
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full 
text-lg shadow-xl hover:bg-green-600 transform hover:scale-105 
transition duration-300 ease-in-out cursor-pointer"
          >
            Denunciar um Problema
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default HeroSection;
