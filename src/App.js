import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Skills from './components/Skills/Skills';
import Servicos from './components/Servicos/Servicos';
import Qualificacoes from './components/Qualificacoes/Qualificacoes';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Contato from './components/Contato/Contato';

const App = () => {
  return (
    <>
    <Header />
    
    
    <main className='main'>
      <Home />
      <Sobre />
      <Skills />
      <Servicos />
      <Qualificacoes />
      <Contato />
    </main>
    </>
  )
  

}

export default App;
