import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import pg from "pg";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { randomUUID } from "crypto";
import fileUpload from "express-fileupload";

const { Pool } = pg;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "uploads"); // Caminho absoluto

// Garantir que o diretório de uploads exista
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(
  cors({
    origin: ["http://localhost:4000", "http://localhost:5173"],
  })
);

app.use(express.json());

const envPath = path.resolve(__dirname, "../.env");

console.log("Caminho do arquivo .env:", envPath);

const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error("Erro ao carregar o arquivo .env:", result.error);
} else {
  console.log("Arquivo .env carregado");
}

const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Nome é obrigatório" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email é obrigatório" });
  }
  if (!password) {
    return res.status(400).json({ error: "Senha é obrigatória" });
  }
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
    [name, email, password]
  );
  res.status(201).json({ id: result.rows[0].id });
});

app.get("/users", async (req, res) => {
  const { name } = req.query;
  if (name) {
    //Troquei o like por ilike
    const result = await pool.query("SELECT * FROM users WHERE name ILIKE $1", [
      `%${name}%`,
    ]);
    return res.json(result.rows);
  }
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  res.json(result.rows[0]);
});

app.delete("/users/:id", async (req, res) => {
  // Verificar se o usuário existe antes de deletar
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  // Agora sim, deletamos o usuário
  await pool.query("DELETE FROM users WHERE id = $1", [id]);

  res.status(204).send();
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  await pool.query(
    "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4",
    [name, email, password, id]
  );
  res.json({ message: "Usuário atualizado" });
});

app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const keys = Object.keys(updates);
  const values = Object.values(updates);

  const setString = keys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  await pool.query(
    `UPDATE users SET ${setString} WHERE id = $${keys.length + 1}`,
    [...values, id]
  );
  res.json({ message: "Usuário atualizado" });
});

app.use(fileUpload());

app.post("/users/:id/photo", (req, res) => {
  const userId = req.params.id;
  const filename = randomUUID() + ".jpg"; // Gera um nome único para o arquivo

  if (!req.files) {
    return res.status(400).json({ error: "Nenhuma imagem foi enviada" });
  }

  const photo = req.files.photo;
  const filePath = path.join(uploadDir, filename);
  // Salva a imagem no servidor
  photo.mv(filePath, async (err) => {
    if (err) {
      console.error("Erro ao criar o arquivo:", err);
      return;
    }
    console.log("Arquivo criado com sucesso!");

    await pool.query("UPDATE users SET photo = $1 WHERE id = $2", [
      filename,
      userId,
    ]);

    res.json({ message: "Foto enviada com sucesso" });
  });
});

app.get("/users/:id/photo", async (req, res) => {
  const userId = req.params.id;

  const result = await pool.query("SELECT photo FROM users WHERE id = $1", [
    userId,
  ]);

  if (!result.rows[0].photo) {
    return res.status(404).json({ error: "Foto não encontrada" });
  }

  const photoFilename = result.rows[0].photo; // Obtém o nome do arquivo da foto
  const photoPath = path.join(uploadDir, photoFilename);

  if (!fs.existsSync(photoPath)) {
    return res.status(404).json({ error: "Arquivo da foto não encontrado" });
  }

  // Envia o arquivo da foto como resposta
  res.sendFile(photoPath);
});

export default app;
