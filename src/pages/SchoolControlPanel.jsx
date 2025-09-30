const SchoolControlPainel = () => {
    const schoolName = "Nome Escola"
    const schoolCnpj = "12.345.678/0001-90"
    const schoolAddress = "Rua da Escola, 123 - São Paulo, SP"

    // Exemplo de denúncias da escola
    const complaints = [
        {
            complainant: "João Pereira",
            tags: {
                positive: ["Atendimento rápido", "Informação clara"],
                negative: ["Demora no retorno", "Falta de transparência"]
            },
            description: "Eu fiz a denúncia porque houve grande demora no atendimento e não me deram uma resposta satisfatória."
        },
        {
            complainant: "Maria Silva",
            tags: {
                positive: ["Equipe simpática"],
                negative: ["Processo burocrático", "Pouca comunicação"]
            },
            description: "Apesar da equipe ser simpática, o processo todo foi muito burocrático e eu não fui atualizada sobre o andamento."
        }
    ]

    return (
        <section className="pt-28 w-full max-w-6xl mx-auto px-6">
            <h1 className="text-center mb-4 text-blue-600 text-4xl font-bold">
                Bem-vindo, <span>{schoolName}</span>
            </h1>

            <p className="text-center text-gray-700 text-lg mb-10">
                Aqui você encontra os principais recursos para gerenciar sua instituição e acompanhar denúncias recebidas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <a href="/schoolprofile" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-blue-600 font-bold text-xl mb-2">Seu Perfil</h2>
                    <p className="text-gray-600 text-sm">Edite as informações da escola e mantenha tudo atualizado.</p>
                </a>

                <a href="/schoolcomplaints" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-red-600 font-bold text-xl mb-2">Suas Denúncias</h2>
                    <p className="text-gray-600 text-sm">Acompanhe as denúncias recebidas e tome providências.</p>
                </a>
            </div>

            <div className="mb-12">
                <h3 className="text-center text-xl font-bold text-gray-800 mb-6">Denúncias Recebidas</h3>
                <div className="space-y-6">
                    {complaints.map((complaint, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                Denunciante: {complaint.complainant}
                            </h4>
                            <p className="text-gray-700 mb-4">{complaint.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {complaint.tags.positive.map((tag, i) => (
                                    <span key={`p-${i}`} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        + {tag}
                                    </span>
                                ))}
                                {complaint.tags.negative.map((tag, i) => (
                                    <span key={`n-${i}`} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                                        - {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 shadow-inner mb-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Dados da Instituição</h3>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Nome da Escola:</strong> {schoolName}</li>
                    <li><strong>CNPJ:</strong> {schoolCnpj}</li>
                    <li><strong>Endereço:</strong> {schoolAddress}</li>
                </ul>
            </div>
        </section>
    )
}

export default SchoolControlPainel
