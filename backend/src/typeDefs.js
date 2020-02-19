const {gql} = require('apollo-server');

const typeDefs = gql`
    type AccessToken {
        token: String!
    }

    type Server{
        id: Int!
        label:String!
        status: String!
        public_ip: String!
        data_volume_size: String
        db_volume_size: String
        updated_at: String!
        created_at: String!
    }

    type Query {
        accessToken: AccessToken
        servers:[Server]!
    }
`;

module.exports = typeDefs;