import React from "react";
import "./Header.css";
import logo from "../../images/logo_new.webp.png";
import { FaWhatsapp } from "react-icons/fa";
import "../../Fonts/stylesheet.css";
import "../../Fonts/ProximaNovaRg.otf";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="header" id="home">
      <Navbar />

      <div className="overlay text-white text-center">
        <div id="container-main">
          <h1 id="titulo">Templo Dharma</h1>

          <img id="logo-inicio" src={logo} alt={logo.toString()} />
          
          <p id="frase">
            SOLO UN DESEO NO CAMBIA NADA, UNA DECISIÓN CAMBIA TODO.
          </p>


              <a className="btn_navbar" href="https://api.whatsapp.com/send?phone=5493541392076" rel="noreferrer" target="_blank">
                <FaWhatsapp id="whatsapp-icon" />
                <h6 id="contact">Contactános</h6>
              </a>

        </div>
      </div>
    </header>
  );
}
