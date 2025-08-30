import React from 'react'
import { useLocation } from 'react-router-dom'

const AdminProfile = () => {
  const { state: studentData } = useLocation()

  const {
    fullName,
    socialName,
    email,
    birthDate,
    state,
    city,
    neighborhood,
    schoolName,
  } = studentData || {}

  return (
    <section className="pt-28 w-full  mx-auto">
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="bg-blue-600 h-40 relative flex items-center justify-center">
          <div className="absolute -bottom-4 left-12">
            <img
              src="/default-profile.png"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        
        <div className="pt-16 pb-8 px-6">
          <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
          {socialName && (
            <p className="text-sm text-gray-500 italic">({socialName})</p>
          )}
          <p className="mt-2 text-gray-600">{email}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-gray-700">
            <div>
              <span className="font-semibold">Data de Nascimento:</span> {birthDate}
            </div>
            <div>
              <span className="font-semibold">Estado:</span> {state}
            </div>
            <div>
              <span className="font-semibold">Cidade:</span> {city}
            </div>
            <div>
              <span className="font-semibold">Bairro:</span> {neighborhood}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminProfile