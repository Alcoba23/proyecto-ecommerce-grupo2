import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";

const TableC = ({ productos, setProductos }) => {
  const borrarProducto = (idProducto) => {
    Swal.fire({
      title: "Estas seguro de querer eliminar este producto?",
      text: "Esta accion sera irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoArray = productos.filter(
          (producto) => producto.id !== idProducto
        );
        setProductos(nuevoArray);
        localStorage.setItem("productos", JSON.stringify(nuevoArray));

        Swal.fire({
          title: "Producto eliminado con exito!",
          icon: "success",
        });
      }
    });
  };

  const deshabilitaryhabilitar

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((element, i) => (
          <tr key={element.id}>
            <td>{i + 1}</td>
            <td className="w-25">{element.title}</td>
            <td className="w-25">{element.description}</td>
            <td className="text-center">${element.price}</td>
            <td>
              <img src={element.image} alt="{element-description}" width={50} />
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => borrarProducto(element.id)}
              >
                Eliminar
              </Button>
              <Button className="mx-2" variant="warning">
                Deshabilitar
              </Button>
              <Button variant="success">Editar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableC;
