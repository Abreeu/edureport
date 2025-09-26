// Importa useForm do react-hook-form para controlar formulários
import { useForm } from "react-hook-form";

import { Navigate, NavLink, useNavigate } from "react-router-dom";
// Importa NavLink do react-router-dom para navegação entre páginas sem recarregar a página

// Importa o zodResolver que integra o Zod com react-hook-form
import { zodResolver } from "@hookform/resolvers/zod";

// Importa o Zod para validação de esquema (schema validation)
import { z } from "zod";

// Importa os campos personalizados criados anteriormente
import FormField from "./FormField";
import SelectField from "./SelectField";
import DateField from "./DateField";

// ------------------------------
// Definição do schema de validação com Zod
// ------------------------------
const schema = z
  .object({
    fullName: z.string().min(3, "Nome completo obrigatório"), // Nome deve ter no mínimo 3 caracteres
    socialName: z.string().optional(), // Nome social não é obrigatório
    email: z.string().email("Email inválido"), // Deve ser um email válido
    confirmEmail: z.string(), // Confirmação de email (validado depois com refine)
    dateOfBirth: z
      .string({
        required_error: "Data de nascimento obrigatório", // Caso não preencha
        invalid_type_error: "Data inválida", // Caso o tipo seja incorreto
      })
      .min(1, "Campo obrigatório") // Impede vazio
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data inválida (DD/MM/AAAA)"), // Exige formato brasileiro
    state: z.string().min(2, "Selecione um estado"), // Estado deve ter no mínimo 2 caracteres (ex: SP)
    city: z.string().min(2, "Cidade obrigatória"), // Cidade precisa ter ao menos 2 letras
    neighborhood: z.string().min(2, "Bairro obrigatório"), // Bairro precisa ter ao menos 2 letras
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"), // Senha precisa ter 6+ caracteres
    confirmPassword: z.string(), // Confirmação da senha (validado com refine)
    schoolName: z.string().min(2, "Escola obrigatória"), // Nome da escola
  })
  // Verifica se as senhas coincidem
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Aponta o erro para o campo confirmPassword
  })
  // Verifica se os emails coincidem
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os Emails não coincidem",
    path: ["confirmEmail"], // Aponta o erro para o campo confirmEmail
  });

// ------------------------------
// Lista de estados brasileiros
// ------------------------------
const brazilianStates = [
  { value: "AC", label: "Acre (AC)" },
  { value: "AL", label: "Alagoas (AL)" },
  { value: "AP", label: "Amapá (AP)" },
  { value: "AM", label: "Amazonas (AM)" },
  { value: "BA", label: "Bahia (BA)" },
  { value: "CE", label: "Ceará (CE)" },
  { value: "DF", label: "Distrito Federal (DF)" },
  { value: "ES", label: "Espírito Santo (ES)" },
  { value: "GO", label: "Goiás (GO)" },
  { value: "MA", label: "Maranhão (MA)" },
  { value: "MT", label: "Mato Grosso (MT)" },
  { value: "MS", label: "Mato Grosso do Sul (MS)" },
  { value: "MG", label: "Minas Gerais (MG)" },
  { value: "PA", label: "Pará (PA)" },
  { value: "PB", label: "Paraíba (PB)" },
  { value: "PR", label: "Paraná (PR)" },
  { value: "PE", label: "Pernambuco (PE)" },
  { value: "PI", label: "Piauí (PI)" },
  { value: "RJ", label: "Rio de Janeiro (RJ)" },
  { value: "RN", label: "Rio Grande do Norte (RN)" },
  { value: "RS", label: "Rio Grande do Sul (RS)" },
  { value: "RO", label: "Rondônia (RO)" },
  { value: "RR", label: "Roraima (RR)" },
  { value: "SC", label: "Santa Catarina (SC)" },
  { value: "SP", label: "São Paulo (SP)" },
  { value: "SE", label: "Sergipe (SE)" },
  { value: "TO", label: "Tocantins (TO)" },
];

// ------------------------------
// Componente principal: Formulário de Cadastro
// ------------------------------
const SignUpForm = () => {
  // useForm inicializa o formulário com validação do Zod
  const {
    register, // Registra campos simples (input, select)
    control, // Necessário para campos controlados (ex: DateField com Controller)
    handleSubmit, // Função para lidar com envio
    formState: { errors }, // Objeto contendo erros de validação
  } = useForm({
    resolver: zodResolver(schema), // Integração com Zod
    defaultValues: { dateOfBirth: "" }, // Valor inicial vazio para data
  });
  const navigate = useNavigate();

  // Função chamada quando o formulário é enviado com sucesso
  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    navigate("/studentprofile");

    // Aqui você poderia enviar os dados para um backend via API
  };

  // ------------------------------
  // Renderização do formulário
  // ------------------------------
  return (
    <form
      className="flex flex-col mx-auto w-full max-w-3xl gap-4" // Layout centralizado
      onSubmit={handleSubmit(onSubmit)} // handleSubmit do react-hook-form
    >
      {/* Nome Completo e Nome Social */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 w-full p-2">
        <FormField
          id="fullName"
          label="Nome Completo:"
          placeholder="Nome completo"
          register={register}
          errors={errors}
        />
        <FormField
          id="socialName"
          label="Nome Social:"
          placeholder="Nome social"
          register={register}
          errors={errors}
        />
      </div>

      {/* Email e Confirma email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 w-full p-2">
        <FormField
          id="email"
          label="Email:"
          placeholder="Seu e-mail"
          type="email"
          register={register}
          errors={errors}
        />
        <FormField
          id="confirmEmail"
          label="Confirmar email:"
          placeholder="Confirme seu e-mail"
          type="email"
          register={register}
          errors={errors}
        />
      </div>

      {/* Data de nascimento e Estado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 w-full p-2">
        {/* Campo controlado com Controller (DateField) */}
        <DateField control={control} errors={errors} />
        {/* Select de estados brasileiros */}
        <SelectField
          id="state"
          label="Estado:"
          options={brazilianStates}
          register={register}
          errors={errors}
        />
      </div>

      {/* Cidade e bairro */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 w-full p-2">
        <FormField
          id="city"
          label="Cidade:"
          placeholder="Cidade"
          register={register}
          errors={errors}
        />
        <FormField
          id="neighborhood"
          label="Bairro:"
          placeholder="Bairro"
          register={register}
          errors={errors}
        />
      </div>

      {/* Senha e Confirmação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 w-full p-2">
        <FormField
          id="password"
          label="Crie sua senha:"
          placeholder="Crie sua senha"
          type="password"
          register={register}
          errors={errors}
        />
        <FormField
          id="confirmPassword"
          label="Confirme sua senha:"
          placeholder="Confirme sua senha"
          type="password"
          register={register}
          errors={errors}
        />
      </div>

      {/* Escola */}
      <div className="grid grid-cols-1  w-full p-2">
        <FormField
          id="schoolName"
          label="Escola:"
          placeholder="Nome da Escola"
          register={register}
          errors={errors}
        />
      </div>

      {/* Botão */}

      <div className="px-2">
        <NavLink to="/studentcontrolpanel">
          <button className=" mb-4 w-full p-3  text-sm sm:text-base text-white font-semibold transition duration-200 hover:bg-green-700 bg-green-500 rounded-md">
            Continuar
          </button>
        </NavLink>

      </div>
    </form>
  );
};

// Exporta o formulário
export default SignUpForm;
