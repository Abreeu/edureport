// Importa o formulário de cadastro específico para alunos
import SignUpForm from "../components/signup/SignUpFormUser";

// Componente funcional da página de cadastro de aluno
const SignUpUser = () => {
  return (
    <main className="pt-28 flex justify-center">
      {/*
        - pt-28: adiciona padding-top para compensar a navbar fixa
        - flex justify-center: centraliza horizontalmente o conteúdo
      */}
      <section className="w-full max-w-3xl mx-auto">
        {/* Título da página */}
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Cadastro de Aluno
        </h1>
        {/* Renderiza o formulário de cadastro de aluno */}
        <SignUpForm />
      </section>
    </main>
  );
};

export default SignUpUser;