import { NavLink } from "react-router";
import { Col, Container, Row } from "react-bootstrap";

const FooterC = () => {
  return (
    <footer className="bg-body-tertiarya p-5 text-center">
      <h3>Footer</h3>
      <div className="main-content"></div>

      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            {/* Columna de información */}
            <Col md="4" className="text-center">
              <h5>Contacto</h5>
              <p>Email: contacto@tuempresa.com</p>
              <p>Teléfono: +54 381 456 789</p>
            </Col>

            {/* Columna de enlaces */}
            <Col md="4" className="text-center">
              <h5>Enlaces</h5>
              <NavLink
                className="nav-link"
                to="/nosotros"
                className1="text-white d-block"
              >
                Nosotros
              </NavLink>
              <NavLink
                className="nav-link"
                to="/servicios"
                className1="text-white d-block"
              >
                Servicios
              </NavLink>
              <NavLink
                className="nav-link"
                to="/contacto"
                className1="text-white d-block"
              >
                Contacto
              </NavLink>
            </Col>

            {/* Columna de redes sociales */}
            <Col md="4" className="text-center">
              <h5>Síguenos</h5>
              <NavLink
                className="nav-link"
                to="https://facebook.com"
                className1="text-white mx-2"
              >
                Facebook
              </NavLink>
              <NavLink
                className="nav-link"
                to="https://twitter.com"
                className1="text-white mx-2"
              >
                Twitter
              </NavLink>
              <NavLink
                className="nav-link"
                to="https://instagram.com"
                className1="text-white mx-2"
              >
                Instagram
              </NavLink>
            </Col>
          </Row>
        </Container>
      </footer>

      <footer className="footer">
        <Container>
          <Row className="text-center">
            <Col>
              <p>© 2025 Tu Empresa - Todos los derechos reservados</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </footer>
  );
};

export default FooterC;
