// Importa o React para criar o componente
import React from "react";

// Importa o NavLink para navegação (react-router-dom)
import { NavLink } from "react-router-dom"

// Importa hooks e utilitários do react-hook-form
import { useForm } from "react-hook-form";

// Importa o zodResolver que conecta react-hook-form com zod para validação
import { zodResolver } from "@hookform/resolvers/zod";

// Importa o zod para criar o schema de validação
import { z } from "zod";

// Importa os componentes customizados de campos
import FormField from "./FormField";
import SelectField from "./SelectField";
import DateField from "./DateField";

// Define o schema de validação com zod
const schema = z
  .object({
    fullName: z.string().min(3, "Nome completo obrigatório"), // Nome completo obrigatório
    socialName: z.string().optional(), // Nome social opcional
    email: z.string().email("Email inválido"), // Email válido
    confirmEmail: z.string(), // Confirmação de email
    dateOfBirth: z
      .string({
        required_error: "Data de nascimento obrigatório",
        invalid_type_error: "Data inválida",
      })
      .min(1, "Campo obrigatório")
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data inválida (DD/MM/AAAA)"), // Regex para validar formato DD/MM/AAAA
    state: z.string().min(2, "Selecione um estado"), // Estado obrigatório
    city: z.string().min(2, "Cidade obrigatória"), // Cidade obrigatória
    neighborhood: z.string().min(2, "Bairro obrigatório"), // Bairro obrigatório
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"), // Senha mínima
    confirmPassword: z.string(), // Confirmação de senha
  })
  // Validação customizada: senha e confirmação devem ser iguais
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })
  // Validação customizada: email e confirmação devem ser iguais
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os Emails não coincidem",
    path: ["confirmEmail"],
  });

// Lista de estados brasileiros para popular o <select>
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

// Componente principal do formulário de cadastro
const SignUpForm = () => {
  // Hook useForm para controlar o formulário
  const {
    register, // Registra campos simples (input, select)
    control, // Necessário para campos controlados (ex: DateField)
    handleSubmit, // Função para lidar com submit do form
    formState: { errors }, // Objeto com erros de validação
  } = useForm({
    resolver: zodResolver(schema), // Usa o zod para validar o form
    defaultValues: { dateOfBirth: "" }, // Valor inicial vazio para data
  });

  // Função chamada ao submeter o formulário
  const onSubmit = (data) => {
    console.log("Form submitted:", data); 
    // Aqui é onde você faria a chamada ao backend
  };

  return (
    <form
      className="flex flex-col mx-auto w-full max-w-3xl gap-4"
      onSubmit={handleSubmit(onSubmit)} // handleSubmit garante validação antes de enviar
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

      {/* Email e Confirmação de Email */}
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
        {/* Campo de data usando componente DateField */}
        <DateField control={control} errors={errors} />

        {/* Campo de estado com lista de opções */}
        <SelectField
          id="state"
          label="Estado:"
          options={brazilianStates}
          register={register}
          errors={errors}
        />
      </div>

      {/* Cidade e Bairro */}
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

      {/* Senha e Confirmação de Senha */}
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

      {/* Botão de continuar */}
      <div className="px-2">
        <NavLink to='/adminprofile'>
          {/* Poderia enviar os dados pelo state do NavLink */}
          {/* Exemplo comentado:
            state={{
              fullName: watch('fullName'),
              socialName: watch('socialName'),
              email: watch('email'),
              birthDate: watch('birthDate'),
              state: watch('state'),
              city: watch('city'),
              neighborhood: watch('neighborhood'),
            }}
          */}
          <button
            className="mt-4 mb-8 w-full p-3 text-sm sm:text-base text-white font-semibold transition duration-200 hover:bg-green-700 bg-green-500 rounded-md"
          >
            Continuar
          </button>
        </NavLink>
      </div>
    </form>
  );
};

// Exporta o componente para ser usado em outros lugares
export default SignUpForm;