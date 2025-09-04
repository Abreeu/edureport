import React from "react";
// Importa o formulário de cadastro de admin
import SignUpFormAdmin from "../components/signup/SignUpFormAdmin";

// Componente funcional da página de cadastro de administrador
const SignUpAdmin = () => {
  return (
    // Main da página
    <main className="pt-28 flex justify-center">
      {/*
        - pt-28: padding-top para não ficar atrás da navbar fixa
        - flex justify-center: centraliza horizontalmente o conteúdo
      */}

      {/* Seção centralizada da página */}
      <section className="w-full max-w-3xl mx-auto">
        {/*
          - w-full: largura total disponível
          - max-w-3xl: largura máxima de 3xl para limitar em telas grandes
          - mx-auto: centraliza horizontalmente
        */}

        {/* Título da página */}
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Cadastro de Admin
        </h1>
        {/*
          - flex justify-center: centraliza o título
          - mb-6: espaçamento abaixo do título
          - text-blue-600: cor azul
          - text-3xl: tamanho da fonte
          - font-bold: negrito
        */}

        {/* Formulário de cadastro de admin */}
        <SignUpFormAdmin />
      </section>
    </main>
  );
};

export default SignUpAdmin;