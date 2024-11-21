import './App.css';
import waterbg from './assets/waterbg.png';
import animalsbg from './assets/animalsbg.png';
import crabbg from './assets/crabbg.png';
import Header from './components/header/Header';
import textcard from './assets/textcard.svg';
import { Link } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Header />
      <div className="app-container">
        <div className="image-container-water">
          <img src={waterbg} alt="Water background" />
        </div>
        <div className="image-container-animals">
          <img src={animalsbg} alt="Animals background" />
        </div>
        <div className="image-container-crab">
          <img src={crabbg} alt="Crab background" />
        </div>
      </div>

      {/* Card de texto com o ícone SVG */}
      <div className="text-card">
        <img src={textcard} alt="Icon" className="card-icon" />
      </div>

      {/* Botão abaixo do card */}
      <div className="cta-button">
        <Link to="/vamosla">
          <button>Vamos lá!</button>
        </Link>
      </div>

      <a href="https://www.youtube.com/watch?v=P2bmJPMhdVc" target="_blank" rel="noopener noreferrer">
        <button className="watch-video-button">
        ▶ Assista ao Vídeo
        </button>
      </a>

      <div className="ods-14">
        <h2>ODS 14: Vida na Água</h2>
      </div>

    </>
  );
}

export default App;
