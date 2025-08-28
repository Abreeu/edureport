import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormField from "./FormField";
import SelectField from "./SelectField";
import DateField from "./DateField";

const schema = z
  .object({
    fullName: z.string().min(3, "Nome completo obrigatório"),
    socialName: z.string().optional(),
    email: z.string().email("Email inválido"),
    confirmEmail: z.string(),
    dateOfBirth: z
      .string({
        required_error: "Data de nascimento obrigatório",
        invalid_type_error: "Data inválida",
      })
      .min(1, "Campo obrigatório")
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data inválida (DD/MM/AAAA)"),
    state: z.string().min(2, "Selecione um estado"),
    city: z.string().min(2, "Cidade obrigatória"),
    neighborhood: z.string().min(2, "Bairro obrigatório"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os Emails não coincidem",
    path: ["confirmEmail"],
  });

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

const SignUpForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { dateOfBirth: "" },
  });
  const onSubmit = (data) => {
    console.log("Form submitted:", data); // Enviar a data pro backend, console.log só pra ver a data no desenvolvimento
  };

  return (
    <form
      className="flex flex-col mx-auto w-full max-w-3xl gap-4"
      onSubmit={handleSubmit(onSubmit)}>
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
        <DateField control={control} errors={errors} />
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

      {/* Botão */}
      <div className="px-2">
        <button className="mt-4 mb-8 w-full p-3  text-sm sm:text-base text-white font-semibold transition duration-200 hover:bg-green-700 bg-green-500 rounded-md">
          Continuar
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
