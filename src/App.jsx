import { BrowserRouter as Router } from "react-router";
import NavbarC from "./componentes/navbar/NavbarC";
/* import IniciarSesion from "./paginas/IniciarSesion" */
import CardsC from "./componentes/cards/CardsC";
import FooterC from "./componentes/footer/FooterC";
import { col, Container, Row } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Router>
        <NavbarC />
      </Router>
      <Container>
        <Row>
          <Col>
            <CardsC />
          </Col>
        </Row>
      </Container>
      <FooterC />
    </>
  );
};

export default App;
