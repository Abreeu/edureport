import React from "react";
import SignUpFormAdmin from "../components/signup/SignUpFormAdmin";

const SignUpAdmin = () => {
  return (
    <main className="pt-28 flex justify-center">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Cadastro de Admin
        </h1>
        <SignUpFormAdmin />
      </section>
    </main>
  );
};

export default SignUpAdmin;
