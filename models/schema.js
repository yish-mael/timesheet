// schema.js
const {
    typeDef as Activity
} = require('./Activity.js');
//import { typeDef as Author } from './Activity.js';
//import { typeDef as Book } from './book.js';
const Query = `
  type Query {
    activity(id: Int!): Post
  }
`;

const resolvers = {
    Query: {
        activity: () => activity,
    },
};

makeExecutableSchema({
    typeDefs: [Query, Activity],
    resolvers: {},
});