const Query = {
    servers: async (root, {access_token}, {dataSources}) => {
        return dataSources.cloudwaysAPI.getServerList(access_token)
    }
};
module.exports = Query;