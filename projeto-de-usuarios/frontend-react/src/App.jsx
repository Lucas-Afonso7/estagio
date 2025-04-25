import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-8">
          <ul>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/lista">Lista</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
