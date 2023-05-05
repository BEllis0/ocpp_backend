import ApiGatewayManagementApi from 'aws-sdk/clients/apigatewaymanagementapi';

const AWS = require('aws-sdk');

const apiGatewayClient = (endpoint: string) => {
  const client = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint,
  });

  return client;
};

const sendResponse = async (
  client: ApiGatewayManagementApi,
  connectionId:string,
  action:string,
  payload: Record<string, unknown>,
) => {
  const body = {
    action,
    payload,
  };

  try {
    await client.postToConnection({
      ConnectionId: connectionId,
      Data: JSON.stringify(body),
    }).promise();
  } catch (e) {
    console.error('Error in sendResponse:: ', e);
    throw e;
  }
};

export {
  apiGatewayClient,
  sendResponse,
};
