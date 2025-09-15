import { useLocation } from 'react-router-dom';

const StudentProfile = () => {
  // Recebe os dados do aluno via estado da rota
  const { state: studentData } = useLocation();

  const {
    fullName,
    socialName,
    email,
    dateOfBirth,
    state,
    city,
    neighborhood,
    schoolName,
  } = studentData || {};

  return (
    <section className="p-28 w-full max-w-4xl mx-auto px-4">
      {/* Card do perfil */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Cabeçalho azul */}
        <div className="bg-blue-600 h-40 relative flex items-center justify-center">
          <div className="absolute left-12">
            <img
              src="/default-profile.png"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Conteúdo do perfil */}
        <div className="pt-16 pb-8 px-6">
          <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
          {socialName && <p className="text-sm text-gray-500 italic">({socialName})</p>}
          <p className="mt-2 text-gray-600">{email}</p>

          {/* Informações adicionais */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-sm text-gray-700">
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Data de Nascimento:</span>
              <p className="mt-1 text-gray-600">{dateOfBirth}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Estado:</span>
              <p className="mt-1 text-gray-600">{state}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Cidade:</span>
              <p className="mt-1 text-gray-600">{city}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Bairro:</span>
              <p className="mt-1 text-gray-600">{neighborhood}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg col-span-1 sm:col-span-2">
              <span className="font-semibold text-gray-800">Escola:</span>
              <p className="mt-1 text-gray-600">{schoolName}</p>
            </div>
          </div>

          {/* Botão para editar perfil */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;