import './styles.css';
import aquasafeLogo from '../../assets/aquasafe.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={aquasafeLogo} alt="Aquasafe Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li className="dropdown">
            <a>Serviços</a>
            <div className="dropdown-content">
              <Link to="/estatisticas">Estatísticas</Link>
              <Link to="/simulacao">Simulação</Link>
              <Link to="/tabua">Previsão</Link>
              <Link to="/quiz">Quiz</Link>
              <Link to="/previsao-temperatura">Simulação temperatura</Link>
            </div>
          </li>
          <li className="dropdown">
            <a>Sobre</a>
            <div className="dropdown-content">
              <Link to="/equipe">Equipe</Link>
              <Link to="/missao">Missão</Link>
            </div>
          </li>
          <li className="dropdown">
            <a>Informações</a>
            <div className="dropdown-content">
              <Link to="/artigos">Artigos</Link>
              <Link to="/fontes">Fontes</Link>
            </div>
          </li>
        </ul>
      </nav>
      <Link to="/flappy" className="play-button">
        Jogar !
      </Link>
    </header>
  );
}

export default Header;
