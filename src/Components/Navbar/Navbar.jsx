import logo from "../../images/logo_new.webp.png";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();
  const cerrar = useRef()
  const abrir = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  window.onscroll = function() {
		if (document.documentElement.scrollTop > 50) {
			document.getElementById("menu-sup").style.height = "90px";
      document.getElementById("logo-sup").style.transform = "translateY(-100%)";
      document.getElementById("logo-sup").style.opacity = "0";
      document.getElementById("logo-sup").style.height = "0";
      document.getElementById("logo-sup").style.width = "0";
      document.getElementById("span").style.height = "100%";
      document.getElementById("span").style.transform = "translateY(0%)";
      document.getElementById("span").style.opacity = "1";
			
		} else {
			document.getElementById("menu-sup").style.height = "";
			document.getElementById("logo-sup").style.transform = "";
      document.getElementById("logo-sup").style.opacity = "";
      document.getElementById("logo-sup").style.height = "";
      document.getElementById("logo-sup").style.width = "";
      document.getElementById("span").style.height = "";
      document.getElementById("span").style.transform = "";
      document.getElementById("span").style.opacity = "";
		}
	}

  return (
    <header id="menu-sup">
      <div id="left">
        <h1 id="title-nav">Templo Dharma</h1>
      </div>

      <div id="center">
        <img id="logo-sup" alt="logo" src={logo} />
        <span id="span">Templo Dharma</span>
      </div>

      <div id="rigth">


        <nav id="links" ref={navRef}>
          <a href="#!">
            <p>Inicio</p>
          </a>
          <a href="#!">
            <p>Nuestro Servicios</p>
          </a>
          <a href="#!">
            <p>Nuestros Especialistas</p>
          </a>
    
        </nav>

        <button ref={abrir} className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <button ref={cerrar} className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
        </button>
      </div>
    </header>
  );
}
