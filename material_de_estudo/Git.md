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

  https://anvilproject.org/guides/content/creating-links

  commit --ammend
  ---
