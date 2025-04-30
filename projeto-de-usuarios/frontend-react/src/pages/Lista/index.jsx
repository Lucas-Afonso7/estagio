import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Lista() {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

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
    setShowModal(false);
  }

  function confirmarDeletar(id) {
    setUserToDelete(id);
    setShowModal(true);
  }

  function cancelarDeletar() {
    setShowModal(false);
    setUserToDelete(null);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 bg-white text-center">
        Lista de Usuários
      </h1>

      <div>
        <table className="min-w-full bg-gray-100 border border-gray-200 rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Foto</th>
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Ações</th>
            </tr>
          </thead>
          <body>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} className="border-t">
                <td className="py-2 px-4">
                  <img
                    src={
                      usuario.photo
                        ? `http://localhost:3000/users/${usuario.id}/photo`
                        : "https://www.gravatar.com/avatar/?d=mp"
                    }
                    alt="Foto do Usuário"
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4 text-blue-600 hover:underline">
                  <Link to={`/Cadastro/${usuario.id}`}>{usuario.name}</Link>
                </td>
                <td className="py-2 px-4">{usuario.email}</td>
                <td className="py-2 px-4 space-x-2">
                  <Link
                    to={`/EditarSenha/${usuario.id}`}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                    Editar senha
                  </Link>
                  <button
                    onClick={() => confirmarDeletar(usuario.id)}
                    className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </body>
        </table>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={cancelarDeletar}
        contentLabel="Confirmar Deletação"
        className="bg-white rounded p-6 shadow-md max-w-5xl mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center">
        <h3 className="text-lg font-semibold mb-4">
          Tem certeza que deseja deletar este usuário?
        </h3>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => deletarUsuario(userToDelete)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Confirmar
          </button>
          <button
            onClick={cancelarDeletar}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancelar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Lista;
