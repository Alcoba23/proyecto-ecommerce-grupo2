import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
const CardsC = ({ urlimage }) => {
  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={urlimage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <Link to="" className="btn btn-primary">
              ver mas
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsC;
