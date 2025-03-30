import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./paginas/homepage";
import IniciarSesion from "./paginas/IniciarSesion";
import NavbarC from "./componentes/navbar/NavbarC";
import Registro from "./paginas/Registro";

const App = () => {
  return (
    <Router>
      <NavbarC/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="i" element={<IniciarSesion />} />
        <Route path="r" element={<Registro/>}/>
      </Routes>
    </Router>
  );
};

export default App;
