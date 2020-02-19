const resolvers = {
    Query: {
        servers: async (root, data, { dataSources }) => {
            const access_token = await  dataSources.cloudwaysAPI.getOAuthAccessToken();
            dataSources.cloudwaysAPI.context ={
                access_token,
                ...dataSources.cloudwaysAPI.context
            };

           return dataSources.cloudwaysAPI.getServerList(access_token)
        },
    },
};
module.exports = resolvers;