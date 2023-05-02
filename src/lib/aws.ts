const AWS = require('aws-sdk');

const apiGatewayClient = (endpoint: string) => {
    const client = new AWS.ApiGatewayManagementApi({
        apiVersion: '2018-11-29',
        endpoint
    });

    return client;
};

export {
    apiGatewayClient,
};
