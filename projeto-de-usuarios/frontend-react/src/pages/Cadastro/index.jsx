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
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={enviar}
        className="flex flex-col gap-[30px] p-[30px] rounded-[30px] bg-[#2e2d4e] w-[400px] mb-[20px]"
      >
        <h1 className="text-amber-50 text-2xl text-center">
          Cadastro de usuarios
        </h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-[#48456c] rounded-4xl h-9/10 bg-[#363653] text-white text-base p1-[10] "
          placeholder="Nome"
          name="nome"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#48456c] rounded-4xl h-9/10 bg-[#363653] text-white text-base p1-[10] "
          placeholder="Email"
          name="email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-[#48456c] rounded-4xl h-9/10 bg-[#363653] text-white text-base p1-[10] "
          placeholder="Senha"
          name="senha"
          type="password"
        />
        <button
          className="rounded-4xl bg-[#8b8ae1] h-8  font-bold cursor-pointer"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
