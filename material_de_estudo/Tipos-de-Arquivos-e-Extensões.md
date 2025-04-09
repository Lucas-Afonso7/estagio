

## Tipos de Arquivos e Extensões

- **Texto e Documentos**: .txt, .docx, .pdf, .csv – Usados para armazenar informações escritas.
- **Imagens**: .jpg, .png, .gif, .svg – Formatos para fotos, gráficos e animações.
- **Vídeos e Áudio**: .mp4, .mkv, .mp3, .wav – Usados para mídia digital.
- **Código e Scripts**: .js, .py, .html, .css – Comuns no desenvolvimento de software.
- **Executáveis e Compactação**: .exe, .sh, .zip, .rar – Usados para programas e armazenamento eficiente.

  Cada extensão define como o arquivo pode ser aberto e utilizado.
 
---
 
 ###  Bloqueando o acesso com permissões

**Protegi meu diretório pessoal**
```bash
chmod 700 ~
```
Isso garante que só eu posso acessar meu /home/lucas.

**Removi permissões de leitura, escrita e execução para grupo e outros**

```bash
chmod -R go-rwx ~
```
Esse comando removeu todas as permissões de grupo (g) e outros usuários (o) em todas as pastas e arquivos dentro do meu diretório pessoal, deixando meus arquivos visíveis só pra mim.

