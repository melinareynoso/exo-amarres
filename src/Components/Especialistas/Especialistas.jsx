import React from "react";
import './Especialistas.css'
import Karim from './karim_guerreiro.webp'
import Navani from './navani_sheppra.webp'
import Narik from './narik_khatum.webp'



export default function Especialistas () {
    
    return (
        <section id="Especialistas" className="esp-container">
            <h2 className="title" >Nuestros especialistas</h2>
            <figure>
                 <img src={Karim}  alt="Especialista"/>
            </figure>
            <h3>Karim Guerreiro</h3>
            <div className="testimonial-body">
                <p>
                Nací en argentina, hijo de madre hindu y de padre brasilero ambos de linajes de grandes clarividentes y astrólogos.
                Desde muy pequeño sentí que había nacido para ayudar a las personas y descubri que había heredado un don. 
                Me especialice en magia Blanca, Roja, Negra y Vudú Me perfeccione con los maestros más reconocidos de la India, Irán, España y Portugal.
                Después decidí ampliar mis capacidades para poder ayudar a más personas y fundé el Templo Dharma hace más de tres décadas ya. 
                Los especialistas que trabajan a mí lado están avalados por mí y principalmente por las miles de personas que hemos ayudado. 
                Me he encargado de buscar a los mejores para poder ayudar a aquellos que lo precisan.
                </p>
            </div>
            <div className="testimonial-row" >
                <div className="testimonial-1">
                    <figure>
                        <img src={Navani} alt="Especialista"/>
                    </figure>
                    <h3>Navani Sheppra</h3>
                    <div className="testimonial-body">
                        <p>Desde pequeña note mi don para la clarividencia. Soy descendiente de un largo linaje de videntes de la India. De muy joven me especialice para poder ayudar a las personas a cumplir sus metas y deseos con el ser amado. En Irán cuando me especializaba en magia roja, conocí a Karim quien luego me llamo para que lo acompañe en el templo.</p>
                    </div>
                </div>
                <div className="testimonial-1">
                    <figure>
                        <img src={Narik} alt="Especialista"/>
                    </figure>
                    <h3>Narik Khatun</h3>
                    <div className="testimonial-body">
                        <p>
                        Un día me encontré con esta bendición y desde entonces no he dejado de utilizarla para unir seres amados, y también que puedas cumplir lo que quieras con esa persona que tanto deseas. En España tuve el placer de que Karim me comentará que necesitaba alguien como yo para poder hacer crecer su templo. Desde entonces hemos ayudado a miles de personas que son nuestro principal motor. El amor es la gran fuerza que me permite ayudarte.
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
