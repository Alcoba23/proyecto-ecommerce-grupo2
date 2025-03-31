import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./paginas/Homepage";
import IniciarSesion from "./paginas/IniciarSesion";
import NavbarC from "./componentes/navbar/NavbarC";
 feature-pagina-principal2
import FooterC from "./componentes/footer/FooterC";

import Registro from "./paginas/Registro";
 dev

const App = () => {
  return (
    <Router>
 feature-pagina-principal2
      <NavbarC />

      <NavbarC/>
 dev
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="i" element={<IniciarSesion />} />
        <Route path="r" element={<Registro/>}/>
      </Routes>
      <FooterC />
    </Router>
  );
};

export default App;
