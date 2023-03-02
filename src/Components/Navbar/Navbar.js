import logo from "../../images/logo_new.webp.png";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="menu-sup">
      <div id="left">
        <h1 id="title-nav">Templo Dharma</h1>
      </div>

      <div id="center">
        <img id="logo-sup" alt="logo" src={logo} />
      </div>

      <div id="rigth">
        <nav id="links" ref={navRef}>
       <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          
          <a href="#!">Inicio</a>
          <a href="#!">Que hacemos</a>
          <a href="#!">Contactános</a>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
