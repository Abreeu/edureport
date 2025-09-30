import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// Importa useLocation do react-router-dom para acessar dados passados via navegação (state)

const AdminProfile = () => {
  // Define um componente funcional chamado AdminProfile

  const { state: studentData } = useLocation()
  /*
    useLocation() retorna o objeto de localização atual
    - state: contém dados passados via NavLink ou navigate
    - studentData: renomeia state para algo mais claro (dados do estudante)
  */

  const {
    fullName,
    socialName,
    email,
    birthDate,
    state,
    city,
    neighborhood,
  } = studentData || {}
  /*
    Desestrutura os dados do estudante
    - Caso studentData seja undefined (nenhum estado passado), desestruturação usa {} para evitar erro
  */

  return (
    <section className="pt-28 w-full max-w-4xl mx-auto px-4">
      {/*
        Seção principal do perfil
        - pt-28: padding-top de 112px (para compensar navbar fixa)
        - w-full: largura total
        - mx-auto: centraliza horizontalmente
      */}

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/*
          Card do perfil
          - bg-white: fundo branco
          - shadow-lg: sombra grande
          - rounded-lg: bordas arredondadas
          - overflow-hidden: evita que elementos filhos saiam do card
        */}

        <div className="bg-blue-600 h-40 relative flex items-center justify-center">
          {/*
            Cabeçalho do card
            - bg-blue-600: fundo azul
            - h-40: altura 160px
            - relative: para posicionar foto de perfil
            - flex items-center justify-center: centraliza conteúdo horizontal e vertical
          */}

          <div className="absolute left-12">
            {/*
              Container da foto de perfil
              - absolute: posição absoluta em relação ao pai
              - left-12: 48px da esquerda
            */}
            <img
              src="/default-profile.png"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            {/*
              Foto de perfil
              - w-24 h-24: 96px x 96px
              - rounded-full: circular
              - border-4 border-white: borda branca de 4px
              - object-cover: mantém proporção da imagem e preenche o espaço
            */}
          </div>
        </div>

        <div className="pt-16 pb-8 px-6">
          {/*
            Conteúdo do perfil
            - pt-16: padding-top 64px (para não sobrepor a foto)
            - pb-8: padding-bottom 32px
            - px-6: padding horizontal 24px
          */}
          <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
          {/*
            Nome completo do estudante
            - text-2xl: fonte ~24px
            - font-bold: negrito
            - text-gray-800: cinza escuro
          */}
          {socialName && (
            <p className="text-sm text-gray-500 italic">({socialName})</p>
          )}
          {/*
            Nome social (opcional)
            - renderiza apenas se socialName existir
            - text-sm: fonte pequena
            - text-gray-500: cinza médio
            - italic: itálico
          */}
          <p className="mt-2 text-gray-600">{email}</p>
          {/*
            Email do estudante
            - mt-2: margem superior 8px
            - text-gray-600: cinza médio
          */}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-sm text-gray-700">
            {/*
              Grid com informações adicionais
              - mt-6: margem superior 24px
              - grid-cols-1: 1 coluna em telas pequenas
              - sm:grid-cols-2: 2 colunas em telas médias e maiores
              - gap-4: espaço de 16px entre elementos
              - text-left: alinhamento à esquerda
              - text-sm: fonte pequena
              - text-gray-700: cinza escuro
            */}

            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-800">Data de Nascimento:</span> {birthDate}
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

          <div className="mt-8 flex justify-center space-x-6">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
              Editar Perfil
            </button>
            <NavLink to="/admincontrolpanel">
              <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200">
                Voltar ao Painel
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminProfile
// Exporta o componente AdminProfile para uso em outras partes da aplicação