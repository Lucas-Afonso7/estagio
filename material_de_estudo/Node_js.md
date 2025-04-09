### Node.js

O **NodeJS** é um ambiente de execução **JavaScript** que permite rodar código no servidor (**back-end**), tornando possível o uso da linguagem fora do navegador.

**Principais vantagens:**
✅ Alta performance devido ao **motor V8**.
✅ Utilização do **event loop** para operações assíncronas.
✅ Grande quantidade de bibliotecas via **npm**.

### Como instalar o NodeJS e o NPM?

```bash
sudo apt update
sudo apt-get install nodejs
sudo apt install npm
```

### Criando um "Hello World" com NodeJS

1. Criar um novo diretório:

```bash
mkdir hello-world
cd hello-world
```

1. Criar um arquivo `projeto.js`:

```bash
touch projeto.js
```

2. Abrir o arquivo e inserir o seguinte código:

```javascript
console.log("Hello, World");
```

3. Executar o script:

```bash
node projeto.js
```

---

## O que são `package.json` e `package-lock.json`?

### `package.json`

É o arquivo onde o NPM armazena os nomes e versões dos pacotes instalados no projeto. As versões seguem um formato semântico composto por três números:

- **Major Version** `1.x.x` → Mudanças grandes e incompatíveis com versões anteriores.
- **Minor Version** `x.1.x` → Novas funcionalidades adicionadas sem quebrar compatibilidade.
- **Patch Version** `x.x.1` → Correções de bugs e melhorias de desempenho sem impacto na compatibilidade.

### `package-lock.json`

Esse arquivo define as versões exatas dos pacotes instalados, garantindo que ao rodar `npm install`, o mesmo conjunto de pacotes seja instalado, evitando inconsistências entre ambientes.

---

### O que é um JSON

JSON (JavaScript Object Notation) é um formato simples para organizar e trocar dados, utilizando chave-valor. Ele é fácil de entender e funciona bem com várias linguagens de programação. É muito utilizado em APIs e também permite armazenar informações de forma estruturada com objetos e listas.

---

# Hot Reload

Hot Reload permite que o servidor reinicie automaticamente sempre que você fizer uma alteração no código, evitando a necessidade de reiniciar manualmente.

Primeiro, instalei o nodemon.

````bash
npm install -g nodemon
  ```
Agora, em vez de rodar node app.js, eu uso:

```bash

nodemon app.js
````

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

**async** é usado para declarar funções assíncronas em JavaScript, permitindo o uso de await para esperar por resultados de operações como requisições sem bloquear o restante do código.

### Acessar arquivos no computador

import fs from 'fs'; // Importa o módulo 'fs' para trabalhar com arquivos

const filePath = 'caminho/do/arquivo.txt'; // Caminho do arquivo que você quer ler

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', data); // Exibe o conteúdo do arquivo
});

### Criar arquivo

import fs from 'fs';

const filePath = 'caminho/do/novo-arquivo.txt'; // Caminho onde o arquivo será criado
const content = 'Este é o conteúdo do novo arquivo!';

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Erro ao criar o arquivo:', err);
    return;
  }
  console.log('Arquivo criado com sucesso!');
});

Ler arquivo: fs.readFile()

Criar arquivo: fs.writeFile()