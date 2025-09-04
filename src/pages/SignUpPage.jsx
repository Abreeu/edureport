// Importa o campo de seleção customizado
import SelectField from "../components/signup/SelectField";
// Importa hook para manipular formulários
import { useForm } from "react-hook-form";
// Resolver para integração com Zod
import { zodResolver } from "@hookform/resolvers/zod";
// Biblioteca de validação de schema
import { z } from "zod";
// Hook para navegação programática entre rotas
import { useNavigate } from "react-router-dom";

// Definição do schema de validação usando Zod
const schema = z.object({
  userType: z.string().min(1, "Selecione um tipo de usuário"),
});

// Opções do campo de seleção
const userTypes = [
  { value: "aluno", label: "Aluno" },
  { value: "escola", label: "Escola" },
  { value: "admin", label: "Admin" },
];

// Componente funcional da página de cadastro
const SignUpPage = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Inicialização do formulário com React Hook Form e Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Integra Zod com react-hook-form
  });

  // Função chamada quando o formulário é submetido
  const onSubmit = (data) => {
    console.log("Form submitted:", data); // Apenas para desenvolvimento
    // Redireciona para a página correspondente ao tipo de usuário
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
      {/*
        - pt-28: padding-top para compensar a navbar fixa
        - flex justify-center: centraliza o conteúdo horizontalmente
      */}
      <section className="w-full max-w-3xl mx-auto justify-center">
        {/* Título da página */}
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Criar Conta
        </h1>

        <div className="flex justify-center">
          {/* Formulário de seleção de tipo de usuário */}
          <form className="w-2xs p-2" onSubmit={handleSubmit(onSubmit)}>
            <SelectField
              id="userType"
              label="Tipo de usuário:"
              options={userTypes}
              register={register}
              errors={errors}
            />

            {/* Botão de envio */}
            <button
              type="submit"
              className="mt-4 mb-8 w-full p-3 text-sm sm:text-base text-white font-semibold transition duration-200 hover:bg-green-700 bg-green-500 rounded-md cursor-pointer">
              Criar Conta
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;