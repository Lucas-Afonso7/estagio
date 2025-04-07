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