import './App.css' 
import Hero from './components/Hero/Hero' 
import Navbar from './components/Navbar/Navbar' 
import Sobre from './components/Sobre/Sobre' 
import Funcionalidades from './components/Funcionalidades/Funcionalidades' 
import Equipe from './components/Equipe/Equipe'

// Componente principal da aplicação, que renderiza a barra de navegação e a seção principal da landing page, garantindo que ambos os componentes sejam exibidos na página inicial.
function App() {

  return (
    <>
      <Navbar /> 
      <Hero />  
      <Sobre /> 
      <Funcionalidades /> 
      <Equipe />
    </>
  )
}

export default App // Componente principal da aplicação, que renderiza a barra de navegação e a seção principal da landing page, garantindo que ambos os componentes sejam exibidos na página inicial.