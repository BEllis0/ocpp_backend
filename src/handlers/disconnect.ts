import { dynamodb } from '../lib';

const table = process.env.CONNECTION_TABLE;

export const handler = async (event:any) => {
  const { connectionId } = event.requestContext;
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: `WebSocket disconnected with connection ID ${connectionId}` }),
  };

  try {
    console.log(`WebSocket disconnected with connection ID ${connectionId}`);
    await dynamodb.deleteConnection(table as string, connectionId);
  } catch (e) {
    console.error('Error in disconnect handler:: ', e);
    response.statusCode = 500;
    response.body = JSON.stringify({ error: 'Error disconnecting to websocket.' });
  }

  return response;
};
