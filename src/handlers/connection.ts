import { dynamodb } from '../lib';

const table = process.env.CONNECTION_TABLE;

export const handler = async (event, context) => {
  const { connectionId } = event.requestContext;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Connection established.' }),
  };

  try {
    await dynamodb.addConnection(table, { connectionId });
    console.log(`WebSocket connected with connection ID ${connectionId}`);
  } catch (e) {
    console.error('Error connecting:: ', e);
    response.statusCode = 500;
    response.body = JSON.stringify({ error: 'Error connecting to websocket.' });
  }

  return response;
};
