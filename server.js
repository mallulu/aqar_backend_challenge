const express = require('express');
const db = require('./src/config/sqlize');
const { ApolloServer, gql, UserInputError } = require('apollo-server-express');
const schema = require('./src/schemas/RootSchema');
const resolvers = require('./src/resolvers/RootResolver');


// const { USERS, BOOKINGS } = require('./src/models/init-models');


const app = express();
const server = new ApolloServer({typeDefs: schema, resolvers: resolvers });
db.authenticate().then(() => {
    server.start().then(() => {
        server.applyMiddleware( { app });
        app.listen(3000, console.log('server started bla bla'));
    })
}).catch((error) => {
    console.log('no connection', error);
});


