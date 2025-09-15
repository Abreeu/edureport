import { useLocation } from 'react-router-dom'

const SchoolProfile = () => {
  const { state: schoolData } = useLocation()

  const {
    schoolName,
    schoolType,
    email,
    state,
    city,
    neighborhood,
  } = schoolData || {}

  return (
    <section className="pt-28 w-full max-w-4xl mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 h-40 relative flex items-center justify-center">
          <div className="absolute left-12">
            <img
              src="/default-profile.png"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        <div className="pt-16 pb-8 px-6">
          <h2 className="text-2xl font-bold text-gray-800">{schoolName}</h2>
          <p className="mt-2 text-gray-600">{email}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-sm text-gray-700">
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Tipo:</span> {schoolType}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Estado:</span> {state}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Cidade:</span> {city}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Bairro:</span> {neighborhood}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchoolProfile
