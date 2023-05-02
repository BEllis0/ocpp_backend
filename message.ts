import { aws } from './src/lib';

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

export const handler = async (event, context) => {
  const { connectionId } = event.requestContext;
  const { action } = event.body;
  const { payload } = event.body;
  const client = aws.apiGatewayClient(`${event.requestContext.domainName}/${event.requestContext.stage}`);

  try {
    switch (action) {
      case 'BootNotification':
        // Handle bootnotification message
        console.log('Received bootnotification message:', payload);
        // Send response back to client
        await sendResponse(client, connectionId, 'BootNotificationResponse', {
          status: 'Accepted',
        });
        break;
      case 'StatusNotification':
        // Handle statusnotification message
        console.log('Received statusnotification message:', payload);
        // Send response back to client
        await sendResponse(client, connectionId, 'StatusNotificationResponse', {
          status: 'Accepted',
        });
        break;
      default:
        // Handle unknown message
        console.log('Received unknown message:', payload);
        // Send response back to client
        await sendResponse(client, connectionId, 'ErrorResponse', {
          error: `Unknown action: ${action}`,
        });
    }
  } catch (error) {
    console.error('Error handling message:', error);
  }
};
