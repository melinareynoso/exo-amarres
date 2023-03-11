import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./Footer.css";

const FooterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <footer>
        <Button id="tyc" onClick={handleModal}>
          Términos y condiciones
        </Button>
      </footer>
      <Modal show={showModal} onHide={handleModal} centered>
        <Modal.Header>
          <Modal.Title>POLÍTICAS DE PRIVACIDAD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Este sitio va dirigido exclusivamente a mayores de edad (18 años). De
            acuerdo con las legislaciones vigentes, se establece que las
            predicciones, videncias psíquicas, lecturas de cartas y hechizos
            tienen fines de entretenimiento y ayuda personal. Estos servicios no
            sustituirán la debida atención médica, legal, financiera,
            psicológica y psiquiátrica. Todas las personas son diferentes, por
            tanto los resultados pueden variar de una persona a otra. Nuestra
            web no almacena información personal ni financiera, los datos
            compartidos por el consumidor son totalmente privados y no serán
            compartidos bajo ninguna excepción. El envío de cualquier tipo de
            información, tanto que el consumidor manda como que reciba debe ser
            bajo su total consentimiento. Los resultados siempre van a depender
            de cada consumidor, y del caso concreto. Al utilizar cualquier de
            los servicios que ofrecemos, el consumidor declara que acepta y
            entiende nuestra política de privacidad. Los consumidores deben ser
            sin excepción mayores de edad (18 años). Los servicios ofrecidos son
            pura y exclusivamente para personas adultas. Los servicios que se
            ofrecen no sustituyen la atención médica, psicológica y psiquiátrica
            profesional. De acuerdo con las legislaciones vigentes se establece
            que las lecturas, videncias, hechizos, predicciones, etc. Tienen
            fines de entretenimiento y sin base científica. Las consultas son
            totalmente gratuitas. No se hace responsable por cualquier tipo de
            pérdida o daño relacionado con el mal manejo del sitio web, o uso
            indebido de la información suministrada. El consumidor renuncia a
            cualquier posibilidad de reembolso una vez efectuado el pago. Al
            usar nuestros servicios el consumidor manifiesta que entiende y está
            totalmente de acuerdo con los puntos anteriores.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button id="close-modal" onClick={handleModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FooterModal;
