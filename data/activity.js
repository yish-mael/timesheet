const {
    ApolloServer,
    gql
} = require("apollo-server-express");

const books = [{
        id: 1,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
    },
    {
        id: 2,
        title: "Jurassic Park",
        author: "Michael Crichton",
    },
];


const typeDefs = gql `
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    id: Int!
    title: String!
    author: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book],
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
    },
};

module.exports = {
    typeDefs,
    resolvers,
}