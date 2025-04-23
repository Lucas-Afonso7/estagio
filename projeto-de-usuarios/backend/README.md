### Comando para iniciar o servidor
```bash
docker-compose up --build
```
### Link para abrir a lista de usuários no navegador:
http://localhost:4000/Lista-de-usuarios

---
# Testes com CURL para o Projeto de Usuários

### Criar um novo usuário (POST /users)

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Lucas", "email": "lucas@example.com", "password": "senha123"}'
```
### Listar todos os usuários (GET /users)

```bash
curl -X GET http://localhost:3000/users
```
### Buscar usuários por nome (GET /users?name=Lucas)

```bash
curl -X GET http://localhost:3000/users?name=Lucas
```
### Buscar um usuário específico por ID (GET /users/:id)

```bash
curl -X GET http://localhost:3000/users/123
```
### Atualizar um usuário específico (PUT /users/:id)

```bash
curl -X PUT http://localhost:3000/users/123 \
  -H "Content-Type: application/json" \
  -d '{"name": "Lucas Oliveira", "email": "lucas@novoemail.com", "password": "novasenha"}'
```
### Atualizar parcialmente um usuário (PATCH /users/:id)

```bash
curl -X PATCH http://localhost:3000/users/123 \
  -H "Content-Type: application/json" \
  -d '{"email": "lucas@novomail.com"}'
```
### Deletar um usuário específico (DELETE /users/:id)

```bash
curl -X DELETE http://localhost:3000/users/123
```
### Upload de foto de usuário (POST /users/:id/photo)

```bash
curl -X POST -F "photo=@foto.jpg" http://localhost:3000/users/1/photo
```
### Baixar a foto do usuario (GET /users/:id/photo)
```bash
curl -o foto_baixada.jpg http://localhost:3000/users/1/photo
```