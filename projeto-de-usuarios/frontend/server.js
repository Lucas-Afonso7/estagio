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

app.use(express.urlencoded());

app.get("/Lista-de-usuarios", async (req, res) => {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  res.render("users", { users });
});

app.get("/criar-usuario", (req, res) => {
  res.render("novo-user", { users: [] });
});

app.post("/novo-usuario", async (req, res) => {
  const { name, email, password } = req.body;

  fetch("http://localhost:3000/users", {
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

app.listen(4000, () => {
  console.log("Front-end rodando em http://localhost:4000");
});
