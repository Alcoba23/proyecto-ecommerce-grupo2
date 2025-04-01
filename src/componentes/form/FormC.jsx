import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './FormC.css'
import { useState } from "react";

const FormC = ({ idPage }) => {

  const [errores, setErrores] = useState({})

  const [registro, setRegistro] = useState({
    usuario: '',
    email: '',
    contrasenia: '',
    repContrasenia: '',
    check: false
  })
  const [inicioSesion, setInicioSesion] = useState({
    usuario: '',
    contrasenia: ''
  })

  const handleChangeFormRegistro = (ev) => {
    const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
   setRegistro({ ...registro, [ev.target.name]: value })
  }

  const registroUsuario = (ev) => {
    ev.preventDefault()
    /* let nuevoError = {}

    if (!usuario) {
      nuevoError.usuario = 'Error Usuario'
    }



    setErrores(nuevoError) */
  }


  return (
    <Container className="d-flex justify-content-center my-5 vh-100">
      <Form className="w-40">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese un Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            value={registro.usuario}
            onChange={handleChangeFormRegistro}
            name="usuario"
            className={
              errores.usuario ? "form-control is-invalid" : "form-control"
            }
          />
          {errores.usuario && (
            <Form.Text className="text-danger">
              Campo de Usuario Vacio
            </Form.Text>
          )}
        </Form.Group>

        {idPage === "registro" && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingrese un Email</Form.Label>
            <Form.Control
              type="email"
              value={registro.email}
              onChange={handleChangeFormRegistro}
              name="email"
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese una Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="contrasenia"
            value={registro.contrasenia}
            onChange={handleChangeFormRegistro}
          />
          {idPage === "registro" && (
            <ul className="lista-contrasenia">
              <li>Debe tener una Mayuscula</li>
              <li>Debe tener una Minuscula</li>
              <li>Debe tener un Numero</li>
              <li>Debe tener un Caracter Especial (*,.)</li>
            </ul>
          )}
        </Form.Group>

        {idPage === "registro" && (
          <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Repite la Contraseña</Form.Label>
              <Form.Control
                type="password" name="repContrasenia" value={registro.repContrasenia} onChange={handleChangeFormRegistro}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Aceptar Terminos y Condiciones" name="check" value={registro.check} onChange={handleChangeFormRegistro}
              />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          {idPage === "registro" ? "Enviar Datos" : "Ingresar"}
        </Button>

        <a href="r">IR A REGISTRARSE</a>
      </Form>
    </Container>
  );
}

export default FormC;
