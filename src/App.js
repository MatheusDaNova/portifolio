import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Skills from './components/Skills/Skills';
import Servicos from './components/Servicos/Servicos';
import Qualificacoes from './components/Qualificacoes/Qualificacoes';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Portifolio from './components/Projetos/Portifolio';


const App = () => {
  return (
    <>
    <Header />
    
    
    <main className='main'>
      <Home />
      <Sobre />
      <Portifolio />
      <Skills />
      <Servicos />
      <Qualificacoes />
      <Contato />
    </main>
      <Footer />
      <ScrollUp />
    </>
  )
  

}

export default App;
