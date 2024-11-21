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
              <Link to="/estatisticas"> 
              <a>Estatísticas</a>
              </Link>
              <Link to="/flappy">
              <a>Jogar</a>
              </Link>
              <Link to="/tabua">
              <a>Previsão</a>
              </Link>
            </div>
          </li>
          <li className="dropdown">
            <a>Sobre</a>
            <div className="dropdown-content">
              <a>Missão</a>
              <a>Equipe</a>
              <a>História</a>
            </div>
          </li>
          <li className="dropdown">
            <a>Informações</a>
            <div className="dropdown-content">
              <a>Artigos</a>

            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
