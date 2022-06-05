const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    numberOf: Int
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World!";
    },
    numberOf: () => {
      return 55;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
