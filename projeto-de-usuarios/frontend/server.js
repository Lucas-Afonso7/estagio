import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/Lista-de-usuarios", async (req, res) => {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  res.render("lista-usuarios", { users });
});

app.get("/criar-usuario", (req, res) => {
  res.render("form-usuario", { usuario: null });
});


app.post("/novo-usuario", async (req, res) => {
  const { name, email, password } = req.body;

  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  res.redirect("/Lista-de-usuarios"); 
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const resposta = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE'
  });

  res.sendStatus(resposta.status);
});

app.get("/editar-nome/:id", async (req, res) => {
  const { id } = req.params;

    const resposta = await fetch(`http://localhost:3000/users/${id}`);
    const usuario = await resposta.json();

    res.render("form-usuario", { usuario });
  
});

app.patch("/editar-usuario/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  res.sendStatus(200);
});

app.get("/editar-senha/:id", async (req, res) => {
  const { id } = req.params;

  const resposta = await fetch(`http://localhost:3000/users/${id}`);
  const usuario = await resposta.json();

  res.render("form-senha", { usuario });
});


app.patch("/editar-senha/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const resposta = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  res.sendStatus(resposta.status);
});

app.listen(4000, () => {
  console.log("Front-end rodando em http://localhost:4000");
});
