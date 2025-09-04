// Importa a classe base de estilos para inputs, que será reaproveitada no <select>
import { baseInputClass } from "./inputStyles";

// Criação do componente SelectField, que representa um campo de seleção (dropdown).
// Props recebidas:
// - id: identificador único do campo
// - label: texto exibido como rótulo do campo
// - options: array de opções para o select (cada item com value e label)
// - register: função do react-hook-form que conecta o campo ao formulário
// - errors: objeto com mensagens de erro de validação
const SelectField = ({ id, label, options = [], register, errors }) => {
  return (
    <div className="flex flex-col min-w-0 w-full">
      {/* Rótulo do campo de seleção, vinculado ao select via htmlFor */}
      <label htmlFor={id} className="font-medium text-gray-700 flex-shrink-0">
        {label}
      </label>

      {/* Campo <select>, integrado ao react-hook-form */}
      <select
        className={`${baseInputClass} ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`} // Aplica borda vermelha se houver erro, senão cinza
        id={id}
        {...register(id)} // Conecta o campo ao react-hook-form
      >
        {/* Primeira opção "padrão", para indicar que nada foi selecionado ainda */}
        <option value="">Selecione...</option>

        {/* Mapeia o array de opções recebido via props e renderiza cada <option> */}
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* Área reservada para exibir mensagens de erro do campo */}
      <div className="min-h-[1.25rem] flex-shrink-0 overflow-hidden">
        {errors[id] && (
          <span className="text-sm text-red-500 break-words leading-tight block w-full">
            {errors[id].message} {/* Exibe a mensagem de erro do campo */}
          </span>
        )}
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default SelectField;