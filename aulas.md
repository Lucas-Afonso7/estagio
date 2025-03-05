Níveis de compreensão de estudo

1\. Saber que existe: o que é basicamente, prós e contras;

2\. Saber usar;

3\. Saber funcionamento interno: ir além da abstração;

4\. Saber relacionar os conhecimentos.

Breno Silva

\- 1. O que é criptografia?

\- 2. Como funciona criptografia simétrica e assimétrica

\- 3. O que é uma chave SSH? Como funciona esse protocolo?

\- Criar uma chave SSH

SSH, GIT, JavaScript, SQL

**Primeira aula: 04/03/2025**

***RESUMO:***

### **O que é criptografia?**

Criptografia é um método de proteger informações, tornando-as legíveis
apenas para quem tem a chave correta para decodificá-las. Ela é usada
para proteger mensagens, arquivos, bancos de dados e diversas formas de
comunicação digital.

### **Como funciona a criptografia simétrica e assimétrica?**

#### **Criptografia Simétrica**

A criptografia simétrica utiliza **uma única chave** para criptografar e
descriptografar os dados. É mais rápida, mas menos segura, pois a mesma
chave precisa ser compartilhada entre remetente e destinatário,
aumentando o risco de interceptação.

**Principais algoritmos de criptografia simétrica:**

**AES (Advanced Encryption Standard)** -- Usado em bancos e redes Wi-Fi
seguras.

**DES (Data Encryption Standard)** -- Antigo e atualmente considerado
inseguro.

**ChaCha20** -- Utilizado em comunicações seguras, como o WhatsApp.

**Usos comuns da criptografia simétrica:**

Comunicação interna em empresas.

Criptografia de arquivos e discos (BitLocker, VeraCrypt).

Segurança em redes Wi-Fi (WPA2 usa AES).

#### **Criptografia Assimétrica**

A criptografia assimétrica usa **um par de chaves**: uma **pública**
(compartilhada) e uma **privada** (secreta). Esse método é mais seguro,
pois a chave privada nunca é exposta.

**Principais algoritmos de criptografia assimétrica:**

> **RSA (Rivest-Shamir-Adleman)** -- Amplamente usado para segurança na
> web.
>
> **ECC (Elliptic Curve Cryptography)** -- Mais seguro e eficiente que o
> RSA.
>
> **DSA (Digital Signature Algorithm)** -- Usado para assinaturas
> digitais.

**Usos comuns da criptografia assimétrica:**

> **HTTPS** -- Protege sites e conexões seguras.
>
> **E-mails criptografados** -- Usado em PGP e S/MIME.
>
> **Assinaturas digitais --** Garante autenticidade de documentos.

### **O que é uma chave SSH? Como funciona esse protocolo? Secure shell**

Uma **chave SSH** é um método seguro de autenticação que substitui
senhas, utilizando **criptografia assimétrica** para permitir conexões
remotas confiáveis e protegidas.

Ela consiste em um **par de chaves**:

> **Chave pública** -- Armazenada no servidor remoto.
>
> **Chave privada** -- Mantida em segredo pelo usuário.

**Como funciona o SSH?**

> O usuário tenta se conectar a um servidor SSH.
>
> O servidor verifica se a chave pública cadastrada corresponde à chave
> privada do usuário.
>
> Se houver correspondência, o acesso é concedido **sem necessidade de
> senha**.

**Principais usos do SSH:**

> Acesso remoto seguro a servidores.
>
> Transferência de arquivos (SCP e SFTP).
>
> Automação de deploys e administração de sistemas.

**Para gerar a ssh**

ssh-keygen -t ed25519 -C

**Para localizar**

cat \~/.ssh/id_ed25519.pub

**Segunda aula 05/03/2025**

**O que é GIT?, como foi criado?**

É usado para, mais de uma pessoa trabalhar no mesmo projeto ao mesmo
tempo, e também tendo como ver o histórico dos projetos. Tem como ser
usado pelo github e pelo terminal. Foi criado em 2005 pelo mesmo criador
do linux, o Linus Torvalds. Ele usava o sistema BitKeeper, mas houve um
decentemente entre a comunidade e os donos do software. Sendo assim o
linus decidiu criar seu próprio sistema, sendo mais rápido, seguro e
flexível.

**O que é GITHUB?**

Serve para hospedar o git, ver referências de código e também hospedar
projetos pessoais visíveis para o público

**Colocar chave SSH no GITHUB:**

Adicionei a chave ssh ao agente ssh, com o comando.

eval \"\$(ssh-agent -s)\"

ssh-add \~/.ssh/id_ed25519

Feito isso, copie a chave SSH e a colei no github, pelo New SSH Key. Em
seguida testei usando o comando, ssh -T git@github.com.

**Git init, Git Log, Git Status, Git Branch, Git Merge, Git commit, Git
diff, Git add, Git Push, Git Checkout, Git reset ---hard e soft"**

\- \`git init\` - Inicializa um novo repositório Git.

\- \`git log\` - Exibe o histórico de commits.

\- \`git status\` - Mostra o estado atual dos arquivos no repositório.

\- \`git branch\` - Lista, criar ou excluir branches.

\- \`git merge\` - Mescla branches.

\- \`git commit\` - Salva alterações no repositório local.

\- \`git diff\` - Mostra diferenças entre versões de arquivos.

\- \`git add\` - Adiciona arquivos ao staging area.

\- \`git push\` - Envia commits para um repositório remoto.

\- \`git checkout\` - Alterna entre branches ou versões de arquivos.

\- \`git reset \--hard\` - Reseta o repositório para um commit
específico, descartando alterações.

\- \`git reset \--soft\` - Reseta o repositório para um commit
específico, mantendo as alterações no staging.

**Commitar esse arquivo em Markdown**

![](media/image1.png){width="6.5in" height="7.736111111111111in"}

![](media/image2.png){width="6.458333333333333in" height="5.875in"}
