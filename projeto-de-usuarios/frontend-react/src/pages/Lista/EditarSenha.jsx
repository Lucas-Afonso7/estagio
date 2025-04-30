import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarSenha() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function editarSenha(e) {
    e.preventDefault();

    await fetch(`http://localhost:3000/users/${id}/password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(password),
    });

    navigate("/lista");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-800 flex justify-center items-center flex-col gap-6 p-12 rounded-2xl w-96 shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white">
          Alterar Senha
        </h1>
        <form onSubmit={editarSenha} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Nova Senha:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Salvar Nova Senha
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditarSenha;
