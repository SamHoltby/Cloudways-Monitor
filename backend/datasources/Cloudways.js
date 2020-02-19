const {RESTDataSource} = require('apollo-datasource-rest');


class CloudwaysAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.CLOUDWAYS_API_ENDPOINT
    }

    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.access_token}`);
    }

    async getOAuthAccessToken() {
        const response = await this.post(
            'oauth/access_token',
            {
                email: process.env.CLOUDWAYS_API_EMAIL,
                api_key: process.env.CLOUDWAYS_API_KEY
            }
        );

        return response
            ? response.access_token
            : '';
    }

    async getServerList() {
        const response = await this.get('server');

        return response
            ? response.servers
            : {};
    }
}

module.exports = CloudwaysAPI;