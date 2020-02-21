const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config({ path: '.env' });

const typeDefs =  require("./typeDefs");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const CloudwaysAPI = require('../datasources/Cloudways');

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Mutation
    },
    dataSources: () => ({
        cloudwaysAPI: new CloudwaysAPI()
    })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});