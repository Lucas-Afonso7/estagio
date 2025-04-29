import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  async function cadastrarUsuario() {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (photo) {
      const formData = new FormData();
      formData.append("photo", photo);

      await fetch(`http://localhost:3000/users/${data.id}/photo`, {
        method: "POST",
        body: formData,
      });
    }
  }

  async function editarUsuario() {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
  }

  async function enviar(e) {
    e.preventDefault();
    if (id) {
      await editarUsuario();
    } else {
      await cadastrarUsuario();
    }
    navigate("/lista");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={enviar}
        className="flex flex-col gap-6 p-12 rounded-2xl bg-gray-800 w-96 shadow-lg">
        <h1 className="text-white text-2xl text-center font-semibold">
          {id ? "Editar Usuário" : "Cadastro de Usuário"}
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-600 rounded-lg h-12 bg-gray-700 text-white text-base px-4"
          placeholder="Nome"
          name="nome"
          type="text"
        />
        {!id && (
          <>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-600 rounded-lg h-12 bg-gray-700 text-white text-base px-4"
              placeholder="Email"
              name="email"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-600 rounded-lg h-12 bg-gray-700 text-white text-base px-4"
              placeholder="Senha"
              name="senha"
              type="password"
            />
          </>
        )}

        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="border border-gray-600 rounded-lg h-12 bg-gray-700 text-white text-base px-4"
          accept="image/*"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white h-12 rounded-lg mt-6">
          {id ? "Salvar alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
