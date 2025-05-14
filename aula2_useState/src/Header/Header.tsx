import './Header.css';

interface Funcao {
  conteudoSelecionado: (trocarConteudo: number) => void;
  liSelecionada: number;
}

function Header({ conteudoSelecionado, liSelecionada }: Funcao) {
  return (
    <header className="header">
      <ul className="menu">
        <li className={liSelecionada === 1 ? 'ativo' : ''} onClick={() => conteudoSelecionado(1)}>
          Atv 1
        </li>
        <li className={liSelecionada === 2 ? 'ativo' : ''} onClick={() => conteudoSelecionado(2)}>
          Atv 2
        </li>
        <li className={liSelecionada === 3 ? 'ativo' : ''} onClick={() => conteudoSelecionado(3)}>
          Atv 3
        </li>
      </ul>
    </header>
  );
}

export default Header;
