### Criptografia

Criptografia é um método de proteger informações, tornando-as legíveis apenas para quem tem a chave correta para decodificá-las. Ela é usada para proteger mensagens, arquivos, bancos de dados e diversas formas de comunicação digital.

### Como funciona a criptografia simétrica e assimétrica?

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

### O que é uma chave SSH? Como funciona esse protocolo?

Uma chave SSH é um método seguro de autenticação que substitui senhas, utilizando criptografia assimétrica para permitir conexões remotas confiáveis e protegidas.

Ela consiste em um **par de chaves**:

- **Chave pública** - Armazenada no servidor remoto.
- **Chave privada** - Mantida em segredo pelo usuário.

### **Como funciona o SSH?**

1. O usuário tenta se conectar a um servidor SSH.
2. O servidor verifica se a chave pública cadastrada corresponde à chave privada do usuário.
3. Se houver correspondência, o acesso é concedido **sem necessidade de senha**.

### **Principais usos do SSH:**

- Acesso remoto seguro a servidores.
- Transferência de arquivos (SCP e SFTP).
- Automação de deploys e administração de sistemas.

### **Como gerar uma chave SSH?**

Para gerar a chave SSH, use o seguinte comando:

```bash
ssh-keygen -t ed25519 -C "seu_email@example.com"
```

Para localizar a chave gerada:

```bash
cat ~/.ssh/id_ed25519.pub
```

---
