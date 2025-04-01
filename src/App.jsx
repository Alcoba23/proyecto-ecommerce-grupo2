import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./paginas/Homepage";
import IniciarSesion from "./paginas/IniciarSesion";
import NavbarC from "./componentes/navbar/NavbarC";
import FooterC from "./componentes/footer/FooterC";
import Registro from "./paginas/Registro";
import Adminpage from "./paginas/Adminpage";

const App = () => {
  return (
    <>
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="admin" element={<Adminpage />} />
          <Route path="i" element={<IniciarSesion />} />
          <Route path="r" element={<Registro />} />
        </Routes>
        <FooterC />
      </Router>
    </>
  );
};

export default App;
