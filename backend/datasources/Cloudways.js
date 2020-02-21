const {RESTDataSource} = require('apollo-datasource-rest');

class CloudwaysAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.CLOUDWAYS_API_ENDPOINT
    }

    willSendRequest(request) {
        if (this.context.access_token) {
            request.headers.set('Authorization', `Bearer ${this.context.access_token}`);
        }
    }

    async getOAuthAccessToken({email, api_key}) {
        return await this.post(
            'oauth/access_token',
            {
                email: email,
                api_key: api_key
            }
        );
    }

    async getServerList(access_token) {
        this.context.access_token = access_token;
        const response = await this.get('server');

        return response
            ? response.servers
            : {};
    }
}

module.exports = CloudwaysAPI;