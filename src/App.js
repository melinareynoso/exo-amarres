import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from './Components/Header/Header';
import Services from './Components/Servicios/Servicios';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header/>
      {/* este div lo agregue para no meter todas las secciones juntas en un componente
      para que puedan comapartir el mismo background todas */}
      <div className="fondo">
        <Services/>
      </div>

    </div>
  );
}

export default App;
