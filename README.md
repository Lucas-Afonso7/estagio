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
