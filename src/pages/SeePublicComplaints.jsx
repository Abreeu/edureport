import React from 'react'

const complaintsData = [
  {
    id: 1,
    institutionName: 'Instituição 1',
    complainantName: 'Nome do denunciante da Instituição 1',
    date: '22/09/2025',
    imageUrl: '/path/to/logo.png',
    positiveTags: ['Atendimento rápido', 'Informação clara'],
    negativeTags: ['Demora no retorno', 'Falta de transparência'],
    comment:
      'Eu fiz a denúncia porque houve grande demora no atendimento e não me deram uma resposta satisfatória.',
  },
  {
    id: 2,
    institutionName: 'Instituição 2',
    complainantName: 'Maria Silva',
    date: '20/09/2025',
    imageUrl: '/path/to/logo2.png',
    positiveTags: ['Equipe simpática'],
    negativeTags: ['Processo burocrático', 'Pouca comunicação'],
    comment:
      'Apesar da equipe ser simpática, o processo todo foi muito burocrático e eu não fui atualizada sobre o andamento.',
  },
]

const SeePublicComplaints = () => {
  return (
    <section className="pt-28 w-full max-w-4xl mx-auto">
      {/* <h1 className="text-center mb-8 text-blue-600 text-3xl font-bold">
        Ver Denúncias Públicas
      </h1> */}

      <div className="space-y-6">
        {complaintsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start bg-white shadow rounded-lg p-6"
          >
            <div className="flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={item.institutionName}
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>

            <div className="mt-4 md:mt-0 md:ml-6 flex-1">
              
              <div className="flex flex-wrap justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.institutionName}
                </h2>
                <span className="text-sm text-gray-500">
                  {item.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Denunciante: <strong>{item.complainantName}</strong>
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.positiveTags.map((tag, idx) => (
                  <span
                    key={`pos-${idx}`}
                    className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    + {tag}
                  </span>
                ))}
                {item.negativeTags.map((tag, idx) => (
                  <span
                    key={`neg-${idx}`}
                    className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    – {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SeePublicComplaints
