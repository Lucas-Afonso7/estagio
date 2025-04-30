import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";
import EditarSenha from "./pages/Lista/EditarSenha.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-purple-800 shadow-md text-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-white text-xl font-bold">CadastroSimples</h1>
            </div>
            <div className="flex gap-8">
              <Link
                to="/cadastro"
                className="text-white text-lg	hover:text-purple-300 transition duration-200">
                Cadastro
              </Link>
              <Link
                to="/lista"
                className="text-white text-lg	hover:text-purple-300 transition duration-200">
                Lista
              </Link>
            </div>
          </div>
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
