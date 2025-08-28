import React from "react";
import SignUpFormSchool from "../components/signup/SignUpFormSchool";

const SignUpSchool = () => {
  return (
    <main className="pt-28 flex justify-center">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Cadastro de Escola
        </h1>
        <SignUpFormSchool />
      </section>
    </main>
  );
};

export default SignUpSchool;
