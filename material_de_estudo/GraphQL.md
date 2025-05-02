### GraphQL

GraphQL é uma linguagem de consulta usada para interagir com APIs. Diferente da API REST, onde cada recurso tem uma rota diferente, no GraphQL tudo acontece em um único endpoint.

---

**Endpoint único** - Toda a comunicação com a API acontece por uma única rota, geralmente /graphql.

**Query** - Usada para buscar dados. É como um GET, mas pode escolher exatamente os campos que quer. Não altera nada no servidor.

**Mutation** - Serve para alterar dados no servidor — criar, atualizar ou deletar. É como um POST, PUT, DELETE na API REST.

**Subscription** - Usada para receber dados em tempo real. Serve principalmente para casos onde o dado muda com frequência, ex notificações, mensagens, etc.

**Schemas** - No GraphQL, tudo começa com um schema. Ele define os tipos de dados disponíveis, as queries, mutations e subscriptions que podem ser feitas.

**Types** - Define tipos como User, Post, etc. Com campos obrigatórios (!) ou opcionais.

**Resolvers** - São as funções que dizem como os dados devem ser buscados ou modificados. É onde você conecta o GraphQL com o banco de dados ou outras APIs.
