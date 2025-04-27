import './App.css';
import Home from './Home';
import { useRef } from 'react';

function App() {
  const audioRef = useRef(null);

  const reproducirMusica = () => {
    audioRef.current.play();
  };

  return (
    <div className="App">
      <video autoPlay muted loop id="video-fondo">
        <source src="/Fondo.mp4" type="video/mp4" />
      </video>

      <audio ref={audioRef}>
        <source src="/Musica.mp3" type="audio/mpeg" />
      </audio>

      <button onClick={reproducirMusica} className="boton-musica">
        🔊 Reproducir Música
      </button>

      <Home />
    </div>
  );
}

export default App;