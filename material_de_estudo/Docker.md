### O que e Docker 

Docker é uma ferramenta que serve pra rodar um projeto isolado do resto do computador. Ele cria um container, que é como uma caixa onde já vem tudo o que o projeto precisa pra funcionar: versão certa do Node, dependências, arquivos do código, etc. Assim, o projeto funciona direitinho na máquina de outras pessoas, mesmo que elas não tenham o ambiente configurado igual.

### Comandos principais do docker

#### Roda um container a partir de uma imagem  
docker run

#### Cria uma imagem a partir do Dockerfile  
docker build

#### Sobe os containers definidos no docker-compose.yml  
docker-compose up

#### Derruba os containers do docker-compose  
docker-compose down


### Makefile
O Makefile é um arquivo utilizado para automatizar comandos repetitivos no terminal. Ele foi originalmente criado para automatizar a compilação de programas em linguagens como C, mas atualmente é bastante utilizado para executar tarefas diversas, como rodar scripts, comandos de build, migrations, etc. Com um Makefile, é possível definir comandos personalizados, que podem ser executados com o comando make.