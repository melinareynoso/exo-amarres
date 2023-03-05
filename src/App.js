import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Servicios/Servicios';
import Especialistas from './Components/Especialistas/Especialistas';
import { FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <a className="btn-wsp"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?phone=5493541392076"
        target="_blank">
        <FaWhatsapp id="whatsapp-icon-float" />
      </a>
      <Header/>
      <Services/>
      <Especialistas/>

      
      

    </div>
  );
}

export default App;
