# Banco de dados e SQL

Um banco de dados é um sistema que organiza, armazena e gerencia informações de forma estruturada, permitindo recuperar e manipular os dados com facilidade. Ele é essencial para aplicações que lidam com grandes volumes de informações, como redes sociais, lojas virtuais e sistemas bancários.

SQL é a linguagem utilizada para armazenar, consultar, adicionar e excluir informações dentro de um banco de dados.

---

## SQL Parameters e SQL Injection

### **SQL Parameters**

Forma segura de passar valores para uma consulta SQL utilizando **marcadores de posição**. Isso evita vulnerabilidades como **SQL Injection**.

### **SQL Injection**

Tipo de ataque onde um usuário mal-intencionado pode manipular consultas SQL para modificar ou excluir dados. Isso ocorre quando os dados do usuário não são devidamente validados antes de serem usados na consulta.

Exemplo usando SQL Parameters:

```sql
SELECT * FROM users WHERE email = $1;
```

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

### Comandos Básicos do SQL

- **SELECT**: Consultar dados.
- **INSERT**: Inserir dados.
- **UPDATE**: Atualizar dados.
- **DELETE**: Excluir dados.
- **CREATE TABLE**: Criar novas tabelas.
- **DROP TABLE**: Excluir tabelas.
- **ALTER TABLE**: Modificar tabelas.

---

### Estruturas de Dados

#### Lista

Uma coleção **ordenada** que pode conter itens de diferentes tipos. Permite acesso, remoção e adição de elementos em qualquer posição.

#### Pilha

Segue o princípio **LIFO** (_Last In, First Out_). O último elemento a ser adicionado é o primeiro a ser removido.

#### Fila

Segue o princípio **FIFO** (_First In, First Out_). O primeiro elemento a entrar é o primeiro a sair.
