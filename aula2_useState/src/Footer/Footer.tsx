import './Footer.css'; // Importando o CSS para o footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 MeuSite. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a className="footer-link">Sobre</a>
        <a className="footer-link">Contato</a>
        <a className="footer-link">Política de Privacidade</a>
      </div>
    </footer>
  );
}

export default Footer;
