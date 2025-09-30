import { NavLink, useNavigate } from "react-router-dom"; // Usado para criar links de navegação entre rotas no React Router
import { useForm } from "react-hook-form"; // Biblioteca para lidar com formulários de forma reativa
import { zodResolver } from "@hookform/resolvers/zod"; // Faz a ponte entre o React Hook Form e o Zod (para validação de schema)
import { z } from "zod"; // Biblioteca de validação de dados

import FormField from "./FormField"; // Componente de input customizado
import SelectField from "./SelectField"; // Componente de select customizado

// ✅ Definição do schema de validação usando Zod
const schema = z
  .object({
    // Nome da escola: obrigatório e com mínimo de 3 caracteres
    schoolName: z.string().min(3, "Campo obrigatório"),
    // Tipo da escola: precisa ter pelo menos 2 caracteres (ex: "SP")
    schoolType: z.string().min(2, "Selecione uma categoria"),
    // Estado: também precisa ter pelo menos 2 caracteres
    state: z.string().min(2, "Selecione um estado"),
    // Cidade: obrigatória
    city: z.string().min(2, "Cidade obrigatória"),
    // Bairro: obrigatório
    neighborhood: z.string().min(2, "Bairro obrigatório"),
    // Email: deve ter formato válido
    email: z.string().email("Email inválido"),
    // Confirmar Email: campo só declarado (validação feita depois)
    confirmEmail: z.string(),
    // Senha: mínimo 6 caracteres
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    // Confirmar senha: só declarado (validação feita depois)
    confirmPassword: z.string(),
  })
  // Validação extra: confirmar se as senhas são iguais
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // aponta para o campo que deve mostrar o erro
  })
  // Validação extra: confirmar se os emails são iguais
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os emails não coincidem",
    path: ["confirmEmail"], // aponta para o campo que deve mostrar o erro
  });

// ✅ Lista de tipos de escola (opções do select)
const schoolTypes = [
  { value: "municipal", label: "Municipal" },
  { value: "estadual", label: "Estadual" },
  { value: "federal", label: "Federal" },
  { value: "privada", label: "Privada" },
];

// ✅ Lista de estados do Brasil (usados no select)
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

// ✅ Componente principal do formulário
const SignUpFormSchool = () => {
  // useForm inicializa o formulário com validação via Zod
  const {
    register, // registra os campos do form
    handleSubmit, // função que processa o submit
    formState: { errors }, // objeto que guarda os erros de validação
  } = useForm({
    resolver: zodResolver(schema), // conecta o formulário ao schema do Zod
  });
  const navigate = useNavigate();

  // Função que será chamada quando o form for enviado sem erros
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // 🚀 Aqui você poderia enviar os dados para o backend
    navigate("/schoolprofile");
  };

  return (
    <form
      className="flex flex-col mx-auto w-full max-w-3xl gap-4"
      onSubmit={handleSubmit(onSubmit)} // onSubmit do React Hook Form
    >
      {/* Campo: Nome da instituição */}
      <div className="grid grid-cols-1 gap-6 sm:gap-16 w-full p-2">
        <FormField
          id="schoolName"
          label="Instituição:"
          placeholder="Nome da Instituição"
          register={register}
          errors={errors}
        />
      </div>

      {/* Campos: Tipo da escola e Estado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-16 w-full p-2">
        <SelectField
          id="schoolType"
          label="Tipo:"
          options={schoolTypes}
          register={register}
          errors={errors}
        />
        <SelectField
          id="state"
          label="Estado:"
          options={brazilianStates}
          register={register}
          errors={errors}
        />
      </div>

      {/* Campos: Cidade e Bairro */}
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

      {/* Campos: Email e Confirmação de Email */}
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
          label="Confirme seu e-mail:"
          placeholder="Confirme seu e-mail"
          type="email"
          register={register}
          errors={errors}
        />
      </div>

      {/* Campos: Senha e Confirmação de Senha */}
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
        {/* Exemplo comentado:
            state={{
              schoolName: watch('schoolName'),
              schoolType: watch('schoolType'),
              email: watch('email'),
              state: watch('state'),
              city: watch('city'),
              neighborhood: watch('neighborhood'),
            }}
          */}
        <NavLink to="/schoolcontrolpanel">
          <button className="mt-4 mb-8 w-full p-3 text-sm sm:text-base text-white font-semibold transition duration-200 hover:bg-green-700 bg-green-500 rounded-md">
            Continuar
          </button>
        </NavLink>
      </div>
    </form>
  );
};

export default SignUpFormSchool;
