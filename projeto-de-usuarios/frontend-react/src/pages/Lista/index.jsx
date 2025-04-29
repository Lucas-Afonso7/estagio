import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Lista() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }, []);

  async function deletarUsuario(id) {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });

    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <strong>Nome:</strong> {usuario.name} <br />
          <strong>Email:</strong> {usuario.email} <br />
          <Link to={`/EditarSenha/${usuario.id}`}>Editar Senha</Link>
          <Link to={`/Cadastro/${usuario.id}`}>Editar Nome</Link>
          <button onClick={() => deletarUsuario(usuario.id)}>Deletar</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lista;
