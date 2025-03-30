import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./paginas/Homepage";
import IniciarSesion from "./paginas/IniciarSesion";
import NavbarC from "./componentes/navbar/NavbarC";
import FooterC from "./componentes/footer/FooterC";

const App = () => {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="i" element={<IniciarSesion />} />
      </Routes>
      <FooterC />
    </Router>
  );
};

export default App;
