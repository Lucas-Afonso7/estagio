import { useState } from "react";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviar = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={enviar}
        className="flex flex-col gap-6 p-12 rounded-2xl bg-gray-800 w-[28rem] shadow-lg"
      >
        <h1 className="text-white text-2xl text-center font-semibold">
          Cadastro de Usuários
        </h1>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-600 rounded-lg h-12 bg-gray-700 text-white text-base px-4"
          placeholder="Nome"
          name="nome"
          type="text"
        />
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
        <button
          className="rounded-lg bg-indigo-600 hover:bg-indigo-500 h-12 text-white font-bold transition"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
