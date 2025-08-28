import React from "react";
import SelectField from "../components/signup/SelectField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  userType: z.string().min(1, "Selecione um tipo de usuário"),
});

const userTypes = [
  { value: "aluno", label: "Aluno" },
  { value: "escola", label: "Escola" },
  { value: "admin", label: "Admin" },
];

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data); // Enviar a data pro backend, console.log só pra ver a data no desenvolvimento
    switch (data.userType) {
      case "aluno":
        navigate("/signup-user");
        break;
      case "escola":
        navigate("/signup-school");
        break;
      case "admin":
        navigate("/signup-admin");
        break;
      default:
        console.error("Invalid type selected");
    }
  };

  return (
    <main className="pt-28 flex justify-center">
      <section className="w-full max-w-3xl mx-auto justify-center">
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Criar Conta
        </h1>
        <div className="flex justify-center">
          <form className="w-2xs p-2" onSubmit={handleSubmit(onSubmit)}>
            <SelectField
              id="userType"
              label="Tipo de usuário:"
              options={userTypes}
              register={register}
              errors={errors}
            />

            {/* Botão */}
            <button
              type="submit"
              className="mt-4 mb-8 w-full p-3 text-sm sm:text-base text-white font-semibold transition duration-200 hover:bg-green-700 bg-green-500 rounded-md">
              Criar Conta
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
