import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Servicios/Servicios';
import { FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <Header/>
      {/* este div lo agregue para no meter todas las secciones juntas en un componente
      para que puedan comapartir el mismo background todas */}
      {/* <div className="fondo"> */}
        <Services/>
      {/* </div> */}
      <a
        className="btn-wsp"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=5493541392076"
        target="_blank"
      >
        <FaWhatsapp id="whatsapp-icon-float" />
      </a>

    </div>
  );
}

export default App;
