const AWS = require('aws-sdk');

const apiGatewayClient = (endpoint: string) => {
  const client = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint,
  });

  return client;
};

const sendResponse = async (client, connectionId, action, payload) => {
  const body = {
    action,
    payload,
  };

  await client.postToConnection({
    ConnectionId: connectionId,
    Data: JSON.stringify(body),
  }).promise();
};

export {
  apiGatewayClient,
  sendResponse,
};
