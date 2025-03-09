# Níveis de Compreensão de Estudo

1. **Saber que existe**: o que é basicamente, prós e contras;
2. **Saber usar**;
3. **Saber funcionamento interno**: ir além da abstração;
4. **Saber relacionar os conhecimentos.**

---

##  Primeira Aula - 04/03/2025

###  O que é Criptografia?
Criptografia é um método de proteger informações, tornando-as legíveis apenas para quem tem a chave correta para decodificá-las. Ela é usada para proteger mensagens, arquivos, bancos de dados e diversas formas de comunicação digital.

###  Como funciona a criptografia simétrica e assimétrica?

#### 🔹 Criptografia Simétrica
Utiliza uma única chave para criptografar e descriptografar os dados. É mais rápida, mas menos segura, pois a mesma chave precisa ser compartilhada entre remetente e destinatário, aumentando o risco de interceptação.

**Principais algoritmos:**
- **AES** (Advanced Encryption Standard) - Usado em bancos e redes Wi-Fi seguras.
- **DES** (Data Encryption Standard) - Antigo e atualmente considerado inseguro.
- **ChaCha20** - Utilizado em comunicações seguras, como o WhatsApp.

**Usos comuns:**
- Comunicação interna em empresas.
- Criptografia de arquivos e discos (**BitLocker**, **VeraCrypt**).
- Segurança em redes Wi-Fi (**WPA2 usa AES**).

#### 🔹 Criptografia Assimétrica
Utiliza um par de chaves: uma pública (compartilhada) e uma privada (secreta). Esse método é mais seguro, pois a chave privada nunca é exposta.

**Principais algoritmos:**
- **RSA** (Rivest-Shamir-Adleman) - Amplamente usado para segurança na web.
- **ECC** (Elliptic Curve Cryptography) - Mais seguro e eficiente que o RSA.
- **DSA** (Digital Signature Algorithm) - Usado para assinaturas digitais.

**Usos comuns:**
- **HTTPS** - Protege sites e conexões seguras.
- **E-mails criptografados** - Usado em PGP e S/MIME.
- **Assinaturas digitais** - Garante autenticidade de documentos.

###  O que é uma chave SSH? Como funciona esse protocolo? 

Uma chave SSH é um método seguro de autenticação que substitui senhas, utilizando criptografia assimétrica para permitir conexões remotas confiáveis e protegidas.

Ela consiste em um **par de chaves**:
- **Chave pública** - Armazenada no servidor remoto.
- **Chave privada** - Mantida em segredo pelo usuário.

###  **Como funciona o SSH?**
1. O usuário tenta se conectar a um servidor SSH.
2. O servidor verifica se a chave pública cadastrada corresponde à chave privada do usuário.
3. Se houver correspondência, o acesso é concedido **sem necessidade de senha**.

###  **Principais usos do SSH:**
- Acesso remoto seguro a servidores.
- Transferência de arquivos (SCP e SFTP).
- Automação de deploys e administração de sistemas.


###  **Como gerar uma chave SSH?**
Para gerar a chave SSH, use o seguinte comando:  
```bash
ssh-keygen -t ed25519 -C "seu_email@example.com"
```
Para localizar a chave gerada:
```bash
cat ~/.ssh/id_ed25519.pub
```

---

##  Segunda Aula - 05/03/2025

###  O que é GIT? Como foi criado?

O **Git** é um sistema de controle de versão distribuído, permitindo que múltiplas pessoas trabalhem no mesmo projeto ao mesmo tempo e acompanhem o histórico de mudanças. Ele pode ser usado via **GitHub** ou pelo terminal.

**Criado em:** 2005 por **Linus Torvalds**, o mesmo criador do **Linux**. Ele desenvolveu o Git após um desacordo com os donos do **BitKeeper**, um sistema de versionamento utilizado anteriormente.

###  O que é GITHUB?
O **GitHub** é uma plataforma que hospeda repositórios Git, facilitando a colaboração, versionamento de código e gerenciamento de projetos.

###  Como adicionar uma chave SSH ao GITHUB?
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
Após isso, copie a chave pública e adicione no GitHub em **Settings > SSH and GPG keys**.
Para testar a conexão:
```bash
ssh -T git@github.com
```

###  Comandos essenciais do Git

