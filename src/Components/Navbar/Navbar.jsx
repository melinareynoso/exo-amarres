import logo from "../../images/logo_new.webp.png";
import "./Navbar.css";
import { useRef,useState } from "react";


export default function Navbar() {
  const navRef = useRef();
  
  const showNavbar = () => {

    if (window.innerWidth <= 1024) {
      navRef.current.classList.toggle("responsive_nav");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
    }
  
  };

  const [icon, setIcon] = useState("nav__toggler");

  window.onscroll = function() {
		if (document.documentElement.scrollTop > 50) {
			document.getElementById("menu-sup").style.height = "90px";
      document.getElementById("logo-sup").style.transform = "translateY(-100%)";
      document.getElementById("logo-sup").style.opacity = "0";
      document.getElementById("logo-sup").style.height = "0";
      document.getElementById("logo-sup").style.width = "0";
      document.getElementById("logo-sup").style.display = "none";
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
      document.getElementById("logo-sup").style.display = "flex";

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


        <nav id="links" ref={navRef} onClick={showNavbar} >
          <a href="/#Inicio">
            <p>Inicio</p>
          </a>
          <a href="/#Servicios">
            <p>Servicios</p>
          </a>
          <a href="/#Especialistas">
            <p>Especialistas</p>
          </a>
          <a href="/#Testimonios">
            <p>Testimonios</p>
          </a>
        </nav>
        <div onClick={showNavbar} className={icon}>
        			<div className="line1"></div>
        			<div className="line2"></div>
        			<div className="line3"></div>
      			</div>
      </div>
    </header>
  );
}
