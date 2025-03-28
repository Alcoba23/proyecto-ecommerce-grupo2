import Carousel from "react-bootstrap/Carousel";

const CaruselC = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-commercial-electronics-store-of-many-screens-image_2667345.jpg"
            alt=""
            className="w-90"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://i.pinimg.com/736x/08/55/a7/0855a792bcda54a96c56cea190fb0e45.jpg"
            alt=""
            className="w-90"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/1a/53/8f/8c/vista-interior-de-la.jpg"
            alt=""
            className="w-90"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CaruselC;
