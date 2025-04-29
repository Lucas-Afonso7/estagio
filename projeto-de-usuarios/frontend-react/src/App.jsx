import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";
import EditarSenha from "./pages/Lista/EditarSenha.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/cadastro" className="text-white hover:text-gray-300">
                Cadastro
              </Link>
            </li>
            <li>
              <Link to="/lista" className="text-white hover:text-gray-300">
                Lista
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/:id" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/EditarSenha/:id" element={<EditarSenha />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
