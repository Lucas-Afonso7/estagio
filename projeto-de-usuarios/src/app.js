import express from 'express';
import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

const { Pool } = pg;
const app = express();

const uploadDir = path.join(__dirname, 'uploads'); 

// Garantir que o diretório de uploads exista
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api_teste',
    password: '852',
    port: 5432,
});

app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    if (!email) {
        return res.status(400).json({ error: 'Email é obrigatório' });
    }
    if (!password) {
        return res.status(400).json({ error: 'Senha é obrigatória' });
    }
    const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
        [name, email, password]
    );
    res.status(201).json({ id: result.rows[0].id });
});

app.get('/users', async (req, res) => {
    const { name } = req.query;
    if (name) {
        //Troquei o like por ilike
        const result = await pool.query('SELECT * FROM users WHERE name ILIKE $1', [`%${name}%`]);
        return res.json(result.rows);
    }
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    res.json(result.rows[0]);
});

app.delete('/users/:id', async (req, res) => {
    // Verificar se o usuário existe antes de deletar
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Agora sim, deletamos o usuário
    await pool.query('DELETE FROM users WHERE id = $1', [id]);

    res.status(204).send();
});

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    await pool.query(
        'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
        [name, email, password, id]
    );
    res.json({ message: 'Usuário atualizado' });
});

app.patch('/users/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    
    const keys = Object.keys(updates);
    const values = Object.values(updates);
    
    const setString = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
    
    await pool.query(`UPDATE users SET ${setString} WHERE id = $${keys.length + 1}`, [...values, id]);
    res.json({ message: 'Usuário atualizado' });
});

app.post('/users/:id/photo', async (req, res) => {
    const userId = req.params.id; //Pega o ID do usuario na URL
    const filename = randomUUID() + '.jpg'; //Gera o UUID

   //O caminho onde onde o arquivo sera armazenado no sistema
    const filePath = path.join(uploadDir, filename);

    
    fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.error('Erro ao criar o arquivo:', err);
        }
        console.log('Arquivo criado com sucesso!');
      });

})

app.get('/users/:id/photo', async (req, res) => {
    const userId = req.params.id;
    const result = await pool.query('SELECT photo FROM users WHERE id = $1', [userId]); // Consulta o banco de dados

}) 

export default app