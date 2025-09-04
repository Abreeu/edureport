// Importa o Controller do react-hook-form
// Ele serve para conectar campos de input ao sistema de formulários do react-hook-form
import { Controller } from "react-hook-form";

// Importa uma classe base de estilos para inputs (provavelmente com Tailwind)
import { baseInputClass } from "./inputStyles";

// Criação do componente DateField, que recebe duas props:
// - control: objeto do react-hook-form usado para controlar os inputs
// - errors: objeto que contém os erros de validação do formulário
const DateField = ({ control, errors }) => {
  
  // Função que formata a data conforme o usuário digita
  const formatDate = (inputValue) => {
    // Remove tudo que não for número (\D = qualquer caractere que não seja dígito)
    const numbers = inputValue.replace(/\D/g, "");

    // Se só tiver até 2 dígitos, retorna só o que foi digitado (dia)
    if (numbers.length <= 2) {
      return numbers;

    // Se tiver até 4 dígitos, retorna no formato DD/MM
    } else if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;

    // Caso contrário, retorna no formato DD/MM/AAAA
    } else {
      return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
        4,
        8 // limita até 8 caracteres (2 do dia, 2 do mês e 4 do ano)
      )}`;
    }
  };

  // Função para tratar mudanças no campo de input da data
  const handleDateChange = (e, onChange) => {
    // Formata a data digitada usando a função acima
    const formatted = formatDate(e.target.value);

    // Chama o onChange do react-hook-form para atualizar o valor no form
    onChange(formatted);
  };

  // O que será renderizado na tela
  return (
    <div className="flex flex-col min-w-0 w-full">
      {/* Rótulo do campo de input */}
      <label
        htmlFor="dateOfBirth"
        className="font-medium text-gray-700 flex-shrink-0">
        Data de Nascimento
      </label>

      {/* Controller conecta o input ao react-hook-form */}
      <Controller
        name="dateOfBirth" // nome do campo dentro do form
        control={control}  // controle passado pelo react-hook-form
        render={({ field: { onChange, value, ...field } }) => (
          <input
            {...field} // inclui propriedades como onBlur, name, ref etc.
            value={value || ""} // valor atual do campo, evita undefined
            onChange={(e) => handleDateChange(e, onChange)} // aplica a formatação
            id="dateOfBirth"
            className={`${baseInputClass} ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`} // adiciona borda vermelha se houver erro
            placeholder="DD/MM/AAAA" // dica de formato
            type="text"
            maxLength={10} // máximo de 10 caracteres (DD/MM/AAAA)
          />
        )}
      />

      {/* Área para exibir mensagens de erro */}
      <div className="min-h-[1.25rem] flex-shrink-0 w-full overflow-hidden">
        {errors.dateOfBirth && (
          <span className="text-sm text-red-500 break-words leading-tight block w-full">
            {errors.dateOfBirth.message}
          </span>
        )}
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outros arquivos
export default DateField;