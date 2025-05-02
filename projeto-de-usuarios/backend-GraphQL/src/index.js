import { ApolloServer, gql } from "apollo-server";
import { Pool } from "pg";

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "postgres",
  password: "852",
  database: "api_teste",
});

const typeDefs = `
    type Users {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        Users: [Users!]
    }

    type Mutation {
        createUsers(name: String!, email: String!, password: String!): Users
    }
`;

const resolvers = {
  Query: {
    Users: async () => {
      const result = await pool.query("SELECT * FROM users");
      return result.rows;
    },
  },

  Mutation: {
    createUsers: async (_, { name, email, password }) => {
      const result = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, password]
      );
      return result.rows[0];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000).then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});
