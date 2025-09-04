// Importa uma classe base de estilos para inputs (provavelmente usando Tailwind)
import { baseInputClass } from "./inputStyles";

// Criação do componente FormField, que representa um campo de formulário genérico.
// Ele recebe várias props:
// - id: identificador único do campo
// - label: texto exibido como rótulo do campo
// - type: tipo do input (text, password, email, etc.), por padrão é "text"
// - placeholder: texto de dica dentro do input
// - register: função do react-hook-form que conecta o input ao formulário
// - errors: objeto com mensagens de erro de validação
// - maxLength: limite máximo de caracteres permitidos
const FormField = ({
  id,
  label,
  type = "text",
  placeholder = "",
  register,
  errors,
  maxLength,
}) => {
  return (
    <div className="flex flex-col min-w-0 w-full">
      {/* Rótulo do campo, associado ao input via htmlFor */}
      <label htmlFor={id} className="font-medium text-gray-700 flex-shrink-0">
        {label}
      </label>

      {/* Campo de input controlado pelo react-hook-form */}
      <input
        className={`${baseInputClass} ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`} // Borda vermelha se houver erro, cinza caso contrário
        type={type} // Tipo do input (text, password, email, etc.)
        id={id} // Id do campo
        placeholder={placeholder} // Placeholder exibido dentro do input
        {...register(id)} // Conecta o input ao react-hook-form
        maxLength={maxLength} // Limita o número máximo de caracteres
      />

      {/* Espaço reservado para mostrar mensagem de erro caso exista */}
      <div className="min-h-[1.25rem] flex-shrink-0 w-full overflow-hidden">
        {errors[id] && (
          <span className="text-sm text-red-500 break-words leading-tight block w-full">
            {errors[id].message} {/* Exibe a mensagem de erro vinda da validação */}
          </span>
        )}
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default FormField;