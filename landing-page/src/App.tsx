import './App.css' // Importa o arquivo de estilos global para a aplicação, garantindo que os estilos sejam aplicados a toda a página e seus componentes
import Hero from './components/Hero/Hero' // Importa o componente de seção principal da landing page, com titulo, descrição e chamada para ação
import Navbar from './components/Navbar/Navbar' // Importa o componente de barra de navegação fixa no topo da página, com logo, links de navegação e botões de ação para login e cadastro
import Sobre from './components/Sobre/Sobre' // Importa o componente de seção "Sobre" da landing page, com informações sobre a plataforma e os 4 pilares, utilizando o componente ItemPilar para exibir cada pilar de forma visual e informativa
import Funcionalidades from './components/Funcionalidades/Funcionalidades' // Importa o componente de seção "Funcionalidades" da landing page, destacando as principais funcionalidades da plataforma, utilizando o componente Cards para exibir cada funcionalidade de forma visual e informativa

// Componente principal da aplicação, que renderiza a barra de navegação e a seção principal da landing page, garantindo que ambos os componentes sejam exibidos na página inicial.
function App() {

  return (
    <>
      <Navbar /> {/* Barra de navegação fixa no topo da página, com logo, links de navegação e botões de ação para login e cadastro */}
      <Hero />  {/*Seção principal da landing page, com titulo, descrição e chamada para ação */} 
      <Sobre /> {/* Seção "Sobre" da landing page, com informações sobre a plataforma e os 4 pilares, utilizando o componente ItemPilar para exibir cada pilar de forma visual e informativa */}
      <Funcionalidades /> {/* Seção "Funcionalidades" da landing page, destacando as principais funcionalidades da plataforma, utilizando o componente Cards para exibir cada funcionalidade de forma visual e informativa */}
    </>
  )
}

export default App // Componente principal da aplicação, que renderiza a barra de navegação e a seção principal da landing page, garantindo que ambos os componentes sejam exibidos na página inicial.