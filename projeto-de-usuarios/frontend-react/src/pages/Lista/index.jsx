import { useState, useEffect } from "react";

function Lista() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  });

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li>
            <strong>Nome:</strong> {usuario.name} <br />
            <strong>Email:</strong> {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
