"use strict";

const express = require("express");
const {
    typeDefs,
    resolvers
} = require("./data/activity.js");
const {
    ApolloServer
} = require("apollo-server-express");

const app = express();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    // These will be defined for both new or existing servers
    typeDefs,
    resolvers,
});

server.applyMiddleware({
    app,
    path: "/api"
}); // app is from an existing express app

app.listen({
        port: PORT
    }, () =>
    console.log(`🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);