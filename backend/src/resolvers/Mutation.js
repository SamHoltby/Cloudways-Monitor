const Mutation = {
    accessToken: async (root, data, {dataSources}) => {
        return await dataSources.cloudwaysAPI.getOAuthAccessToken(data);
    }
};
module.exports = Mutation;