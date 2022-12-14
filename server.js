require('dotenv').config();
const express = require('express');
const db = require('./src/config/sqlize');
const { ApolloServer, gql, UserInputError } = require('apollo-server-express');
const schema = require('./src/schemas/RootSchema');
const resolvers = require('./src/resolvers/RootResolver');


// Initalize express server.
const app = express();

// Initalize apollo graphql server with graphql schemas and resolvers.
const server = new ApolloServer({typeDefs: schema, resolvers: resolvers });

function start() {
    // Start database connection.
    db.authenticate().then(() => {
        
        // Start apollo server.
        server.start().then(() => {

            // Apply express server as a middleware for apollo
            // Required in case we need to make any normal REST calls.
            server.applyMiddleware( { app });

            // Start express server.
            app.listen(process.env.NODE_DOCKER_PORT, () => {
                console.log(`Server running on port ${process.env.NODE_LOCAL_PORT}`);
                console.log(`You can use GraphQL on localhost:${process.env.NODE_LOCAL_PORT}/graphql`);
            });
        });
    }).catch((error) => {
        console.log('no connection', error);
    });
}


start();