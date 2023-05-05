import { dynamodb } from '../lib';

export const handler = async (event, context) => {
  const { connectionId } = event.requestContext;
  try {
    console.log(`WebSocket disconnected with connection ID ${connectionId}`);
    await dynamodb.deleteConnection(connectionId);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: `WebSocket disconnected with connection ID ${connectionId}` }),
    };
  } catch (e) {
    console.error('Error in disconnect handler:: ', e);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Error disconnecting to websocket.' }),
    };
  }
};