| Comando | Descrição |
|---------|-------------|
| `git init` | Inicializa um novo repositório Git. |
| `git log` | Exibe o histórico de commits. |
| `git status` | Mostra o estado atual dos arquivos no repositório. |
| `git branch` | Lista, cria ou exclui branches. |
| `git merge` | Mescla branches. |
| `git commit` | Salva alterações no repositório local. |
| `git diff` | Mostra diferenças entre versões de arquivos. |
| `git add` | Adiciona arquivos ao staging area. |
| `git push` | Envia commits para um repositório remoto. |
| `git checkout` | Alterna entre branches ou versões de arquivos. |
| `git reset --hard` | Reseta o repositório para um commit específico, descartando alterações. |
| `git reset --soft` | Reseta o repositório para um commit específico, mantendo as alterações no staging. |

---

##  Terceira Aula - 06/03/2025

###  Estruturas de Dados

####  Lista
Uma coleção **ordenada** que pode conter itens de diferentes tipos. Permite acesso, remoção e adição de elementos em qualquer posição.

####  Pilha
Segue o princípio **LIFO** (*Last In, First Out*). O último elemento a ser adicionado é o primeiro a ser removido.

####  Fila
Segue o princípio **FIFO** (*First In, First Out*). O primeiro elemento a entrar é o primeiro a sair.

---

###  O que é NodeJS?

O **NodeJS** é um ambiente de execução **JavaScript** que permite rodar código no servidor (**back-end**), tornando possível o uso da linguagem fora do navegador.

**Principais vantagens:**
✅ Alta performance devido ao **motor V8**.
✅ Utilização do **event loop** para operações assíncronas.
✅ Grande quantidade de bibliotecas via **npm**.

###  Como instalar o NodeJS e o NPM?
```bash
sudo apt update
sudo apt-get install nodejs
sudo apt install npm
```

###  Criando um "Hello World" com NodeJS

1. Criar um novo diretório:
```bash
mkdir hello-world
cd hello-world
```
2. Criar um arquivo `projeto.js`:
```bash
touch projeto.js
```
3. Abrir o arquivo e inserir o seguinte código:
```javascript
console.log('Hello, World');
```
4. Executar o script:
```bash
node projeto.js
```
## Quarta Aula - 07/03/2025

 **O que é HTTP?**  
**HTTP (HyperText Transfer Protocol)** é um protocolo de comunicação usado na web para transferir dados entre usuários e servidores.  

 **Diferença entre HTTP e HTTPS**  
🔹 **HTTP**  
Não criptografado, menos seguro, usa a porta **80**.

🔹 **HTTPS**  
Versão segura com criptografia **SSL/TLS**, protege dados, usa a porta **443**.  
**HTTPS** é essencial para segurança, evitando ataques e vazamento de informações.  

 **Métodos HTTP**  
🔹 **GET** → Recupera informações de um recurso.  
🔹 **POST** → Envia dados para criar um novo recurso.  
🔹 **PUT** → Atualiza um recurso existente ou cria um novo se não existir.  
🔹 **PATCH** → Atualiza parcialmente um recurso existente.  
🔹 **DELETE** → Remove um recurso.  

 **O que é um servidor HTTP?**  
Um **servidor HTTP** é um software (ou hardware) que recebe e responde a requisições HTTP. Ele entrega páginas da web, arquivos e outros recursos para os usuários que acessam um site. Funciona escutando na porta **80 (HTTP)** ou **443 (HTTPS)**. Alguns exemplos famosos são **Apache, Nginx e IIS**.  

 **Instalando o Express com NPM**  
Para instalar o Express, use o comando:  
```sh
npm install express --save
```
 **Criando um servidor Express e testando com o comando CURL**

🔹 **1. Criar o arquivo do servidor**  
Criei um arquivo chamado **index.js** e usei o seguinte código:  
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servidor Express está rodando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```
🔹 2. Executar o servidor
Para rodar o servidor, usei o seguinte comando no terminal:

```sh
node index.js
```
🔹 3. Testar com CURL
Para testar o servidor, executei o comando CURL:

```sh

