const StudentControlPainel = () => {
    const studentName = "Nome Aluno" // Substitua pelo nome real do aluno
    const schoolName = "Nome Escola" // Substitua pelo nome real da escola
    const schoolemail = "aluno@email.com" // Substitua pelo email real do aluno

    return (
        <section className="pt-28 w-full max-w-6xl mx-auto px-6">
            <h1 className="text-center mb-4 text-blue-600 text-4xl font-bold">
                Bem-vindo, <span>{studentName}</span>!
            </h1>

            <p className="text-center text-gray-700 text-lg mb-10">
                Aqui você encontra os principais recursos e informações sobre sua vida escolar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <a href="/studentprofile" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-blue-600 font-bold text-xl mb-2">Seu Perfil</h2>
                    <p className="text-gray-600 text-sm">Veja e edite suas informações pessoais.</p>
                </a>

                <a href="/seestudentcomplaints" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-red-600 font-bold text-xl mb-2">Denúncias</h2>
                    <p className="text-gray-600 text-sm">Relate problemas ou situações preocupantes.</p>
                </a>

                <a href="/complaintregister" className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-green-700 font-bold text-xl mb-2">Criar Denúncia</h2>
                    <p className="text-gray-600 text-sm">Registre uma nova denúncia sobre ocorrências internas.</p>
                </a>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-inner">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Seus Dados</h3>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Nome do Aluno:</strong> {studentName}</li>
                    <li><strong>Nome da Escola:</strong> {schoolName}</li>
                    <li><strong>Email do Aluno:</strong> {schoolemail}</li>
                </ul>
            </div>
        </section>
    )
}

export default StudentControlPainel
