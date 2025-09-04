// Importa os componentes que serão usados na HomePage
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import HowItWorksSection from '../components/HowItWorks.jsx';
import StatisticsSection from '../components/StatisticsSection.jsx';

const HomePage = () => {
  // Define um componente funcional chamado HomePage

  return (
    <>
      {/* Fragmento React usado para agrupar elementos sem adicionar nó extra no DOM */}

      <Navbar />
      {/*
        Componente Navbar
        - Barra de navegação fixa no topo
        - Contém links para login, criar conta, ver denúncias, etc.
      */}

      <div className="pt-20">
        {/*
          Container principal da página
          - pt-20: padding-top 80px para compensar a navbar fixa
        */}

        <HeroSection />
        {/*
          Componente HeroSection
          - Seção inicial da página
          - Inclui título, descrição e botão de ação
        */}

        <HowItWorksSection />
        {/*
          Componente HowItWorksSection
          - Explica como o sistema funciona em 3 passos
          - Inclui ícones, títulos e descrições
        */}

        <StatisticsSection />
        {/*
          Componente StatisticsSection
          - Mostra estatísticas da plataforma (denúncias, taxa de resolução, etc.)
        */}
      </div>
    </>
  );
};

export default HomePage;
// Exporta o componente HomePage para uso em rotas ou outros componentes