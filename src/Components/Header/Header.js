import React from "react";
import "./Header.css"
import logo from "../../images/logo_new.webp.png"
import { FaWhatsapp } from 'react-icons/fa'



export default function Header(){
    return(
		<header class="header" id="home">
		<div class="overlay text-white text-center">
			<div>
				<h1 class="display-2">Templo Dharma</h1>
				<figure>
					<img src={logo}/>
				</figure>
				<p class="margin-top-minus-60">Solo un deseo no cambia nada, una decision cambia todo.</p>
				<ul>
					<li>
						<a class="btn_navbar" href="https://api.whatsapp.com/send?phone=5493541392076" rel="noreferrer" target="_blank"><FaWhatsapp id="whatsapp-icon"/>Hablemos por Whatsapp</a>
					</li>
			</ul>
			</div>
		</div>
	</header>
    )
}