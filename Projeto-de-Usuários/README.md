### TODO: criar comando de SETUP
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
