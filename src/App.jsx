import { BrowserRouter as Router, Routes, Route } from "react-router"
import NatvarC from "./componentes/navbar/NavbarC"
import IniciarSesion from "./paginas/IniciarSesion"

const App = () => {
  return (
    <>
      <NatvarC />
      <Routes>
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
      </Routes>
    </>
  );
};

export default App;
