import CardsC from "../componentes/cards/CardsC";
import CaruselC from "../componentes/carusel/CaruselC";
import { Col, Container, Row } from "react-bootstrap";
import PublicidadC from "../componentes/publicidad/PublicidadC";

function Homepage() {
  return (
    <>
      <CaruselC />
      <Container className="my-5 text-center">
        <Row>
          <Col sm="6" md="3" ig="4">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_620924-MLA82428978541_022025-F.webp" />
          </Col>

          <Col sm="6" md="3" ig="4">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_970771-MLA73347645092_122023-F.webp" />
          </Col>

          <Col sm="6" md="3" ig="4">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_894487-MLA53145808015_012023-F.webp " />
          </Col>

          <Col sm="6" md="3" ig="4">
            <CardsC urlimage=" https://http2.mlstatic.com/D_NQ_NP_2X_813970-MLU77975642493_072024-F.webp " />
          </Col>
        </Row>
      </Container>

      <Row className="justify-content-center mt-3">
        <Col sm="12" md="6">
          <img
            src="URL_PUBLICIDAD_1"
            className="img-fluid"
            alt="Publicidad 1"
          />
        </Col>
        <Col sm="12" md="6">
          <img
            src="URL_PUBLICIDAD_2"
            className="img-fluid"
            alt="Publicidad 2"
          />
        </Col>
      </Row>

      <Container className="my-5 text-center">
        <Row className="justify-content-center mt-3">
          <Col sm="6" md="3">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_969784-MLA32123024802_092019-F.webp" />
          </Col>
          <Col sm="6" md="3">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_968531-MLA74353667823_022024-F.webp" />
          </Col>
          <Col sm="6" md="3">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_867156-MLU79108716039_092024-F.webp" />
          </Col>
          <Col sm="6" md="3">
            <CardsC urlimage="https://http2.mlstatic.com/D_NQ_NP_2X_618874-MLU77742070764_072024-F.webp" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
