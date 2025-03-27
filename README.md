

- [Criptografia](#Criptografia)  
- [Git](#Git)  
- [Node.js](#Node.js)  
- [HTTP  Tipos de Body](#HTTP)  
- [Banco de dados e SQL](#Banco-de-daods-e-SQL)
- [Arquivos e Extensões](#Arquivos-e-Extensões)  

---
  ### Criptografia
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


  ### Git
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


  

  ###  NodeJS

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
  1. Criar um arquivo `projeto.js`:
  ```bash
  touch projeto.js
  ```
  1. Abrir o arquivo e inserir o seguinte código:
  ```javascript
  console.log('Hello, World');
  ```
  1. Executar o script:
  ```bash
  node projeto.js
  ```
 ---
 ## O que são `package.json` e `package-lock.json`?

  ### `package.json`

  É o arquivo onde o NPM armazena os nomes e versões dos pacotes instalados no projeto. As versões seguem um formato semântico composto por três números:

  - **Major Version**  `1.x.x` → Mudanças grandes e incompatíveis com versões anteriores.
  - **Minor Version**  `x.1.x` → Novas funcionalidades adicionadas sem quebrar compatibilidade.
  - **Patch Version**  `x.x.1` → Correções de bugs e melhorias de desempenho sem impacto na compatibilidade.

  ### `package-lock.json`

  Esse arquivo define as versões exatas dos pacotes instalados, garantindo que ao rodar `npm install`, o mesmo conjunto de pacotes seja instalado, evitando inconsistências entre ambientes.

---
  ### O que é um JSON

  JSON (JavaScript Object Notation) é um formato simples para organizar e trocar dados, utilizando chave-valor. Ele é fácil de entender e funciona bem com várias linguagens de programação. É muito utilizado em APIs e também permite armazenar informações de forma estruturada com objetos e listas.

  ---
  # Hot Reload

  Hot Reload permite que o servidor reinicie automaticamente sempre que você fizer uma alteração no código, evitando a necessidade de reiniciar manualmente.

  Primeiro, instalei o nodemon.

  ```bash
  npm install -g nodemon
    ```
  Agora, em vez de rodar node app.js, eu uso:

  ```bash

  nodemon app.js
  ```
  Assim, o servidor reinicia sozinho sempre que salvo uma alteração.

  Para deixar o comando mais prático, configurei o run dev no package.json:

  No arquivo package.json, adicionei na seção "scripts":

  ```json

  "scripts": {
    "dev": "nodemon app.js"
  }
  ```
  Agora, em vez de rodar nodemon app.js, basta executar:

  ```bash

  npm run dev
  ```
  Isso facilita a inicialização do servidor, deixando o comando mais curto e padronizado.

---
  ## Migrations
  Migrations são uma forma de versionar e gerenciar mudanças no banco de dados sem precisar alterá-lo manualmente. Cada migration representa uma modificação, como criar tabelas ou adicionar colunas, garantindo que a estrutura do banco permaneça consistente entre diferentes ambientes. Além disso, permitem reverter alterações caso necessário, tornando o processo mais seguro e organizado.

---
  ## String Interpolation

  A **interpolação de strings** permite inserir variáveis dentro de uma string de maneira mais intuitiva. Além disso, qualquer tipo de dado pode ser convertido em string automaticamente. ${}

---

# HTTP
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

---
### HTTP - Tipos de Body e Como Mudá-los

  O body de uma requisição HTTP é a parte responsável por transportar os dados enviados ao servidor. Existem diferentes tipos de body que podem ser utilizados, dependendo do formato dos dados. Por exemplo, o JSON é amplamente utilizado em APIs, e o multipart/form-data é necessário quando há o envio de arquivos. Além disso, o texto simples e o XML também são formatos viáveis.

  Para definir o tipo de body, é utilizado o cabeçalho `Content-Type`. Esse cabeçalho informa ao servidor o formato dos dados, para que ele possa processá-los corretamente. Ao compreender esses tipos e como manipulá-los, é possível garantir que a comunicação entre o cliente e o servidor ocorra de forma eficiente e precisa.

---
## Request Body e Request Params

  ### **Request Body**

  O **corpo da requisição** (req.body) é utilizado quando se precisa enviar dados detalhados para o servidor. O cliente envia as informações para o servidor, que lê esses dados como um fluxo de bytes. No **Express.js**, o express.json() converte esses bytes em um objeto JavaScript.

  ### **Request Params**

  Os **parâmetros da requisição** (req.params) são usados para buscar informações diretamente no banco de dados com base na URL. Exemplo:

  - **URL:** /users/123
  - O servidor extrai 123, que é o identificador único do usuário, e consulta o banco de dados.

---
## Diferença entre PUT e PATCH
  
  - **PUT**: Atualiza o recurso inteiro. Se algum campo não for enviado, ele será apagado.
  
    **Exemplo:**
    ```http
    PUT /users/1
    Content-Type: application/json
  
    {
      "name": "João",
      "email": "joao@email.com",
      "password": "nova_senha"
    }
    ```
  
  - **PATCH**: Atualiza apenas os campos enviados. O que já existe e não for enviado permanece igual.
  
    **Exemplo:**
    ```http
    PATCH /users/1
    Content-Type: application/json
  
    {
      "email": "novo@email.com"
    }
    ```
  
  ---
  
  - **POST /users**  
    Cria um novo usuário. O cliente envia os dados no corpo da requisição, e o servidor os armazena.
  
  - **GET LIST /users**  
    Retorna uma lista de usuários. Essa requisição busca todos os usuários cadastrados no sistema.
  
  - **GET ID /users/:id**  
    Retorna os dados de um usuário específico, identificado pelo `id` na URL.
  
  - **DELETE /users/:id**  
    Remove um usuário específico. O servidor identifica o usuário pelo `id` e o deleta do banco de dados.
  
  - **PUT /users/:id**  
    Atualiza completamente os dados de um usuário. O cliente precisa enviar todas as informações, pois os dados antigos serão substituídos.
  
  - **PATCH /users/:id**  
    Atualiza parcialmente os dados do usuário. Diferente do PUT, aqui só é necessário enviar os campos que precisam ser alterados.

  ---
  
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
 ## Gerenciador de Pacotes

- Gerenciadores de pacotes são repositórios de código aberto, ou seja, são programas que outras pessoas desenvolveram e disponibilizaram para que outros possam utilizar, facilitando o desenvolvimento e tornando-o mais rápido. O gerenciador de pacotes mais conhecido do **Node.js** é o [NPM](https://www.npmjs.com/), mas também existem outros como **Yarn, PNPM e Bun**.
 ---

  ###  Estruturas de Dados

  ####  Lista
  Uma coleção **ordenada** que pode conter itens de diferentes tipos. Permite acesso, remoção e adição de elementos em qualquer posição.

  ####  Pilha
  Segue o princípio **LIFO** (*Last In, First Out*). O último elemento a ser adicionado é o primeiro a ser removido.

  ####  Fila
  Segue o princípio **FIFO** (*First In, First Out*). O primeiro elemento a entrar é o primeiro a sair.

  ---

  ## Tipos de Arquivos e Extensões

  - **Texto e Documentos**: .txt, .docx, .pdf, .csv – Usados para armazenar informações escritas.
  - **Imagens**: .jpg, .png, .gif, .svg – Formatos para fotos, gráficos e animações.
  - **Vídeos e Áudio**: .mp4, .mkv, .mp3, .wav – Usados para mídia digital.
  - **Código e Scripts**: .js, .py, .html, .css – Comuns no desenvolvimento de software.
  - **Executáveis e Compactação**: .exe, .sh, .zip, .rar – Usados para programas e armazenamento eficiente.

  Cada extensão define como o arquivo pode ser aberto e utilizado.