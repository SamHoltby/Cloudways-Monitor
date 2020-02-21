const {gql} = require('apollo-server');

const typeDefs = gql`
    type AccessToken {
        access_token: String!
        expires_in: Int!
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
        servers(access_token:String!):[Server]!
    }
    
    type Mutation{
        accessToken(email:String!, api_key:String!): AccessToken
    }
`;

module.exports = typeDefs;