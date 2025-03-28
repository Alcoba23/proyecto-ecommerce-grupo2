import NavbarC from "./componentes/navbar/NavbarC";
import CardsC from "./componentes/cards/CardsC";
import FooterC from "./componentes/footer/FooterC";
import CaruselC from "./componentes/carusel/CaruselC";
import { Col, Container, Row } from "react-bootstrap";
const App = () => {
  return (
    <>
      <NavbarC />
      <CaruselC />
      <Container>
        <Row>
          <Col sm="8" md="6" lg="4">
            <CardsC />
          </Col>

          <Col sm="8" md="6" lg="4">
            <CardsC />
          </Col>

          <Col sm="8" md="6" lg="4">
            <CardsC />
          </Col>

          <Col sm="8" md="6" lg="4">
            <CardsC />
          </Col>
        </Row>
      </Container>
      <FooterC />
    </>
  );
};

export default App;
