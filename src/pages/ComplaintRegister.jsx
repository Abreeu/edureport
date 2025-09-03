import React, { useState } from "react";
import Select from "react-select";

// listas de tags
const BadTags = [
  { value: "ESTRUTURA", label: "Estrutura ruim" },
  { value: "FALTA_PROF", label: "Falta de professores" },
  { value: "MERENDA", label: "Merenda ruim" },
  { value: "LAB_PRECARIO", label: "Laboratórios precários" },
  { value: "SEGURANCA", label: "Falta de segurança" },
  { value: "LIMPEZA", label: "Higiene/limpeza ruim" },
  { value: "ACESSIBILIDADE", label: "Falta de acessibilidade" },
  { value: "GESTAO", label: "Gestão/coordenação ruim" },
  { value: "INFRA_INSUFICIENTE", label: "Infraestrutura insuficiente" },
  { value: "BULLYING", label: "Casos de bullying" },
];

const GoodTags = [
  { value: "PROFESSORES_BONS", label: "Professores bons" },
  { value: "BOM_AMBIENTE", label: "Bom ambiente" },
  { value: "MERENDA_BOA", label: "Merenda de qualidade" },
  { value: "LAB_BONS", label: "Laboratórios bem equipados" },
  { value: "SEGURANCA_OK", label: "Boa segurança" },
  { value: "LIMPEZA_OK", label: "Escola limpa" },
  { value: "ATIVIDADES", label: "Atividades extracurriculares" },
  { value: "TECNOLOGIA", label: "Boa tecnologia" },
];

const ComplaintRegister = () => {
  const [selectedBad, setSelectedBad] = useState([]);
  const [selectedGood, setSelectedGood] = useState([]);

  const handleSubmit = () => {
    const payload = {
      schoolId: 123,
      badTags: selectedBad.map((t) => t.value),
      goodTags: selectedGood.map((t) => t.value),
    };
    console.log("Payload para backend:", payload);
    alert("Tags enviadas! (veja o console)");
  };

  // remover tag clicando nela do lado da imagem
  const removeTag = (tag, type) => {
    if (type === "bad") {
      setSelectedBad((prev) => prev.filter((t) => t.value !== tag.value));
    } else {
      setSelectedGood((prev) => prev.filter((t) => t.value !== tag.value));
    }
  };

  return (
    <main className="pt-28 flex justify-center">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="flex justify-center mb-6 text-blue-600 text-3xl font-bold">
          Avaliar Escola
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden min-h-80 p-4">
          <h2 className="text-center p-2 font-semibold">
            Nome da Escola igual ao do cadastro do aluno aqui
          </h2>

          <div className="flex gap-8 px-2">
            <figure className="flex items-center border border-red-300">
              <img
                src="null"
                alt="Escola fulano de tal"
                title="Escola fulano de tal"
                width="300"
                height="300"
              />
            </figure>

            {/* tags selecionadas aparecem aqui */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Tags negativas:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedBad.map((tag) => (
                  <span
                    key={tag.value}
                    onClick={() => removeTag(tag, "bad")}
                    className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-red-200"
                    title="Clique para remover">
                    {tag.label} ✕
                  </span>
                ))}
              </div>

              <h3 className="font-semibold mt-4">Tags positivas:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedGood.map((tag) => (
                  <span
                    key={tag.value}
                    onClick={() => removeTag(tag, "good")}
                    className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-green-200"
                    title="Clique para remover">
                    {tag.label} ✕
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* selects com react-select */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="font-medium text-gray-700">
                Tags negativas
              </label>
              <Select
                options={BadTags}
                isMulti
                value={[] /* não mostra chips */}
                onChange={(newValue) => {
                  // react-select retorna array de todas selecionadas
                  // então mesclamos com já selecionadas
                  setSelectedBad((prev) => {
                    const combined = [...prev, ...newValue];
                    // remove duplicados
                    return combined.filter(
                      (v, i, a) => a.findIndex((t) => t.value === v.value) === i
                    );
                  });
                }}
                placeholder="Selecione tags negativas..."
                menuPortalTarget={document.body}
                components={{ MultiValue: () => null }}
                styles={{
                  menu: (base) => ({
                    ...base,
                    maxHeight: 220,
                    overflowY: "auto",
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Tags positivas
              </label>
              <Select
                options={GoodTags}
                isMulti
                value={[] /* não mostra chips */}
                onChange={(newValue) => {
                  setSelectedGood((prev) => {
                    const combined = [...prev, ...newValue];
                    return combined.filter(
                      (v, i, a) => a.findIndex((t) => t.value === v.value) === i
                    );
                  });
                }}
                placeholder="Selecione tags positivas..."
                menuPortalTarget={document.body}
                components={{ MultiValue: () => null }}
                styles={{
                  menu: (base) => ({
                    ...base,
                    maxHeight: 220,
                    overflowY: "auto",
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
            </div>
          </div>

          {/* Botão para enviar */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
              Enviar Avaliação
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComplaintRegister;
