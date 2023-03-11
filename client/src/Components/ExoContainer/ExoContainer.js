
import Header from '../Header/Header';
import Services from '../Servicios/Servicios';
import Especialistas from '../Especialistas/Especialistas';
import Carousel from '../Carousel/Carousel';
import FooterModal from '../Footer/Footer';


function ExoContainer() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Especialistas/>
      <Carousel/>
      <FooterModal/>
    </div>
  );
}

export default ExoContainer;