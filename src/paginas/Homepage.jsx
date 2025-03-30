import NavbarC from "../componentes/navbar/NavbarC";
import CardsC from "../componentes/cards/CardsC";
import FooterC from "../componentes/footer/FooterC";
import CaruselC from "../componentes/carusel/CaruselC";
import { Col, Container, Row } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <CaruselC />
      <Container className="my-5 text-center">
        <Row>
          <Col sm="8" md="4" ig="2">
            <CardsC />
          </Col>

          <Col sm="8" md="4" ig="2">
            <CardsC />
          </Col>

          <Col sm="8" md="4" ig="2">
            <CardsC />
          </Col>

          <Col sm="8" md="4" ig="2">
            <CardsC />
          </Col>
        </Row>
      </Container>
      <FooterC />
    </>
  );
}

export default Homepage;
