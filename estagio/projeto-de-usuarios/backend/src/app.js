import express from 'express';
import pg from 'pg';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { randomUUID } from 'crypto';
import fileUpload from 'express-fileupload';

const { Pool } = pg;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads'); // Caminho absoluto
app.use(express.static(path.join(__dirname, '../../frontend/public')));// Habilita o uso de arquivos estáticos do frontend 

// Garantir que o diretório de uploads exista
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

//Define que as views serão renderizadas com EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../frontend/views'));


app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api_teste',
    password: '852',
    port: 5432,
});

app.get('/Lista-de-usuarios', async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    const users = result.rows;
  
    res.render('users', { users }); //Renderiza a view com os usuários
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

app.use(fileUpload());

app.post('/users/:id/photo', (req, res) => {
    const userId = req.params.id; // Pega o ID do usuário na URL
    const filename = randomUUID() + '.jpg'; // Gera um nome único para o arquivo

    // Verifica se um arquivo foi enviado 
    if (!req.files) {
        return res.status(400).json({ error: 'Nenhuma imagem foi enviada' });
    }

    const photo = req.files.photo; // Obtém o arquivo enviado
    const filePath = path.join(uploadDir, filename); // Define o caminho onde o arquivo será salvo

    // Salva a imagem no servidor
    photo.mv(filePath, async (err) => {
        if (err) {
            console.error('Erro ao criar o arquivo:', err);
            return;
        }
        console.log('Arquivo criado com sucesso!');
        
        // Atualiza o nome da foto no banco de dados
        await pool.query('UPDATE users SET photo = $1 WHERE id = $2', [filename, userId]);
    });
});

app.get('/users/:id/photo', async (req, res) => {
    const userId = req.params.id; // Obtém o ID do usuário
    
    // Busca a foto do usuário no banco de dados
    const result = await pool.query("SELECT photo FROM users WHERE id = $1", [userId]);
    
    // Verifica se o usuário existe e se há uma foto cadastrada
    if (!result.rows[0].photo) {
        return res.status(404).json({ error: "Foto não encontrada" });
    }

    const photoFilename = result.rows[0].photo; // Obtém o nome do arquivo da foto
    const photoPath = path.join(uploadDir, photoFilename); // Caminho completo da foto

    // Verifica se o arquivo realmente existe no servidor
    if (!fs.existsSync(photoPath)) {
        return res.status(404).json({ error: "Arquivo da foto não encontrado" });
    }

    // Envia o arquivo da foto como resposta
    res.sendFile(photoPath);
});
        
export default app