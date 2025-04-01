import { Container } from "react-bootstrap";
import TableC from "../componentes/table/TableC";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Adminpage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = () => {
    const productosLs = JSON.parse(localStorage.getItem("productos"));
    setProductos(productosLs);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <Container className="my-5">
        <h1>Administración de Productos</h1>
        <div className="d-flex justify-content-end mb-5">
          <Link className="btn btn-primary">Agregar Producto</Link>
        </div>
        <TableC productos={productos} setProductos={setProductos} />
      </Container>
    </>
  );
};
export default Adminpage;
