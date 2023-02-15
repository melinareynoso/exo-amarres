import logo from "../../images/logo.JPG";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div id="left"></div>
      <div id="center">
        <img id="logo" alt="logo" src={logo} />
      </div>
      <div id="rigth">
        <ul>
          <li>Inicio</li>
          <li>Que hacemos</li>
          <li>Contactanos</li>
        </ul>
      </div>
    </nav>
  );
}