curl http://localhost:3000/
```
Isso retornou a mensagem:
```sh
Servidor Express está rodando!
```
<<<<<<< HEAD
=======
---
# Quinta aula - 10/03/2025
---
# O que é um banco de dados e o que é SQL?

Um banco de dados é um sistema que organiza, armazena e gerencia informações de forma estruturada, permitindo recuperar e manipular os dados com facilidade. Ele é essencial para aplicações que lidam com grandes volumes de informações, como redes sociais, lojas virtuais e sistemas bancários.

SQL é a linguagem utilizada para armazenar, consultar, adicionar e excluir informações dentro de um banco de dados.

---

## Instalando o PostgreSQL 

### 1. Adicionei a Chave GPG do Repositório PostgreSQL
Executando:
```bash
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo tee /usr/share/keyrings/postgresql-archive-keyring.gpg > /dev/null
```
Isso armazena a chave pública no diretório correto para que o APT possa utilizá-la.

---

### 2. Adicionei o Repositório PostgreSQL ao APT
Depois de adicionar a chave GPG, configurei o repositório oficial do PostgreSQL:
```bash
echo "deb [signed-by=/usr/share/keyrings/postgresql-archive-keyring.gpg] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
```
Isso permite instalar e atualizar o PostgreSQL diretamente dos mantenedores oficiais.

---

### 3. Atualizei a Lista de Pacotes e Instalei o PostgreSQL
Executando os comandos:
```bash
sudo apt update
sudo apt install postgresql-16
```
Caso necessário, substitua `postgresql-16` pela versão específica desejada.

---

### 4. Verifiquei se a Instalação Foi Bem-Sucedida
Para verificar se o status esta bem sucedido, usei o comando:
```bash
sudo systemctl status postgresql
```
Estava funcionando corretamente.

---

## Criando a Tabela `users`

### 1. Acessar o PostgreSQL
Primeiro, acessei o usuário postgres:
```bash
sudo -i -u postgres
```


---

### 2. Criar a Tabela `users`
Dentro do PostgreSQL, criei a tabela com:
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
 Explicação:
- `id SERIAL PRIMARY KEY`: Gera um identificador único automaticamente.
- `name VARCHAR(100) NOT NULL`: Nome do usuário (obrigatório).
- `email VARCHAR(100) UNIQUE NOT NULL`: O email deve ser único.
- `password TEXT NOT NULL`: A senha do usuário (deve ser armazenada com hash em produção).
- `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`: Registra automaticamente a data de criação do usuário.

---

### 3. Verificar a Tabela Criada
Para checar se a tabela foi criada corretamente, usei:
```sql
\d users;
```

---

### 4. Inserir um Usuário de Teste
Para adicionar um usuário na tabela, usei:
```sql
INSERT INTO users (name, email, password) 
VALUES ('Lucas', 'lucas@email.com', 'lucas123');
```

---

### 5. Consultar os Usuários
Para visualizar os usuários cadastrados, usei:
```sql
SELECT * FROM users;
```

---

## Comandos Básicos do SQL

### INSERT (Inserir Dados)
Para adicionar um novo usuário à tabela:
```sql
INSERT INTO users (name, email, password) 
VALUES ('Lucas', 'lucas@email.com', 'senha123');
```

### SELECT (Consultar Dados)
- Para ver todos os usuários cadastrados:
  ```sql
  SELECT * FROM users;
  ```
- Para buscar apenas nome e email dos usuários:
  ```sql
  SELECT name, email FROM users;
  ```
- Para encontrar um usuário específico pelo email:
  ```sql
  SELECT * FROM users WHERE email = 'lucas@email.com';
  ```
- Para ordenar os resultados por nome:
  ```sql
  SELECT * FROM users ORDER BY name ASC;
  ```

### UPDATE (Atualizar Dados)
Para atualizar um dado já existente:
```sql
UPDATE users 
SET password = 'nova_senha'
WHERE email = 'lucas@email.com';
```
**IMPORTANTE:** Sempre utilize `WHERE` para evitar atualizar todos os registros da tabela!

### DELETE (Remover Dados)
Para remover um usuário específico:
```sql
DELETE FROM users WHERE email = 'lucas@email.com';
```
Para apagar **todos** os usuários sem deletar a estrutura da tabela:
```sql
DELETE FROM users;
```

---

## Joins (Junção de Tabelas)

### INNER JOIN (Apenas Correspondências)
Retorna apenas registros que possuem correspondência em ambas as tabelas.
```sql
SELECT users.name, users.email, orders.total, orders.created_at
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### LEFT JOIN (Todos os Usuários + Pedidos Correspondentes)
Retorna **todos os usuários**, mesmo os que **não fizeram pedidos**:
```sql
SELECT users.name, users.email, orders.total, orders.created_at
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

### RIGHT JOIN (Todos os Pedidos + Usuários Correspondentes)
Retorna **todos os pedidos**, mesmo sem usuário vinculado:
```sql
SELECT users.name, users.email, orders.total, orders.created_at
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

---
>>>>>>> 71cfbe8 (Configuração inicial do banco de dados e scripts SQL)
