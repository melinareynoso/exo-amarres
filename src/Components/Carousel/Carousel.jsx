import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Asegúrate de importar los estilos del componente
import './Carousel.css'

import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'


export default function carousel() {
  return (
  <section id='testimonios' >

    <h2 className='testimonios-title'>Testimonios</h2>

    <div className="carousel-wrapper">
      <Carousel
      showThumbs={false}
      >
        <div>
          <p className="legend">Testimonio 1</p>
          <img className="carousel-image"  src= {image1} alt="Imagen 1" />
        </div>
        <div>
          <p className="legend">Testimonio 2</p>
          <img className="carousel-image" src= {image2} alt="Imagen 2" />
        </div>
        <div>
        <p className="legend">Testimonio 3</p>
          <img className="carousel-image" src= {image3} alt="Imagen 3" />
          
        </div>
      </Carousel>
    </div>

  </section>
  );
}
