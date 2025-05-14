import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Conteudo from './Conteudo/Conteudo';
import { useState } from 'react';

function App() {
  const [conteudo, setConteudo] = useState(1);

  function trocarConteudo(alvo: number) {
    setConteudo(alvo)
  }

  return (
    <>
      <Header conteudoSelecionado={trocarConteudo} liSelecionada={conteudo}/>
      <Conteudo conteudo={conteudo} />
      <Footer />
    </>
  );
}
export default App;
