import { BrowserRouter as Router, } from "react-router"
import NavbarC from "./componentes/navbar/NavbarC"
/* import IniciarSesion from "./paginas/IniciarSesion" */

const App = () => {
  return (
    <>
      <Router>
        <NavbarC />

      </Router>
     
    </>
  );
};

export default App;
