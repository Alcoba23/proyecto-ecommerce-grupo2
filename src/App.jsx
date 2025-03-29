import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./paginas/homepage";
import IniciarSesion from "./paginas/IniciarSesion";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="i" element={<IniciarSesion />} />
      </Routes>
    </Router>
  );
};

export default App;
