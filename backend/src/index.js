const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config({ path: '.env' });

const typeDefs =  require("./typeDefs");
const resolvers = require("./resolvers");
const CloudwaysAPI = require('../datasources/Cloudways');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        cloudwaysAPI: new CloudwaysAPI()
    })
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});