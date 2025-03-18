Instalação de Dependências
 No diretório do meu projeto, executei os seguintes comandos para instalar as dependências necessárias:
 
 ```bash
 npm init -y
 npm install express pg
 ```
 
 ---
 
 ## Criando o Servidor Express
 Criei um arquivo chamado `app.js` e adicionei o seguinte código:
 
 ```javascript
 const express = require('express');
 const { Pool } = require('pg');
 
 const app = express();
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
     try {
         const result = await pool.query(
             'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
             [name, email, password]
         );
         res.status(201).json({ id: result.rows[0].id });
     } catch (error) {
         console.error('Erro ao inserir usuário:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
     }
 });
 
 
 app.get('/users', async (req, res) => {
     try {
         const result = await pool.query('SELECT * FROM users');
         res.status(200).json(result.rows);
     } catch (error) {
         console.error('Erro ao buscar usuários:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
     }
 });
 
 
 app.get('/users/:id', async (req, res) => {
     const { id } = req.params;
     try {
         const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
         if (result.rows.length === 0) {
             return res.status(404).json({ error: 'Usuário não encontrado' });
         }
         res.status(200).json(result.rows[0]);
     } catch (error) {
         console.error('Erro ao buscar usuário:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
     }
 });
 
 
 app.put('/users/:id', async (req, res) => {
     const { id } = req.params;
     const { name, email, password } = req.body;
     try {
         const result = await pool.query(
             'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
             [name, email, password, id]
         );
         if (result.rowCount === 0) {
             return res.status(404).json({ error: 'Usuário não encontrado' });
         }
         res.status(200).json({ message: 'Usuário atualizado com sucesso' });
     } catch (error) {
         console.error('Erro ao atualizar usuário:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
     }
 });
 
 
 app.patch('/users/:id', async (req, res) => {
     const { id } = req.params;
     const { name, email, password } = req.body;
     const updates = [];
     const values = [];
 
     if (name) {
         updates.push(`name = $${updates.length + 1}`);
         values.push(name);
     }
     if (email) {
         updates.push(`email = $${updates.length + 1}`);
         values.push(email);
     }
     if (password) {
         updates.push(`password = $${updates.length + 1}`);
         values.push(password);
     }
 
     if (updates.length === 0) {
         return res.status(400).json({ error: 'Nenhum campo para atualizar' });
     }
 
     try {
         const result = await pool.query(
             `UPDATE users SET ${updates.join(', ')} WHERE id = $${updates.length + 1}`,
             [...values, id]
         );
         if (result.rowCount === 0) {
             return res.status(404).json({ error: 'Usuário não encontrado' });
         }
         res.status(200).json({ message: 'Usuário atualizado com sucesso' });
     } catch (error) {
         console.error('Erro ao atualizar usuário:', error);
         res.status(500).json({ error: 'Erro interno do servidor' });
     }
 });
```
 ## Testando as rotas do projeto com CURL

### **Criar um usuário (POST /users)**

```bash
curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{
           "name": "João Silva",
           "email": "joao@email.com",
           "password": "senha123"
         }'
```

### **Listar todos os usuários (GET /users)**

```bash
curl -X GET http://localhost:3000/users
```

### **Buscar um usuário pelo ID (GET /users/:id)**

```bash
curl -X GET http://localhost:3000/users/1
```

### **Atualizar um usuário (PUT /users/:id)**

```bash
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{
           "name": "João Atualizado",
           "email": "joao.novo@email.com",
           "password": "novaSenha456"
         }'
```

### **Atualizar parcialmente um usuário (PATCH /users/:id)**

```bash
curl -X PATCH http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{
           "email": "email.atualizado@email.com"
         }'
```

### **Deletar um usuário (DELETE /users/:id)**

```bash
curl -X DELETE http://localhost:3000/users/1
```

---
