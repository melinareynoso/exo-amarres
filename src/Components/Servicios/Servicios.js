import React from "react";
import FlipCard from "./FlipCard";
import './Servicios.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import amarre_amor from "../../images/amarre_de_amor.webp"
import amarre_sexual from "../../images/amarre_sexual.webp"
import endulzamiento from "../../images/endulzamiento.webp"

import familia from "../../images/main.webp"

const cards = [
    {
      id: "1",
      image: amarre_amor,
      variant: "click",
      front: "Amarres de amor para toda la vida",
      back: "El terreno del amor es uno de los temas predilectos de nuestros consultantes y estos hechizos son la solución perfecta para conseguir el amor. Nuestro videntes que nacieron con el don de la clarividencia están deseando brindarte su ayuda para que tengas una vida amorosa larga y plena. Los amarres de amor tratan de solucionar problemas amorosos y proporcionarte la felicidad que tanto ansías. Nuestros videntes están disponibles las 24 horas del día para atenderte personalmente; así podrás contactar con ellos en cualquier momento y confiarles lo que tanto te preocupa."
    },
    {
      id: "2",
      image: amarre_sexual,
      variant: "click",
      front: "Retorno de parejas",
      back: "A veces un solo error puede transformar tu vida en un abismo y tu felicidad en sufrimiento, te despiertas todas las mañanas arrepintiéndote de esa equivocación y que ese día nunca hubiera sucedido. Tus noches se convierten en pesadillas y te desvelas pensando que tu ser amado se ha alejado y nunca más regresará o volverá a ser el mismo. Este poderoso ritual revive la llama del amor y crea lazos tan fuertes que tu pareja regresara rendida a tus pies y totalmente enamorada y arrepentida."
    },
    {
      id: "3",
      image: endulzamiento,
      variant: "click",
      front: "Hover",
      back: "Es un conjunto de rituales que se realiza por medio de Magia Blanca. Se utiliza para lograr la unión sexual con otra persona de cualquier sexo, con quienes han tenido una relación de amistad o conocidos (por ejemplo, compañeros de trabajo) pero no han logrado pasar mas allá de eso. Se redirige el deseo sexual de la otra persona hacia quien está realizando el amarre. Recuerdo que un trabajo así es delicado y si se deja en manos inexpertas puede tener efectos totalmente contrarios a los deseados."
    },
    {
      id: "4",
      image: familia,
      variant: "click",
      front: "Hover",
      back: "Los endulzamientos parece que busque los mismos objetivos que un amarre, es decir, recuperar a una pareja o evitar que alguien se distancie. Pero su mecanismo es distinto. EN el caso de estos hechizos de amor, lo que se intenta es potenciar los sentimientos positivos de la relacion o de una persona, así como alejar todos los sentimiento negativos. Por esta razóin se considera que el endulzamiento siempre lo que ofrece es algo bueno."
    }
  ];


export default function Services(){
    return(
        <section id="servicios">
		    <h2 class="section-title py-5">Nuestros servicios</h2>
            <div className="container">
                <div className="row h-100">
                    <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
                     {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                    </div>
                </div>
            </div>
	    </section>
    )
}