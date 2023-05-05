import { dynamodb } from '../lib';

export const handler = async (event, context) => {
  const { connectionId } = event.requestContext;
  try {
    await dynamodb.addConnection(connectionId);
    console.log(`WebSocket connected with connection ID ${connectionId}`);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Connection established.' }),
    };
  } catch (e) {
    console.error('Error connecting:: ', e);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Error connecting to websocket.' }),
    };
  }
};
